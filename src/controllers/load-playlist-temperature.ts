import { Request, Response } from 'express'
import { container } from 'tsyringe'
import LoadPlaylistByTemperature from '../usecases/load-playlist-by-temperature'

export default class LoadPlaylistByTempController {
  public async handle (req: Request, res: Response): Promise<Response> {
    const { city } = req.query
    const loadPlaylist = container.resolve(LoadPlaylistByTemperature)

    const result = await loadPlaylist.execute(city)
    return res.json(result)
  }
}
