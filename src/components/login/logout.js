import React from "react";
import { logout } from "../../features/userslice";
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
            <button className="logout_btn" onClick={(e)=>{
                handleLogout(e)
                console.log();
            }
                }>Logout</button>
        </div>
    )
}
export default Logout;