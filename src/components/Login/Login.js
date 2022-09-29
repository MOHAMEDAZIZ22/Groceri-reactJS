import React, { useState } from "react";
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from "../../Features/userSlice";
import { CgProfile } from 'react-icons/cg'

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true
      })
    );

  };
  return (
    <div className="logincontain">
      <div className="login" onSubmit={(e) => handleSubmit(e)}>
        <form className="login_form">
        <p className="icon"><CgProfile fontSize={130} color='#008ecc' /></p>
          <input type='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="sub_btn">Submit</button>
        </form>
      </div>
    </div>
  )
}
export default Login;