import React from 'react'
import "./Section3.css"

const Section3 = () => {
  return (
    <div>
      <section className='three'>
      <h1>See What Other are Creating</h1>
    <div className='box2'>
        <ul>
        <li><img src="./images/cat.webp" alt=""/><br/><span>Cat<br/>$3.45 <button>Download</button></span></li>
        <li><img src="./images/dog.jpeg" alt=""/><br/><span>Dog<br/>$3.45 <button>Download</button></span></li>
        <li><img src="./images/par.jpeg" alt=""/><br/><span>Parrot<br/>$3.45 <button>Download</button></span></li>
        <li><img src="./images/cat.webp" alt=""/><br/><span>Penguin<br/>$3.45 <button>Download</button></span></li>

        </ul>
    </div>
      </section>
    </div>
  )
}

export default Section3
