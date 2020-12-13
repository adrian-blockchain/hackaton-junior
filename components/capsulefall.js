import React from 'react'
import cap from './../images/kozel.png'
import bact from './../images/bacteria.png'
import './style.css';
import Parallax from "react-rellax/lib";
function caps() {
    return(
        <div>
        <div className='cap1'>
            <Parallax speed={-5}>
                <img className='cap1' src={bact}/>
            </Parallax>
            <div className="cap2">
            <Parallax speed={-10}>
                <img className='cap2' src={cap}/>
            </Parallax>
            </div>
        </div>
        </div>


    )
}

export default caps;