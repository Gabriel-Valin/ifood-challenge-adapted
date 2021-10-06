import { ConvertKelvinToCelsius } from './convert-to-celsius-contract'

export default class ConvertToCelsiusAdapter implements ConvertKelvinToCelsius {
  constructor (private readonly kelvinFixed = 273.15) {}
  convert (kelvin: string): number {
    const parsedKelvin = parseInt(kelvin)
    const isCelsius = parsedKelvin - this.kelvinFixed
    return Math.round(isCelsius)
  }
}
