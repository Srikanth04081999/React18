import React from 'react'
import "./style.css";

const Itemcontainer = ({todo, deletetodo}) => {
    
  return (
    <div className="main-div1">
     <center>
     {todo.map((item,index) =>{
       return(
        <li key={index}>{item}
        <button onClick={() => deletetodo(item) }>Remove</button>
        </li>
       )
      })}
     </center>
    </div>
  )
}

export default Itemcontainer
