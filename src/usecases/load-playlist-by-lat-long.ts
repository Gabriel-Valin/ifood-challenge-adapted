/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { inject, injectable } from 'tsyringe'
import { HttpGetClient } from '../infra/axios-contract'
import env from '../config/env'
import playlists from '../data/data-sources/playlists'
import { Playlist } from '../domain/entities/playlist'
import { ConvertKelvinToCelsius } from '../infra/convert-to-celsius-contract'

@injectable()
export default class LoadPlaylistByLatitudeAndLongitude {
  private readonly apiKey = env.weatherKey

  constructor (
    @inject('AxiosAdapter')
    private readonly getClient: HttpGetClient,

    @inject('ConvertToCelsiusAdapter')
    private readonly parseCelsius: ConvertKelvinToCelsius
  ) {}

  public async execute ({ latitude, longitude }): Promise<Playlist> {
    const resultWeather = await this.getClient.get({ url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=${this.apiKey}` })
    const { temp } = resultWeather.main
    if (!resultWeather) throw new Error('Client Error')

    const isCelsius = this.parseCelsius.convert(temp)

    if (isCelsius > 30) {
      return playlists.playlists.party
    } else if (isCelsius >= 15 && isCelsius <= 30) {
      return playlists.playlists.pop
    } else if (isCelsius >= 10 && isCelsius <= 14) {
      return playlists.playlists.rock
    } else {
      return playlists.playlists.classical
    }
  }
}
