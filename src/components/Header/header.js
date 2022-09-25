import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className="head">
            <header className="header">
                <h1>JIO mart</h1>
                <div className='search'>
                    <input type="text" placeholder='search essential grocery and more...'></input>

                    <div className='header2'>
                       
                        <select name="grcer" id="groceri">
                            <option value="">Groceries</option>
                            <option value="1">Dairy & Bakery</option>
                            <option value="2">Beverages</option>
                            <option value="3">Snacks</option>
                            <option value="4">Fruits</option>
                            <option value="5">Home & Kitchen</option>
                            <option value="6">Fashion</option>
                            <option value="7">Electronics</option>
                            <option value="8">Beauty</option>
                        </select>

                        <select name="fruits" id="pre fruits">
                            <option value="">Premium Fruits</option>
                            <option value="1">avacado</option>
                            <option value="2">Apple</option>
                            <option value="3">orange</option>
                            <option value="4">bannana</option>
                            <option value="5">Mango</option>
                            <option value="6">pomogranade</option>
                        </select>

                        <select name="applinc" id="home applience">
                            <option value="">Home & Kitchen</option>
                            <option value="1">avacado</option>
                            <option value="2">Apple</option>
                            <option value="3">orange</option>
                            <option value="4">bannana</option>
                            <option value="5">Mango</option>
                            <option value="6">pomogranade</option>
                        </select>

                        <select name="fas" id="fashion">
                            <option value="">Fashion</option>
                            <option value="1">MEN</option>
                            <option value="2">WOMEN</option>
                            <option value="3">Boys</option>
                            <option value="4">Girls</option>
                            <option value="5">Infants</option>
                        </select>

                        <select name="electro" id="electronics">
                            <option value="">Electronics</option>
                            <option value="1">Mobile & Tablets</option>
                            <option value="2">Tv</option>
                            <option value="3">Speakers</option>
                            <option value="4">Gaming</option>
                            <option value="5">Smart Device</option>
                            <option value="6">Computer</option>
                            <option value="7">Cameras</option>
                        </select>

                        <select name="care" id="beauty">
                            <option value="">Beauty</option>
                            <option value="1">Men Groming</option>
                            <option value="2">Hair</option>
                            <option value="3">Skin Care</option>
                            <option value="4">Fragrance</option>
                            <option value="5">Fitness</option>
                            <option value="6">Personal Care</option>
                            <option value="7">Make up</option>
                        </select>
                    </div>

                </div>

                <div>
                    <ul>
                        <li><a href='#'>Login / Signup</a></li>
                        <li><a href='#'>🛒 Cart </a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
export default Header;