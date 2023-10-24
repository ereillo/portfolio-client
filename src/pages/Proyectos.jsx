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
      texto: "Proyecto final Bootcamp Desarrollo Web Ironhack 2023. Hecho con React, manejo del frontend y backend.",
      github: "https://github.com/ereillo/vecinochef-server",
    },
    {
      nombre: "GymFlex",
      url: "https://gym-app.adaptable.app/",
      imagen:
        "https://res.cloudinary.com/dj9npvnlg/image/upload/v1696261120/Captura_de_pantalla_2023-10-02_a_las_17.38.34_bxakbx.png",
      texto: "Proyecto segundo módulo centrado en Backend. Procesos de autenticación, registro de usuarios en DB, 4 modelos, 3 roles. Uso de handlebars.",
      github: "https://github.com/ereillo/proyect-app-gym",
    },
    {
      nombre: "eveSHOP",
      url: "https://eveshop-app.netlify.app/",
      imagen:
        "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg",
      texto: "Proyecto personal de un eSHOP hecho con React",
      github: "https://github.com/ereillo/eshop",
    },
    {
      nombre: "weather-app",
      url: "https://ereillo-weather-app.netlify.app/",
      imagen:
        "https://res.cloudinary.com/dj9npvnlg/image/upload/v1698149017/Captura_de_pantalla_2023-10-24_a_las_14.02.39_coyjgt.png",
      texto: "Aplicación del tiempo creada con React",
      github: "https://github.com/ereillo/weather-app",
    },
  ];

  return (
    <div
      className="container mt-4"
      style={{ marginTop: "30px", color: "#224278", justifyContent: "center" }}
    >
      <h1>Proyectos web personales</h1>
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
              <button onClick={() => window.open(proyecto.github, "_blank")}>
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
