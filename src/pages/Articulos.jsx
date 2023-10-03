import React from 'react';
import '../App.css'; 
import ListGroup from 'react-bootstrap/ListGroup';


function Articulos() {
  return (
    <ListGroup variant="flush">
    <div style = {{marginTop: "40px"}}>
      <h1 style = {{marginBottom: "50px", color: "#224278", display: "flex", justifyContent: "center"}}>Artículos publicados</h1>
      <div style = {{display: "flex", justifyContent: "center"}}>
      <ul>
      <ListGroup.Item action variant="info" style= {{width: "450px"}}>
      <li>
          <a href="https://github.com/ereillo/cveve/blob/main/TFG%20Evelio_11092019_pa%CC%81g.pdf" download>
            Trabajo de Fin de Grado en Periodismo Universidad Carlos III de Madrid (2019)
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="light" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/competiciones-feb/cb-gran-canaria-la-entidad-con-mas-equipos-federados-en-las-islas-canarias">
            "Licencias federadas de baloncesto 2016"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="info" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/internacional/matricula-de-honor-para-luka-doncic-en-el-festin-ofensivo-ante-milan-100-90">
            "Matrícula de honor para Luka Doncic"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="light" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/competiciones-feb/seleccion-espanola-sub20-en-busca-de-la-decima-medalla-consecutiva">
            "En busca de la décima medalla"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="info" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/internacional/eurobasket-2017-grupo-j1-lauri-markkanen-se-presenta-europa">
            "Markkanen se presenta a Europa"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="light" style= {{width: "450px"}}>
        <li>
          <a href="https://rtvc.es/la-transgrancanaria-se-celebra-esta-semana-con-casi-4-000-participantes/">
            "Transgrancanaria 2022"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="info" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/liga-endesa/campazzo-reina-en-la-copa-del-real-madrid-tres-anos-despues-68-95">
            "Campazzo reina en la Copa del Madrid"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="light" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/internacional/pau-gasol-y-solobasket-18-temporadas-soplando-las-velas-juntos">
            "Pau Gasol y Solobasket, 18 años juntos"
          </a>
        </li>
        </ListGroup.Item>
      </ul>
      </div>
    </div>
    </ListGroup>
  );
}

export default Articulos;




