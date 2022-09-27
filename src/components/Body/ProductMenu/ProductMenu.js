import React from 'react';
import pic from '../../images/grocery.jpg';
import Bev from '../../images/Bev.jpg'
import fru from '../../images/fruit.jpg'
import snac from '../../images/snack.jpg'
import fas from '../../images/fash.jpg'
import './ProductMenu.css'

const ProductMenu = (name) => {
    return (

        <div>
            <div><h1>Menu</h1></div>
            <div className='menu'>
                <div>
                    <a href='/Bev'><img src={Bev} width={200} height={200}></img></a>
                    <h2>Bevarage</h2>
                    <p className='text'>Bevarage</p>
                </div>
                <div>
                    <a href='Fru'><img src={fru} width={200} height={200}></img></a>
                    <h2>Fruits</h2>
                    <p className='text'>Fruits</p>
                </div>
                {/* <div>
                    <a href='/Veg'><img src={pic} width={200} height={200}></img></a>
                    <h2>Vegitable</h2>
                    <p className='text'>Vegitable</p>
                </div> */}
               
                <div> 
                    <a href='Snac'><img src={snac} width={200} height={200}></img></a>
                    <h2>Snacks</h2>
                    <p className='text'>Snacks</p>
                </div>
                <div>
                    <a href='Fash'><img src={fas} width={200} height={200}></img></a>
                    <h2>Fashion</h2>
                    <p className='text'>Fashion</p>
                </div>
            </div>
        </div>
    )
}

export default ProductMenu;