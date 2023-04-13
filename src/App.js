import React, { useEffect } from "react";
import { firebaseApp } from "./firebase";
import Logueo from "./Logueo";

import Home from "./Home";

function App() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  return (
    <>
    
    {usuario ? <Home/> : <Logueo setUsuario={setUsuario} />}</>);
}

export default App;