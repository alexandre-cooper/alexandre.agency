// src/App.js
import React, { useState } from "react";
import data from '../../data.json';
import About from "../About";
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Hire from "../Hire";

function Home() {
  const { foto_perfil, titulo, nome, sobre_nome, sobre, habilidades, contato } = data.perfil;

  return (
    <div>
      <section className="container">
        <div className="main">
        <div class="images">
                <img className="foto_perfil" src={foto_perfil} alt="Foto de perfil" />
                <span class="bg-effect-1">
                <span class="bg-effect-1"></span>
                </span>
            </div>
        <div className="info">
        <h3>{titulo}</h3>
        <span className="name">
        <h1 className="name_complete">{nome}</h1>
        <h1>{sobre_nome}</h1>
        </span>
        <p className="about_p">{sobre}</p>
        </div>
        </div>
      </section>
      <About/>
      <Portfolio/>
      <Contact/>
      <Hire/>
    </div>
  );
}

export default Home;
