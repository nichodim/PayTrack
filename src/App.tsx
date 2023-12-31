import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'; 
import Home from './pages/Home/Home';
import Transactions from './pages/Transactions/Transactions';
import Display from './pages/Display/Display';
import '../public/styles.css'

function App() {
  return (
    <>
      <div className='nav-border'></div>
      <div className='container'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/display' element={<Display />} />
      </Routes>
    </>
  )
}

export default App
