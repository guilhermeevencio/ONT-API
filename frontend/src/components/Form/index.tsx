import { AxiosError } from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createOntInfo } from '../../services/requests'

const inputStyle = 'p-2 px-4  text-slate-100 bg-transparent border-b-2'
const divInputStyle = 'flex flex-row gap-4'

export function Form() {
  const [sn, setSn] = useState<string>('')
  const [slot, setSlot] = useState<string>('')
  const [port, setPort] = useState<string>('')
  const [manufacturer, setManufacturer] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [ontId, setOntId] = useState<string>('')
  const [responseMessage, setResponseMessage] = useState<string | null>(null)

  function isFormValid(): boolean {
    if (sn && slot && port && manufacturer && state && ontId) {
      return false
    } else {
      return true
    }
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { id, value } = e.currentTarget
    switch (id) {
      case 'sn':
        setSn(value)
        break;
      case 'slot':
        setSlot(value)
        break;
      case 'port':
        setPort(value)
        break;
      case 'manufacturer':
        setManufacturer(value)
        break;
      case 'state':
        setState(value)
        break;
      case 'ontId':
        setOntId(value)
        break;
      default:
        break;
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const createOntResponse = await createOntInfo({sn, slot, port, ontId, manufacturer, state})
    console.log(createOntResponse);
    if (createOntResponse instanceof AxiosError) {
      setResponseMessage(createOntResponse.response?.data.message)
    } else {
      setResponseMessage(createOntResponse.message)
    }
  }

  return (
    <div className='flex flex-col p-8 justify-evenly items-center bg-cyan-900 w-3/5 rounded-2xl h-3/5'>
      <h1 className='text-slate-100 font-black text-4xl'>ONT Monitoring</h1>
      <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
        <div className={divInputStyle}>
          <input onChange={handleChange} className={inputStyle} type="text" placeholder='Serial Number' id="sn" />
          <input onChange={handleChange} className={inputStyle} type="text" placeholder='Fabricante' id="manufacturer" />
        </div>
        <div className={divInputStyle}>
          <input onChange={handleChange} className={inputStyle} type="number" placeholder='Slot' id="slot" />
          <input onChange={handleChange} className={inputStyle} type="number" placeholder='Port' id="port" />
        </div>
        <div className={divInputStyle}>
          <input onChange={handleChange} className={inputStyle} type="number" placeholder='Ont Id' id="ontId" />
          <input onChange={handleChange} className={inputStyle} type="text" placeholder='Estado' id="state" />
        </div>
        <button className='bg-green-700 p-2 rounded-lg text-center w-1/3'>Salvar</button>
      </form>
      {responseMessage && (
        <>
      <p>{responseMessage}</p>
      <Link className='border-b-2' to='/'>Voltar à página inicial</Link>
      </>
      )}
    </div>
  )
}