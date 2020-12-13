import React from 'react'
import './card.css'
import vlad from './../../images/vladi-shrek.png'




function Vlad(){
    return(
        <>
            <div className="container">
                <div className="card">
                    <div className="sneaker">
                        <div className="circle"><img src={vlad}/></div>
                    </div>
                    <div className="info">
                        <h1 className="title">VladiShrek PACK</h1>
                        <h3>Un monstre de performance, un midlaner impitoyavble, ses cris de rage feront fuire tout vos ennemis potentiel.</h3>

                        <div className="purchase">
                            <button>69 420 </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Vlad;