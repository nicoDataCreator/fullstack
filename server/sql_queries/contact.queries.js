const contactQueries = {
    createContact: `
    INSERT INTO contacto (nombre, apellidos, correo, telefono, nombre_candidato, fecha_nac, orientacion_vocacional, seleccion_aplicacion_coles, aplicacion_grados_univ, seleccion_aplicacion_masters, cursos_preuniv, campamentos_verano, orientacion_prof, preparacion_SATs, acceso_univs_esp_prot, llegada_esp_port, observaciones, fuente_conocido)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
    `
}

module.exports = contactQueries;