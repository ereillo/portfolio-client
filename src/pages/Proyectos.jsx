import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Proyectos() {
  const proyectos = [
    {
      nombre: "VecinoChef App",
      url: "https://vecinochef-app.netlify.app/",
      imagen:
        "https://res.cloudinary.com/dj9npvnlg/image/upload/v1696260913/Captura_de_pantalla_2023-09-13_a_las_10.22.36_ryroab.png",
      texto: "Proyecto final Bootcamp Desarrollo Web Ironhack 2023",
      github: "https://github.com/ereillo/vecinochef-server",
    },
    {
      nombre: "GymFlex",
      url: "https://gym-app.adaptable.app/",
      imagen:
        "https://res.cloudinary.com/dj9npvnlg/image/upload/v1696261120/Captura_de_pantalla_2023-10-02_a_las_17.38.34_bxakbx.png",
      texto: "Proyecto segundo módulo centrado en Backend. Procesos de autenticación, registro de usuarios en DB, 4 modelos, 3 roles",
      github: "https://github.com/ereillo/proyect-app-gym",
    },
  ];

  return (
    <div
      className="container mt-4"
      style={{ marginTop: "30px", color: "#224278", justifyContent: "center" }}
    >
      <h1>Proyectos Bootcamp Ironhack 2023</h1>
      <div
        className="proyectos-padre"
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "2em",
          gap: "0.3em",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        {proyectos.map((proyecto, index) => (
          <div className="col-md-4" key={index}>
            <div class="card">
              <div class="card-border-top"></div>
              <img
                class="img-proyectos"
                src={proyecto.imagen}
                alt={proyecto.nombre}
              ></img>
              <span>{proyecto.nombre}</span>
              <p class="job">{proyecto.texto}</p>
              <button onClick={() => window.open(proyecto.url, "_blank")}>
                Visitar aplicación
              </button>
              <button onClick={() => window.open(proyecto.url, "_blank")}>
                Ir a GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
