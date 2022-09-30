import React from 'react'
import img1 from './images/fruit.jpg'
import img2 from './images/Bev.jpg'
import img3 from './images/snack.jpg'
import img4 from './images/fash.jpg'

const Productdeals = () => {
  return (
    <div>
        
<div className='todaydeal'>
        <h3>Shoping Menu</h3>
        </div>
    
    <div className='deals'>
    <div>
        <a href="/fruitsandveg"><img src={img1} alt="" width={250} height={250}/></a>
    
    <div className='smartphone'>
        <h5>FRUITS {'&'} VEGETABLES</h5>
        </div>
        </div>
    <div>
        <a href="/beverage">
        <img src={img2} alt="" width={250} height={250} />
        </a>
<div className='fashion'>
        <h5>BEVERAGE</h5>
        </div>
        </div>
    <div>
        <a href="/snacks"><img src={img3} alt="" width={250} height={250} />
</a>
<div className='cookies'>
        <h5>SNACKS</h5>
        </div>
         </div>
    <div>
        <a href="/Fashion"><img src={img4} alt="" width={246} height={250} />
</a>
<div className='audio'>
        <h5>FASHION</h5>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Productdeals
