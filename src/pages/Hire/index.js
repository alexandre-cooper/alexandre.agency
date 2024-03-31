import React from "react";
import { Link } from "react-router-dom";
export default function Hire(){
  return(
    <div className="hire">
      <h1>Contrate agora!</h1>
      <section>
          <div className="container_hire">
            <span className="titulo_hire"><h1>Landing page</h1></span>
            <h3>Implantação, hospedagem e suporte técnico incluido</h3><p>a partir de</p>
            <span className="price"> <p>R$</p> <h1>950.00</h1></span>
            <p>*apenas uma vez</p>
            <h3 className="hosp">Hospedagem e manutenção</h3>
            <span className="price"> <p>R$</p> <h1>98.00</h1><p>/mês</p></span>
            <Link className="btn_hire" to={'/form'}>CONTRATAR</Link>
          </div>
      </section>
    </div>
  )
}