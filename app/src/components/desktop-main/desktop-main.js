
const template = document.createElement('template')
template.innerHTML = `
<style>

.mainwrapper {
background-color: green;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: stretch;
}

p {
  font-size: 70px;
  margin-top: 60px;
  padding: 0;
  display: inline;
}

.chart-wrapper {
  background-color: white;
  width: 70vw;
  height: 70vh;
 }

 .converter-wrapper {
  background-color: red;
  width: 70vw;
  height: 70vh;
 }

 .footer-wrapper {
  display: flex;
 }

 .footer {
  width: 99vw;
  height: 10vh;
  background-color: rgba(200,200,200);
}

</style>
<div class="mainwrapper">
      <p></p>
    <div class="chart-wrapper">
    </div>
    <div class="converter-wrapper">
    </div>
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
      this.ctx = this.shadowRoot.querySelector('#myChart')
      this.headlineText.textContent = 'ELECTRICITY PRICE'
      this.fetchHourlyPrices()

/*       this.fetchPricesButton.addEventListener('click', (event) => {
        event.stopPropagation()
      }) */
    }

    /**
     * 
     */
    fetchHourlyPrices () {
      const chartComponent = document.createElement('chart-component')
      this.chartWrapper.appendChild(chartComponent)
    }
  })
