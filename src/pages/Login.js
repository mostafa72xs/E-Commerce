import React, { useState } from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'
import "../components/css/login.css"
import { doSignInWithEmailAndPassword } from '../components/context/auth.js';
import { useAuth } from '../components/context/AuthProvider.js'
import { Navigate } from 'react-router-dom';


function Login() {

  const { userLoggedIn } = useAuth()
  const [ email , setEmail ] = useState()
  const [ password , setPassword ] = useState()
  const [ isSignIn , setSignIn] = useState(false)

    
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!isSignIn){
      setSignIn(true)
      await doSignInWithEmailAndPassword(email, password)
    }
  }


  return ( 
    <div className='Login'>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <Nav
      list={{display:'none',}}
      />
      <div className='twosec'>
        <div className='back'></div>
        <div className='scss'>
          <div className='cont322'>
            <div>
              <h1>Log in to Exclusive</h1>
              <p>Enter your detail below</p>
            </div>
            <form className='formism' onSubmit={handleSubmit}>
              <div className='csc2'>
                <input
                className='signs'
                type='email'
                name='email'
                placeholder='Email or Phone Number'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
              className='signs'
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <div className='subbtn d-flex mt-4'>
                <button className='login' type='submit'>Log in</button>
                <div>Forget Password?</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

}

export default Login
