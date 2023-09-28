import React from 'react';
import '../App.css';

function Landing() {
  return (
    <div className="landing-container">
  <header className="landing-header">
    <div className="header-content">
      <div className="header-left">
        <h1>Hola! Soy Evelio</h1>
        <h2>Desarrollador web full-stack, periodista y copywriter</h2>
        <div className="cv-links" style = {{color: "black"}}>
          <p>Aquí puedes descargar mi CV en</p>
          <a href="../public/images/CV_EVEREILLO_ES.pdf" download>español</a>
          <span>y en</span>
          <a href="../public/images/CV_ENG.pdf" download>inglés</a>
        </div>
      </div>
      <div className="header-right">
        <img src="../public/images/1675851711275.jpeg" alt="" style = {{width: "270px", borderRadius: "500px"}}/>
      </div>
    </div>
  </header>
  <section className="info-section">
    <h2>Información personal</h2>
    <p>
      Nací en Las Palmas de Gran Canaria el 23 de abril de 1995. Siempre he desarrollado una gran inquietud por la comunicación y las nuevas tecnologías (y el deporte, mi gran pasión). En 2017 me gradué en Periodismo y Comunicación Audiovisual por la Universidad Carlos III de Madrid y en 2023 realicé un curso de Desarrollo Web Full-stack con la academia Ironhack Madrid en busca de abrirme nuevas posibilidades y abordar mis inquietudes por el mundo de la programación.
    </p>
  </section>
</div>
  );
}

export default Landing;