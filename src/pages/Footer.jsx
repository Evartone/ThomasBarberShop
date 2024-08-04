import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      
        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/about">Serviços</a>
          <a href="/services">Galeria</a>
        </div>
        <div className="footer-contact">
          <p><i className="fas fa-phone"></i> +351 968 810 261</p>
          <p><i className="fas fa-map-marker-alt"></i> Rua 1º de Dezembro, 3850-002, Albergaria-a-Velha, Aveiro</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Todos os direitos reservados | ThomasHair-Style |
        <p>Desenvolvido por Ev@rTone</p>
      </div>
    </footer>
  );
};

export default Footer;
