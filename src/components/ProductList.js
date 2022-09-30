import React from 'react'
import Product from './Product'



const ProductList = ({itemMap}) => {
  return (
    <div>
      <div className='phonehead'>
        <h3>FRUITS {'&'} VEGETABLES</h3>
      </div>
    <div className='fruitmap'>
      {itemMap.map((mapItems)=>{
       return <Product key={mapItems.id} img={mapItems.img} id={mapItems.id} name={mapItems.name} price={mapItems.price} offer={mapItems.offer}></Product>
      })}
    </div>
    </div>
  )
}

export default ProductList
