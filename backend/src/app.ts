import express from 'express'
import cors from 'cors'
import appRoutes from './routes/app.routes'
import huaweiTextFileHandler from './utils/textFileHandler'

const app = express()

app.use(cors())
app.use(express.json())

app.use(appRoutes)

app.get('/', (req, res) => {
  const teste = huaweiTextFileHandler()
  console.log(teste)

  res.status(200).json(teste)
})

export default app
