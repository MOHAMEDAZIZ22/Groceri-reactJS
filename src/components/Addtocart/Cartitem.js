import React from 'react'
import { useState } from 'react-router-dom'
const Cartitem = () => {
    const [count, setCount] = useState(1)
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
      <button onClick={()=>{
        if (count==1){
            setCount(count+1)
        }
      }}>+</button><p>{count}</p>
      <button onClick={()=>{
        if(count>1){
          setCount(count-1)
        }
      }}>-</button>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default Cartitem