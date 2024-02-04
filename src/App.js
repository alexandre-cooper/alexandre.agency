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
      <section className="container">
        <div className="main">
        <div class="images">
                <img src={foto_perfil} />
                <span class="bg-effect-1">
                <span class="bg-effect-1"></span>

                </span>
            </div>
        

        <div className="info">
        <p>{titulo}</p>
        <span className="name">
        <h1 className="name_complete">{nome}</h1>
        <h1>{sobre_nome}</h1>
        </span>
        <p>{sobre}</p>
        </div>
        </div>
      </section>
      
      <section>
        <h1>{titulo}</h1>
      </section>

    </div>
  );
}

export default App;
