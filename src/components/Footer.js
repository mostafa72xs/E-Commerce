import React from 'react'
import './css/footer.css'
import Qr from './icons/Qr Code.svg'
import Play from './icons/Frame 718.svg'
import Icons from './icons/Frame 741.svg'
import { LuSendHorizontal } from "react-icons/lu";



function Footer() {
  return (
    <footer>
        <div className='foot'>
            <div>
                <h3>Exclusive</h3>
                <h4>Subscribe</h4>
                <p>Get 10% of your first order</p>
                <div className='d-flex justify-content-around align-items-center ' style={{width:'217px' , height:'48px', border: '1px solid white', borderRadius:'4px' }}>
                    <input type='email' className='eims' placeholder='Enter your Email' />
                    <LuSendHorizontal size={30} color='white' />
                </div>
                
            </div>
            <div>
                <h3>Support</h3>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div>
                <h3>Account</h3>
                <ul>
                    <li>My Account</li>
                    <li>Login/ Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div>
                <h3>Quick Link</h3>
                <ul>
                    <li>Privecy Policy</li>
                    <li>Terms Of Us</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3>Download App</h3>
                <div>
                    <p>Save $3 With App New User Only</p>
                    <div className='d-flex'>
                        <img src={Qr} alt='qr code' />
                        <img src={Play} alt='playstore' />
                    </div>
                    <div className='iconss'>
                        <img src={Icons} alt='iconss' />
                    </div>
                </div>
            </div>
        </div>
        <div style={{borderTop:'1px solid grey' , width:'100%' , height:'50px',}} className='d-flex justify-content-around align-items-center'>
            <p style={{color:'grey',fontSize:'18px'}}>© Copyright Rimel 2022. All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer
