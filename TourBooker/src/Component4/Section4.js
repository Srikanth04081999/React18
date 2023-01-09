import React from 'react';
import "./Section4.css";

const Section4 = () => {
  return (
    <div>
      <section className='four'>
      <h1>Top Collection</h1>
        <div className='four1'>
            <div className='alex'>
                <ul>
                <li><img src="./images/male.png" alt="" class="img1"/></li>
                <li><h2>Alexander</h2></li>
                <li><img src="./images/safe.png" alt="" class="img2"/></li>
                </ul>
                <div className="grid-container">
                <div className="grid-item"><img src="./images/nat1.jpeg" alt=""/></div>
                <div className="grid-item"><img src="./images/nat2.jpeg" alt=""/></div>
                <div className="grid-item"><img src="./images/nat3.jpeg" alt=""/></div>  
                <div className="grid-item"><img src="./images/nat5.jpg" alt=""/></div>
               </div>
            </div>

            <div className='alex'>
                <ul>
                <li><img src="./images/female.png" alt="" class="img1"/></li>
                <li><h2>Hannah</h2></li>
                <li><img src="./images/safe.png" alt="" class="img2"/></li>
                </ul>
                <div className="grid-container">
                <div className="grid-item"><img src="./images/nat7.jpeg" alt=""/></div>
                <div className="grid-item"><img src="./images/nat8.webp" alt=""/></div>
                <div className="grid-item"><img src="./images/nat10.jpeg" alt=""/></div>  
                <div className="grid-item"><img src="./images/nat11.jpeg" alt=""/></div>
               </div>

            </div> <div className='alex'>
                <ul>
                <li><img src="./images/female.png" alt="" class="img1"/></li>
                <li><h2>Martha</h2></li>
                <li><img src="./images/safe.png" alt="" class="img2"/></li>
                </ul>
                <div className="grid-container">
                <div className="grid-item"><img src="./images/nat13.jpeg" alt=""/></div>
                <div className="grid-item"><img src="./images/nat14.jpeg" alt=""/></div>
                <div className="grid-item"><img src="./images/nat15.jpeg" alt=""/></div>  
                <div className="grid-item"><img src="./images/nat17.jpeg" alt=""/></div>
               </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section4
