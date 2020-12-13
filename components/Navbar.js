import React from 'react'
import logo from '../images/logo.png'
import './style.css';
import Parallax from "react-rellax/lib";
function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <Parallax speed={18}>
                        <img src={logo}/>
                    </Parallax>

                </div>
            </div>

        </div>
    )
}

export default Navbar;