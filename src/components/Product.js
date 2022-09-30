import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs';

const Product = ({name,price,offer,id,img}) => {
    const [itemstate,itemsetter]=useState(price)
    const handleoffer=()=>{
    const newoffer=itemstate-(offer/100)*itemstate;
    itemsetter(newoffer)
}
const navigates=useNavigate();
function discripefunc(){
    navigates('/des/'+id)
}
  return (
    <div>
    <div className='Smartphone'>
      <div >
      <img src={img} alt="" width={200} onClick={discripefunc}/>
       <h5>{name}</h5> 
       <span> M.R.P: ₹{itemstate}</span>
       <div>
     <span> {offer}</span>
     </div>
     <div className='offerhandle'>
        <button onClick={handleoffer}>Apply offer</button>
      </div>
      <div className='buyhandle'>
      <button><BsFillCartPlusFill color='red' width={40}></BsFillCartPlusFill></button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Product


