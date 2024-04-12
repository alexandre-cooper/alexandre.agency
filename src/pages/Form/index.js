import React from "react";

export default function Form(){
  const frase = 'Uma presença digital moderna e profissional agrega valor à sua marca e facilita a geração de negócios. Conheça os benefícios que a Italínea disponibiliza para que sua loja esteja qualificada e competitiva.';
  return(
    <div className="form-hire">
      <section>
        <h1> <span>Slogan</span></h1>
        <div>
          <p>{frase}</p>
          <form>
            <label>Preencha o formulário de contratação</label>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Sobrenome"/>
            <input type="text" placeholder="Seu melhor email"/>
            <input type="text" placeholder="número de contato"/>
          </form>
        </div>
      </section>
    </div>
  )
}