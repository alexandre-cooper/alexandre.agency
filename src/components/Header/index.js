// src/components/Header.js
import React, {useState} from "react";
import TemaToggle from "../../components/TemaToggle";

import { Link } from "react-router-dom";

export default function Header({ modoEscuro, onToggle }) {

  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

  return (
    <div className={active? 'icon iconActive':'icon'} onClick={ToggleMode}>
       <div className={active? 'icon iconActive':'icon'} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
            </div>
      <div className={active? 'menu menuOpen':'menu menuClose'}>
      <nav className={modoEscuro ? 'modo-escuro' : '' }>
      <a><h1>Logo</h1></a>
      <ul className="listItems">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/skills">Skills</Link>  </li>
        <li> <Link to="/portfolio">Portfolio</Link>  </li>
        <li> <Link to="/contact">Contact</Link>  </li>
        <li> <Link to={'/hire'}>Hire</Link> </li>
      </ul>
      <TemaToggle onToggle={onToggle} />
    </nav>
      </div>
    </div>
  );
}
