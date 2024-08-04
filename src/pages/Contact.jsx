import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form data submitted:', formData);
    setFormData({ name: '', email: '', message: '', date: '' });
  };

  return (
    
    <div className="contact-container">
      <h2>Entre em Contacto</h2>
      <p>Informe-nos sobre seu interesse e a data desejada, ou ligue para o número abaixo</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
