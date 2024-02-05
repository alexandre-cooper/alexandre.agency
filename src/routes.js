
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


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
      </Routes>
    </Router>
  );
}
function AboutRoutes() {
  return (
    <div>
      <h2>Sobre Nós</h2>
      <Outlet />
    </div>
  );
}

export default RoutesApp;
