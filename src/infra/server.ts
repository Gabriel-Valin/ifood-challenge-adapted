import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import '../shared/ioc'
import { playlistRouter } from '../shared/http/playlist.routes'
import middleError from '../shared/http/middlewares/error-middle'

const app = express()

app.use(express.json())
app.use(playlistRouter)
app.use(middleError())
app.listen(3137, () => console.log('Server running at port 3137 ✅✅'))
