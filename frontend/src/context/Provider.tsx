import React, { useState } from 'react';
import { IOntInfo } from '../interfaces/Ont';
import AppContext from './AppContext';

type Props = {
  children: React.ReactNode
}

export function Provider({children}: Props) {
  const [searchedOntInfo, setSearchedOntInfo] = useState<IOntInfo | null>(null)

  const contextValue = {
    searchedOntInfo,
    setSearchedOntInfo
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

