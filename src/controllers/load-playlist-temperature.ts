/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import AppError from '../shared/errors/app-error'
import LoadPlaylistByTemperature from '../usecases/load-playlist-by-temperature'

export default class LoadPlaylistByTempController {
  public async handle (req: Request, res: Response): Promise<Response> {
    const requiredFields = ['city']
    for (const field of requiredFields) {
      if (!req.query[field]) {
        throw new AppError(`Missing Param Error: ${field}`)
      }
    }
    const { city } = req.query
    const loadPlaylist = container.resolve(LoadPlaylistByTemperature)

    const result = await loadPlaylist.execute(city)
    return res.json(result)
  }
}
