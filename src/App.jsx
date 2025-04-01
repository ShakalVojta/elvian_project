import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import TaxAccounting from './pages/TaxAccounting'
import NokiaPage from './pages/NokiaPage'

function App() {

  return ( 
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/tax-accounting' element={<TaxAccounting />}/>
      <Route path='/about-nokia' element={<NokiaPage />}/>
    </Routes>
    )
}

export default App
