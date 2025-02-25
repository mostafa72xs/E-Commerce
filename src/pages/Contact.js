import React from 'react'
import Nav from '../components/Nav'
import Footer from "../components/Footer"
import Phone from '../components/icons/icons-phone.svg'
import Email from '../components/icons/icons-mail.svg'
import '../components/css/contact.css'

function Contact() {
  return (
    <div>
        <Nav />
        <div className='container contact'>
            <div>Home / Contact</div>
        <div className='d-flex cont21'>
            <div className='boxtex'>
                <div className='texts'>
                    <div style={{borderBottom: '1px solid grey'}}>
                        <h1 style={{fontSize: '16px'}}><img src={Phone} alt='phone' width='40px' height='40px' />  Call Us</h1>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <div>
                        <h1 style={{fontSize: '16px'}}><img src={Email} alt='email' width='40px' height='40px' />  Write To Us</h1>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
            </div>
            <div className='forms'>
                <form>
                    <div>
                        <input type='email' placeholder='Your Email'/>
                        <input type='password' placeholder='Your Password'/>
                        <input type='number' placeholder='Your Phone'/>
                    </div>
                    <input className='mass' type='text' placeholder='Your Massage' />
                    <button>Send Massage</button>
                </form>
            </div>  
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact