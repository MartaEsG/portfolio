import React from "react";
import "./Works.css";

function Works() {
  return (
    <div className="works-section">
      <h2 className="title">CONOCE MIS PROYECTOS</h2>
      <div className="works-cards">
        <div className="card-one">
          <div className="project-pokedex">
            <h2>POKEAPI</h2>
            <p>
              Hazte con todos! Partiendo de la{" "}
              <a
                className="pokeapi"
                href="https://pokeapi.co/api/v2/pokemon/"
                target="_blank"
                rel="noreferrer"
              >
                POKEAPI
              </a>
              se crea una página web que pinta todos los pokemons de la misma,
              así como algunas de sus propiedades. Se aplica además un buscador.{" "}
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
              <a href="https://github.com/">
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
            <div className="project-pokedex">
              <h2>PokeApi</h2>
              <p>
                Hazte con todos! Partiendo de la{" "}
                <a
                  className="pokeapi"
                  href="https://pokeapi.co/api/v2/pokemon/"
                  target="_blank"
                  rel="noreferrer"
                >
                  POKEAPI
                </a>{" "}
                se crea una página web que pinta todos los pokemons de la misma,
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
              <a href="https://github.com/">
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
            <div className="project-pokedex">
              <h2>PokeApi</h2>
              <p>
                Hazte con todos! Partiendo de la{" "}
                <a
                  className="pokeapi"
                  href="https://pokeapi.co/api/v2/pokemon/"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  POKEAPI
                </a>{" "}
                se crea una página web que pinta todos los pokemons de la misma,
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
              <a href="https://github.com/">
                <img
                  className="logos"
                  src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                  alt="github_pokedex"
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
