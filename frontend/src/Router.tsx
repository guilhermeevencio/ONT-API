import {Route, Routes} from 'react-router-dom'
import { FormPage } from './Pages/FormPage'
import { Home } from './Pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/insert' Component={FormPage} />
    </Routes>
  )
}