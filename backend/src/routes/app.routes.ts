import { Router } from 'express'
import AppController from '../controllers/appController'
import AppService from '../services/AppService'

const appService = new AppService()
const appControllerObj = new AppController(appService)

const appRoutes = Router()

appRoutes.get('/ont-info', (req, res, next) => {
  appControllerObj.getAllOntInfo(req, res, next)
})

export default appRoutes
