import React from "react";
import axios from "axios";

const Contact = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      nombre_estudiante: e.target.nombre_estudiante.value,
      fecha_nacimiento: e.target.fecha_nacimiento.value,
      servicios: Array.from(e.target.querySelectorAll('input[name="servicios"]:checked')).map(item => item.value),
      observaciones: e.target.observaciones.value,
      conociste: e.target.conociste.value,
      terminos: e.target.terminos.checked
    };

    try {
      const response = await axios.post('http://localhost:3000/api/contact', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="section-form">
      <div className="container-form">
        <h2 className="cormorand">Contáctanos, <span className="cursiva">te escuchamos</span></h2>
        <form onSubmit={handleSubmit} className="form">
        <div className="celdas">
            <label htmlFor="nombre">Nombre de contacto <span className="required">*</span>:</label>
            <input type="text" name="nombre" required />
          </div>
          <div className="celdas">
            <label htmlFor="apellido">Apellido de contacto <span className="required">*</span>:</label>
            <input type="text" name="apellido" required />
          </div>
          <div className="celdas">
            <label htmlFor="correo">Correo <span className="required">*</span>:</label>
            <input type="email" name="correo" required />
          </div>
          <div className="celdas">
            <label htmlFor="telefono">Teléfono <span className="required">*</span>:</label>
            <input type="tel" name="telefono" required />
          </div>
          <div className="celdas">
            <label htmlFor="nombre_estudiante">Nombre del estudiante:</label>
            <input type="text" name="nombre_estudiante" />
          </div>
          <div className="celdas">
            <label htmlFor="fecha_nacimiento">Fecha de nacimiento <span className="required">*</span>:</label>
            <input type="date" name="fecha_nacimiento" required />
          </div>
          <p>Servicios de interés:</p>
          {[
            "Orientación vocacional",
            "Cursos Pre-Universitarios",
            "Selección y aplicación a colegios",
            "Campamentos de Verano",
            "Aplicación a grados universitarios",
            "Orientación profesional",
            "Selección y aplicación a masters",
            "Preparación SATs",
            "Acceso directo para internacionales a universidades en España/Portugal",
            "Prepara tu llegada a España/Portugal"
          ].map((servicio, index) => (
            <div className="checkbox-container" key={index}>
              <input type="checkbox" className="input-checkbox" value={servicio} name="servicios" />
              <label>{servicio}</label>
            </div>
          ))}
          <p>Observaciones:</p>
          <textarea wrap="soft" className="text-area" name="observaciones" />
          <div className="selector">
            <label htmlFor="conociste">¿Cómo nos has conocido?:</label>
            <select name="conociste" className="select-box">
              <option value="Amigo/Familiar">Amigo/Familiar</option>
              <option value="Centro educativo">Centro educativo</option>
              <option value="Feria">Feria</option>
              <option value="Conferencia">Conferencia</option>
            </select>
          </div>
          <div className="checkbox-terms">
            <input type="checkbox" className="input-checkbox" name="terminos" required />
            <label>Acepto términos y condiciones de la política de privacidad <span className="required">*</span>.</label>
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </div>

    </section>
  );
};

export default Contact;
