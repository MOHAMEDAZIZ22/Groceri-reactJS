import './header.css';
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AddContext from "../../context";
import { FaSearchengin } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { selectUser } from '../../features/userslice';
import { useSelector } from 'react-redux';
import { logout } from '../../features/userslice';
import { useDispatch } from 'react-redux';




const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }


    const cartLength = useContext(AddContext).cart;
    const addCartto = useNavigate()
    const cartHandler = () => {
        if (user.loggedIn == true) {
            addCartto("/addcart")
        } else {
            alert("PLEASE LOGIN")
        }

    }
    const nav = useNavigate();

    return (
        <div className='header'>
            <div className='head_first'>
                <h1>Jiomart</h1>
                <span className='bet'>BETA</span>
            </div>
            <div className='head_scnd'>
                <input type='text' placeholder='Search Essentials,Groceries And More...' />
                <FaSearchengin color='white' size={30}></FaSearchengin>
            </div>
            <div className='head_third'>
                {user.loggedIn ? <button className="logout_btn" onClick={(e) => {
                    handleLogout(e)
                    console.log();
                }
                }>Logout</button> : <button onClick={() => {
                    nav('/login')
                }}><IoMdLogIn color='blue' fontSize={20} />Login / Signup</button>}


            </div>
            <div className='head_fourth'>
                <FaShippingFast fontSize={30} color='#def2f1' onClick={cartHandler} />
                <span>{cartLength.length}</span>
                <span color='red'>Cart</span>
            </div>

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
    <option value="1">Avacado</option>
    <option value="2">Apple</option>
    <option value="3">Orange</option>
    <option value="4">Bannana</option>
    <option value="5">Mango</option>
    <option value="6">Pomogranade</option>
</select>

<select name="applinc" id="home applience">
    <option value="">Home & Kitchen</option>
    <option value="1">Dining</option>
    <option value="2">Furniture</option>
    <option value="3">Decore</option>
    <option value="4">Bathroom & Laundry</option>
    <option value="5">Home Appliances</option>
    <option value="6">Cleaning </option>
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
    )
}
export default Header;