import React,{useState} from 'react'

const Usestate = () => {
    const [course,setCourse] = useState(["reatjs","vue","angular"])
    const [newcourse,setNewcourse] = useState();
    

  return (
    <div>
      <center>
        <h2>Hello Welcome Usestate class</h2>
       {course.map((cur,index)=>{
        return(
            <ul key={index}>{cur}</ul>
        );
       })}

       <input type="text" value={newcourse} onChange={ (e) => setNewcourse(e.target.value)} />
       <button onClick={() =>{
        setCourse([...course,newcourse]);
        setNewcourse("");
       }}>Add item</button>

      </center>

    </div>
  )
}

export default Usestate
