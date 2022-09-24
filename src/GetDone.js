import React from "react";
import "./GetDone.css"
import perfil from "./img/perfil.jpg"



export function GetDone(){
    return(
        <section className="container">
            <div>
                <h2 className="title"> GET <br/> <span>SH</span>IT <br/> DONE.</h2>
            </div>
            <div className="imgContainer">
                <p className="date">Jueves, 22 de septiembre</p>
                <img src={perfil} alt=""></img>
            </div>

        </section>
    )
}