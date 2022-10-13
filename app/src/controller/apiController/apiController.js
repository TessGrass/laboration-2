import { ElectricityRatesProvider } from '../../../../energy-price-module/src/index'

export class ApiController {
  constructor () {
    this.electricityRatesProvider = new ElectricityRatesProvider()
  }

  async getHourlyPricesForOneBiddingZone (zone) {
    return await this.electricityRatesProvider.getHourlyPricesForOneBiddingZone(zone)
  }

  async getCheaperHoursToUsePropane (pennies, zone) {
    return await this.electricityRatesProvider.getHoursWhenPropaneIsCheaper(pennies, zone)
  }
}
