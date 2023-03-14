import {MagnifyingGlass} from '@phosphor-icons/react'

export function Header() {
  return (
    <div className='w-4/6 mt-16 h-64 flex flex-col items-center justify-around rounded-lg bg-slate-800'>
      <h1 className=' font-black text-4xl'>ONT Monitoring</h1>
      <form className='p-2 flex gap-2 items-center justify-center w-1/3'>
        <input className='bg-cyan-900 p-2 px-4 w-full rounded-md text-slate-100' type="text" placeholder='Digite aqui o número de série'/>
        <button><MagnifyingGlass size={24} /></button>
      </form>
    </div>
  )
}