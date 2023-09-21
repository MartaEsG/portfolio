import React from "react";
import "./Works.css";

function Works() {
  return (
    <div className="works-section">
      <h2 className="title">CONOCE MIS PROYECTOS</h2>
      <div className="works-cards">
      <div className="card-one">
          <div className="projects-main-wrapper">
            <div className="project-got">
              <h2>JUEGO DE TRONOS</h2>
              <p>
                Proyecto desarrollado con React donde consultar los personajes y casas de la mítica serie, con opción de filtrar. También cuenta con una pestaña de cronología que ordena a los personajes por edad al clickar en el círculo superior. Se pueden ver detalles de las casas y personajes al pinchar en su correspondiente imagen.
              </p>
              <a
                href="https://got-newversionvercel.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="link-project"
              >
                ¡Vamos a verlo!{" "}
              </a>
            </div>
          </div>
          <div className="works-descrip">
            <div>
              <h3>Tecnologías utilizadas</h3>
              <img src="css.png" alt="css_logo" className="logos"></img>
              <img src="sass.png" alt="scss_logo" className="logos"></img>
              <img
                src="react1.png"
                alt="react_logo"
                className="logos"
              ></img>
              <img src="jsx.png" alt="jsx_logo" className="logos"></img>
            </div>
            <div>
              <h3>Ver el código en GitHub</h3>
              <div className="git">
              <p>Back</p>
              <a href="https://github.com/MartaEsG/got_back_dbjson" target="_blank"
                  rel="noreferrer">
                <img
                  className="logos"
                  src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                  alt="github_gym"
                ></img>
              </a>
              <p>Front</p>
              <a href="https://github.com/MartaEsG/GOT_newversionvercel" target="_blank"
                  rel="noreferrer">
                <img
                  className="logos"
                  src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                  alt="github_gym"
                ></img>
              </a>
              </div>
            </div>
          </div>
        </div>
      <div className="card-one">
          <div className="projects-main-wrapper">
            <div className="project-gym">
              <h2>GIMNASIO</h2>
              <p>
                Proyecto desarrollado con Angular que simula una sencilla página web de un gimnasio. Los usuarios pueden registrarse, y los administradores tienen la opción de añadir, editar y borrar clases. Si quieres ver como funcionaría con permisos de administrador, aquí te dejo un <a href="https://youtu.be/hib3gYDHxWU" target="_blank" rel="noreferrer"  className="api">vídeo demostrativo.</a>
              </p>
              <a
                href="https://gym-angular-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="link-project"
              >
                ¡Vamos a verlo!{" "}
              </a>
            </div>
          </div>
          <div className="works-descrip">
            <div>
              <h3>Tecnologías utilizadas</h3>
              <img src="html.png" alt="html_logo" className="logos"></img>
              <img src="sass.png" alt="scss_logo" className="logos"></img>
              <img
                src="ts.png"
                alt="ts_logo"
                className="logos"
              ></img>
              <img src="angular.png" alt="angular_logo" className="logos"></img>
              <img src="node.png" alt="node_logo" className="logos"></img>
              <img src="mongo.png" alt="mongo_logo" className="logos"></img>
            </div>
            <div>
              <h3>Ver el código en GitHub</h3>
              <div className="git">
              <p>Back</p>
              <a href="https://github.com/MartaEsG/Gym_Angular_Back" target="_blank"
                  rel="noreferrer">
                <img
                  className="logos"
                  src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                  alt="github_gym"
                ></img>
              </a>
              <p>Front</p>
              <a href="https://github.com/MartaEsG/Gym_Angular_Front" target="_blank"
                  rel="noreferrer">
                <img
                  className="logos"
                  src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                  alt="github_gym"
                ></img>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-one">
          <div className="projects-main-wrapper">
            <div className="project-pokedex">
              <h2>POKEAPI</h2>
              <p>
                Hazte con todos! Partiendo de la{" "}
                <a
                  className="api"
                  href="https://pokeapi.co/api/v2/pokemon/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pokeapi
                </a>{" "}
                se crea una página web que muestra todos los pokemons de la misma,
                así como algunas de sus propiedades. Se aplica además un
                buscador.{" "}
              </p>
              <a
                href="https://martaesg.github.io/pokedex/"
                target="_blank"
                rel="noreferrer"
                className="link-project"
              >
                ¡Vamos a verlo!{" "}
              </a>
            </div>
          </div>
          <div className="works-descrip">
            <div>
              <h3>Tecnologías utilizadas</h3>
              <img src="html.png" alt="html_logo" className="logos"></img>
              <img src="css.png" alt="css_logo" className="logos"></img>
              <img
                src="JavaScript-logo.png"
                alt="js_logo"
                className="logos"
              ></img>
            </div>
            <div>
              <h3>Ver el código en GitHub</h3>
              <a href="https://github.com/MartaEsG/pokedex" target="_blank"
                  rel="noreferrer">
                <img
                  className="logos"
                  src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                  alt="github_pokedex"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="card-one">
          <div className="projects-main-wrapper">
            <div className="project-rick">
              <h2>RICK & MORTY</h2>
              <p>
              Mi primer proyecto desarrollado en React, a partir de la{" "}
                <a
                  className="api"
                  href="https://rickandmortyapi.com/api/character/"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  API de Rick y Morty.
                </a>{" "}
                  Con estilos muy básicos, se muestran todos los personsajes de la serie, añadiendo paginación, buscador y botón de favoritos.{" "}
              </p>
              <a
                href="https://rick-morty-react-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="link-project"
              >
                ¡Vamos a verlo!{" "}
              </a>
            </div>
          </div>
          <div className="works-descrip">
            <div>
              <h3>Tecnologías utilizadas</h3>
              <img src="html.png" alt="html_logo" className="logos"></img>
              <img src="css.png" alt="css_logo" className="logos"></img>
              <img
                src="JavaScript-logo.png"
                alt="js_logo"
                className="logos"
              ></img>
              <img src="react1.png" alt="react_logo" className="logos"></img>
            </div>
            <div>
              <h3>Ver el código en GitHub</h3>
              <a href="https://github.com/MartaEsG/Rick-Morty-React" target="_blank"
                  rel="noreferrer">
                <img
                  className="logos"
                  src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                  alt="github_rick"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
