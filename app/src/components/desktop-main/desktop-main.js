
const template = document.createElement('template')
template.innerHTML = `
<style>

.mainwrapper {
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
}

.title {
  font-size: 70px;
  margin-top: 60px;
  margin-bottom: 0;
  padding: 0;
  display: inline;
}

.subtitle {
  font-size: 20px;
  margin-top: -20px;
  margin-bottom: 30px;

}

.chart-wrapper {
  background-color: white;
  width: 70vw;
  max-height: 90vh;
  margin-bottom: 15px;
}

.converter-wrapper {
  background-color: white;
  width: 70vw;
  height: 100vh;
  margin-bottom: 15px;
 }

 .footer-wrapper {
  display: flex;
 }

 .footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  height: 7vh;
  background-color: rgba(200,200,200);
}

.nav-box {
  background-color: yellow;
  width: 11vw;
  height: 5vh;
  border-radius: 15px;
}

</style>
<div class="mainwrapper">
    <h1 class="title">SPOT PRICE GRABBER</h1>
    <p class="subtitle">Get day-ahead hourly prices for Swedens all four bidding zones</p>
    <div class="chart-wrapper"><chart-component></chart-component></div>
    <div class="converter-wrapper"><watt-converter></watt-converter></div>
  <div class="footer-wrapper">
    <div class="footer">
    </div>
   </div>
</div>
  `
customElements.define('desktop-main',
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
      this.mainWrapper = this.shadowRoot.querySelector('.mainwrapper')
      this.chartWrapper = this.shadowRoot.querySelector('.chart-wrapper')
      this.fetchPricesButton = this.shadowRoot.querySelector('.button')
      this.headlineText = this.shadowRoot.querySelector('p')
      this.navBox = this.shadowRoot.querySelector('.nav-box')
      this.converterWrapper = this.shadowRoot.querySelector('.converter-wrapper')
      this.ctx = this.shadowRoot.querySelector('#myChart')
    }

    /**
     * 
     */
/*     fetchHourlyPrices () {
      const chartComponent = document.createElement('chart-component')
      this.chartWrapper.appendChild(chartComponent)
    } */
  })
