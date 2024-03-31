import React from "react";
import data from '../../data.json';
import 'bootstrap-icons/font/bootstrap-icons.json';

export default function Contact(){
  const { linkedin, insta, github, youtube, whatsapp } = data.contact;
  return(
    <div className="container_contact">
      <section>
          <div className="contact_card">
          <h1>Fale conosco!</h1>
              <ul className="social">
                <li><a target="_blank" href={insta} rel="noreferrer"><i class="bi bi-instagram"></i></a></li>
                <li> <a target="_blank" href={github} rel="noreferrer"><i class="bi bi-github"></i></a></li>
                <li> <a target="_blank" href={linkedin} rel="noreferrer"><i class="bi bi-linkedin"></i></a></li>
                <li> <a target="_blank" href={youtube} rel="noreferrer"><i class="bi bi-youtube"></i></a></li>
                <li> <a target="_blank" href={whatsapp} rel="noreferrer"><i class="bi bi-whatsapp"></i></a></li>
              </ul>
          </div>
      </section>
    </div>
  )
}