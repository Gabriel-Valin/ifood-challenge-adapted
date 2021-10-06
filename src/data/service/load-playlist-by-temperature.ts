import { Weather } from '../../domain/entities/weather'
import { LoadPlaylistByTemperature } from '../../domain/usecase/load-playlist-by-temperature'
import { HttpGetClient } from '../../infra/axios-contract'
import env from '../../config/env'
export default class LoadPlaylistByTemperatureService implements LoadPlaylistByTemperature {
  apiKey = env.weatherKey
  apiUri = env.weatherAPI
  constructor (private readonly getClient: HttpGetClient) {}

  public async load (city: Weather): Promise<any> {
    const cityTemperature = await this.getClient.get({
      url: this.apiUri,
      params: {
        q: city,
        units: 'metric',
        appid: this.apiKey
      }
    })
    return cityTemperature
  }
}
