import OntInfoModel from '../database/models/OntInfoModel'
import { IAppService, IOntInfo } from '../interfaces/AppInterface'
import {
  huaweiTextFileHandler,
  zteTextFileHandler,
} from '../utils/textFileHandler'

export default class AppService implements IAppService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private ontInfoModel = OntInfoModel) {}

  async getAllOntInfo(): Promise<IOntInfo[]> {
    const ontInfoList = await this.ontInfoModel.findAll()
    return ontInfoList
  }

  async populateDatabase(): Promise<IOntInfo[]> {
    const zteData = zteTextFileHandler()
    const huaweiData = huaweiTextFileHandler()

    zteData.forEach(async (ontInfo) => {
      await this.ontInfoModel.create({ ...ontInfo })
    })

    huaweiData.forEach(async (ontInfo) => {
      await this.ontInfoModel.create({ ...ontInfo })
    })

    return await this.getAllOntInfo()
  }
}
