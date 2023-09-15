import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'; 
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Display from './pages/Display';
import './styles.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/display' element={<Display />} />
        </Routes>
      </div>
    </>
  )
}

export default App
