import {MagnifyingGlass} from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AppContext, { IAppContext } from '../../context/AppContext'
import { findOneOntInfo } from '../../services/requests'

export function Header() {
  const {searchedOntInfo, setSearchedOntInfo} = useContext(AppContext) as IAppContext
  const [errorReturn, setErrorReturn] = useState(false)
  const [searchedString, setSearchedString] = useState('')

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const searchInputValue  = e.currentTarget.value
    setSearchedString(searchInputValue)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const response = await findOneOntInfo(searchedString)
    
    
    if (response instanceof AxiosError) {
      setErrorReturn(true)
      console.log('asdfasdgfdsg', errorReturn);
      setSearchedOntInfo(null)
      
    } else {
      setErrorReturn(false)
      setSearchedOntInfo(response)
    }
   }
  return (
    <div className='w-4/6 mt-16 h-64 flex flex-col items-center justify-around rounded-lg bg-slate-800'>
      <h1 className=' font-black text-4xl'>ONT Monitoring</h1>
      <form className='p-2 rounded-lg flex gap-2 items-center justify-center w-1/3 bg-cyan-900' onSubmit={handleSubmit}>
        <input value={searchedString} onChange={handleChange} className='bg-cyan-900 p-2 px-4 w-full  text-slate-100' type="text" placeholder='Digite aqui o número de série'/>
        <button className='disabled:opacity-50 disabled:cursor-not-allowed' disabled={!searchedString} type="submit"><MagnifyingGlass size={24} /></button>
      </form>
      {errorReturn ? (<p>Serial number não encontrado!</p>) : null}
      <Link className='bg-green-700 p-2 rounded-lg text-center w-1/3' to={'/insert'}>Inserir Dados</Link>
    </div>
  )
}