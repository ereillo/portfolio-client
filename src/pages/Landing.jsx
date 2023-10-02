import React from 'react';
import '../App.css';
import { Button, Container, Row, Col } from 'react-bootstrap'; // Importa componentes de Bootstrap

function Landing() {
  return (
    <div className="landing-container">
      <header className="landing-header text-center" style={{ backgroundColor: "#bcd9f2", padding: "5rem 0" }}>
        <Container>
          <Row>
            <Col md={6} className="text-white">
              <h1 className="display-4" style = {{color: "#224278", marginTop: "200px"}}>¡Hola! Soy Evelio</h1>
              <h2 className="h4" style = {{color: "#3d6da6"}}>Desarrollador web full-stack, periodista y copywriter</h2>
              <div className="cv-links mt-4">
                <p className="texto" style = {{color: "#3d6da6"}}>Aquí puedes descargar mi CV en</p>
                <Button variant="light" className="mr-2" href="../public/images/CV_EVEREILLO_ES.pdf" download>español</Button>
                <span className="texto" style = {{color: "#3d6da6"}}>y en</span>
                <Button variant="light" className="ml-2" href="../public/images/CV_ENG.pdf" download>inglés</Button>
              </div>
            </Col>
            <Col md={5}>
              <img src="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696260841/1675851711275_dlrc3y.jpg" alt="Foto de perfil" className="img-fluid rounded-circle" />
            </Col>
          </Row>
        </Container>
      </header>
      <section className="info-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="h3">Información personal</h2>
              <p>
                Nací en Las Palmas de Gran Canaria el 23 de abril de 1995. Siempre he desarrollado una gran inquietud por la comunicación y las nuevas tecnologías (y el deporte, mi gran pasión). En 2017 me gradué en Periodismo y Comunicación Audiovisual por la Universidad Carlos III de Madrid y en 2023 realicé un curso de Desarrollo Web Full-stack con la academia Ironhack Madrid en busca de abrirme nuevas posibilidades y abordar mis inquietudes por el mundo de la programación.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <div className="info-card text-center">
                <h3 className="text-primary">Skills</h3>
                <ul className="list-unstyled">
                  <li>HTML 5</li>
                  <li>CSS3</li>
                  <li>ReactJS</li>
                  <li>ExpressJS</li>
                  <li>Mongo Database</li>
                  <li>AVID</li>
                  <li>Adobe Premiere</li>
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
