import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import TaxAccounting from './pages/TaxAccounting'

function App() {

  return ( 
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/tax-accounting' element={<TaxAccounting />}/>
    </Routes>
    )
}

export default App
