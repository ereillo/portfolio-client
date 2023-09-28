import React from 'react';
import '../App.css'; // 


function Articulos() {
  return (
    <div style = {{marginTop: "100px"}}>
      <h1 style = {{marginTop: "-30px", marginBottom: "50px"}}>Artículos publicados</h1>
      <ul>
      <li>
          <a href="../public/images/tfg_eve.pdf" download>
            Trabajo de Fin de Grado en Periodismo Universidad Carlos III de Madrid (2019)
          </a>
        </li>
        <li>
          <a href="https://www.solobasket.com/competiciones-feb/cb-gran-canaria-la-entidad-con-mas-equipos-federados-en-las-islas-canarias">
            "Licencias federadas de baloncesto 2016"
          </a>
        </li>
        <li>
          <a href="https://www.solobasket.com/internacional/matricula-de-honor-para-luka-doncic-en-el-festin-ofensivo-ante-milan-100-90">
            "Matrícula de honor para Luka Doncic"
          </a>
        </li>
        <li>
          <a href="https://www.solobasket.com/competiciones-feb/seleccion-espanola-sub20-en-busca-de-la-decima-medalla-consecutiva">
            "En búsca de la décima medalla"
          </a>
        </li>
        <li>
          <a href="https://www.solobasket.com/internacional/eurobasket-2017-grupo-j1-lauri-markkanen-se-presenta-europa">
            "Markkanen se presenta a Europa"
          </a>
        </li>
        <li>
          <a href="https://rtvc.es/la-transgrancanaria-se-celebra-esta-semana-con-casi-4-000-participantes/">
            "Transgrancanaria 2022"
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Articulos;




