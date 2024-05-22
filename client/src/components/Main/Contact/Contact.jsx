import React from "react";

const Contact = () => {
  return (
    <section className="section-form">

      <div className="container-form">

        <h2 className="cormorand">Contáctanos, <span className="cursiva"> te escuchamos</span></h2>

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

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label>Orientación vocacional</label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label>Cursos Pre-Universitarios</label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label>Selección y aplicación a colegios</label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label className="service">Campamentos de Verano
            </label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label>Aplicación a grados universitarios</label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label className="service">Orientación profesionalSelección y aplicación a masters</label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label className="service">Selección y aplicación a masters</label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label className="service">Preparación SATs</label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label className="service">Acceso directo para internacionales a universidades en España/Portugal
            </label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label className="service">Prepara tu llegada a España/Portugal
            </label>
          </div>

          <p>Obseraciones:</p>
          <input type="text-area" wrap="soft" className="text-area" />

          <div className="selector">
            <label for="cars">¿Cómo nos has conocido?:</label>

            <select name="cars" id="cars" className="select-box">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="checkbox-terms">
            <input type="checkbox" className="input-checkbox" value="" name="" />
            <label className="service">Acepto términos y condiciones de la política de privacidad<span className="required">*</span>.
            </label>
          </div>

        </form>
      </div>

      <div>
        Segunda parte
      </div>

    </section>
  );
};

export default Contact;
