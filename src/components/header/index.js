import React from 'react'
import '../../styles/Header.css'

import logo from '../img/logo.png'



const index = ({ userPhoto }) => {
    return (
        <div className='header' style={styles.container}>
            <div className="header__logo" style={styles.dentro} >
            <img src={logo} alt="logo" className="img" style={styles.img} />
                <span style={styles.label}>Nettronica</span>
            </div>
        </div>
    )
}

export default index

const styles = {
    container:{
        
    } ,
    dentro:{
        justifyContent: "center",

    },
    img:{
        height: "50px",
    },
    label:{
        
    }
}
