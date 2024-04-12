import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
  return(
    <footer className="footer">
      <header>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={'/about'}>About</Link> </li>
        <li> <Link to={'/skills'}>Skills</Link> </li>
        <li> <Link to={'/portfolio'}>Portfolio</Link> </li>
      </header>
      <div>
        <span className="all_reservs">
          <h4>Desenvolvido por <strong>Alexandre Brasil ®️</strong> </h4>
          <p >© Todos os Direitos Reservados. 2024</p>
        </span>
      </div>
    </footer>
  )
}