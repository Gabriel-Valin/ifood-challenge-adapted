import { Playlist } from '../../domain/entities/playlist';
import { Weather } from '../../domain/entities/weather';
import { LoadPlaylistByTemperature } from '../../domain/usecase/load-playlist-by-temperature'

export default class LoadPlaylistByTemperatureService implements LoadPlaylistByTemperature {
  public async load (temperature: Weather) => Promise<Playlist>;

}
