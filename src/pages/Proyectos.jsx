import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Proyectos() {
    const proyectos = [
        {
          nombre: 'VecinoChef App',
          url: 'https://vecinochef-app.netlify.app/',
          imagen: "../public/images/vecinochef.png",
          texto: "Proyecto final Bootcamp Desarrollo Web Ironhack 2023",
          github: "https://github.com/ereillo/vecinochef-server",
        },
        {
          nombre: "GymFlex",
          url: "https://gym-app.adaptable.app/",
          imagen: "../public/images/gymflex.png",
          texto: "Proyecto segundo módulo centrado en Backend",
          github: "https://github.com/ereillo/proyect-app-gym"
        }
      ];

      return (
        <div className="container mt-4" style={{ marginTop: "30px" }}>
          <h1>Proyectos Bootcamp Ironhack 2023</h1>
          <div className="row" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "50px" }}>
            {proyectos.map((proyecto, index) => (
              <div className="col-md-4" key={index}>
                <Card style={{ margin: "10px", witdh: "300px", backgroundColor: "#dfe8ea" }}>
                  <Card.Img variant="top" src={proyecto.imagen} alt={proyecto.nombre} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "18px", color: "#3669a6" }}><h2>{proyecto.nombre}</h2></Card.Title>
                    <Card.Text style={{ fontSize: "14px", color: "#3669a6" }}>
                      <h4>{proyecto.texto}</h4>
                    </Card.Text>
                    <Card.Link href={proyecto.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", marginBottom: "10px" }}>
                      <li>Visitar aplicación</li>
                    </Card.Link>
                    <Card.Link href={proyecto.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px" }}>
                    <li>Enlace a GitHub</li>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      );
      
      
}

export default Proyectos;