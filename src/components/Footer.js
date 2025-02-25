import React from 'react'
import './css/footer.css'
import Qr from './icons/Qr Code.svg'
import Play from './icons/Frame 718.svg'
import Icons from './icons/Frame 741.svg'



function Footer() {
  return (
    <footer>
        <div className='foot'>
            <div>
                <h3>Exclusive</h3>
                <h4>Subscribe</h4>
                <input type='email' placeholder='Enter your Email' />
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
    </footer>
  )
}

export default Footer