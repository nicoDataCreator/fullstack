import React from "react";

const FooterTop = () => {
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
        <form action="/post/api/newsletter" className="form">
          <input type="email" placeholder="Correo electrónico" className="input-line"/>
          <button type="submit" className="submit">Enviar</button>
        </form>
      </div>

    </div>
  )
};

export default FooterTop;