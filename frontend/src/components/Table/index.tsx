import { useEffect, useState } from 'react'
import { IOntInfo } from '../../interfaces/Ont'
import { ontInfoRequest } from '../../services/requests'

const borderStyle = 'border border-slate-600 bg-slate-700 p-1'
const bodyBorderStyle = 'border border-slate-700 p-2 text-center	bg-slate-800'

export function Table() {
  const [ontInfo, setOntInfo] = useState<IOntInfo[]>([])

  useEffect(() => {
    const getOntInfoResponse = async () => {
      const response = await ontInfoRequest()
      if (response) setOntInfo(response.data)
    } 
    getOntInfoResponse()
  }, [])
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
        {ontInfo.length > 0 ? ontInfo.map((ont) => {
          return (
            <tr>
              <td className={bodyBorderStyle}>{ont.sn}</td>
              <td className={bodyBorderStyle}>{ont.slot}</td>
              <td className={bodyBorderStyle}>{ont.port}</td>
              <td className={bodyBorderStyle}>{ont.ontId}</td>
              <td className={bodyBorderStyle}>{ont.manufacturer}</td>
              <td className={bodyBorderStyle}>{ont.state}</td>
            </tr>
          )
        }) : null}
      </tbody>
    </table>
  )
}