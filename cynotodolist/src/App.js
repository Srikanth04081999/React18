import React,{useState} from 'react'
import InnerComponent from './Component/InnerComponent'
import Itemcontainer from './Component/Itemcontainer'
import Countpending from './Component/Countpending'
import "./Component/style.css";


const App = () => {
  const [todo,setTodo] = useState([]);

  const addnewitem = (newtodo) =>{
    setTodo([...todo,newtodo]);
  };
  const deletetodo = (itemdelete) =>{
    const filtertodo = todo.filter((item) =>
      item !== itemdelete
    );
    setTodo(filtertodo);
  }
  return (
    <div>
      <Countpending count ={todo.length}/>
      <InnerComponent addnewitem={addnewitem}/>
      <Itemcontainer todo = {todo} deletetodo = {deletetodo}/>
    </div>
  )
}

export default App
