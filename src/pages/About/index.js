import React from "react";
import data from '../../data.json';
import Skills from "../Skills";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function About(){
  const { description, programing } = data.sobre;
  return(
    <div className="container_about">
      <h1 className="titulo">About me</h1>
      <section>
      <h3 className="subtitulo">Welcome to my portfolio!</h3>
        <span>
          <p className="description">{description}</p>
          <div>
          <img className="img_about" src={programing} alt="imagem about"/>
          </div>
          </span>
      </section>
    </div>
  )
}