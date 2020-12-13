import React from "react";
import Parallax from "react-rellax/lib";
import './style.css'
import histoire from './../images/IMG_20201211_221342.jpg'

function Histoire(){

    return(
    <>

        <div className='container-histoire'>
            <Parallax speed={10}>
                <div className="titre">

                <h2>L'histoire d'une grande aventure</h2>
            </div>
                <div className="container-paragraphe">
                    <p>Deux ex-ingénieurs soviétique ayant participé au
                        programme spaciale secret dénomé "сумасшедшая водка"
                        à la suite de la fin de la mère patrie, les deux compères
                        décidèrent de venir s'installer à prague et de monter leur entreprise
                        de cybersécurité <b>Urquell SHIELD</b> bénéficiant d'un coût de la vie
                        peu élevé et d'alcool à foison, ils purent créer une des entreprises les plus
                        innovantes et performante de la planète.</p>
                </div>

                <h2>Les bureaux</h2>
            <img src={histoire} className="hisoire-image"/>


            </Parallax>
        </div>


</>
    )
}


export default Histoire;

