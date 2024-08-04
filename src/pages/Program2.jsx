import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img7 from '../images/img7.jpg';
import img11 from '../images/img11.jpg';
import video1 from '../images/video1.mp4'; 
import video2 from '../images/video2.mp4'; 

import './Program2.css';

export const Program2 = () => {

  return (

    <div className="programs-container">

      <div className="pro">
        <h2><span>Thom@sHair-Style</span>, A BARBEARIA DA ABERGARIA-A-VELHA 💈</h2>
        <h3>Oferecemos os melhores serviços de corte de cabelo e barba, <br /> proporcionando uma experiência única e personalizada. Também atendemos ao domicílio na zona de Albergaria-a-Velha.</h3>

      </div>

      <div className="programs-grid">

        <div className="program">
          <img src={img1} alt="Cabelo" />
          <div className="program-info">
            <h1>CABELO</h1>
            <h4>Lavagem, Corte simples, Corte à Máquina, Corte artístico</h4>
          </div>
        </div>

        <div className="program">
          <img src={img11} alt="Barba" />
          <div className="program-info">
            <h1>BARBA</h1>
            <h4>Corte Navalha, Corte à Máquina, Corte Desenhado</h4>
          </div>
        </div>

        <div className="program">
          <img src={img7} alt="Estética" />
          <div className="program-info">
            <h1>ESTÉTICA E PINTURA</h1>
            <h4>Tratamentos faciais, Cuidados com a pele, Máscaras de tratamento</h4>
          </div>
        </div>

      </div>
      <div className="programs-grid videos-grid">
        <div className="program">
          <video controls>
            <source src={video1} type="video/mp4" />
          </video>
          <div className="program-info">
            <h1>#</h1>
          </div>
        </div>

        <div className="program">
          <video controls>
            <source src={video2} type="video/mp4" />
          </video>
          <div className="program-info">
            <h1>#</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Program2;
