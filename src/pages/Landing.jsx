import React from "react";
import "../App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function Landing() {
  return (
    <div className="landing-container">
      <header
        className="landing-header text-center"
        style={{
          backgroundColor: "#bcd9f2",
          padding: "5rem 0",
          marginTop: "-3em",
        }}
      >
        <Container>
          <Row>
            <Col md={6} className="text-white">
              <h1
                className="display-4"
                style={{ color: "#224278", marginTop: "20px" }}
              >
                ¡Hola! Soy <b>Evelio</b>
              </h1>
              <br />
              <h2 className="h4" style={{ color: "#3d6da6" }}>
                Desarrollador web full-stack, periodista y copywriter
              </h2>
              <br />
              <p className="info-section">
              Nací el 23 de abril de 1995 en Las Palmas de Gran Canaria. 
              Desde joven, mi pasión por descubrir y contar historias ha sido mi motor. 
              
              En 2017, me gradué en Periodismo y Comunicación Audiovisual 
              
              y en 2023 decidí sumergirme en el mundo del Desarrollo Web.
            
              Esta experiencia no solo amplió mis horizontes, sino que también abordó de manera integral mis inquietudes en el fascinante universo de la programación.
              </p>
              <div className="cv-links">
                <Button
                  variant="light"
                  className="button"
                  href="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696274965/CV_ENG_EREILLO_bm1cn9.png"
                  target="_blank"
                  download
                >
                  CV en español
                </Button>
                <Button
                  variant="light"
                  className="button"
                  href="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696274965/CV_ESP_EREILLO_g32tga.png"
                  target="_blank"
                  download
                >
                  CV en inglés
                </Button>
              </div>
            </Col>
            <Col
              md={5}
              className="d-flex align-items-center justify-content-center"
              style={{ float: "right" }}
            >
              <img
                className= "fotoeve"
                src="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696364352/Captura_de_pantalla_2023-10-03_a_las_22.19.05_wsqbt1.png"
                alt="Evelio's profile"
                style={{ width: "31em" }}
              />
            </Col>
          </Row>
        </Container>
      </header>
      {/* <section className="info-section py-5"> */}
      {/* <div class="botones">
      <button class="button2">
      JavaScript
</button>
<button class="button2">
HTML5
</button>
<button class="button2">
CSS3
</button>
<button class="button2">
ReactJS
</button>
<button class="button2">
ExpressJS
</button>
<button class="button2">
Mongo DB
</button>
<button class="button2">
AVID
</button>
<button class="button2">
Adobe Premiere
</button>
<button class="button2">
Adobe Photoshop
</button>
</div> */}
    </div>
  );
}

export default Landing;
