import React from 'react'
import Product from '../Product/Product'


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

