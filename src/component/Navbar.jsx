import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className='container'>
      <div className='nav-header'>
        <img className='logo' src={logo} alt="Logo" />
        <h2>ThomasHair-Style</h2>
        <div className='menu-icon' onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/program2" onClick={toggleMenu}>Serviços</Link></li>

        <li><Link to="/programs" onClick={toggleMenu}>Galeria</Link></li>
       
        <li><Link to="/contact" onClick={toggleMenu}>Contactos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbarr;

