import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'; 
import Home from './pages/Home/Home';
import Transactions from './pages/Transactions/Transactions';
import Display from './pages/Display/Display';
import './styles.css'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className='nav-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/display' element={<Display />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
