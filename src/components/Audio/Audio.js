import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Audio = ({name,price,offer,id,img}) => {
    const [priceset,pricesetter]=useState(price)
    const offerhandle=()=>{
        const newprice=priceset-(offer/100)-priceset
        pricesetter(newprice)
    }
    const nav=useNavigate()
    function des(params) {
      nav('/desaudio/'+id)
    }
  return (
    <div>
      <div className='geartop'>
        <img src={img} alt="" width={200} onClick={des}/>
        <h3>{name}</h3>
        <span>M.R.P: ₹{priceset}</span>
        <div>
            <span>{offer}</span>
        </div>
        <div className='audioffer'>
        <button onClick={offerhandle}>Apply offer</button>
        </div>
        <div className='offeraudio'>
            <button>Click To Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Audio
