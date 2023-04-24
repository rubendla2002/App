import React from 'react'
import { Link, Outlet } from 'react-router-dom';


function Menu() {
  return (
    <div>
      <nav>
        <Link to="/" Menu></Link>  &nbsp;
        <Link to="/drive" style={styles.boton}>Drive</Link> &nbsp; 
        <Link to="/parte" style={styles.boton}>Parte</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Menu

const styles = {
  boton:{
    display: "flex",
    padding: "15px 25px",
    fontSize: "18px",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    outline: "none",
    color: "#fff",
    backgroundColor: "#073D70",
    border: "none",
    borderRadius: "20px",
    boxShadow: "0 9px #999",
    marginTop: "15px",
    float:"left"
    }
  }
  