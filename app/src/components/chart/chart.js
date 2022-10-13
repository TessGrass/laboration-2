import Chart from 'chart.js/auto'
import { ApiController } from '../../controller/apiController/apiController'

const template = document.createElement('template')
template.innerHTML = `
<style>

.chart-wrapper {
  padding: 40px;
  height: 400px;
 }

 .form-wrapper {
  background-color: #ededed;
  border-radius: 15px;
  width: 40%;
  margin: auto;
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
 }
 
 label {
  width: 300px;
  font-size: 12px;
  margin: 0;
 }

 select {
  width: 10vw;
  margin: 0;
}

 canvas {
  width: 80%;
  height: 10vh;
  margin: auto;
 }

 #bidding-zones {
  width: 25%;
 }

 #title {
  margin: 0;
  font-size: 18px;
 }

 #subtitle {
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
 }
 
 a {
  display: inline-block;
  color: #e95050;
  font-size: 12px;
  margin-top: -15px;
  margin-bottom: 10px;
 }

 .chart-button {
 background-color: rgba(255, 123, 123);
  border-radius: 12px;
  border: 0;
  color: white;
  font-size: 12px;
  height: 2vh;
  text-align: center;
  width: 4vw;
 }

 #chart-input {

 }

</style>
<div class="chart-wrapper">
  <canvas id="myChart"></canvas>
</div>
<div class="form-container">
  <div class="form-wrapper">
    <form action="#">
    <p id="title">SELECT A BIDDING ZONE</p>
    <a href="https://www.svk.se/om-kraftsystemet/om-elmarknaden/elomraden/" target="_blank">Svenska KraftNät elområden</a><br>
    <label id="selected-zone" for="bidding-zones">Select a zone:</label>
    <select name="bidding-zone" id="bidding-zones">
      <option value="SE1">SE1</option>
      <option value="SE2">SE2</option>
      <option value="SE3">SE3</option>
      <option value="SE4">SE4</option>
    </select>
    <input id="chart-input" class="chart-button" type="submit" value="display">
    </form>
</div>
    <div class="form-wrapper">
    <form id="form-propane-cheaper">
    <p id="title">DISPLAY HOURS WHEN PROPANE IS CHEAPER</p>
    <p id="subtitle">Enter the kWh price, in Swedish ören, for propane</p>
    <label class="propane-price">price per propane kWh</label>
    <input type="number" class="propane-price" placeholder="Enter price" required><br>
    <label for="bidding-zones">Select a zone:</label>
    <select name="bidding-zone" id="bidding-zones" required>
      <option value="SE1">SE1</option>
      <option value="SE2">SE2</option>
      <option value="SE3">SE3</option>
      <option value="SE4">SE4</option>
    </select>
    <button type="number" id="propane-price" class="chart-button">display</button>
  </form>
</div>

  `
customElements.define('chart-component',
  /**
   * Creates a chart component.
   */
  class extends HTMLElement {
    #apiController
    /**
     * Creates a instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#apiController = new ApiController()
      this.chartWrapper = this.shadowRoot.querySelector('.chart-wrapper')
      this.ctx = this.shadowRoot.querySelector('#myChart')
      this.biddingZoneBtn = this.shadowRoot.querySelector('input')
      this.propaneCheaperBtn = this.shadowRoot.querySelector('#form-propane-cheaper')
      this.selectedBiddingZone = this.shadowRoot.querySelector('select')
      this.inputSlider = this.shadowRoot.querySelector('checkbox')
      this.biddingZone = 'Not Yet Selected'
      this.isChartForPropaneHours = false

      this.biddingZoneBtn.addEventListener('click', (event) => {
        event.preventDefault()
        this.#destroyChart()
        this.isChartForPropaneHours = false
        this.biddingZone = this.selectedBiddingZone.value
        this.renderChartForView()
      })

      this.propaneCheaperBtn.addEventListener('submit', (event) => {
        event.preventDefault()
        this.#destroyChart()
        this.isChartForPropaneHours = true
        const propanePerKwh = parseInt(event.target[0].value)
        this.biddingZone = event.target[1].value
        this.renderChartForView(propanePerKwh)
      })
    }

    /**
     * Renders a chart to the users view.
     *
     * @param {number} propane - The ppropane kWh price.
     */
    async renderChartForView (propane) {
      let dayAheadPrices = []

      if (this.isChartForPropaneHours) {
        dayAheadPrices = await this.getHoursCheaperPropane(propane)
      } else {
        dayAheadPrices = await this.getHourlyPricesBiddingZone()
      }

      const isTomorrowsPrices = this.#checkIfTomorrowsPricesAreFetched(dayAheadPrices)

      const startTime = this.#extractStartTime(dayAheadPrices)
      const pricePerKwh = this.#extractKwhPrices(dayAheadPrices)
      const testpricePerKwh = [210, 20, 50, 40, 150, 20, 190, 160, 180, 99, 86, 15, 10]
      const teststartTime = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

      this.myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: startTime,
          datasets: [{
            label: isTomorrowsPrices ? `Price per kwh < 150 Swedish ören. Zone: ${this.biddingZone}` : 'The day ahead prices are available from 1 p.m.',
            data: pricePerKwh,
            backgroundColor: color => {
              const colors = color.raw > 150 ? pattern.draw('diagonal', 'rgba(255, 123, 123)') : pattern.draw('square', 'rgba(127, 191, 127)')
              return colors
            }
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }

    /**
     * Fetches the dayahead prices for one bidding zone.
     *
     * @returns {Array} - The dayahead prices.
     */
    async getHourlyPricesBiddingZone () {
      return await this.#apiController.getHourlyPricesForOneBiddingZone(this.biddingZone)
    }

    /**
     * Fetches the hours when the propane is cheaper to use.
     *
     * @param {number} crowns - The price payed for the propane.
     * @returns {Array} - Hours when propane is cheaper to use.
     */
    async getHoursCheaperPropane (crowns) {
      return await this.#apiController.getHoursWhenPropaneIsCheaper(crowns, this.biddingZone)
    }

    /**
     * Extracts the starting time from the array.
     *
     * @param {Array} dayAheadPrices - The day ahead prices.
     * @returns {Array} - An array of the starting times.
     */
    #extractStartTime (dayAheadPrices) {
      const startTime = []
      for (const value of Object.values(dayAheadPrices)) {
        startTime.push(value.startTime)
      }
      return startTime
    }

    /**
     * Extracts the price per kilowatt.
     *
     * @param {Array} dayAheadPrices - The day ahead prices.
     * @returns {Array} - The prices per kwh.
     */

    #extractKwhPrices (dayAheadPrices) {
      const pricePerKwh = []
      for (const value of Object.values(dayAheadPrices)) {
        pricePerKwh.push(value.pricePerKwh)
      }
      return pricePerKwh
    }

    /**
     * Checks if tomorrows prices have been fetched.
     *
     * @param {Array} dayAheadPrices - The response from the api.
     * @returns {boolean} true if tomorrows data have been fetched.
     */
    #checkIfTomorrowsPricesAreFetched (dayAheadPrices) {
      let isTomorrowsPricesFetched = false

      for (const element of dayAheadPrices) {
        if (element.pricePerKwh > 0) {
          isTomorrowsPricesFetched = true
        }
      }
      return isTomorrowsPricesFetched
    }

    /**
     * Destroys the current chart so that a new chart can be rendered.
     */
    #destroyChart () {
      if (this.myChart !== undefined) {
        this.myChart.destroy()
      }
    }
  })
