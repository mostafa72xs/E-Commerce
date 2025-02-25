import React, { useState } from 'react';
import './css/navbar.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from 'react-icons/ci';
import { useCart } from 'react-use-cart';
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from './context/AuthProvider';
import { doSignOut } from './context/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navigation(props) {
  const [expanded, setExpanded] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const { userLoggedIn, currentUser } = useAuth();
  const [ over , setOver ] = useState(false)
  const cartitem  = useSelector( (state) =>  state.cart.cart  )


  function logout() {
    doSignOut().then(() => { navigate('/Login') });
  }

  function Prof() {
    if (userLoggedIn) {
      return (
        <div>
          <FaUserCircle size={30} className='usericon' onClick={() => setOver(!over)} />
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <div className="bg-dark text-white text-center py-2">
        Summer Sale for All Swim Suits And Free Express Delivery - OFF 50% 
        <Button variant="link" className="text-white text-decoration-underline">Shop Now</Button>
      </div>
      
      <Navbar expanded={expanded} expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">Exclusive</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="me-auto lulu">
              <Nav.Link href="/"> Home</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Signup">Sign Up</Nav.Link>
            </ul>
            <div className="d-flex align-items-center">
              <div className="d-flex me-3 serch">
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className="me-2"
                  aria-label="Search"
                />
                  <CiSearch size={24} />
              </div>
              <Nav.Link href="/Wishlist" className="me-3" style={props.list}>
                <CiHeart size={24} />
                {cartitem.length > 0 && (
                  <span className=" WL position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartitem.length}
                  </span>
                ) 
                }
              </Nav.Link>
              <Nav.Link href="/Cart" className="position-relative me-3" style={props.list}>
                <IoCartOutline size={24} />
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                )}
              </Nav.Link>
            </div>
            <Prof />
            <div className='accover' style={over? { display:'flex' } : {display: 'none'}}>
                <p>Name: {userLoggedIn ? currentUser.displayName ? currentUser.displayName : currentUser.email : ''}</p>
                <ul>
                  <li><a href='/Profile'>Profile</a></li>
                  <li><a href='/Wishlist'>Wishlist</a></li>
                  <li><a href='/Cart'>Cart</a></li>
                </ul>
                <button onClick={logout}>Logout</button>
            </div> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
