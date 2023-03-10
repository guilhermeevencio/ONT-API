import express from 'express'
import cors from 'cors'
import appRoutes from './routes/app.routes'
import { zteTextFileHandler } from './utils/textFileHandler'

const app = express()

app.use(cors())
app.use(express.json())

app.use(appRoutes)

app.get('/', (req, res) => {
  const teste = zteTextFileHandler()

  res.status(200).json(teste)
})

export default app
