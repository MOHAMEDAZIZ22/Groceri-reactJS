import './App.css';
import Header from './components/header'
import Body from './components/body'
import Slider from './components/Pages/Sliderimages';
import Productdeals from './components/Productdeals'
import { Routes, Route } from 'react-router-dom'
// import Loginsignin from './Components/Pages/Loginsignin';

import Cookiefetch from './components/Cookies/Cookiefetch'
import Fashionfetch from './components/Fashion/Fashionfetch'
import Audiofetch from './components/Audio/Audiofetch'
import Description from './components/Description/Description'
import Descriptionfashion from './components/Description/Descriptionfashion'
import Descriptioncook from './components/Description/Descriptioncook'
import Descriptionheadset from './components/Description/Descriptionheadset'
import Loginsignin from './components/Pages/Loginsignin'
import Logout from './components/Pages/Logout'
import { useSelector } from 'react-redux';
import { selectUser } from './Feauters/Userslice';

function App() {
  const user=useSelector(selectUser)
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      {/* {user ? <Logout></Logout>:<Loginsignin></Loginsignin>} */}
      <Productdeals></Productdeals>
      <Routes>
        <Route path='/loginsignin' element={user ? <Logout></Logout>:<Loginsignin></Loginsignin>}></Route>
        <Route path='/fruitsandveg' element={<Body></Body>}></Route>
        <Route path='/Snacks' element={<Cookiefetch></Cookiefetch>}></Route>
        <Route path='/beverage' element={<Fashionfetch></Fashionfetch>}></Route>
        <Route path='/Fashion' element={<Audiofetch></Audiofetch>}></Route>
        <Route path='des/:id' element={<Description></Description>}></Route>
        <Route path='desfas/:id' element={<Descriptionfashion></Descriptionfashion>}></Route>
        <Route path='descook/:id' element={<Descriptioncook></Descriptioncook>}></Route>
        <Route path='desaudio/:id' element={<Descriptionheadset></Descriptionheadset>}></Route>
      </Routes>

      {/* <Body></Body>  */}

    </div>

  );
}
export default App;
