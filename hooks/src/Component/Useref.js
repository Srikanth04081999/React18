import React,{useRef} from 'react'

const Useref = () => {
    const inputref = useRef(null);
  return (
    <div>
        <center>
        <h1>USEREF</h1>
        <h2>Hello CodeSandBox</h2>
        <input type="text" ref={inputref}/>
        <button onClick={()=> inputref.current.focus()}>Click</button>
        </center>
    </div>
  )
}

export default Useref
