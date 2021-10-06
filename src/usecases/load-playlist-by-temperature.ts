/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { inject, injectable } from 'tsyringe'
import { HttpGetClient } from '../infra/axios-contract'
import env from '../config/env'
import playlists from '../data/data-sources/playlists'
import { Playlist } from '../domain/entities/playlist'
import AppError from '../shared/errors/app-error'

@injectable()
export default class LoadPlaylistByTemperature {
  private readonly apiKey = env.weatherKey

  constructor (
    @inject('AxiosAdapter')
    private readonly getClient: HttpGetClient
  ) {}

  public async execute (city: any): Promise<Playlist> {
    const resultWeather = await this.getClient.get({ url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${this.apiKey}` })
    const { temp } = resultWeather.main
    if (!resultWeather) throw new AppError('Missing Param: city')

    console.log(temp)

    if (temp > 30) {
      return playlists.playlists.party
    } else if (temp >= 15 && temp <= 30) {
      return playlists.playlists.pop
    } else if (temp >= 10 && temp <= 14) {
      return playlists.playlists.rock
    } else {
      return playlists.playlists.classical
    }
  }
}
