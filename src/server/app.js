import express from 'express'
import cors from 'cors'

import { serverLog } from './middlewares/serverLog.middleware.js'
import { cancionesRouter, podcastsRouter, usuariosRouter, errors } from './routers/index.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())

app.use(serverLog)

//app.use(usuariosRouter)
app.use(cancionesRouter)
app.use(podcastsRouter)
app.use(usuariosRouter)
app.use(errors)

app.listen(PORT, () => console.log('Server UP!!'))

export default app
