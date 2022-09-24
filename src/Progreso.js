import React from "react";
import "./Progreso.css"

export function Progreso(){
    return(
        <div className="contenedorProgreso">
            <progress id="barra" max={100} value={50}></progress>
        </div>
    )
}