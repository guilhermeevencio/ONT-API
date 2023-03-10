import OntInfoModel from '../database/models/OntInfoModel'
import { IAppService, IOntInfo } from '../interfaces/AppInterface'
import { zteTextFileHandler } from '../utils/textFileHandler'

export default class AppService implements IAppService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private ontInfoModel = OntInfoModel) {}

  async getAllOntInfo(): Promise<IOntInfo[]> {
    const text = zteTextFileHandler()
    console.log(text)

    const ontInfoList = await this.ontInfoModel.findAll()

    return ontInfoList
  }
}
