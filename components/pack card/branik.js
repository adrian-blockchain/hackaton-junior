import React from 'react'
import './card.css'
import paon from './../../images/paon.png'




function Branik(){
    return(
        <>
            <div className="container">
                <div className="card">
                    <div className="sneaker">
                        <div className="circle"><img src={paon}/></div>
                    </div>
                    <div className="info">
                        <h1 className="title">Vlasska PACK</h1>
                        <h3>La bonne solution, pour tout le monde résiste à toutes les attaques, sauf contre les russes. (D'un coté, personne ne résiste aux russes.)</h3>

                        <div className="purchase">
                            <button>120 CZK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Branik;