import express from 'express'
import cors from 'cors'
import appRoutes from './routes/app.routes'
import 'express-async-errors'
import { zteTextFileHandler } from './utils/textFileHandler'
import ErrorHandler from './middlewares/ErrorHandler'

const app = express()

app.use(cors())
app.use(express.json())

app.use(appRoutes)

app.get('/', (req, res) => {
  const teste = zteTextFileHandler()

  res.status(200).json(teste)
})

app.use(ErrorHandler)

export default app
