import React from "react";
import "./List.css"


export function List(props){
    return(
        <div className="containerList">
            <ul>
                <a> Compleded task</a>
                {props.children}
            </ul>
        </div>
    )
}