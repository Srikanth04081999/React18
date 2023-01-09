import React,{useState,useEffect} from 'react'
import "./style.css";

const Useeffect = () => {
    const [num,setNum] = useState(0); 
    useEffect(() => {
        document.title = `Chats(${num})`;
      });
       
  return (
    <div>
        <p>{num}</p>
      <div className='button2' onClick={() =>{ setNum(num+1)}} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
    </div>
  )
}

export default Useeffect
