import React,{useReducer} from 'react'
import "./style.css";

const reducer = (state,action) =>{
    if(action.type === "INCR"){
        state = state+1;
    }
    if(action.type === "DECR"){
        state = state-1;
    }
    return state;
}


const Usereducer = () => {
    const initial=10;
    const [state,dispatch] = useReducer(reducer,initial);
  return (
    <div>
       <p>{state}</p>
      <div className='button2' onClick={() => dispatch({type:"INCR"})} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
      <div className='button2' onClick={ () => dispatch({type:"DECR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
      </div>

    </div>
  )
}

export default Usereducer
