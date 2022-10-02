import './header.css';
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AddContext from "../../context";
import { AiOutlineSearch } from "react-icons/ai";
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
                <span>BETA</span>
            </div>
            <div className='head_scnd'>
                <input type='text' placeholder='Search for grocery items and more...' />
                <AiOutlineSearch />
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
        </div>
    )
}
export default Header;