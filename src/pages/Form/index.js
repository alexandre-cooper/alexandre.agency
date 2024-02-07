import React from "react";

export default function Form(){
  const frase = 'Uma presença digital moderna e profissional agrega valor à sua marca e facilita a geração de negócios. Conheça os benefícios que a Italínea disponibiliza para que sua loja esteja qualificada e competitiva.';
  return(
    <div>
      <section>
        <h1>Logo <span>Slogan</span></h1>
        <div>
          <p>{frase}</p>
          <form>
            <h1>Preencha o formulário de contratação</h1>
            <input type="text" placeholder="digite algo"/>
          </form>
        </div>
      </section>
    </div>
  )
}