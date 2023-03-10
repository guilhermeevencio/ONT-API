import { NextFunction, Request, Response } from 'express'
import { IAppService } from '../interfaces/AppInterface'

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
}
