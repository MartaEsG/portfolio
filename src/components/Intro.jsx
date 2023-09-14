import React from "react";
import './Intro.css'

function Intro() {
  return (
    <div>
      <div className="intro-wrapper">
        <div className="div-width center">
          <h1>MARTA ESCRIBANO</h1>
          <h2>Full-stack Developer</h2>
        </div>
        <div>
          <img className='profileimg' src="fotoMia.png" alt="#"></img>
        </div>
        <div>
          <p className="div-width justify">Soy desarrolladora Full-Stack junior con experiencia previa en relaciones con  clientes, así como en el ámbito de la comunicación y redes sociales. 
          En esta página, te presento los proyectos más importantes que he realizado hasta el momento, usando algunas tecnologías como html, CSS, JavaScript, Node.js, Angular o React. </p>
        </div>
        <div className="div-width">
          <h2>Me puedes contactar en... </h2>
          <div className="div-contact">
          <img src="linkedin.png" alt="logo_linkedin" className="logo"></img>
          <a className="linkedin" href= "https://www.linkedin.com/in/marta-escribano-garcia"target="_blank" rel="noreferrer">Linkedin</a>
          </div>
          <div className="div-contact">
          <img src="mail.png" alt="logo_mail" className="logo"></img>
          <p>marta.escribanog@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
