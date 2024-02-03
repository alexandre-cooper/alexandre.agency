// src/components/Header.js
import React from "react";
import TemaToggle from "../../components/TemaToggle";

export default function Header({ modoEscuro, onToggle }) {
  return (
    <header className={modoEscuro ? 'modo-escuro' : ''}>
      <a><h1>Logo</h1></a>
      <ul>
        <li> <a>Home</a> </li>
        <li> <a>About</a> </li>
        <li> <a>Skills</a> </li>
        <li> <a>Portfolio</a> </li>
        <li> <a>Contact</a> </li>
      </ul>
      <TemaToggle onToggle={onToggle} />
    </header>
  );
}
