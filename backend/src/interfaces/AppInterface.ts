interface IOntInfo {
  sn: number;
  slot: string;
  port: string;
  ontId: string;
  state: string;
  manufacturer: string;
}

interface IAppService {
  getAllOntInfo(): Promise<IOntInfo[]> 
}

export {
  IAppService,
  IOntInfo
}