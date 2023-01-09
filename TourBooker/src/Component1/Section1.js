import React from 'react'
import "./Section1.css"

const Section1 = () => {
  return (
    <>
      <section className='one'>
        <div className='left'>
          <header>
                <span> <img src="./images/Lr.png" alt="" />
                 </span>
                 <h1>STOCKGEN</h1>
             </header>
             <h1>Next Gen Stock Images</h1>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, illum! Sequi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptatibus! consequuntur delectus atque corporis.</h2>
            <h3>50% OFF Sale-</h3>
            <div class="time">

                <ul>
                    <li>24 <br/> Days</li>
                    <li>13 <br/> Hours</li>
                    <li>44 <br/> Mins</li>
                    <li>12 <br/> Secs</li>
                </ul>

            </div>
       </div>

       <div class="right">
        <img src="./images/fox.jpeg" alt="" class="front"/>
        <img src="./images/bg1.png" alt="" class="back"/>
       </div>

      
      </section>
         

    </>
  )
}

export default Section1
