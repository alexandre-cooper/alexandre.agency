
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Hire from './pages/Hire';
import Form from './pages/Form';


function RoutesApp() {
  const [darkMode, setModoEscuro] = useState(false);
  const toggleTema = (novoModoEscuro) => {
    setModoEscuro(novoModoEscuro);
  };
  document.body.classList.toggle('modo-escuro', darkMode);
  return (
    <Router>
      <Header modoEscuro={darkMode} onToggle={toggleTema} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hire" element={<Hire/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default RoutesApp;
