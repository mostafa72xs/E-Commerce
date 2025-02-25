import React, { useState } from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'
import "../components/css/signup.css"
import { doCreateUserWithEmailAndPassword , doSignInWithGoogle } from '../components/context/auth.js'
import { useAuth } from '../components/context/AuthProvider.js'
import { Navigate } from 'react-router-dom';

function Signup() {
  const { userLoggedIn } = useAuth();
  const [displayName , setUserName] = useState()
  const [password , setPassword] = useState()
  const [email , setEmail] = useState()
  const [ isReg , setIsReg ] =useState()
    
  
    const onSubmit = async (event) =>{
      event.preventDefault()
      // Check if username already exists
      if(!isReg){
        setIsReg(true)
        await doCreateUserWithEmailAndPassword( email , password )
      }
    }
    
    const google= async () =>{
      if(!isReg){
        setIsReg(true)
        await doSignInWithGoogle().catch(error => setIsReg(false))
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
          <div className='scss' >
            <div className='cont322'>
            <div>
              <h1>Create an account</h1>
              <p>Enter your detail below</p>
            </div>
            <form style={{ height: '176px' , width:'371px' }} onSubmit={onSubmit} className='formsim'>
              <div className='csc'>
              <input 
              className='signs'
                type='text'
                name='username'
                placeholder='Name'
                onChange={(e) => { setUserName(e.target.value)}}/>
              <input
              className='signs'
                type='email'
                name='email'
                placeholder='Email or Phone Number'
                onChange={(e) => { setEmail(e.target.value)}}/>
              <input
              className='signs'
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => {setPassword(e.target.value)}}
              />
              </div>
              <div className='creted'>
                <button type='submit'>Create account</button>
                <button className='goog' onClick={google}>
                  <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt='google' width='30px' height='30px' />
                  Sign Up With Google
                </button>
                  <p>Already have an account? <a href='/Login'>Log In</a></p>
              </div>
            </form>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup
