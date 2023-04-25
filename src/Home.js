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
    <div style={styles.div}>
      <h1 style={styles.letras}>Bienvenido a Nettronica</h1>
      <button style={styles.boton} onClick={cerrarSesion}>Cerrar Sesión</button>
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

const styles = {
  letras:{
    textAlign:"center",
  },
  boton:{
    display: "block",
    padding: "0.5rem 1rem",
    width: "200px",
    margin: "0 auto",
    borderRadius: "20px",
  },
  div:{
    backgroundColor: "rgba(110, 165, 237, 0.686)",
    height: "100px",
  },
}