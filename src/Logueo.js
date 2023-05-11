import React from "react";
import { firebaseApp } from "./firebase";
import logo from "./media/logo.png"


const Logueo = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" className="img" style={styles.logo} />
      <div style={styles.form}>
      <h1 style={styles.titulo}> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
      <form onSubmit={submitHandler} style={styles.containerText}>
        <label htmlFor="emailField" > Correo electronico </label>
        <input type="email" id="emailField" placeholder="Correo electronico" style={styles.campos}/>
        <label htmlFor="passwordField" > Contraseña </label>
        <input type="password" id="passwordField" placeholder="Contraseña" style={styles.campos}/>
        <button type="submit" style={styles.botonPrimer}>
          {" "}
          {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
        </button>
      </form>
      <button onClick={() => setIsRegistrando(!isRegistrando)} style={styles.botonSegundo}>
        {isRegistrando
          ? "¿Ya tienes cuenta? ¡Inicia sesión"
          : "¿No tienes cuenta? ¡Regístrate gratis!"}
      </button>
      </div>
    </div>
  );
};

export default Logueo;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#073D70"
  },
  titulo: {
  margin: "10px 0",


},
  form:{
    position: "absolute",
    border: "2px solid white",
    height: "400px",
    width: "300px",
    textAlign: "center",
    borderRadius: "40px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color:"white",
  },
  logo:{
    position: "absolute",
    textAlign: "center",
    top: "17%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color:"white",
    width: "200px",
    height: "200px",
    maxWidth : "400px",
    minWidth : "200px",    
  
  },
  campos:{ 
    padding: "20px 40px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  containerText:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 
  },
  botonPrimer:{
    padding: "10px 30px",
    border: "1px solid black",
    backgroundColor: "white",
    color: "black",
    margin: "10px 0",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  botonSegundo:{
    padding: "10px 20px",
    margin: "10px 0",
    border: "1px solid black",
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  
  
}