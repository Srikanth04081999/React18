import React from 'react'
import "./Section6.css"

const Section6 = () => {
  return (
    <div>
      <section className='six'>
        <div className='content1'>
        <header>
            <span><img src="./images/Lr.png" alt=""/>
             </span>
             <h1>STOCKGEN</h1>
         </header>
         <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque dolor explicabo tenetur non, in delectus veniam earum eum fuga vero?</h3>
         <ul>
            <li><img src="./images/twi.png" alt=""/></li>
            <li><img src="./images/face.png" alt=""/></li>
            <li><img src="./images/you.png" alt=""/></li>
            <li><img src="./images/tel.png" alt=""/></li>
            <li><img src="./images/game.png" alt=""/></li>
         </ul>
     
     
        </div>

        <div className='content2'>
             <h1>Information</h1>

        <ul>
            <li>Home</li>
            <li>Generator</li>
            <li>Career</li>
            <li>Contact</li>
        </ul>

        </div>

        <div className='content3'>
        <h1>Get Latest Update</h1>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, hic?</span>
        <br/>
        <input type="text"/> <br/>
        <button>Submit</button>
        </div>
      </section>
    </div>
  )
}

export default Section6
