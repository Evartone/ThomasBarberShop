import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpeg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpeg';




import './Programs.css';

export const Programs = () => {

  return (
    <div className="programs-container">

      <div className="pro">
        <h2> <span>Thom@sHair-Style</span>, A BARBEARIA DA ALBERGARIA-A-VELHA 💈</h2>
        <h3>Explore nossa galeria e descubra o estilo e a elegância que nossa barbearia tem a oferecer.</h3>
      </div>

      <div className="programs-grid">

        <div className="program">
          <img src={img1} alt="Cabelo" />
          <div className="program-info">
            <h1>💈</h1>
          </div>
        </div>

        <div className="program">
          <img src={img2} alt="Barba" />
          <div className="program-info">
            <h1>💈</h1>
          </div>

        </div>

        <div className="program">
          <img src={img3} alt="Estética" />
          <div className="program-info">
            <h1>💈</h1>
          </div>

        </div>

        <div className="program">
          <img src={img4} alt="Estética" />
          <div className="program-info">
            <h1>💈</h1>
          </div>
        </div>

        <div className="program">
          <img src={img12} alt="Estética" />
          <div className="program-info">
            <h1>💈</h1>
          </div>

        </div>

        <div className="program">
          <img src={img11} alt="Estética" />
          <div className="program-info">
            <h1>💈</h1>
          </div>
          
        </div>

        <div className="program">
          <img src={img10} alt="Estética" />
          <div className="program-info">
            <h1>💈</h1>
          </div>
          
        </div>

        <div className="program">
          <img src={img9} alt="Estética" />
          <div className="program-info">
            <h1>💈</h1>
          </div>
          
        </div>

        <div className="program">
          <img src={img8} alt="Estética" />
          <div className="program-info">
            <h1>💈</h1>
          </div>
          
        </div>

        <div className="program">

          <img src={img9} alt="Estética" />
          <div className="program-info">
            <h1>💈</h1>
          </div>
          
        </div>

      </div>

    </div>
  );
};

export default Programs;
