import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../components/css/cart.css' ;
import Cartitem from '../components/Cartitem'
import { useCart } from 'react-use-cart';
import { NavLink } from "react-router";



function Cart(props){

    const { totalUniqueItems , cartTotal , items} = useCart()



    const List = () =>{
        if(totalUniqueItems === 0){

            return(
                <div>
                    <h1>Cart is empty</h1>

                </div>
            )
            }
        else{
            return(
                items.map((item) => (
                    <Cartitem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        images={item.images[0]}
                        price={item.price}
                        quantity={item.quantity}
                        dis={item.discountPercentage}
                    />

            ))
            )
            
            }
        
    }

  return (
    <div>
        <Nav />
        <div className="itm container">
            <div className='hed'>Home / Cart</div>
            <div className='items'>
                <div className='titles'><div>Product</div><div>Price</div><div>Quantity</div><div>Subtotal</div></div>
                <div className='prod'>
                    <List />
                </div>
                <div className='bt'>
                    <NavLink to='/' end>
                    <button> Back To Shop </button>
                    </NavLink>
                    <button className='nothing'> Update Cart </button>
                </div>
            </div>
            <div className='total'>
                <div className='cod'>
                    <input type='text' placeholder='Coupon code' />
                    <button>Apply Coupon</button>
                </div>
                <div className='sub'>
                    <h1 style={{fontSize:'24px', marginLeft: '-320px'}}>Cart Total</h1>
                    <div className='secrows'>
                        <div className='rows'>
                            <p>SubTotal</p>
                            <p>{cartTotal.toFixed(2)}</p>
                        </div>
                        <div className='rows'>
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className='rows' style={{border:'none'}}>
                            <p>Total</p>
                            <p>{cartTotal.toFixed(2)}</p>
                        </div>
                    </div>
                    <NavLink to='/Checkout'>
                        <button>Procced To Checkout</button>
                    </NavLink>
                    
            </div>
        </div>
        </div>
        <Footer />
        </div>
        )}
export default Cart;