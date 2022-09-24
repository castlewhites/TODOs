import React from "react";
import "./Item.css"


export function Item(props){
    const onComplete = () => {
         alert("completado " + props.text)
    }
    const onDelete = () => {
        alert("Eliminado " + props.text)
   }

    return(
        <div className="item">
            <li className="containerLi" >
                <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                    <input className="check"  id="check" type={"checkbox"} 
                    onClick={onComplete} 
                >
                </input>
                </span>

                <p className={`Item-p ${props.completed && 'Item-p--complete'}`}>
                    {props.text}
                </p>
                
                <span className={"Icon Icon-delete"}
                    onClick={onDelete} 
                >
                    X
                </span>
            </li>
        </div>  
    )
}