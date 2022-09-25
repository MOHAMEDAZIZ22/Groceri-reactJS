// import './productlist.css';
// import React from 'react';
// import  Product  from './components/product/product';
// function Productlist ({newproduct}){  
//     return (
//         <div>
//             {newproduct.map((productmap)=>{
//                return <Product key={productmap.id} name={productmap.name} price={productmap.price} offer={productmap.offer}/>
//             })}
//         </div>
//       )
// }
// export default Productlist;


import React from 'react'
import Product from '../product/product'


const ProductList = ({itemMap}) => {
  return (
    <div>
      {itemMap.map((mapItems)=>{
       return <Product key={mapItems.id} name={mapItems.name} price={mapItems.price} offer={mapItems.offer}></Product>
      })}
    </div>
  )
}

export default ProductList;

