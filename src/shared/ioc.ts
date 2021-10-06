import { container } from 'tsyringe'
import AxiosAdapter from '../infra/axios-adapter'
import { HttpGetClient } from '../infra/axios-contract'
import LoadPlaylistByTemperature from '../usecases/load-playlist-by-temperature'
import LoadPlaylistByLatitudeAndLongitude from '../usecases/load-playlist-by-lat-long'
import { ConvertKelvinToCelsius } from '../infra/convert-to-celsius-contract'
import ConvertToCelsiusAdapter from '../infra/convert-to-celsius-adapter'

container.registerSingleton<LoadPlaylistByTemperature>('LoadPlaylistByTemperature', LoadPlaylistByTemperature)
container.registerSingleton<LoadPlaylistByLatitudeAndLongitude>('LoadPlaylistByLatitudeAndLongitude', LoadPlaylistByLatitudeAndLongitude)
container.registerSingleton<HttpGetClient>('AxiosAdapter', AxiosAdapter)
container.registerSingleton<ConvertKelvinToCelsius>('ConvertToCelsiusAdapter', ConvertToCelsiusAdapter)
