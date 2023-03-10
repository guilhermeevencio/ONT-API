interface IOntInfo {
  sn: string
  slot: string
  port: string
  ontId: string
  state: string
  manufacturer: string
}

interface IAppService {
  getAllOntInfo(): Promise<IOntInfo[]>
  populateDatabase(): Promise<IOntInfo[]>
  create(ontInfo: IOntInfo): Promise<void>
  findOne(sn: string): Promise<IOntInfo>
}

export { IAppService, IOntInfo }
