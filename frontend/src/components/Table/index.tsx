import { useContext, useEffect, useState } from 'react'
import AppContext, { IAppContext } from '../../context/AppContext'
import { IOntInfo } from '../../interfaces/Ont'
import { ontInfoRequest } from '../../services/requests'

const borderStyle = 'border border-slate-600 bg-slate-700 p-1'
const bodyBorderStyle = 'border border-slate-700 p-2 text-center	bg-slate-800'

export function Table() {
  const [ontInfo, setOntInfo] = useState<IOntInfo[]>([])
  const [searchedOnt, setSearchedOnt] = useState<IOntInfo | null>()

  const {searchedOntInfo} = useContext(AppContext) as IAppContext

  useEffect(() => {
    const getOntInfoResponse = async () => {
      const response = await ontInfoRequest()
      if (response) setOntInfo(response.data)
    }
    getOntInfoResponse()
  }, [])
  useEffect(() => {
    if(searchedOntInfo) {
      setSearchedOnt(searchedOntInfo)
    } else {setSearchedOnt(null)}
    
  }, [searchedOntInfo])
  

  return (
    <table className='table-auto border-collapse w-4/6 border-spacing-1'>
      <thead className='rounded-md'>
        <tr>
          <th className={borderStyle}>SN</th>
          <th className={borderStyle}>Slot</th>
          <th className={borderStyle}>Port</th>
          <th className={borderStyle}> ONT Id</th>
          <th className={borderStyle}>Manufacturer</th>
          <th className={borderStyle}>State</th>
        </tr>
      </thead>
      <tbody>
        {ontInfo.length > 0 && !searchedOnt ? ontInfo.map((ont) => {
          return (
            <tr key={ont.sn}>
              <td className={bodyBorderStyle}>{ont.sn}</td>
              <td className={bodyBorderStyle}>{ont.slot}</td>
              <td className={bodyBorderStyle}>{ont.port}</td>
              <td className={bodyBorderStyle}>{ont.ontId}</td>
              <td className={bodyBorderStyle}>{ont.manufacturer}</td>
              <td className={bodyBorderStyle}>{ont.state}</td>
            </tr>
          )
        }) : (<tr>
          <td className={bodyBorderStyle}>{searchedOnt?.sn}</td>
          <td className={bodyBorderStyle}>{searchedOnt?.slot}</td>
          <td className={bodyBorderStyle}>{searchedOnt?.port}</td>
          <td className={bodyBorderStyle}>{searchedOnt?.ontId}</td>
          <td className={bodyBorderStyle}>{searchedOnt?.manufacturer}</td>
          <td className={bodyBorderStyle}>{searchedOnt?.state}</td>
        </tr>)}
      </tbody>
    </table>
  )
}