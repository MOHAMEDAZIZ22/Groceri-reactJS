import React from 'react'
import { IoLogInSharp } from 'react-icons/io5'
import { FaShippingFast } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <div>
      <h1><a href='/home'>JIO mart</a></h1>
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
      <div>
        <ul>
            <li><a href="#search"><input type="text" placeholder='Search essentials,groceries and more...' /></a></li>
            <div className='loginsignup'>
            <li className='listlog'><a href='/loginsignin' ><IoLogInSharp size={30}></IoLogInSharp>LogIn/SingnUp</a></li>
            </div>
            <div className='carticon'>
            <li className='listcart'><a href="/cart" >
              {/* <span className='cartspan'>&#128722;</span> */}
              <span className='cartspan'><FaShippingFast size={40} ></FaShippingFast>Cart</span>
              </a></li>
            </div>
        </ul>
      </div>
    </header>
  )
}

export default Header


// import React from 'react'
// import{Navbar,Nav,Container} from 'react-bootstrap'

// const Header = () => {
//   return (
//     <div>
//       <header>
//       <Navbar bg="dark" variant="dark">
//         <Container >
//           <Navbar.Brand href="#home">ShopMart</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#search">
//               <input type="text" placeholder='Search' />
//             </Nav.Link>
//             <Nav.Link href="#LogIn/SignIn">LogIn/SignIn</Nav.Link>
//             <Nav.Link href="#Cart">Cart</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       </header>
//     </div>
//   )
// }

// export default Header

