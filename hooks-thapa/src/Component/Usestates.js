import React,{useState} from 'react'
import "./style.css";


const Usestates = () => {
    const [num,setNum] = useState(0);
  return (
    <>
        <p>{num}</p>
      <div className='button2' onClick={() =>{ setNum(num+1)}} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
      <div className='button2' onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
      </div>

    </>
  )
}

export default Usestates
