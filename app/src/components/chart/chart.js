import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
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

 #chart-button {
  width: 85px;
  height: 25px;
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

</style>
<div class="chart-wrapper">
  <canvas id="myChart"></canvas>
</div>
<div class="form-container">
  <div class="form-wrapper">
    <form action="#">
    <p id="title">SELECT A BIDDING ZONE</p>
    <a href="https://www.svk.se/om-kraftsystemet/om-elmarknaden/elomraden/">Svenska KraftNät elområden</a><br>
    <label for="bidding-zones">Select a zone:</label>
    <select name="bidding-zone" id="bidding-zones">
      <option value="SE1">SE1</option>
      <option value="SE2">SE2</option>
      <option value="SE3">SE3</option>
      <option value="SE4">SE4</option>
    </select>
    <input id="chart-input" type="submit" value="Display">
    </form>
</div>
    <div class="form-wrapper">
    <form id="form-propane-cheaper">
    <p id="title">DISPLAY HOURS WHEN PROPANE IS CHEAPER</p>
    <p id="subtitle">Enter the kWh price, in pennies, for propane</p>
    <label class="propane-price">price per kWh</label>
    <input type="number" class="propane-price" placeholder="Enter price" required><br>
    <label for="bidding-zones">Select a zone:</label>
    <select name="bidding-zone" id="bidding-zones" required>
      <option value="SE1">SE1</option>
      <option value="SE2">SE2</option>
      <option value="SE3">SE3</option>
      <option value="SE4">SE4</option>
    </select>
    <button type="number" id="propane-price" class="submit">Display</button>
  </form>
</div>


  `
customElements.define('chart-component',
  /**
   * Creates a desktop component.
   */
  class extends HTMLElement {
  /**
   * Creates a instance of the current type.
   */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.apiController = new ApiController()
      this.chartWrapper = this.shadowRoot.querySelector('.chart-wrapper')
      this.ctx = this.shadowRoot.querySelector('#myChart')
      this.biddingZoneBtn = this.shadowRoot.querySelector('input')
      this.propaneCheaperBtn = this.shadowRoot.querySelector('#form-propane-cheaper')
      this.selectedBiddingZone = this.shadowRoot.querySelector('select')
      this.biddingZone = 'Not Yet Selected'
      this.isChartForPropaneHours = false

      this.biddingZoneBtn.addEventListener('click', (event) => {
        event.preventDefault()
        this.destroyChart()
        this.isChartForPropaneHours = false
        this.biddingZone = this.selectedBiddingZone.value
        this.renderChartForView()
      })

      this.propaneCheaperBtn.addEventListener('submit', (event) => {
        event.preventDefault()
        this.destroyChart()
        this.isChartForPropaneHours = true
        const propanePerKwh = parseInt(event.target[0].value)
        this.biddingZone = event.target[1].value
        this.renderChartForView(propanePerKwh)
      })
    }

    async getHourlyPricesBiddingZone () {
      return await this.apiController.getHourlyPricesForOneBiddingZone(this.biddingZone)
    }

    async getHoursCheaperPropane (pennies) {
      return await this.apiController.getCheaperHoursToUsePropane(pennies, this.biddingZone)
    }

    /**
     * Renders a chart to the users view.
     *
     * @param {number} propane  - The ppropane kWh price.
     */
    async renderChartForView (propane) {
      let dayAheadPrices = []

      if (this.isChartForPropaneHours) {
        dayAheadPrices = await this.getHoursCheaperPropane(propane)
      } else {
        dayAheadPrices = await this.getHourlyPricesBiddingZone()
      }
      const startTime = this.extractStartTime(dayAheadPrices)
      const pricePerKwh = this.extractKwhPrices(dayAheadPrices)
      const test = false;
      const testpricePerKwh = [210, 20, 50, 40, 150, 20, 190]
      const teststartTime = [12, 13, 14, 15, 16, 17, 18]

      this.myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: startTime,
          datasets: [{
            label: `Price per kwh < 150 pennies. Zone: ${this.biddingZone}`,
            data: pricePerKwh,
            backgroundColor: test ? color => {
               const colors = color.raw < 150 ? 'rgba(127, 191, 127)' : 'rgba(255, 123, 123)'
              return colors
            } : color => { const colors = color.raw < 150 ? pattern.draw('square', '#ff6384') : pattern.draw('diamond', '#2ca02c') 
                return colors }
          }]
        },
        plugins: [ChartDataLabels],
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
     * Extracts the starting time from the array.
     *
     * @param {Array} dayAheadPrices - The day ahead prices.
     * @returns {Array} - An array of the starting times.
     */
    extractStartTime (dayAheadPrices) {
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
    extractKwhPrices (dayAheadPrices) {
      const pricePerKwh = []
      for (const value of Object.values(dayAheadPrices)) {
        pricePerKwh.push(value.pricePerKwh)
      }
      return pricePerKwh
    }
  
    /**
     * Destroys the current chart so that a new chart can be rendered.
     */
    destroyChart () {
      if (this.myChart !== undefined) {
        this.myChart.destroy()
      }
    }
  })
