import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [errors, setErrors] = useState({});

  /* const validate = (data) => {
    const newErrors = {};

    if (!data.nombre) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!data.apellido) {
      newErrors.apellido = "El apellido es obligatorio.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.correo) {
      newErrors.correo = "El correo es obligatorio.";
    } else if (!emailRegex.test(data.correo)) {
      newErrors.correo = "Correo electrónico no válido.";
    }

    const phoneRegex = /^[0-9]{7,15}$/;
    if (!data.telefono) {
      newErrors.telefono = "El teléfono es obligatorio.";
    } else if (!phoneRegex.test(data.telefono)) {
      newErrors.telefono = "Número de teléfono no válido.";
    }

    if (!data.fecha_nacimiento) {
      newErrors.fecha_nacimiento = "La fecha de nacimiento es obligatoria.";
    }

    if (!data.terminos) {
      newErrors.terminos = "Debe aceptar los términos y condiciones.";
    }

    return newErrors;
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      nombre_estudiante: e.target.nombre_estudiante.value,
      fecha_nacimiento: e.target.fecha_nacimiento.value,
      orientacion_vocacional: e.target.orientacion_vocacional.checked,
      seleccion_aplicacion_coles: e.target.seleccion_aplicacion_coles.checked,
      aplicacion_grados_univ: e.target.aplicacion_grados_univ.checked,
      seleccion_aplicacion_masters: e.target.seleccion_aplicacion_masters.checked,
      cursos_preuniv: e.target.cursos_preuniv.checked,
      campamentos_verano: e.target.campamentos_verano.checked,
      orientacion_prof: e.target.orientacion_prof.checked,
      preparacion_SATs: e.target.preparacion_SATs.checked,
      acceso_univs_esp_prot: e.target.acceso_univs_esp_prot.checked,
      llegada_esp_port: e.target.llegada_esp_port.checked,
      observaciones: e.target.observaciones.value,
      conociste: e.target.conociste.value/* ,
      terminos: e.target.terminos.checked */
    };

    

/*     const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } */

    try {
      console.log(data);
      const response = await axios.post('http://localhost:3000/api/contact', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
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
            {errors.nombre && <p className="error">{errors.nombre}</p>}
          </div>
          <div className="celdas">
            <label htmlFor="apellido">Apellido de contacto <span className="required">*</span>:</label>
            <input type="text" name="apellido" required />
            {errors.apellido && <p className="error">{errors.apellido}</p>}
          </div>
          <div className="celdas">
            <label htmlFor="correo">Correo <span className="required">*</span>:</label>
            <input type="email" name="correo" required />
            {errors.correo && <p className="error">{errors.correo}</p>}
          </div>
          <div className="celdas">
            <label htmlFor="telefono">Teléfono <span className="required">*</span>:</label>
            <input type="tel" name="telefono" required />
            {errors.telefono && <p className="error">{errors.telefono}</p>}
          </div>
          <div className="celdas">
            <label htmlFor="nombre_estudiante">Nombre del estudiante:</label>
            <input type="text" name="nombre_estudiante" />
          </div>
          <div className="celdas">
            <label htmlFor="fecha_nacimiento">Fecha de nacimiento <span className="required">*</span>:</label>
            <input type="date" name="fecha_nacimiento" required />
            {errors.fecha_nacimiento && <p className="error">{errors.fecha_nacimiento}</p>}
          </div>
          <p>Servicios de interés:</p>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="orientacion_vocacional" />
            <label>Orientación vocacional</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="seleccion_aplicacion_coles" />
            <label>Selección y aplicación a colegios</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="aplicacion_grados_univ" />
            <label>Aplicación a grados universitarios</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="seleccion_aplicacion_masters" />
            <label>Selección y aplicación a masters</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="cursos_preuniv" />
            <label>Cursos Pre-Universitarios</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="campamentos_verano" />
            <label>Campamentos de Verano</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="orientacion_prof" />
            <label>Orientación profesional</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="preparacion_SATs" />
            <label>Preparación SATs</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="acceso_univs_esp_prot" />
            <label>Acceso directo para internacionales a universidades en España/Portugal</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="input-checkbox" name="llegada_esp_port" />
            <label>Prepara tu llegada a España/Portugal</label>
          </div>
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
            {errors.terminos && <p className="error">{errors.terminos}</p>}
          </div>
          <input className="enviar" type="submit" value="Enviar" />
        </form>
      </div>
    </section>
  );
};

export default Contact;