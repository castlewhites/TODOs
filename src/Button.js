import React from 'react';
import './Button.css';

export function Button(props) {
  const onClickButton = () =>{
    alert("Hola")
  }

  return (
    <div className='containerButton'>
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    </div>
  );
}
