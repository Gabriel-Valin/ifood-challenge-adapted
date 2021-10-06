import 'reflect-metadata'
import express from 'express'
import '../shared/ioc'
import { playlistRouter } from '../shared/http/playlist.routes'

const app = express()

app.use(playlistRouter)
app.listen(3137, () => console.log('Server running at port 3137'))
