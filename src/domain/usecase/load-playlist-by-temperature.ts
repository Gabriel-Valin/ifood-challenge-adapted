import { Playlist } from '../entities/playlist'
import { Weather } from '../entities/weather'

export interface LoadPlaylistByTemperature {
  load: (temperature: Weather) => Promise<Playlist>
}
