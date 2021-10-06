import { Playlist } from '../entities/playlist'
import { Weather } from '../entities/weather'

export interface LoadPlaylistByTemperature {
  load: (city: Weather) => Promise<Playlist>
}
