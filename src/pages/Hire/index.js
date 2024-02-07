import React from "react";
import { Link } from "react-router-dom";
export default function Hire(){
  return(
    <div className="hire">
      <section>
      <h1>Contrate agora!</h1>
          <div className="container_hire">
            <h1>Site da loja</h1>
            <h3>Implantação, hospedagem e suporte técnico incluido</h3>
            <h1>R$950.00</h1>
            <span>*apenas uma vez</span>
            <h1>Hospedagem e manutenção</h1>
            <h1>R$ 98/mês</h1>
            <Link className="btn_hire">CONTRATAR</Link>
          </div>
      </section>
    </div>
  )
}