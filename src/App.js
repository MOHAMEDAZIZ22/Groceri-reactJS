import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header/header';
import Body from './components/Body/Body'
import Slider from './components/Body/Slider/Slider';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlice';
import ProductMenu from './components/Body/Product/ProductMenu/ProductMenu';

function App() {
  const user= useSelector(selectUser);

  return (
    <div className="App">
      <Header></Header>
      { user ? <Logout></Logout> : <Login></Login>}
      <Slider></Slider>
      <ProductMenu></ProductMenu>


      <Routes>
      <Route path='/Bev' element={<Body></Body>}></Route>
      <Route path='/Fru' element={<Body></Body>}></Route>
      <Route path='/Veg' element={<Body></Body>}></Route>
      <Route path='/Snac' element={<Body></Body>}></Route>
      <Route path='/Fash' element={<Body></Body>}></Route>
      </Routes>

    </div>


  );
}

export default App;
