import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../Component/Home';
import About from '../Component/About';
import Contact from '../Component/Contact';
import Navbars from '../Component/Navbars'
import Services from '../Component/Services';

 
const router = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbars/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  )
};

export default router;
