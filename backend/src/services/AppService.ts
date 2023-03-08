import OntInfoModel from '../database/models/OntInfoModel';
import {IAppService, IOntInfo} from '../interfaces/AppInterface'

export default class AppService implements IAppService{
  constructor(private ontInfoModel = OntInfoModel) {}

  async getAllOntInfo(): Promise<IOntInfo[]> {    
    const ontInfoList = await this.ontInfoModel.findAll();
    
    return ontInfoList
  }
}