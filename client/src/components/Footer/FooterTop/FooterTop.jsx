import React, { useState } from "react";
import axios from "axios"; 

const FooterTop = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // No sé si esta regex está bien
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Por favor, introduce un correo electrónico válido.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/newsletter', email, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', email);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log("Formulario enviado con email:", email);
  };


  return (
    <div className="footer-top">
      <div className="logo-and-text">
        <img src="https://beyondeducation.es/wp-content/uploads/2022/03/Beyond-Education_Vertical-color.png" alt="" className="logo-vertical" />
        <h4>El camino hacia tu mejor versión</h4>
      </div>

      <div className="info-legal">
        <div>
          <h4>Info</h4>
          <p>About</p>
          <p>Servicios</p>
          <p>FAQs</p>
          <p>Contacto</p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>Politica de privacidad</p>
          <p>Politica de Coockies</p>
          <p>Aviso Legal</p>
        </div>
      </div>

      <div className="newsletter">
        <h4>Newsletter</h4>
        <p>Suscríbete a nuestra newsletter para recibir consejos, ideas y novedades</p>
        <form onSubmit={handleSubmit} className="form">
          <input type="email" placeholder="Correo electrónico" className="input-line" value={email} onChange={handleChange}/>
          <button type="submit" className="submit">Enviar</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  )
};

export default FooterTop;