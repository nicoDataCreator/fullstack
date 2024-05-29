import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home/Home'
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Dashboard from "./Dashboard/Dashboard";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { UserLogged } from "../../context/UserLogged";

const Main = () => {

const { user } = useContext(UserLogged);

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
