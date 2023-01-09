import { useSelector,useDispatch } from "react-redux"
import React,{useEffect} from "react"
import { setProducts } from "../redux/actions/productAction"
import axios from "axios"
import ProductComponent from "./ProductComponent"



const ProductListing = () => {
  const products = useSelector((state) =>state)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
      dispatch(setProducts(response.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ",products);

  return (
    
    <div className="ui grid container">
      <ProductComponent/>      
    </div>
  )
}

export default ProductListing
