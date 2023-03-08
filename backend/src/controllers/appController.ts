import { NextFunction, Request, Response } from 'express';
import { IAppService } from '../interfaces/AppInterface';

export default class AppController {
  constructor(private appService: IAppService) {}

  public async getAllOntInfo(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {      
      const response = await this.appService.getAllOntInfo();

      res.status(200).json(response);
      
    } catch (error) {
      next(error);
    }
  }
}