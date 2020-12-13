import React from 'react'
import './card.css'
import cap_kozel from './../../images/kozel.png'




function Kozel(){
    return(
        <>
        <div className="container">
            <div className="card">
                <div className="sneaker">
                    <div className="circle"><img src={cap_kozel}/></div>

                </div>
                <div className="info">
                    <h1 className="title">Kozel PACK</h1>
                    <h3>Pour une sécurité optimal à un coût optimisé</h3>

                    <div className="purchase">
                        <button>12 CZK</button>
                    </div>
                </div>
            </div>
        </div>
            </>
    )
}


export default Kozel;