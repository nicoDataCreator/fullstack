const clientQueries = {
    // se insertan todos los datos del cliente en la bbdd
    createAlumno: `
    INSERT INTO alumno (
      nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, cp, telefono, colegio, curso, email, password)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id
  `,
    createRepresentante1:
    `INSERT INTO representante_1 (profesion/empresa, nombre, relacion_est,email,telefono,dni)
    VALUES ($15,$16,$17,$18,$19)
    `,
    createRepresentante2:
    `INSERT INTO representante_2 (profesion/empresa, nombre, relacion_est,email,telefono,dni)
    VALUES ($20,$21,$22,$23,$24)
    `,
    createDatosFacturacion:
    `INSERT INTO datos_facturacion (nombre, apellidos, dni, domicilio, ciudad, provincia, pais, cp, telefono, email)
    VALUES ($25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39)
    )
    `
};

module.exports = clientQueries;

/* 

    getClient: `
    SELECT *
    FROM alumnos
    WHERE email = $1` */
    // needs a (GET) select from (user that is logged in)