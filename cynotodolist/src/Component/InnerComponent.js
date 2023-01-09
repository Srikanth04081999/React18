import React,{useState} from 'react'
import "./style.css";

const InnerComponent = ({addnewitem}) => {
    const [inputValue,setInputvalue] = useState();
  return (
    <div className="main-div">
      <div className='child-div'>
      <center>
      <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
        <div className='addItems'>
        <input type="text" placeholder="✍ Add Item" value={inputValue} onChange ={((e) => 
            setInputvalue(e.currentTarget.value))} />
        <button onClick={() =>
            {
              addnewitem(inputValue);
                setInputvalue("");
            }}>Add Item</button>
        </div>
      </center>
      </div>
    </div>
  )
}

export default InnerComponent
