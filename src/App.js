// import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Others from './pages/Others';
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
  
    <ToastContainer position='bottom-center' />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/others" element={<Others />} />
          {/* <Route path="https://www.youtube.com/"  /> */}
         
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
