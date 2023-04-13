import React from "react";
import { firebaseApp } from "./firebase";
import Menu from "./components/Menu";
import Parte from "./components/Parte";
import Drive from "./components/Drive"
import { Route, Routes } from "react-router-dom";

const Home = () => {
  const cerrarSesion = () => {
    firebaseApp.auth().signOut();
  };

  return (
    <div>
      <h1>Bienvenido, sesión iniciada, wapetón</h1>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
      <Routes>
      <Route path="/" element={<Menu/>}>
        <Route path="parte" element={<Parte/>}/>
        <Route path="drive" element={<Drive/>}/>
      </Route>
    </Routes>
    </div>
  );
};

export default Home;