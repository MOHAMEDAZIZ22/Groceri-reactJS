import React from "react";
import { logout } from '/fabevy/frontend/practice/main-react-js/grocery-project/Groceri-reactJS/src/Features/userSlice';
import {useDispatch} from 'react-redux';

const Logout=()=>{
    const dispatch= useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout())
    };
    return(
        <div>
            <h1>Welcom Mr<span> Aziz</span></h1>
            <button className="logout_btn" onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    )
}
export default Logout;