import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"


const ProductComponent = () => {
   const products = useSelector((state) => state.allproduct.products);
  //  const {id,title} = products[0];
    const renderlist = products.map((product) =>{
      const { id, title, image, price, category } = product;
      return (
        <div className="four wide column" style={{display:"flex"}} key={id}>
          <Link to={`/product/${id}`}>          
            <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
          </Link>
          
        
      </div>
      )
    });
  
  return (
    <div>
      {renderlist}
    </div>
    
  )
}

export default ProductComponent
