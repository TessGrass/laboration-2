/* import { ElectricityRatesProvider } from '../../../../energy-price-module/src/index' */
import { ConverterHandler } from '../../../../energy-price-module/src/converterHandler'

export class ConverterController {
  constructor () {
/*     this.electricityRatesProvider = new ElectricityRatesProvider() */
    this.converterHandler = new ConverterHandler()
  }

  convertWattToKilowatt (watt) {
    return this.converterHandler.calculateWattToKilowatt(watt)
/*     return this.electricityRatesProvider.calculateWattToKilowatt(watt) */
  }

  convertKilowattToMegawatt (kilowatt) {
    return this.converterHandler.calculateKilowattToMegawatt(kilowatt)
  }

  calculateDeviceCostPerDay (deviceWatt, penniesPerKwh, hoursPerDay) {
    return this.converterHandler.calculateConsumtionCostPerDayForProduct(deviceWatt, penniesPerKwh, hoursPerDay)
  }

  calculatePropaneKilowattPrice (crowns, kilogram) {
    return this.converterHandler.calculatePropaneKilowattPrice(crowns, kilogram)
  }
}
