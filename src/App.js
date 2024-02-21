import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import Buildings from './components/Buildings';
import RoutesI from './components/Routes'
import Products from './components/Products'
import Account from './components/Account'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/routes' element={<RoutesI />} />
          <Route path='/products' element={<Products />} />
          <Route path='/account' element={<Account />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
