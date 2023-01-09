import React from 'react'
import "./Section2.css"


const Section2 = () => {
  return (
    <div>
      <section className='two'>
      <h1>100% Procedurally Generated</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae?</h3>
    <div className='box'>
        <ul>
        <li><img src="./images/tiger1.png" alt=""/><br/><span>Version A</span></li>
            <li><img src="./images/tiger1.png" alt=""/><br/><span>Version B</span></li>
            <li><img src="./images/tiger1.png" alt=""/><br/><span>Version C</span></li>
            <li><img src="./images/tiger1.png" alt=""/><br/><span>Version D</span></li>
        </ul>
        <img src="./images/bg3.png" alt="" class="bg3"/>
    </div>

      </section>
    </div>
  )
}

export default Section2
