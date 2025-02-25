import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Nav'
import './css/header.css'
import Iphone from './icons/Frame 563.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-bootstrap'



function header() {
  return (
    <div className='header'>
        <Navbar />
        <div className='lineH'></div>
        <div className='container-lg container-fluid d-flex'>
            <Sidebar />
            <div className='im'>
                <div className='head'>
                    <div className='im89'>
                      <img src={Iphone} alt='img' />
                      <h1 className='foo mt-3 mr-4'>Up to 10% <br/> off Voucher</h1>
                      <button className='whitesbtn mt-3' ><NavLink to='/Products'>Shop Now <FaArrowRightLong /></NavLink></button>
                    </div>
                    <img className='col-6 pk' src='https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WmmSosBl4QmYNsyoVe7Wc5ve0beqJgURSzqppeFvT2o5BNxosnbgO742rX6N1Q8tKe4tLBMhHsJrg0EGvo9Dp1aGHgq3lsnzqo6zmuTCwW94R5O-47VfTgp7meg~plxZc0evvT3V-PLawM-UMMPQauzRJ0rTdwlgMpIEp8pPFDl0mp3kukcjrAqf5mzfmCmf-MYLqFO6FA8UdLbkO6ERXSW0icEsKFpOvOatQiPzTU6fYSpCqWE0gftxH0frKWb6lbiyFStDM6RAoAm7IJ39p9dkUGCXHPvLezSK1JR8BoYwmWJc68CVQ4B1bWbRPPiiEwyZ37tsLrOEdhNBaTB4eg__' alt='head' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default header;