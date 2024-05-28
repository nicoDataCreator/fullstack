import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home/Home'
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Dashboard from "./Dashboard/Dashboard";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

const Main = () => {

  // let userExists = axios.get('ruta/api/user').queries.userExists;
  // SELECT *
  // FROM alumnos
  // WHERE email = $1

  // userIsAdmin = axios.get('ruta').queries.userIsAdmin
  // SELECT *
  // FROM alumnos 
  // WHERE email = $1 AND rol = $2

  const [user, setUser] = useState({
    id: 1,
    name: "Jhon",
    roles: "admin"
  });

  /*   ({
      id: 1,
      name: "Jhon",
      roles: ['admin']
    }) */

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/user" element={
          <ProtectedRoute isAllowed={!!user && user.roles.includes('user')} >
            <Dashboard />
          </ProtectedRoute>} />
        <Route path="/dashboard/admin" element={
          <ProtectedRoute isAllowed={!!user && user.roles.includes('admin')} >
            <DashboardAdmin />
          </ProtectedRoute>} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export default Main;
