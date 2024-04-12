import React from "react";
import data from '../../data.json';
import Carrousel from "../../components/Carrousel";
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Skills(){

  const services = data.my_services || [];

  return(
    <div className="container_skills">
      <h1 className="titulo">Habilidades</h1>
      <h3 className="subtitulo">Tecnologias que trabalho ou estudo diariamente</h3>
      <section className="section_skills">
      <Carrousel/>
      <div>
        
      <div className="grid_skills">
        
      </div>
      </div>

      <br/>
      <h1>Nossos serviços</h1>
      <br/>
      <div className="container_services">
        
      <div className="services_grid">
      {services.map((service, index) => (
      <ul className="card_services" key={index}>
        <li className="icon_list"><img color="red" width={50} src={service.icon} alt="icon"/> </li>
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