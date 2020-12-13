import React, {Component} from "react";
import styled from 'styled-components'
import 'bootstrap';
import Parallax from "react-rellax/lib";
import logo from "../images/logo.png";
import './style_foot.css';



function footer() {


    return(

        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-row">

                <div className="footer-column">
                    <h3>à propos de nous</h3>
                    <h4 >Story</h4>
                    <h4>Nos techs</h4>
                    <h4>Nos clients</h4>
                </div>
                    <div className="footer-column">
                        <h3>Nous contacter</h3>
                        <h4 >Venez prendre une bière</h4>
                        <h4>Par pigeon voyageur</h4>
                        <h4>Par snap on te fera un prix ; )</h4>
                    </div>
                    <div className="footer-column">
                        <h3>Horaire d'ouverture</h3>
                        <h4 >Comme les bars, de 12h à 20h</h4>
                        <h4>Enft tt le temps parce que c'est la classe verte</h4>
                        <h4>Anglais/francais
                            /Russe/chinois/espagnole</h4>
                    </div>
                </div>
            </div>
        </div>





    )
}





export default footer;

