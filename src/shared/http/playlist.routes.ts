/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import LoadPlaylistByLatAndLongController from '../../controllers/load-playlist-lat-long'
import LoadPlaylistByTempController from '../../controllers/load-playlist-temperature'

const loadByTemp = new LoadPlaylistByTempController()
const loadByLatAndLong = new LoadPlaylistByLatAndLongController()

export const playlistRouter = Router()

playlistRouter.get('/playlist-temp', loadByTemp.handle)
playlistRouter.get('/playlist-lat-long', loadByLatAndLong.handle)
