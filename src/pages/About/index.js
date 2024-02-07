import React from "react";
import data from '../../data.json';
import Skills from "../Skills";

export default function About(){
  const { description } = data.sobre;
  return(
    <div className="container_about">
      <h1 className="titulo">Sobre o mim</h1>
      <h3 className="subtitulo">Bem vindo(a) a meu portfolio!</h3>
      <section >
        <span>
          <p className="description">{description}</p>
          <div>
          <img className="img_about" src="/person.png" alt="imagem about"/>
          </div>
          </span>
      </section>
      <Skills/>
    </div>
  )
}