
import React, { useState } from 'react';
import pic from '../../../images/Bev.jpg';
import './Product.css'


const Product = ({ name, price, offer }) => {
  const [itemstate, itemsetter] = useState(price)
  const handleoffer = () => {
    const newoffer = itemstate - (offer / 100) * itemstate;
    itemsetter(newoffer)
  }
  return (
    <div className='prod'>
      <img src={pic} width={150} height={150}></img>
      <div>{name}</div>
      <div>{itemstate}</div>
      <div>{offer}</div>

      <button onClick={handleoffer}>Apply offer</button>
      <div>
        <button>🛒</button>
      </div>
    </div>
  )
}

export default Product
