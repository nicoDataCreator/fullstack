import React from "react";

const Contact = () => {
  return (
    <section className="section-form">

      <div className="container-form">
        <h2>Contáctanos, <span className="cursiva"> te escuchamos</span></h2>
        <form action="" className="form">
          <div className="celdas">
            <label htmlFor="">Nombre de contacto
              <span className="required">*</span>:
            </label>
            <input type="text" />
          </div>

          <div className="celdas">
            <label htmlFor="">Apellido de contacto
              <span className="required">*</span>:
            </label>
            <input type="text" />
          </div>

          <div className="celdas">
            <label htmlFor="">Correo
              <span className="required">*</span>:
            </label>
            <input type="text" />
          </div>

          <div className="celdas">
            <label htmlFor="">Teléfono
              <span className="required">*</span>:
            </label>
            <input type="text" />
          </div>

          <div className="celdas">
            <label htmlFor="">Nombre del estudiante:</label>
            <input type="text" />
          </div>

          <div className="celdas">
            <label htmlFor="">Fecha de nacimiento
              <span className="required">*</span>:
            </label>
            <input type="text" />
          </div>


          <p>Servicios de interés:</p>
          
          <label className="option-checkbox">
            <input type="checkbox" className="checkbox" value="" name="" />
            Orientación vocacional
          </label>

          <label>
            <input type="checkbox" className="checkbox" value="" name="" />
            Cursos Pre-Universitarios
          </label>

          <label>
            <input type="checkbox" className="checkbox" value="" name="" />
            Selección y aplicación a colegios
          </label>

          <label>
            <input type="checkbox" className="checkbox" value="" name="" />
            Campamentos de Verano
          </label>

          <label>
            <input type="checkbox" className="checkbox" value="" name="" />
            Aplicación a grados universitarios
          </label>

          <label>
            <input type="checkbox" className="checkbox" value="" name="" />
            Acceso directo para internacionales a universidades en España/Portugal
          </label>





          <label>
            <input type="checkbox" className="checkbox" value="" name="" />
            Orientación profesionalSelección y aplicación a masters
          </label>

          <label>
            <input type="checkbox" className="checkbox" value="" name="" />
            Preparación SATs
          </label>

          <label>
            <input type="checkbox" className="checkbox" value="" name="" />

          </label>


        </form>
      </div>

      <div>
        Segunda parte
      </div>

    </section>
  );
};

export default Contact;
