/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import AppError from '../shared/errors/app-error'
import LoadPlaylistByLatitudeAndLongitude from '../usecases/load-playlist-by-lat-long'

export default class LoadPlaylistByLatAndLongController {
  public async handle (req: Request, res: Response): Promise<Response> {
    const requiredFields = ['latitude', 'longitude']

    for (const field of requiredFields) {
      if (!req.query[field]) {
        throw new AppError(`Missing Param Error: ${field}`)
      }
    }

    const { latitude, longitude } = req.query
    const loadPlaylist = container.resolve(LoadPlaylistByLatitudeAndLongitude)

    const result = await loadPlaylist.execute({ latitude, longitude })
    return res.json(result)
  }
}
