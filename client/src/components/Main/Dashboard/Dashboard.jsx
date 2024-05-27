import React from "react";

const Dashboard = () => {
  return (
    <>
      <section className="section-form-dashboard">
        <article className="encabezado-dashboard">
          <h2 className="titulo-principal-dashboard">INFORME VOCACIONAL 360</h2>
          <h3 className="titulo-dashboard">Contrato de inscripción</h3>
        </article>

        <article className="container-form-dashboard">
          <h2 className="titulo-datos-dashboard">DATOS DEL ALUMNO</h2>
          <form className="form-one-dashboard">
            <article className="celdas-dashboard">
              <label htmlFor="nombre">Nombre<span className="required">*</span>:</label>
              <input type="text" name="nombre" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="apellido">Apellidos<span className="required">*</span>:</label>
              <input type="text" name="apellidos" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="correo">Fecha de nacimiento <span className="required">*</span>:</label>
              <input type="email" name="fechanacimiento" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="dni">DNI/NIE/Pasaporte<span className="required">*</span>:</label>
              <input type="tel" name="dni" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="nacionalidad">Nacionalidad<span className="required">*</span>:</label>
              <input type="text" name="nacionalidad_estudiante" />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="domicilio">Domicilio <span className="required">*</span>:</label>
              <input type="text" name="domicilio" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="ciudad">Ciudad <span className="required">*</span>:</label>
              <input type="text" name="ciudad" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="provincia">Provincia <span className="required">*</span>:</label>
              <input type="text" name="provincia" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="pais">País <span className="required">*</span>:</label>
              <input type="text" name="pais" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="codigopostal">Código Postal <span className="required">*</span>:</label>
              <input type="text" name="codigopostal" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="telefono">Teléfono <span className="required">*</span>:</label>
              <input type="tel" name="telefono" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="mail">E-mail <span className="required">*</span>:</label>
              <input type="mail" name="mail" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="colegio">Colegio <span className="required">*</span>:</label>
              <input type="text" name="colegio" required />
            </article>
            <article className="celdas-dashboard">
              <label htmlFor="curso">Curso <span className="required">*</span>:</label>
              <input type="text" name="curso" required />
            </article>

           


            <article className="container-form-dashboard" >
            <h2 >DATOS DEL REPRESENTANTE LEGAL</h2>
              <h3 >NOTA: Sólo cumplimentar para menores de 18 años:</h3>
              <h3 className="representante1">Representante 1</h3>
              <article className="celdas-dashboard">
                <label htmlFor="profesion">Profesión/Empresa <span className="required">*</span>:</label>
                <input type="text" name="profesion" required />
              </article>
              <article className="celdas-dashboard">
                <label htmlFor="nombre">Nombre y apellidos <span className="required">*</span>:</label>
                <input type="text" name="nombre" required />
              </article>
              <article className="celdas-dashboard">
                <label htmlFor="relacion">Relación con el estudiante <span className="required">*</span>:</label>
                <input type="text" name="relación" required />
              </article>
              <article className="celdas-dashboard">
                <label htmlFor="mail">E-mail <span className="required">*</span>:</label>
                <input type="text" name="mail" required />
              </article>
              <article className="celdas-dashboard">
                <label htmlFor="telefono">Teléfono <span className="required">*</span>:</label>
                <input type="tel" name="telefono" required />
              </article>
           
              <h3 className="representante2">Representante 2</h3>
              <article className="celdas-dashboard">
                <label htmlFor="profesion">Profesión/Empresa <span className="required">*</span>:</label>
                <input type="text" name="profesion" required />
              </article>
              <article className="celdas-dashboard">
                <label htmlFor="nombre">Nombre y apellidos <span className="required">*</span>:</label>
                <input type="text" name="nombre" required />
              </article>
              <article className="celdas-dashboard">
                <label htmlFor="relacion">Relación con el estudiante <span className="required">*</span>:</label>
                <input type="text" name="relación" required />
              </article>
              <article className="celdas-dashboard">
                <label htmlFor="mail">E-mail <span className="required">*</span>:</label>
                <input type="text" name="mail" required />
              </article>
              <article className="celdas-dashboard">
                <label htmlFor="telefono">Teléfono <span className="required">*</span>:</label>
                <input type="tel" name="telefono" required />
              </article>
             

              <article className="recomendacion">
                <label htmlFor="telefono">Persona que te recomendó Beyond Education <span className="required">*</span>:</label>
                <input type="tel" name="telefono" required />
              </article>
              <article className="conocido">
                <label htmlFor="telefono">¿Cómo nos has conocido? Elige una opción<span className="required">*</span>:</label>
                <select id="opciones" name="opciones">
                  <option value="opcion1">Referencia (amigo,familiar,conocido)</option>
                  <option value="opcion2">Redes sociales (instagram, facebook, grupo whatsapp, newsletter,linkedin)</option>
                  <option value="opcion3">Página web</option>
                  <option value="opcion4">Institución (colegio, universidad, otras)</option>
                </select>
              </article>
            </article>

            <article className="container-form-dashboard" >
              <h2 >TIPO DE INFORME</h2>
              <p>
                El perfil vocacional 360 analiza las capacidades, intereses y rasgos de personalidad
                de cada niño con el objetivo de descubrir sus fortalezas y habilidades así como las
                áreas a reforzar.
              </p>
              <div className="checkbox-item">
                <input type="checkbox" id="precio-espanol" name="precio-espanol" value="1000" />
                <label htmlFor="precio-espanol">Precio perfil en español: 1000€</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="precio-ingles" name="precio-ingles" value="1250" />
                <label htmlFor="precio-ingles">Precio perfil en inglés: 1250€</label>
              </div>
              <p>El perfil consiste en :</p>
              <ul>
                <li>Entrevista a los padres. Duración 1 hora.</li>
                <li>Entrevista y evaluación de personalidad e intereses. Duración 2 horas.</li>
                <li>Evaluación de capacidades. Duración 2 horas y media.</li>
                <li>Entrega del informe. Duración 1 hora.</li>
              </ul>
            </article>
            <article className="container-form-dashboard" >
              <h2 className="tipo-inform-dashboard">Observaciones</h2>
              <ul>
                <li>En caso de no poder asistir a la sesión fijada deben de comunicarlo con un mínimo de 48 horas, de no ser así se cobrará 75€.</li>
                <li>En caso de llegar tarde a la sesión fijada y sea necesaria una nueva sesión para poder finalizar la prueba prevista, se cobrará 75€.</li>
                <li> Si los padres de el alumno o persona evaluada no comunican al equipo posibles trastornos que puedan perjudicar o impedir la evaluación normal del alumno con un mínimo de 72 horas antes de la misma para que el equipo pueda preparar pruebas adaptadas, no se garantizará la realización de la sesión y se cobrará un importe de 75€ por las adaptaciones que deben hacerse para asegurar la correcta aplicaión de la prueba.</li>
              </ul>
            </article>
            <article className="container-form-dashboard">
              <h2  >Observaciones</h2>
              <p>Al firmar este contrato, el alumno se compromete a comportarse con educación y respeto a los profesionales que le van a evaluar. En los casos en los que los alumnos no cooperen con los profesionales o muestren conductas inapropiadas, el profesional podrá detener el servicio y en ese caso no se procederá a la devolución del importe del mismo.</p>
            </article>
            <article className="container-form-dashboard">
              <h2 >DATOS DE FACTURACIÓN</h2>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="nombre">Nombre y Apellido:</label>
                <input type="text" name="nombre" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="domicilio">Domicilio:</label>
                <input type="text" name="domicilio" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="codigopostal">Código Postal:</label>
                <input type="text" name="codigopostal" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="ciudad">Ciudad:</label>
                <input type="text" name="ciudad" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="provincia">Provincia:</label>
                <input type="text" name="provincia" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="pais">País:</label>
                <input type="text" name="pais" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" name="telefono" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="dni">DNI/NIE/Pasaporte:</label>
                <input type="text" name="dni" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="email">Email:</label>
                <input type="mail" name="email" required />
              </article>
            </article>
            <article className="container-form-dashboard">
              <h2 className="titulo-datos-dashboard">CONDICIONES GENERALES DE INSCRIPCIÓN</h2>
              <ol>
                <li>El presente contrato sólo es válido para la realización del asesoramiento universitario seleccionado por el cliente. Aquellos estudiantes que deseen adquirir otros servicios deberán solicitar el contrato que corresponda a dichos servicios.</li>
                <li>Para solicitar la realización del servicio de asesoramiento universitario, el estudiante o su representante legal deberá: a. Cumplimentar y firmar el presente contrato de inscripción por el que BEYOND EDUCATION S.L. (en adelante “BE”) con NIF B-881158159 recibe el mandato de proveer este servicio al estudiante.
                  b. Aportar la documentación que se solicite:
                  1) cumplimentar el formulario
                  2) enviar las calificaciones, exámenes oficiales de especializaciones, idiomas y voluntariados.
                  3) cualquier otra información requerida
                  c. Abonar, en el momento de la entrega del presente contrato, el importe total de los honorarios que BEYOND EDUCATION S.L. solicita para la realización de este servicio. Hasta que no se abone este importe el servicio no dará inicio. Datos Bancarios: IBAN: ES36 0128 0071 7701 0004 2524 SWIFT: BKBKESMM Bankinter</li>
                <li>El informe de selección de universidades está realizado por expertos en esta materia junto con el cliente. Para su realización se tendrán en cuenta las sugerencias del estudiante que se someterán a valoración por el equipo experto para analizar su viabilidad en cuanto a requisitos académicos.</li>
                <li>El estudiante o su representante legal podrá solicitar una modificación del informe de selección de universidades una vez este haya sido entregado. Esta modificación deberá ser solicitada por escrito. En el caso de que se requieran más modificaciones, será imprescindible la solicitud de un nuevo informe que conlleve el coste correspondiente al mismo.</li>
                <li>BE recomendará al estudiante las universidades más acordes a su perfil teniendo en cuenta los requisitos académicos de las mismos. BE guiará y asesorará al estudiante a lo largo del proceso que constará de las siguientes fases que se podrán contratar conjuntamente o de forma independiente:
                  Propuesta asesoramiento universitario
                  Aplicación a universidades</li>
                <li>La no admisión del estudiante en las universidades o instituciones seleccionadas no es responsabilidad de BE, por lo que el cliente exime completamente a BE de la misma.</li>
                <li>De acuerdo con lo establecido en el Reglamento General de Protección de Datos, le informamos que trataremos sus datos personales con la finalidad de realizar la gestión administrativa, contable y fiscal, así como enviarle comunicaciones comerciales sobre nuestros productos y/o servicios. Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales. Una vez haya cesado el tratamiento de los datos, BEYOND EDUCATION S.L. podrá conservarlos, debidamente bloqueados y sólo a disposición de las autoridades competentes, durante los plazos de prescripción de las responsabilidades que pudieran derivarse de su tratamiento o de la prestación de servicios. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal y los trataremos en base a su consentimiento o la ejecución de un contrato o por obligación legal. Asimismo, le informamos de la posibilidad de ejercer los siguientes derechos sobre sus datos personales: derecho de acceso, rectificación, supresión u olvido, limitación, oposición, portabilidad y a retirar el consentimiento prestado. Para ello podrá enviar un email a: info@beyondeducation.es
                  Sus datos podrán ser tratados por empresas o personas que prestan servicios a BEYOND EDUCATION S.L., siempre que tales tratamientos sean necesarios para llevar a cabo los tratamientos de datos descritos en el presente contrato. Estos prestadores de servicios actuarán como encargados del tratamiento, por lo que en ningún caso tratarán sus datos para finalidades distintas de las indicadas en la política de privacidad de BEYOND EDUCATION S.L.
                  Además, el interesado puede dirigirse a la Agencia Española de Protección de Datos (www.aepd.es) en el caso de que entienda que se han infringido sus derechos o para presentar una reclamación.
                  El cliente puede consultar la información adicional y detallada relativa a la política de protección de datos de BEYOND EDUCATION S.L. en la página web http://www.beyondeducation.es/copia-de-nueva-p%C3%A1gina .</li>
                <li> Toda la información facilitada por el cliente a BEYOND EDUCATION S.L., con independencia de si la misma se realiza en soporte o documento magnético, de modo verbal o bajo cualquier soporte distinto de los anteriores, tendrá la consideración de estrictamente reservada y confidencial, sin que pueda disponerse de la misma o aplicarse fuera de los servicios.
                  Ambas Partes se comprometen a guardar la máxima reserva y secreto sobre toda la información confidencial propiedad de la otra parte, a la que se acceda con motivo de la ejecución del presente Contrato, lo que impedirá realizar cualquier actuación por la que directa o indirectamente se divulgue o ponga en conocimiento de terceras personas no autorizadas y/o ajenas al presente Contrato, cualquier dato o información de carácter confidencial a la que se tenga acceso.
                  Los informes, evaluaciones, recomendaciones y demás documentos emitidos por BEYOND EDUCATION SL no podrán ser reproducidos, publicados o divulgados por el cliente sin la autorización expresa de BEYOND EDUCATION SL.</li>
                <li>Cualquier material que reciba el estudiante para el soporte a la aplicación es confidencial (guías, presentaciones de orientación, así como cualquier otro documento), es decir, éste no se puede reproducir, fotocopiar, enviar por email, o mostrar a otras personas, ya que se trata de propiedad intelectual de BE que ha elaborado exclusivamente para sus estudiantes. Si un estudiante lo transmite, sin permiso de BE, se considerará que está infringiendo la Ley de Propiedad Intelectual.</li>
                <li>Una vez firmado el presente contrato, en caso de que el cliente decida no llevar a cabo el servicio, BE no se verá obligado a realizar reembolsos del monto pagado por el cliente una vez transcurrido el plazo para el ejercicio del derecho de desistimiento de acuerdo con lo establecido en el Art. 104 del Real Decreto Legislativo 1/2007. En caso de que el servicio se haya iniciado, BE no se verá obligado a realizar ningún reembolso del monto pagado por el cliente.</li>
                <li>El presente servicio se podrá llevar a cabo durante un lapso máximo de un año después de la firma del presente contrato.</li>
                <li>En caso de desacuerdo, ambas partes se someterán a la jurisdicción de los tribunales y juzgados de Madrid.</li>
              </ol>
              <p>A continuación, en cumplimiento de la Ley 3/2018 de protección de datos de carácter personal y garantía de los derechos digitales, le pedimos su autorización para que Beyond Education S.L. pueda realizar las actividades de tratamiento que a continuación se detallan. A tal fin, solicitamos que marque la casilla “AUTORIZO” en caso de permitir a Beyond Education S.L. realizar las acciones descritas.</p>
              <p>Ceder aquellos datos y/o documentos del estudiante, que obren en la base de datos de Beyond Education S.L., y que Vd. le haya facilitado a ésta actuando como representante legal del estudiante o en nombre propio, a todos aquellas Universidades, Centros Educativos o Campamentos, dentro y fuera del espacio económico europeo, que Beyond Education S.L. consideré pertinentes para dar cumplimiento de su labor de asesoramiento y recomendación profesional, conforme al objeto del presente contrato.</p>
              <article className="checkbox-autorizacion">
                <input type="checkbox" id="autorizacion" name="autorizacion" />
                <label htmlFor="autorizacion">AUTORIZO</label>
                <p>Almacenar la información facilitada por Vd. y remitirle información sobre aquellos servicios ofrecidos por BEYOND EDUCATION S.L. que pudieran ser de su interés, hasta el momento en que retire su consentimiento o solicite la supresión de los mismos.</p>
              </article>
              <article className="checkbox-autorizacion">
                <input type="checkbox" id="autorizacion" name="autorizacion" />
                <label htmlFor="autorizacion">AUTORIZO</label>
                <p>Publicar en la web corporativa de Beyond Education S.L. o difundir mediante campañas publicitarias o promocionales, incluyendo, sin carácter restrictivo, la difusión a través de redes sociales de Beyond Education S.L. o comunicaciones directas remitidas a clientes o prospectos de Beyond Education S.L. a través de cualquier medio de comunicación; vídeos o imágenes en los que Vd. o el estudiante puedan aparecer.</p>
              </article>
              <article className="checkbox-autorizacion">
                <input type="checkbox" id="autorizacion" name="autorizacion" />
                <label htmlFor="autorizacion">AUTORIZO</label>
                <p>El abajo firmante acepta íntegramente el contrato y cada una de las condiciones generales detalladas en este documento</p>
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="fecha">Fecha:</label>
                <input type="date" name="fecha" required />
              </article>
              <article className="celdas-dashboard-facturacion">
                <label htmlFor="firma">Firma del representante:</label>
                <input type="text" name="firma" required />
              </article>
            </article>
            <article className="container-form-dashboard">
            <input className="enviar" type="submit" value="Enviar" />
            </article>
          </form>
        </article>

      </section>
    </>
  );
};

export default Dashboard;
