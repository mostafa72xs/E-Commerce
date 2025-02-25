import React from 'react'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'
import '../components/css/error.css'

function error() {
    return (
    <div>
        <Navigation />
        <div className='container er'>
            <p>Home / 404 Error</p>
            <div style={{height:'400px'}} className='d-flex flex-column justify-content-center align-items-center md-fs-'>
                <h1 className='error'>404 Not Found</h1>
                <p className='text-muted'>your visited page not found</p>
                <button style={{width:'254px' , height:'58px' , background:'#db4444' , borderRadius:'4px' , color:'white' , border:'none'}}>Back to home page</button>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default error;