import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Bread from '../Components/Bread/Bread';
import Productdetails from '../Components/Productdetails/Productdetails';
import Related from '../Components/Related/Related';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productid} = useParams();
  const product=all_product.find((e)=>e.id=== Number(productid));
  
  return (
     

    <div>
      <Bread product={product}/>
      <Productdetails product={product}/>
      <Related/>
    </div>    
  )
}

export default Product