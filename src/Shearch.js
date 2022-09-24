import React from "react";
import "./Search.css"
import icon from "./img/buscar.png"

export function Search(){
    const onSearchValueChanges = (event) =>{
        console.log(event.target.value);
    }

    return(
        <div className="containerSearch">
            <input className="inputSearch" placeholder="Search task..." 
            onChange={onSearchValueChanges}
            ></input>
            <img className="icon" src={icon} alt="buscador" ></img>
        </div>
    )
}