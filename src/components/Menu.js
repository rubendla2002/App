import React from 'react'
import { Link, Outlet } from 'react-router-dom';


function Menu() {
  return (
    <div>
      <nav>
        <Link to="/" Menu></Link> | &nbsp;
        <Link to="/drive">Drive</Link> | &nbsp;
        <Link to="/parte">Parte</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Menu