import { ElectricityRatesProvider } from '../../../../energy-price-module/src/index'

export class ApiController {
  constructor () {
    this.electricityRatesProvider = new ElectricityRatesProvider()
  }
  
  extractSpecificZone() {
    const specificZone = [
      { startTime: '00:00:00', pricePerKwh: 15.23, zone: 'SE3' },
      { startTime: '01:00:00', pricePerKwh: 14.21, zone: 'SE3' },
      { startTime: '02:00:00', pricePerKwh: 13.84, zone: 'SE3' },
      { startTime: '03:00:00', pricePerKwh: 14.18, zone: 'SE3' },
      { startTime: '04:00:00', pricePerKwh: 15.65, zone: 'SE3' },
      { startTime: '05:00:00', pricePerKwh: 17.71, zone: 'SE3' },
      { startTime: '06:00:00', pricePerKwh: 27.02, zone: 'SE3' },
      { startTime: '07:00:00', pricePerKwh: 64.93, zone: 'SE3' },
      { startTime: '08:00:00', pricePerKwh: 98.54, zone: 'SE3' },
      { startTime: '09:00:00', pricePerKwh: 76.45, zone: 'SE3' },
      { startTime: '10:00:00', pricePerKwh: 75.73, zone: 'SE3' },
      { startTime: '11:00:00', pricePerKwh: 75.15, zone: 'SE3' },
      { startTime: '12:00:00', pricePerKwh: 67.83, zone: 'SE3' },
      { startTime: '13:00:00', pricePerKwh: 66.52, zone: 'SE3' },
      { startTime: '14:00:00', pricePerKwh: 63.92, zone: 'SE3' },
      { startTime: '15:00:00', pricePerKwh: 62.76, zone: 'SE3' },
      { startTime: '16:00:00', pricePerKwh: 63.45, zone: 'SE3' },
      { startTime: '17:00:00', pricePerKwh: 67.82, zone: 'SE3' },
      { startTime: '18:00:00', pricePerKwh: 72.5, zone: 'SE3' },
      { startTime: '19:00:00', pricePerKwh: 71.22, zone: 'SE3' },
      { startTime: '20:00:00', pricePerKwh: 66.01, zone: 'SE3' },
      { startTime: '21:00:00', pricePerKwh: 57.24, zone: 'SE3' },
      { startTime: '22:00:00', pricePerKwh: 50.39, zone: 'SE3' },
      { startTime: '23:00:00', pricePerKwh: 37.96, zone: 'SE3' }
    ]

    return specificZone
  }

  async getHourlyPricesForOneBiddingZone(zone) {
    return await this.electricityRatesProvider.getHourlyPricesForOneBiddingZone(zone)
  }
}
