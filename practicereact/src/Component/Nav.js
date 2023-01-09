import React from 'react'

const Nav = ({list,filter}) => {
  return (
    <div>
      <nav className='navbar'>
      <div className="btn-group">
          
          {list.map((current) =>{
            return(
                
        <button className="btn-group__item" onClick={() => filter(current)}> {current}</button>
                
            )
          })}

    
        </div>
      </nav>
    </div>
  )
}

export default Nav
