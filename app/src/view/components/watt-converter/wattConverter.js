import { ConverterController } from '../../../controller/converterController/converterController'

const template = document.createElement('template')
template.innerHTML = `
<style>

.converterwrapper {
  background-color: #white;
  border-radius: 25px;
  width: 70vw;
  min-height: 100%;
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


.subtitle {
  color: black;
  font-size: 20px;
  text-align: center;
  margin: 0;
}

.instructions {
  color: black;
  font-size: 12px;
  margin: 0px;
  margin-bottom: 10px;
}

input {
  background-color: white;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 35px;
  width: 10vw;
}

.placeholder {
  color: #white;
  font-size: 11px;
  margin: 0;
}

.submit {
  background-color: rgba(255, 159, 64);
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
  color: black;
  font-size: 20px;
  padding-bottom: 35px;
}

.form-wrapper {
  margin: auto;
  width: 50%;
  background-color: #ededed;
  border-radius: 15px;
  text-align: center;
 width: 900px;
  margin-bottom: 20px;
  padding-top: 30px;
}

.required-field {
  display: none;
  color: red;
  font-size: 12px;
}

</style>
<div class="converterwrapper">
<p class="convert-title">Calculate</p>
<div class="form-wrapper">
  <form id="form-watt-kilo">
    <p class="subtitle">CALCULATE WATT TO KILOWATT</p>
    <p class="required-field" id="required-field-watt-kilowatt"><p>
    <input type="number" class="watt-kilo" value="" name="watt-input" placeholder="Enter watt">
    <custom-button type="submit" id="watt-kilo" class="submit">calculate</custom-button>
  </form>
  <p class="output-text" id="output-text-watt-kilo"><p>
</div>
<div class="form-wrapper">
    <form id="form-kilo-mega">
    <p class="subtitle">CALCULATE KILOWATT TO MEGAWATT</p>
    <p class="required-field" id="required-field-kilowatt-megawatt"><p>
    <input type="number" class="kilo-mega" value="" placeholder="Enter kilowatt">
    <custom-button type="number" id="kilo-mega" class="submit">calculate</custom-button>
  </form>
  <p class="output-text" id="output-text-kilo-watt"><p>
</div>
<div class="form-wrapper">
  <form id="form-calculate-per-day">
    <p class="subtitle">CALCULATE CONSUMPTION COST PER FOR A DEVICE</p>
    <p class="instructions">Enter the device watt consumption, cost for 1 kWh in Swedish ören and hours the device is running per day.</p>
    <p class="required-field" id="required-field-consumption"><p>
    <input type="number" class="kilo-mega" value="" id="calculate-device-watt" placeholder="Device watt">
    <input type="number" class="kilo-mega" value="" id="calculate-device-pennies" placeholder="Swedish ören per kWh">
    <input type="number" class="kilo-mega" value="" id="calculate-device-hours"  placeholder="Hours running per day">
    <custom-button type="number" id="calculate" class="submit">calculate</custom-button>
  </form>
  <p class="output-text" id="output-text-consumption"><p>
</div>
<div class="form-wrapper">
  <form id="form-calculate-propane">
  <p class="subtitle">CALCULATE PROPANE KWH PRICE</p>
  <p class="instructions">Enter the price you payed for your propane and the weight of the propane</p>
  <p class="required-field" id="required-field-propane"><p>
  <input type="number" class="kilo-mega" value="" id="calculate-propane-crown" placeholder="Swedish crowns" required>
  <input type="number" class="kilo-mega" value="" id="calculate-propane-kilogram" placeholder="Kilogram" required>
  <custom-button type="number" id="calculate-propane" value="" class="submit">calculate</custom-button>
</form>
<p class="output-text" id="output-text-propane"><p>
</div>
</div>
  `
customElements.define('watt-converter',

  class extends HTMLElement {
    #converterController

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#converterController = new ConverterController()
      this.mainWrapper = this.shadowRoot.querySelector('.converterwrapper')
      this.missingValueWattKilowattField = this.shadowRoot.querySelector('#required-field-watt-kilowatt')
      this.missingValueKilowattToMegawattField = this.shadowRoot.querySelector('#required-field-kilowatt-megawatt')
      this.missingValueConsumptionField = this.shadowRoot.querySelector('#required-field-consumption')
      this.missingValuePropaneField = this.shadowRoot.querySelector('#required-field-propane')
      this.outputTextWattKilowatt = this.shadowRoot.querySelector('#output-text-watt-kilo')
      this.outputTextKilowattToMegawatt = this.shadowRoot.querySelector('#output-text-kilo-watt')
      this.outputTextConsumption = this.shadowRoot.querySelector('#output-text-consumption')
      this.outputTextPropanePrice = this.shadowRoot.querySelector('#output-text-propane')
      this.formWattKilowatt = this.shadowRoot.querySelector('#form-watt-kilo')
      this.formKilowattMegawatt = this.shadowRoot.querySelector('#form-kilo-mega')
      this.formCalculatePerDay = this.shadowRoot.querySelector('#form-calculate-per-day')
      this.formCalculatePropanePrice = this.shadowRoot.querySelector('#form-calculate-propane')
      this.wattToKilowattBtn = this.shadowRoot.querySelector('#watt-kilo')
      this.kiloWattToMegaWattBtn = this.shadowRoot.querySelector('#kilo-mega')
      this.deviceConsumptionBtn = this.shadowRoot.querySelector('#calculate')
      this.propaneKilowattBtn = this.shadowRoot.querySelector('#calculate-propane')

      this.wattToKilowattBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const watt = Number(this.formWattKilowatt.querySelector('input').value)
        const kilowatt = this.#converterController.convertWattToKilowatt(watt)
        const valueInAllFields = this.#isAllFieldsFilledIn(this.formWattKilowatt)

        if (valueInAllFields) {
          this.#removePrintInUserView(this.missingValueWattKilowattField)
          this.#printKilowattToUserView(kilowatt)
        } else {
          this.#printRequiredFieldAreMissingValue(this.missingValueWattKilowattField)
        }
      })

      this.kiloWattToMegaWattBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const kilowatt = Number(this.formKilowattMegawatt.querySelector('input').value)
        const megawatt = this.#converterController.convertKilowattToMegawatt(kilowatt)
        const valueInAllFields = this.#isAllFieldsFilledIn(this.formKilowattMegawatt)

        if (valueInAllFields) {
          this.#removePrintInUserView(this.missingValueKilowattToMegawattField)
          this.#printMegawattToUserView(megawatt)
        } else {
          this.#printRequiredFieldAreMissingValue(this.missingValueKilowattToMegawattField)
        }
      })

      this.deviceConsumptionBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const valueInAllFields = this.#isAllFieldsFilledIn(this.formCalculatePerDay)

        if (valueInAllFields) {
          this.#removePrintInUserView(this.missingValueConsumptionField)
          const deviceWatt = Number(this.formCalculatePerDay.querySelector('input[id="calculate-device-watt"]').value)
          const penniesPerKwh = Number(this.formCalculatePerDay.querySelector('input[id="calculate-device-pennies"]').value)
          const hoursPerDay = Number(this.formCalculatePerDay.querySelector('input[id="calculate-device-hours"]').value)
          const deviceCostPerDay = this.#converterController.calculateDeviceCostPerDay(deviceWatt, penniesPerKwh, hoursPerDay)
          this.#printCostOfDeviceUserView(deviceCostPerDay)
        } else {
          this.#printRequiredFieldAreMissingValue(this.missingValueConsumptionField)
        }
      })

      this.propaneKilowattBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const propanePrice = Number(this.formCalculatePropanePrice.querySelector('input[id="calculate-propane-crown"]').value)
        const kilogram = Number(this.formCalculatePropanePrice.querySelector('input[id="calculate-propane-kilogram"]').value)
        const propanePriceKwh = this.#converterController.calculatePropaneKilowattPrice(propanePrice, kilogram)
        const valueInAllFields = this.#isAllFieldsFilledIn(this.formCalculatePropanePrice)

        if (valueInAllFields) {
          this.#removePrintInUserView(this.missingValuePropaneField)
          this.#printPropaneKwhPriceToUserView(propanePriceKwh)
        } else {
          this.#printRequiredFieldAreMissingValue(this.missingValuePropaneField)
        }
      })
    }

    #isAllFieldsFilledIn (field) {
      let valueInAllFields = true

      for (let index = 0; index < field.length; index++) {
        if (field[index].value === '') {
          valueInAllFields = false
          return valueInAllFields
        }
      }
      return valueInAllFields
    }

    #printKilowattToUserView (value) {
      this.outputTextWattKilowatt.innerText = 'The Watt in Kilowatt: ' + value
    }

    #printMegawattToUserView (value) {
      this.outputTextKilowattToMegawatt.innerText = 'The Kilowatt in Megawatt: ' + value
    }

    #printCostOfDeviceUserView (deviceCostPerDay) {
      this.outputTextConsumption.innerText = 'The daily cost of running the device is ' + deviceCostPerDay + ' Swedish ören'
    }

    #printPropaneKwhPriceToUserView (propanePriceKwh) {
      this.outputTextPropanePrice.innerText = 'The cost of the propane is ' + propanePriceKwh + ' Swedish ören per kWh'
    }

    #printRequiredFieldAreMissingValue (textField) {
      textField.innerText = 'Please enter all fields '
      textField.style.display = 'block'
    }

    #removePrintInUserView (textField) {
      textField.style.display = 'none'
    }
  })
