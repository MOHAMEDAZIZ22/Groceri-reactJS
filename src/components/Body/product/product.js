// import React, { useState } from "react";

//  const Product = ({name, price, offer}) => {
//     const[productState, productSetter]=useState(price)
//     const offerHandler=()=>{
//         const newoffer=productState-(offer/100)*productState
//         productSetter (newoffer)
//     }
//     return (
//         <div>
//             <div>{name}</div>
//             <div>{productState}</div>
//             <div>{offer}</div>
//             <button onClick={offerHandler}>Apply offer</button>
//             <div>
//                 <button>Add to cart</button>
//             </div>
//         </div>

//     )
// }
// export default Product;

import React, { useState} from 'react';
import './product.css'


const Product = ({name,price,offer}) => {
    const [itemstate,itemsetter]=useState(price)
    const handleoffer=()=>{
    const newoffer=itemstate-(offer/100)*itemstate;
    itemsetter(newoffer)
}
  return (
    <div className='prod'>
      <div>{name}</div>
      <div>{itemstate}</div>
      <div>{offer}</div>
      
      <button onClick={handleoffer}>Apply offer</button>
      <div>
      <button>🛒 </button>
      </div>
    </div>
  )
}

export default Product
