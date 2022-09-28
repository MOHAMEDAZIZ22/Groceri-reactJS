import React from 'react'
import Product from '../Product/Product'
import './productlist.css';
const ProductList = ({itemMap}) => {
  return (
    <div className='listitem'>
      {itemMap.map((mapItems)=>{
       return <Product key={mapItems.id} name={mapItems.name} price={mapItems.price} offer={mapItems.offer}></Product>
      })}
    </div>
  )
}

export default ProductList;

