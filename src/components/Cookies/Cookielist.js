import React from 'react'
import Cookie from './Cookie'

const Cookielist = ({cookie}) => {
  return (
    <div>
      <div className='cook'>
        <h3>SNACKS</h3>
      </div>
    <div className='cookiesmap'>
      {cookie.map((cook)=>{
return<Cookie key={cook.id} img={cook.img} id={cook.id} name={cook.name} price={cook.price}
offer={cook.offer}></Cookie>
      })}
      </div>
    </div>
  )
}

export default Cookielist
