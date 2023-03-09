import { readFile, readFileSync } from 'fs';
import OntInfoModel from '../database/models/OntInfoModel';
import {IAppService, IOntInfo} from '../interfaces/AppInterface'
import huaweiTextFileHandler from '../utils/textFileHandler';

export default class AppService implements IAppService{
  constructor(private ontInfoModel = OntInfoModel) {}

  async getAllOntInfo(): Promise<IOntInfo[]> {
    const text = huaweiTextFileHandler()  
    const ontInfoList = await this.ontInfoModel.findAll();
    
    return ontInfoList
  }
}