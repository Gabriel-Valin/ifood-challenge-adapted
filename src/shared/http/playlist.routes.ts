/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import PlaylistController from '../../controllers/playlist-controller'

const playlistController = new PlaylistController()

export const playlistRouter = Router()

playlistRouter.get('/playlist-temp', playlistController.handle)
