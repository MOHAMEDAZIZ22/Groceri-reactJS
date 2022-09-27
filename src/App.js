import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header/header';
import Body from './components/Body/Body'
import Slider from './components/Body/Slider/Slider';
import ProductMenu from './components/Body/ProductMenu/ProductMenu';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <ProductMenu></ProductMenu>
      <Routes>
      <Route path='/Bev' element={<Body></Body>}></Route>
      <Route path='/Fru' element={<Body></Body>}></Route>
      {/* <Route path='/Veg' element={<Body></Body>}></Route> */}
      <Route path='/Snac' element={<Body></Body>}></Route>
      <Route path='/Fash' element={<Body></Body>}></Route>
      </Routes>

    </div>


  );
}

export default App;
