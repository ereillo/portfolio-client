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
                style={{ color: "#224278", marginTop: "100px" }}
              >
                ¡Hola! Soy <b>Evelio</b>
              </h1>
              <h2 className="h4" style={{ color: "#3d6da6" }}>
                Desarrollador web full-stack, periodista y copywriter
              </h2>
              <p className="info-section">
                Nací en Las Palmas de Gran Canaria el 23 de abril de 1995. Con
                una gran inquietud por contar historias y convertirlas en
                experiencias, en 2017 me gradué en Periodismo y Comunicación
                Audiovisual por la Universidad Carlos III de Madrid. Más tarde,
                en 2023 realicé un curso de Desarrollo Web Full-stack con la
                academia Ironhack Madrid en busca de abrirme nuevas
                posibilidades y abordar mis inquietudes por el mundo de la
                programación.
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
                src="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696265067/580b57fcd9996e24bc43c325_bdawh0.png"
                alt="Evelio's profile"
                style={{ width: "30em" }}
              />
            </Col>
          </Row>
        </Container>
      </header>
      {/* <section className="info-section py-5"> */}
      <div class="skillscard">
  <span class="title">Skills</span>
  <div class="card__tags">
    <ul class="tag">
      <li class="tag__name">JavaScript</li>
      <li class="tag__name">HTML5</li>
      <li class="tag__name">CSS3</li>
      <li class="tag__name">ReactJS</li>
      <li class="tag__name">ExpressJS</li>
      <li class="tag__name">Mongo DB</li>
    </ul>
  </div>
</div>
    
    </div>
  );
}

export default Landing;
