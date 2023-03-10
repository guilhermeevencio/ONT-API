import CustomError from '../Error/CustomError'
import { NextFunction, Request, Response } from 'express'
import { IAppService } from '../interfaces/AppInterface'
import Joi from 'joi'

export default class AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private appService: IAppService) {}

  public async getAllOntInfo(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const ontInfoArr = await this.appService.getAllOntInfo()

      if (ontInfoArr.length === 0) {
        const response = await this.appService.populateDatabase()
        res.status(200).json(response)
      } else {
        res.status(200).json(ontInfoArr)
      }
    } catch (error) {
      next(error)
    }
  }

  public async createOntInfo(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { body } = req

      if (!body) throw new CustomError('Some fields are missing!', 400)

      const schema = Joi.object({
        sn: Joi.string().required(),
        slot: Joi.string().required(),
        port: Joi.string().required(),
        ontId: Joi.string().required(),
        state: Joi.string().required(),
        manufacturer: Joi.string().required(),
      })

      const { error } = schema.validate(body)
      if (error) throw new CustomError(error.message, 400)

      await this.appService.create(body)
      res.status(201).json({ message: 'Ont info registered!' })
    } catch (error) {
      next(error)
    }
  }

  public async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = Joi.object({
        sn: Joi.string().required(),
      })
      const { error } = schema.validate(req.body)
      if (error) throw new CustomError(error.message, 400)

      const response = await this.appService.findOne(req.body.sn)
      if (!response) res.status(404).json({ message: 'sn not found!' })
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}
