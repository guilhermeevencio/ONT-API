import React, {createContext} from 'react';
import { IOntInfo } from '../interfaces/Ont';

export interface IAppContext {
  searchedOntInfo: IOntInfo | null
  setSearchedOntInfo: React.Dispatch<React.SetStateAction<IOntInfo | null>>
}

const AppContext = createContext<IAppContext | null>(null);

export default AppContext