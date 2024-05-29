/* import React, { useState } from "react";

const ClientInfo = ({ userInfo, onEdit, onDelete }) => (
  <article className="card">
    <div className="card-header">
      <button className="delete-button" onClick={() => onDelete('client')}>✕</button>
      <button className="edit-button" onClick={() => onEdit('client')}>Edit</button>
    </div>
    <p>User: {userInfo.user}</p>
    <p>Mail: {userInfo.email}</p>
  </article>
);

const NewsletterInfo = ({ userInfo, onEdit, onDelete }) => (
  <article className="card">
     <div className="card-header">
      <button className="delete-button" onClick={() => onDelete('newsletter')}>✕</button>
      <button className="edit-button" onClick={() => onEdit('newsletter')}>Edit</button>
    </div>
    <p>User: {userInfo.user}</p>
    <p>Mail: {userInfo.email}</p>
  </article>
);

const ContactFormInfo = ({ userInfo, onEdit, onDelete }) => (
  <article className="card">
    <div className="card-header">
      <button className="delete-button" onClick={() => onDelete('contact')}>✕</button>
      <button className="edit-button" onClick={() => onEdit('contact')}>Edit</button>
    </div>
    <p>Nombre: {userInfo.name}</p>
    <p>Apellido: {userInfo.surname}</p>
    <p>Mail: {userInfo.email}</p>
    <p>Teléfono: {userInfo.phone}</p>
    <p>Nombre alumno: {userInfo.studentName}</p>
    <p>Ciudad: {userInfo.city}</p>
    <p>Fecha de nacimiento: {userInfo.birthdate}</p>
  </article>
);

const DashboardAdmin = () => {
  const [userInfo, setUserInfo] = useState({
    user: "Marcos Fernández",
    email: "marcus_ko@gmail.com",
    phone: "654908790",
    name: "Marcos",
    surname: "Fernández",
    studentName: "Luis Fernández",
    city: "España",
    birthdate: "28/10/84"
  },
  {
    user: "Sofía Hernández",
    email: "sofia_lo@hotmail.com",
    phone: "690878790",
    name: "Sofia",
    surname: "Hernández",
    studentName: "Marta Fernández",
    city: "París",
    birthdate: "09/01/90"
  });

  const handleEdit = (section) => {
    // Implementar la lógica para editar la sección
    console.log(`Edit ${section}`);
    // Aquí podrías mostrar un formulario para editar la información de la sección
  };

  const handleDelete = (section) => {
    // Implementar la lógica para eliminar la sección
    console.log(`Delete ${section}`);
    // Aquí podrías actualizar el estado para eliminar la información de la sección
  };

  return (
    <>
      <section>
        <article className="datos-admin-stream">
          <iframe
            className="stream-admin"
            src="https://insidebeyondeducation.streamlit.app/?embed=true"
            height={500}
            title="Admin Stream"
          >
          </iframe>
        </article>
        <article className="admin-datos-usu"></article>
      </section>

      <section className="admin">
        <h2>INFO CLIENTE</h2>
        <ClientInfo userInfo={userInfo} onEdit={handleEdit} onDelete={handleDelete} />
        <h2>NEWSLETTER</h2>
        <NewsletterInfo userInfo={userInfo} onEdit={handleEdit} onDelete={handleDelete} />
        <h2>FORMULARIO CONTACTO</h2>
        <ContactFormInfo userInfo={userInfo} onEdit={handleEdit} onDelete={handleDelete} />
      </section>
    </>
  );
};

export default DashboardAdmin; */

import React, { useState } from "react";

const ClientInfo = ({ userInfo, onEdit, onDelete }) => (
  <article className="card">
    <p>User: {userInfo.user}</p>
    <p>Mail: {userInfo.email}</p>
    <div className="card-header">
      <button className="delete-button" onClick={() => onDelete(userInfo.id)}>✕</button>
      <button className="edit-button" onClick={() => onEdit(userInfo.id)}>Edit</button>
    </div>
  </article>
);

const NewsletterInfo = ({ userInfo, onEdit, onDelete }) => (
  <article className="card">
    <p>User: {userInfo.user}</p>
    <p>Mail: {userInfo.email}</p>
    <div className="card-header">
      <button className="delete-button" onClick={() => onDelete(userInfo.id)}>✕</button>
      <button className="edit-button" onClick={() => onEdit(userInfo.id)}>Edit</button>
    </div>
  </article>
);

const ContactFormInfo = ({ userInfo, onEdit, onDelete }) => (
  <article className="card">
    <p>Nombre: {userInfo.name}</p>
    <p>Apellido: {userInfo.surname}</p>
    <p>Mail: {userInfo.email}</p>
    <p>Teléfono: {userInfo.phone}</p>
    <p>Nombre alumno: {userInfo.studentName}</p>
    <p>Ciudad: {userInfo.city}</p>
    <p>Fecha de nacimiento: {userInfo.birthdate}</p>
    <div className="card-header">
      <button className="delete-button" onClick={() => onDelete(userInfo.id)}>✕</button>
      <button className="edit-button" onClick={() => onEdit(userInfo.id)}>Edit</button>
    </div>
  </article>
);

const DashboardAdmin = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      user: "Marcos Fernández",
      email: "marcus_ko@gmail.com",
      phone: "654908790",
      name: "Marcos",
      surname: "Fernández",
      studentName: "Luis Fernández",
      city: "España",
      birthdate: "28/10/84"
    },
    {
      id: 2,
      user: "Sofía Hernández",
      email: "sofia_lo@hotmail.com",
      phone: "690878790",
      name: "Sofia",
      surname: "Hernández",
      studentName: "Marta Fernández",
      city: "París",
      birthdate: "09/01/90"
    }
  ]);

  const handleEdit = (id) => {
    console.log(`Edit user with id: ${id}`);
    // Aquí podrías mostrar un formulario para editar la información del usuario con el id proporcionado
  };

  const handleDelete = (id) => {
    console.log(`Delete user with id: ${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <section>
        <article className="datos-admin-stream">
          <iframe
            className="stream-admin"
            src="https://insidebeyondeducation.streamlit.app/?embed=true"
            height={500}
            title="Admin Stream"
          >
          </iframe>
        </article>
        <article className="admin-datos-usu"></article>
      </section>

      <section className="admin">
        {users.map((user) => (
          <div className="contenedor-admin" key={user.id}>
            <h2>INFO CLIENTE</h2>
            <ClientInfo userInfo={user} onEdit={handleEdit} onDelete={handleDelete} />
            <h2>NEWSLETTER</h2>
            <NewsletterInfo userInfo={user} onEdit={handleEdit} onDelete={handleDelete} />
            <h2>FORMULARIO CONTACTO</h2>
            <ContactFormInfo userInfo={user} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        ))}
      </section>
    </>
  );
};

export default DashboardAdmin;


