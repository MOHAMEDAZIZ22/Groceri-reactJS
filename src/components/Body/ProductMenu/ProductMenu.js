import React from 'react';
import pic from '../../images/grocery.jpg';
import Bev from '../../images/Bev.jpg'
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
                    <a href='/Veg'><img src={pic} width={200} height={200}></img></a>
                    <h2>Vegitable</h2>
                    <p className='text'>Vegitable</p>
                </div>
                <div>
                    <a href='Snac'><img src={pic} width={200} height={200}></img></a>
                    <h2>Snacks</h2>
                    <p className='text'>Snacks</p>
                </div>
                <div>
                    <a href='Fash'><img src={pic} width={200} height={200}></img></a>
                    <h2>Fashion</h2>
                    <p className='text'>Fashion</p>
                </div>
            </div>
        </div>
    )
}

export default ProductMenu;