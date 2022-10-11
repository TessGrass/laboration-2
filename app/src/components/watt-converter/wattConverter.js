import { ConverterController } from '../../controller/converterController/converterController'

const template = document.createElement('template')
template.innerHTML = `
<style>

.converterwrapper {
  background-color: #white;
  border-radius: 25px;
  width: 70vw;
  height: 65vh;
  padding-top: 20px;
  padding-right: 35px;
  padding-bottom: 35px;
  padding-left: 35px;
  margin-bottom: 40px;
}

.convert-title {
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 20px;
  color: white;
}

.form {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
  background-color: #c6c6cc;
  border-radius: 20px;
  width: 19vw;
  min-height: 15vh;
  max-height: 32vh;
  margin-bottom: 30px;
  padding: 20px;
}

.subtitle {
  color: white;
  font-size: 18px;
  margin: 0;
}

.instructions {
  color: white;
  font-size: 12px;
  margin: 0px;
  margin-bottom: 10px;
}

input {
  background-color: white;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 4px;
  margin-bottom: 45px;
  height: 35px;
  width: 13vw;
}

.placeholder {
  color: #white;
  font-size: 11px;
  margin: 0;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  color: white;
  font-size: 16px;
  height: 4vh;
  text-align: center;
  width: 8vw;
}

.submit:active {
  background-color: #06b;
}

.output-text {
  margin: 0;
  color: white;
  font-size: 28px;
}

</style>
<div class="converterwrapper">
<p class="convert-title">Convert and Calculate</p>
  <form id="form-watt-kilo">
    <p class="subtitle">Convert Watt To Kilowatt</p>
    <input type="number" class="watt-kilo" placeholder="Enter watt" required>
    <button type="number" id="watt-kilo" class="submit">convert</button>
  </form>
    <form id="form-kilo-mega">
    <p class="subtitle">Convert Kilowatt to Megawatt</p>
    <input type="number" class="kilo-mega" placeholder="Enter kilowatt" required>
    <button type="number" id="kilo-mega" class="submit">convert</button>
  </form>
  <form id="form-calculate-per-day">
    <p class="subtitle">Calculate Consumtion Cost Per Day For a Device</p>
    <p class="instructions">Enter the device watt consumption, the pennies you pay for 1 kWh and hours the device is running per day.</p>
    <input type="number" class="kilo-mega" placeholder="Enter device watt" required>
    <input type="number" class="kilo-mega" placeholder="Enter pennies per kWh" required>
    <input type="number" class="kilo-mega" placeholder="Enter hours running per day" required>
    <button type="number" id="calculate" class="submit">convert</button>
  </form>
  <form id="form-calculate-propane-kilo">
  <p class="subtitle">Calculate Propane Kilowatt Price</p>
  <p class="instructions">Enter the price you payed for your propane and the weight of the propane</p>
  <input type="number" class="kilo-mega" placeholder="Enter price in crowns" required>
  <input type="number" class="kilo-mega" placeholder="Enter kilogram" required>
  <button type="number" id="calculate-propane" class="submit">convert</button>
</form>
<p class="output-text"><p>
</div>
  `
customElements.define('watt-converter',
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
      this.converterController = new ConverterController()
      this.mainWrapper = this.shadowRoot.querySelector('.converterwrapper')
      this.outputText = this.shadowRoot.querySelector('.output-text')
      this.formWattKilowatt = this.shadowRoot.querySelector('#form-watt-kilo')
      this.formKilowattMegawatt = this.shadowRoot.querySelector('#form-kilo-mega')
      this.formCalculatePerDay = this.shadowRoot.querySelector('#form-calculate-per-day')

      this.formWattKilowatt.addEventListener('submit', (event) => {
        const watt = parseInt(event.target[0].value)
        const wattToKilowatt = this.converterController.convertWattToKilowatt(watt)
        event.preventDefault()
        this.printValueToUserView(wattToKilowatt)
      })

      this.formKilowattMegawatt.addEventListener('submit', (event) => {
        const kilowatt = parseInt(event.target[0].value)
        const convertedKilowatt = this.converterController.convertKilowattToMegawatt(kilowatt)
        event.preventDefault()
        this.printValueToUserView(convertedKilowatt)
      })

      this.formCalculatePerDay.addEventListener('submit', (event) => {
        const deviceWatt = parseInt(event.target[0].value)
        const penniesPerKwh = parseInt(event.target[1].value)
        const hoursPerDay = parseInt(event.target[2].value)
        const deviceCostPerDay = this.converterController.calculateDeviceCostPerDay(deviceWatt, penniesPerKwh, hoursPerDay)
        event.preventDefault()
        this.printCostOfDeviceUserView(deviceCostPerDay)
      })
    }

    printValueToUserView(value) {
      this.outputText.innerText = 'The converted value: ' + value
    }
    
    printCostOfDeviceUserView(deviceCostPerDay) {
      console.log(deviceCostPerDay);
      this.outputText.innerText = 'The daily cost of running the device is ' + deviceCostPerDay + ' pennies'
    }
  })
