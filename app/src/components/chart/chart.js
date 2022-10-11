import Chart from 'chart.js/auto'
import { ApiController } from '../../ApiController/api'

const template = document.createElement('template')
template.innerHTML = `
<style>

.chart-wrapper {
  max-width: 60vw;
 }

 .form-wrapper {
  display: flex;
 }
 
 form {
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: stretch;
background-color: yellow;
width: 25vh;
margin: 0;
 }

 label {
  width: 150px;
  margin: 0;
 }

 select {
  width: 10vw;
  margin: 0;
}

 
 #chart-button {
  width: 65px;
  height: 25px;
 }

</style>
<div class="chart-wrapper">
  <canvas id="myChart"></canvas>
  <div class="form-wrapper">
    <form action="#">
    <label for="bidding-zones">Select a bidding zone: </label>
    <select name="bidding-zone" id="bidding-zones">
      <option value="SE1">SE1</option>
      <option value="SE2">SE2</option>
      <option value="SE3">SE3</option>
      <option value="SE4">SE4</option>
    </select>
    <br>
    <input id="chart-input" type="submit" value="Submit">
    </form>
  </div>
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
      this.chartWrapper = this.shadowRoot.querySelector('.chart-wrapper')
      this.ctx = this.shadowRoot.querySelector('#myChart')
      this.biddingZoneBtn = this.shadowRoot.querySelector('input')
      this.biddingZoneDropDown = this.shadowRoot.querySelector('select')
      this.biddingZone = 'Not Yet Selected'
      this.apiController = new ApiController()

      this.biddingZoneBtn.addEventListener('click', (event) => {
        this.biddingZone = this.biddingZoneDropDown.value
        this.destroyChart()
        this.getHoursPricesBiddingZone(this.biddingZone)
        event.preventDefault()
      })
    }

    /**
     * Fetches the hourly prices for a specific zone-
     * @param {string} zone 
     */
    async getHoursPricesBiddingZone(zone) {
      const startTime = []
      const pricePerKwh = []
      const hourlyPricesBiddingZone = await this.apiController.getHourlyPricesForOneBiddingZone(zone)

      for (const value of Object.values(hourlyPricesBiddingZone)) {
              startTime.push(value.startTime)
              pricePerKwh.push(value.pricePerKwh)
      }
      this.renderChartForBiddingZone(startTime, pricePerKwh)
    }

    /**
     * Renders the chart for the selected bidding zone.
     */
    renderChartForBiddingZone (start, price) {
      const startTime = start
      const pricePerKwh = price

      this.myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: startTime,
          datasets: [{
            label: `Bidding Zone: ${this.biddingZone}`,
            data: pricePerKwh,
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)'
            ]
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }

    /**
     * Destroys the current chart so that a new chart can be rendered.
     */
    destroyChart () {
      if(this.myChart != undefined) {
      this.myChart.destroy()
      }
    }
  })
