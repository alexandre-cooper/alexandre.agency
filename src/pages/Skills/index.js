import React from "react";
import data from '../../data.json';


export default function Skills(){
  const services = data.my_services || [];
  const skills = data.skills || [];

  return(
    <div className="container_skills">
      <h1 className="titulo">Habilidades</h1>
      <h3 className="subtitulo">Tecnologias que trabalho ou estudo diariamente</h3>
      <section className="section_skills">
      <div>
      <div className="grid_skills">
      {skills.map((item, index) => (
      <ul className="card_skills">
      <li key={index}> <img className="icones_skills" src={item.logo_skill} alt={`Icon ${index}`} /> </li>
      </ul>
      ))}
      </div>
      </div>
      <div className="container_services">
      <div className="services_grid">
      {services.map((service, index) => (
      <ul className="card_services" key={index}>
        <li><img color="red" width={150} src={service.icon} alt="icon"/> </li>
        <li className="title_service">{service.titulo}</li>
        <li className="description_service">{service.description}</li>
      </ul>
    ))}
      </div>
      </div>
      
      </section>
    </div>
  )
}