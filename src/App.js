import Header from './components/Header/header';
import Menus from './components/menus/menu';
import Login from './components/login/login';
import Slider from './components/Header/slideimages';
import { useSelector} from 'react-redux';
import { selectUser } from './features/userslice';
import { Routes, Route, Link} from "react-router-dom";
import React,{useEffect, useState } from 'react';
import AddContext from './context';
import Fruitslist from './components/menus/fruites/fruitelist';
import Cartholder from  './components/addcart/cartholder';
import TopDeals from './components/Topdeals/topdeals'
// import Search from './components/Search/Searchbar.js';


function App() {
  const[cart,setCart]=useState([]);
  const[qty,setQty]=useState(0);
    const addCart=(item)=>{
      
    setCart((preitems)=>{
        return[item,...preitems]
      })
    }

    const [veg, setVeg] = useState([]);
    const [fru, setFru] = useState([]);
    const [gro, setGro] = useState([]);
    const[fash,setFash]=useState([]);
    const [total, setTotal] = useState([]);


    useEffect(() => {
        
        fetch("https://63159b6c33e540a6d37fdf21.mockapi.io/vegtables").then(res=>res.json())
        .then(dat => setVeg(dat))

        fetch("https://63159b6c33e540a6d37fdf21.mockapi.io/snacks").then(res=>res.json())
        .then(dat => setGro(dat))

        fetch("https://63159b6c33e540a6d37fdf21.mockapi.io/fruit").then(res=>res.json())
        .then(dat => setFru(dat))

        fetch("https://63159b6c33e540a6d37fdf21.mockapi.io/fashion").then(res=>res.json())
        .then(dat => setFash(dat))

    }, [])
    

    useEffect(()=>{
      setTotal(()=>{
        return [...veg,...fru,...gro,...fash];
      })
    },[veg,fru,gro,fash])


  const user=useSelector(selectUser);
  useEffect(()=>{
    console.log(user.loggedIn);
  },[user])
  return (
    <div className="App">
      <AddContext.Provider value={{addCart,cart,setQty,qty,total}}>
      <Header/>
      <Slider></Slider>
      {/* <Search></Search> */}
      <Routes>
        <Route  index element={<Menus/>}></Route>
        <Route path='/item/:lists' element={<Fruitslist/>}></Route>
        <Route path='addcart' element={<Cartholder/>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='t' element={<TopDeals></TopDeals>}></Route>
      </Routes>
      {/* <Menus/> */}
      
      </AddContext.Provider>
    </div>
  );
}

export default App;
