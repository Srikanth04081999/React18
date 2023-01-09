import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
  const {productid} = useParams();
  console.log(productid)
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  )
}

export default ProductDetails
