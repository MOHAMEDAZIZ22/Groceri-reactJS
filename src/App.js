import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header/header';
import Body from './components/Body/Body'
// import Sliderimg from './components/Body/Product/Sliderimages';

import Slider from './components/Body/Slider/Slider';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlice';
import ProductMenu from './components/Body/Product/ProductMenu/ProductMenu';
// import ProductList from './components/Body/Product/Productlist/productlist';

function App() {
  const user= useSelector(selectUser);

  return (
    <div className="App">
      <Header></Header>
      <Routes> <Route path='/Logsign' element={  user ? <Logout></Logout> : <Login></Login>}></Route></Routes>
      {/* <Sliderimg></Sliderimg> */}
      <Slider></Slider>
     
      <Routes>
      
      <Route path='/Fru' element={<Body></Body>}></Route>
      <Route path='/Veg' element={<Body></Body>}></Route>
      <Route path='/Snac' element={<Body></Body>}></Route>
      <Route path='/Fash' element={<Body></Body>}></Route>
    
 <Route path='/cart' element={<Body></Body>}></Route>
      </Routes>
    

      <ProductMenu></ProductMenu>
      <Routes>
      <Route path='/Bev' element={<Body ></Body>}></Route>
      </Routes>

    </div>


  );
}

export default App;
