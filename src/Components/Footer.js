// Config
// Modules
import React, { useEffect, useState } from "react";
// Components
// Stylings
import "../Stylesheets/Footer.css";

const Footer = ()=>{
    return (
        <footer>
            <div className="wrapper">
                <div className="infoContainer">
                    <p>created using ReactJS, Axios + Firebase</p>
                    <p>data provided by: <a href="https://opentdb.com/api_config.php">Open Triva API</a></p>
                    <p>Created @ <a href="https://junocollege.com/">Juno College</a></p>
                </div>

                <p>check out what else we're working on!</p>
                <div className="rowContainer">
                    <div className="individualContainer">
                        <p>Harrison:</p> 
                        <a href="https://github.com/harrisonhui"><i class="fa-brands fa-github"></i></a> 
                        <a href="https://ca.linkedin.com/in/harrison-hui-33a560138"><i class="fa-brands fa-linkedin"></i></a>
                    </div>

                    <div className="individualContainer">
                        <p>FJ:</p>
                        <a href="https://github.com/FjPierre"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/faheen-jean-pierre/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>

                
                    <div className="individualContainer">
                        <p>Antoine:</p> 
                        <a href="https://github.com/antoine-duong"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/tuananh-duong/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className="individualContainer">
                        <p>Kyler:</p> 
                        <a href="https://github.com/KylerJung"><i class="fa-brands fa-github"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            


            {/* Please include the following info:
            App was created using: ReactJS, Axios, Firebase
            API data was provided by: https://opentdb.com/api_config.php
            Created @ Juno College of Technology, 2022
            Created by: 
            - Kyler Jung: 
            + Github: https://github.com/KylerJung 
            + LinkedIn: 
            - Harrison Hui:
            + Github: https://github.com/harrisonhui
            + LinkedIn: 
            - Faheen Jean-Pierre:
            + Github: https://github.com/FjPierre
            + LinkedIn: 
            - Antoine Duong:
            + Github: https://github.com/antoine-duong
            + LinkedIn: https://www.linkedin.com/in/tuananh-duong/*/}
        </footer>
    );
}

export default Footer;