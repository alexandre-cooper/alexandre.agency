import React from "react";
import data from '../../data.json';

export default function Portfolio(){

  const portfolio = data.portfolio || [];

  return(
    <div>
      <section className="portfolio_container">
      <h1>Meu Portfolio</h1>
      <h3>Bem vindo(a) a meu portfolio!</h3>
      <div>
        {portfolio.map((item, index)=>{
          return(
            <ul className="list_portfolio" key={index}>
              <li><img width={300} src={item.foto_capa} alt="Foto de capa portfolio" /></li>
              <li>{item.titulo}</li>
              <li> <a className="btn_acess" href={item.link} target="_blank" rel="noreferrer">Acessar</a> </li>
            </ul>
          )
        })}
      </div>
      </section>
    </div>
  )
}