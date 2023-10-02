import React from 'react';
import '../App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Landing() {
  return (
    <div className="landing-container">
      <header className="landing-header text-center" style={{ backgroundColor: "#bcd9f2", padding: "5rem 0" }}>
        <Container>
          <Row>
            <Col md={6} className="text-white">
              <h1 className="display-4" style={{ color: "#224278", marginTop: "200px" }}>¡Hola! Soy <b>Evelio</b></h1>
              <h2 className="h4" style={{ color: "#3d6da6" }}>Desarrollador web full-stack, periodista y copywriter</h2>
              <p className="info-section">
                Nací en Las Palmas de Gran Canaria el 23 de abril de 1995. Siempre he desarrollado una gran inquietud por la comunicación y las nuevas tecnologías (y el deporte, mi gran pasión). En 2017 me gradué en Periodismo y Comunicación Audiovisual por la Universidad Carlos III de Madrid y en 2023 realicé un curso de Desarrollo Web Full-stack con la academia Ironhack Madrid en busca de abrirme nuevas posibilidades y abordar mis inquietudes por el mundo de la programación.
              </p>
              <div className="cv-links">
                <Button variant="light" className="button" href="../public/images/CV_EVEREILLO_ES.pdf" download>CV en español</Button>
                <Button variant="light" className="button" href="../public/images/CV_ENG.pdf" download>CV en inglés</Button>
              </div>
            </Col>
            <Col md={5} className="d-flex align-items-center justify-content-center">
              <img src="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696265067/580b57fcd9996e24bc43c325_bdawh0.png" width="500px" alt="Evelio's profile" />
            </Col>
          </Row>
        </Container>
      </header>
      <section className="info-section py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4 d-flex justify-content-center align-items-center">
              <div className="info-card text-center">
                <h3 className="text-primary">Skills</h3>
                <ul className="list-unstyled">
                  <li>HTML 5</li>
                  <li>CSS3</li>
                  <li>ReactJS</li>
                  <li>ExpressJS</li>
                  <li>Mongo Database</li>
                </ul>
              </div>
            </Col>
            <Col md={6} className="mb-4 d-flex justify-content-center align-items-center">
              <div className="info-card text-center">
                <h3 className="text-primary">Skills</h3>
                <ul className="list-unstyled">
                  <li>AVID</li>
                  <li>Adobe Premiere</li>
                  <li>Adobe Lightroom</li>
                  <li>Adobe Photoshop</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Landing;

