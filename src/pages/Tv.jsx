import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function Tv() {
  const [activeIndexMovistar, setActiveIndexMovistar] = useState(0);
  const [activeIndexRTVC, setActiveIndexRTVC] = useState(0);

  const handleSelectMovistar = (selectedIndex, e) => {
    setActiveIndexMovistar(selectedIndex);
  };

  const handleSelectRTVC = (selectedIndex, e) => {
    setActiveIndexRTVC(selectedIndex);
  };

    return (
      <div className="container-videos" style={{ justifyContent: "center", color: "#224278", marginTop: "30px" }}>
        <br />
        <div className="container-videos" style={{ marginBottom: "100px" }}>
          <h1 style={{ display: "flex", justifyContent: "center"}}>Piezas de TV</h1>
          <h2 style={{ display: "flex", justifyContent: "center", marginBottom: "50px", color: "#009ef7", marginTop: "30px" }}>Movistar +</h2>
          <div className="movistar" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            <Carousel activeIndex={activeIndexMovistar} onSelect={handleSelectMovistar} fade={true} interval={null}>
              <Carousel.Item>
                <iframe title="video1" width="750" height="500" src="https://www.youtube.com/embed/f-ZAdLyiLnA?si=5G1CzDnnYUaMZXIv" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video2" width="750" height="500" src="https://www.youtube.com/embed/SSm_PN_E4OM?si=8LBA83jtYCoqcf6S" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video3" width="750" height="500" src="https://www.youtube.com/embed/9V2GPma7jXU?si=qQADrJJdrgDBonvv" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video4" width="750" height="500" src="https://www.youtube.com/embed/aEUb4ZOcruI?si=cYZscf9XRTR1wpdB" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video5" width="750" height="500" src="https://www.youtube.com/embed/2GQMZsZlH74?si=ZFSQCLzGUfl1WSLR" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="row" style={{marginBottom: "100px"}}>
          <h1 style={{ marginLeft: "60px", marginBottom: "50px", color: "#103f5c" }}>RTVC</h1>
          <div className="rtvc" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            <Carousel activeIndex={activeIndexRTVC} onSelect={handleSelectRTVC} fade={true} interval={null}>
              <Carousel.Item>
                <iframe title="video6" width="750" height="500" src="https://www.youtube.com/embed/DLEgjJ6_xPk?si=z6V8mRdpjFLtjuqA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video7" width="750" height="500" src="https://www.youtube.com/embed/o3_k5EyZeQo?si=aNmrj4bMLAswpy2k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video8" width="750" height="500" src="https://www.youtube.com/embed/ywQP2vEIG7E?si=FZWf8Xuwgd2FFl8L" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video9" width="750" height="500" src="https://www.youtube.com/embed/VdTv9j6K2gE?si=jxH7X9CgThIhHDTG" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video10" width="750" height="500" src="https://www.youtube.com/embed/ymmAV3PGkV4?si=QIf3HcMdggMoGsii" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video11" width="750" height="500" src="https://www.youtube.com/embed/GMbPUgM4N6Y?si=BNPeAn__fOXmdFvF" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe title="video12" width="750" height="500" src="https://www.youtube.com/embed/49VnUi6DVys?si=e6DztaHqbGQA58K_" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
}

export default Tv;


// <div className="container mt-4">
//       <br />
//       <div className="row" style = {{marginBottom: "100px"}}>
//         <h1 style = {{marginLeft: "60px"}}>Piezas de TV</h1>
//         <h2 style= {{marginLeft: "60px", marginBottom: "50px", color: "#009ef7"}}>Movistar +</h2>
//         <div className="movistar" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "50px", justifyContent: "center"}}>
//         <Carousel>
//         <Carousel.Item>
//           <ReactPlayer
//           url="https://www.youtube.com/embed/f-ZAdLyiLnA?si=5G1CzDnnYUaMZXIv"/> 
//         </Carousel.Item>
//         <Carousel.Item>
//           <ReactPlayer
//           url="https://www.youtube.com/embed/SSm_PN_E4OM?si=8LBA83jtYCoqcf6S"/> 
//         </Carousel.Item>
//         </Carousel>
//           <div className="embed-responsive embed-responsive-16by9">
//             <iframe width="300" height="215" src="https://www.youtube.com/embed/f-ZAdLyiLnA?si=5G1CzDnnYUaMZXIv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//           </div>
//           <div className="embed-responsive embed-responsive-16by9">
//             <iframe width="300" height="215" src="https://www.youtube.com/embed/SSm_PN_E4OM?si=8LBA83jtYCoqcf6S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//           </div>
//           <div className="embed-responsive embed-responsive-16by9">
//             <iframe width="300" height="215" src="https://www.youtube.com/embed/9V2GPma7jXU?si=qQADrJJdrgDBonvv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//           </div>
//           <div className="embed-responsive embed-responsive-16by9">
//             <iframe width="300" height="215" src="https://www.youtube.com/embed/aEUb4ZOcruI?si=cYZscf9XRTR1wpdB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//           </div>
//           <div className="embed-responsive embed-responsive-16by9">
//             <iframe width="300" height="215" src="https://www.youtube.com/embed/2GQMZsZlH74?si=ZFSQCLzGUfl1WSLR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//           </div>
//         </div>
//       </div>