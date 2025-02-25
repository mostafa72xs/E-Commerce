import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../components/css/checkout.css';
import { useCart } from 'react-use-cart';
import { NavLink } from 'react-bootstrap';


function Checkout() {
    const { cartTotal , items} = useCart()
  return (
    <div>
        <Nav />
        <div className='container out mt-5'>
            <p>Home / <b>Checkout</b></p>
            <h1 className='mb-3'>Billing Details</h1> 
            <div className='d-flex ch21'>
                <div className='Address'>
                    <label>Frist Name</label>
                    <input type='text' placeholder='Your Name' />
                    <label>Company Name</label>
                    <input type='text' placeholder='company name' />
                    <label>Street Address</label>
                    <input type='text' placeholder='street address' />
                    <label>Apartment,floor,etc (optional)</label>
                    <input type='text' placeholder='Address' />
                    <label>Town/City</label>
                    <input type='text' placeholder='town/city' />
                    <label>Phone Number</label>
                    <input type='number' placeholder='Phone Number'/>
                    <label>Email Address</label>
                    <input type='email' placeholder='Email Address'/>
                    <div className='d-flex'>
                        <input type='checkbox' className='checksbox' />
                        <p>Save this information for faster checkout next time</p>
                    </div>
                </div> 
                <div className='check302'>
                    <ul className='ip301'>
                        {items.map((item , index) =>(
                            <li key={index} className='x300 d-flex'>
                                <div className='d-flex'>
                                <img src={item.images[0]} alt={item.title} height='50px' width='50px' />
                                <p className='para'>{item.title}</p>
                                </div>
                                <p>${item.price.toFixed(2)}</p>
                            </li>
                        ) )
                        }
                    </ul>
                    <div className='tot mt-3'>
                        <div className='subtot d-flex'>
                            <p>SubTotal</p>
                            <p>${cartTotal.toFixed(2)}</p>
                        </div>
                        <div className='subtot d-flex'>
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className='subtot d-flex'>
                            <p>Total</p>
                            <p>${cartTotal.toFixed(2)}</p>
                        </div>
                    </div>
                    <div classNamr='radio ml-2 mt-2'>
                        <div className='rad'>
                            <input id='bank' type='radio' name='money' value='bank' />
                            <label for='bank'>Bank</label>
                        </div>
                        <div className='rad'>
                            <input id='cash' type='radio' name='money' value='cash' />
                            <label for='cash'>Cash</label>
                        </div>  
                    </div>
                    <div className='cou ml-2'>
                        <input type='text' placeholder='coupon code' />
                        <button>Apply Coupon</button>
                    </div>
                    <NavLink to='/Error'>
                    <button className='po'>Place Order</button>
                    </NavLink>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout