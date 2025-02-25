import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../components/css/profile.css';
import { useAuth } from '../components/context/AuthProvider';


function Profile(){
        const { userLoggedIn, currentUser } = useAuth();

    return(
        <div>
            <Nav />
            <div className='container profi'>
                <div className='mb-3'><p>Home / My Account</p> <h3>Welcome <span>{userLoggedIn ? currentUser.displayName ? currentUser.displayName : currentUser.email : ''}</span></h3></div>
                <div className='accounts'>
                    <div className='sidebook'>
                        <h5>Manage My Account</h5>
                        <ul>
                            <li>My Profile</li>
                            <li>Address Book</li>
                            <li>My Payment Option</li>
                        </ul>
                        <h5>My Orders</h5>
                        <ul>
                            <li>My Orders</li>
                            <li>My Cancellations</li>
                        </ul>
                            <h5>My Wishlist</h5>
                    </div>
                    <div className='forms32'>
                        <h1 style={{color:'#DB4444'}}>Edit Your Profile</h1>
                        <form className='f321'>
                            <div className='formgrid'>
                                <div>
                                    <label>First Name</label>
                                    <input type='text' />
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input type='text' />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input type='email' />
                                </div>
                                <div>
                                    <label>Address</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='passgrid'>
                                <p>Password Changes</p>
                                <input type='password' placeholder='current password'/>
                                <input type='password' placeholder='new password'/>
                                <input type='password' placeholder='confirm new password'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )


}

export default Profile