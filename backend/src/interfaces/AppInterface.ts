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
}

export { IAppService, IOntInfo }
