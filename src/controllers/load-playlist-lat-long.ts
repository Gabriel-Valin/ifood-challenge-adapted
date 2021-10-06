import { Request, Response } from 'express'
import { container } from 'tsyringe'
import LoadPlaylistByLatitudeAndLongitude from '../usecases/load-playlist-by-lat-long'

export default class LoadPlaylistByLatAndLongController {
  public async handle (req: Request, res: Response): Promise<Response> {
    const { latitude, longitude } = req.query
    const loadPlaylist = container.resolve(LoadPlaylistByLatitudeAndLongitude)

    const result = await loadPlaylist.execute({ latitude, longitude })
    return res.json(result)
  }
}
