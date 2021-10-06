import { container } from 'tsyringe'
import AxiosAdapter from '../infra/axios-adapter'
import { HttpGetClient } from '../infra/axios-contract'
import LoadPlaylistByTemperature from '../usecases/load-playlist-by-temperature'

container.registerSingleton<LoadPlaylistByTemperature>('LoadPlaylistByTemperature', LoadPlaylistByTemperature)
container.registerSingleton<HttpGetClient>('AxiosAdapter', AxiosAdapter)
