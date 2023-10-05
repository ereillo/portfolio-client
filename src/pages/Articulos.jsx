import React from 'react';
import '../App.css'; 
import ListGroup from 'react-bootstrap/ListGroup';


function Articulos() {
  return (
    <ListGroup variant="flush">
    <div style = {{marginTop: "20px"}}>
      <h1 style = {{marginBottom: "50px", color: "#224278", display: "flex", justifyContent: "center", textAlign: "center"}}>Artículos publicados</h1>
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
          <a href="https://www.solobasket.com/liga-endesa/royce-oneale-trabajare-para-que-el-granca-vuelva-una-final-y-ver-que-pasa" download>
            Entrevista a Royce O'Neale
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="info" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/competiciones-feb/cb-gran-canaria-la-entidad-con-mas-equipos-federados-en-las-islas-canarias">
            "Licencias federadas de baloncesto 2016"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="light" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/nba/exodo-europeo-analizamos-uno-uno-los-jugadores-que-parten-hacia-la-nba">
            "Éxodo europeo hacia la NBA"
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
          <a href="https://www.solobasket.com/nba/los-warriors-73-9-el-mejor-equipo-de-la-historia-kobe-bryant-se-despide-con-60-puntos">
            "Crónica Warriors 73-9 / Retirada Kobe Bryant"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="info" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/competiciones-feb/seleccion-espanola-sub20-en-busca-de-la-decima-medalla-consecutiva">
            "En busca de la décima medalla"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="light" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/internacional/eurobasket-2017-grupo-j1-lauri-markkanen-se-presenta-europa">
            "Markkanen se presenta a Europa"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="info" style= {{width: "450px"}}>
        <li>
          <a href="https://rtvc.es/la-transgrancanaria-se-celebra-esta-semana-con-casi-4-000-participantes/">
            "Transgrancanaria 2022"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="light" style= {{width: "450px"}}>
        <li>
          <a href="https://www.solobasket.com/liga-endesa/barcelona-lassa-historico-campeon-ante-un-real-madrid-que-rozo-el-milagro-90-92">
            "Barcelona Lassa, campeón Copa del Rey 2018"
          </a>
        </li>
        </ListGroup.Item>
        <ListGroup.Item action variant="info" style= {{width: "450px"}}>
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




