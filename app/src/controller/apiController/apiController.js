import { ElectricityRatesProvider } from '../../../../energy-price-module/src/index'

export class ApiController {
  #electricityRatesProvider
  
  constructor () {
    this.#electricityRatesProvider = new ElectricityRatesProvider()
  }

  async getHourlyPricesForOneBiddingZone (zone) {
    return await this.#electricityRatesProvider.getHourlyPricesForOneBiddingZone(zone)
  }

  async getHoursWhenPropaneIsCheaper (pennies, zone) {
    return await this.#electricityRatesProvider.getHoursWhenPropaneIsCheaper(pennies, zone)
  }
}
