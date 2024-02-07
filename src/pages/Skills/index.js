import React from "react";
import data from '../../data.json';


export default function Skills(){
  const services = data.my_services || [];
  const skills = data.skills || [];

  return(
    <div className="container_skills">
      <h1 className="titulo">Habilidades</h1>
      <h3 className="subtitulo">Tecnologias que estou diariamente em contato, seja no trabalho ou estudando.</h3>
      <section className="section_skills">
      <div >
      <div className="grid_skills">
      {skills.map((item, index) => (
      <ul className="card_skills">
      <li key={index}> <img className="icones_skills" src={item.logo_skill} alt={`Icon ${index}`} /> </li>
      </ul>
      ))}

      </div>
      </div>

      <div className="divi-principal">
      <div className="services_grid">
      {services.map((service, index) => (
      <ul className="card_services" key={index}>
        <li><img width={100} src={service.icon} alt="icon"/> </li>
        <li>{service.titulo}</li>
        <li>{service.description}</li>
      </ul>
    ))}
      </div>
      </div>
      
      </section>
    </div>
  )
}