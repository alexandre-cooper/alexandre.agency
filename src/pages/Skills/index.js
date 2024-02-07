import React from "react";
import data from '../../data.json';


export default function Skills(){
  const services = data.my_services || [];
  const { java,
          typeScript,
          html,
          node,
          postgreSQL,
          figma,
          git,
          kali,
          nextJs,
          reactJs,
          wordExpress,
          blender,
          shopify,
          photoshop,
          premiere_pro,
          nest,
          css,
          keycloak,
          adobe_ilustrator,
          corelDraw
         } = data.skills;
  const { javascript } = data.description_skill;

  return(
    <div className="container_skills">
      <h1 className="titulo">Habilidades</h1>
      <h3 className="subtitulo">Tecnologias que estou diariamente em contato, seja no trabalho ou estudando.</h3>
      <section className="section_skills">
      <div className="grid_skills">
      <div className="card_skills">
        <img className="icones_skills" src={java} alt="Icone skills"/>
        <img className="icones_skills" src={typeScript} alt="Icone skills"/>
        <img className="icones_skills" src={reactJs} alt="Icone skills"/>
        <img className="icones_skills" src={nextJs} alt="Icone skills"/>
        <img className="icones_skills" src={html} alt="Icone skills"/>
        <img className="icones_skills" src={css} alt="Icone skills"/>
        <img className="icones_skills" src={node} alt="Icone skills"/>
        <img className="icones_skills" src={postgreSQL} alt="Icone skills"/>
        <img className="icones_skills" src={keycloak} alt="Icone skills"/>
        <img className="icones_skills" src={nest} alt="Icone skills"/>
        <img className="icones_skills" src={wordExpress} alt="Icone skills"/>
        <img className="icones_skills" src={shopify} alt="Icone skills"/>
        <img className="icones_skills" src={git} alt="Icone skills"/>
        <img className="icones_skills" src={figma} alt="Icone skills"/>
        <img className="icones_skills" src={kali} alt="Icone skills"/>
        <img className="icones_skills" src={blender} alt="Icone skills"/>
        <img className="icones_skills" src={photoshop} alt="Icone skills"/>
        <img className="icones_skills" src={premiere_pro} alt="Icone skills"/>
        <img className="icones_skills" src={adobe_ilustrator} alt="Icone skills"/>
        <img className="icones_skills" src={corelDraw} alt="Icone skills"/>
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