import Chart from 'chart.js/auto'

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
      this.chartInput = this.shadowRoot.querySelector('select')
      this.biddingZone = 'Not Yet Selected'
      this.renderChartForBiddingZone()

      this.biddingZoneBtn.addEventListener('click', (event) => {
        this.biddingZone = this.chartInput.value
        this.destroyChart()
        this.renderChartForBiddingZone()
        event.preventDefault()
      })
    }

    /**
     * Renders the chart for the selected bidding zone.
     */
    renderChartForBiddingZone () {
      this.myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12',
            '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-00'],
          datasets: [{
            label: `Bidding Zone: ${this.biddingZone}`,
            data: [this.hour0001, 5, 35, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 15],
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
      this.myChart.destroy()
    }
  })
