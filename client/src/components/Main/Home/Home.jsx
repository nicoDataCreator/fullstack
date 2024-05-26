/* import React from "react";
import fotoprincipal from "../../../assets/estudiantessonriendo.jpg"
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
  <section className="home">
    <img className="principal" src={fotoprincipal}></img>
    <article className="textofondo">
      <h3 className="primerafrase" >En Beyond education te acompañamos en cada decisión que tomes,</h3>
      <h3 className="segundafrase" >elige la orientación que necesitas</h3>
    </article>

    <article>
      <Contact/>
    </article>
  </section>
  </>
)};

export default Home; */

import React, { useRef } from "react";
import fotoprincipal from "../../../assets/estudiantessonriendo.jpg";
import Contact from "../Contact/Contact";

const Home = () => {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      window.scrollTo({ top: contactRef.current.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="home">
        <article className="button-container">
          <img className="principal" src={fotoprincipal} alt="Imagen Principal" />
          <article className="pideinfo">
          <h2 className="asesoramiento">Te asesoramos cómo alcanzar tus sueños estudiando.</h2>
          <h3 className="subtitulo">Ayudamos a adolescentes y jóvenes para lograr el éxito del futuro que quieren.</h3>
          <button className="botoninfo" onClick={handleScrollToContact}>Pide información</button>
          </article>
        </article>
        <article className="textofondo">
          <h3 className="primerafrase">En Beyond education te acompañamos en cada decisión que tomes,</h3>
          <h3 className="segundafrase">elige la orientación que necesitas</h3>
        </article>
        <div ref={contactRef}>
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;



