// src/components/Header.js
import React from "react";
import TemaToggle from "../../components/TemaToggle";

import { Link } from "react-router-dom"; 

export default function Header({ modoEscuro, onToggle }) {
  return (
    <header className={modoEscuro ? 'modo-escuro' : ''}>
      <a><h1>Logo</h1></a>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/skills">Skills</Link>  </li>
        <li> <Link to="/portfolio">Portfolio</Link>  </li>
        <li> <Link to="/contact">Contact</Link>  </li>
      </ul>
      <TemaToggle onToggle={onToggle} />
    </header>
  );
}
