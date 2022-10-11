import { ElectricityRatesProvider } from '../../../../energy-price-module/src/index'

export class ConverterController {
  constructor () {
    this.electricityRatesProvider = new ElectricityRatesProvider()
  }

  convertWattToKilowatt(watt) {
    return this.electricityRatesProvider.calculateWattToKilowatt(watt)
  }

  convertKilowattToMegawatt(kilowatt) {
    return this.electricityRatesProvider.calculateKilowattToMegawatt(kilowatt)
  }

  calculateDeviceCostPerDay(deviceWatt, penniesPerKwh, hoursPerDay) {
    return this.electricityRatesProvider.calculateConsumtionCostPerDayForProduct(deviceWatt, penniesPerKwh, hoursPerDay)
  }
}
