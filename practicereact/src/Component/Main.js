import React,{useState} from 'react'
import Mencard from './Mencard'
import Menu from './Menuapi'
import Nav from './Nav'
import "./style.css"

const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),"All"
  ];

 
const Main = () => {
    const[card,setCard] = useState(Menu)
    const [list,setlist] = useState(uniqueList);

   const filter = (category) =>{

    if(category === "All"){
        setCard(Menu);
        return 
    }
    const update = Menu.filter((current) =>{
        return current.category === category;
    })
    setCard(update)
   };
   
  return (
    <div>
        <Nav list ={list} filter = {filter}/>
      <Mencard card = {card}/>
      
    </div>
  )
}

export default Main
