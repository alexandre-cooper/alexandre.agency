// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";

import data from './data.json';

function App() {
  const { foto_perfil, titulo, nome, sobre_nome, sobre, habilidades, contato } = data.perfil;
  const [darkMode, setModoEscuro] = useState(false);

  const toggleTema = (novoModoEscuro) => {
    setModoEscuro(novoModoEscuro);
  };
  document.body.classList.toggle('modo-escuro', darkMode);
  return (
    <div>
      <Header modoEscuro={darkMode} onToggle={toggleTema} />
      <section>
        <img src={foto_perfil} />
        <h1>{titulo}</h1>
        <h1>{nome}</h1>
        <h1>{sobre_nome}</h1>
        <p>{sobre}</p>
        
      </section>
    </div>
  );
}

export default App;
