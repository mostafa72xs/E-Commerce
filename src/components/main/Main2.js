import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import '../css/main.css'
import Smart from '../icons/Category-SmartWatch.svg';
import { NavLink } from 'react-bootstrap';


function Main2() {
  return (
    <section className='sec'>
        <div className='name'>
            <div className='tod'>
              <div className='point'></div>
              <p>Categories</p>
            </div>
            <div className='d-flex bar'>
              <div className='d-flex'>
                <h1>Browes By Category</h1>
              </div>
              <div className='arrows'>
                <button><FaArrowLeftLong /></button>
                <button><FaArrowRightLong /></button>
              </div>
            </div>
          </div>
          <div className='catess'>
          <NavLink to='/Products'>
            <div className='box'>
              <IoIosPhonePortrait 
              size={56}
              />
              <p>Phone</p>
            </div>
          </NavLink>
          <NavLink to='/Products'>
            <div className='box'>
              <HiOutlineDesktopComputer 
              size={56}
              />
              <p>Computer</p>
            </div>
            </NavLink>
            <NavLink to='/Products'>
            <div className='box'>
              <img src={Smart} alt='watch' width='56px' height='56px' />
              <p>SmartWatch</p>
            </div>
            </NavLink>
            <NavLink to='/Products'>
            <div className='box'>
              <CiCamera
              size={56}
              />
              <p>Camera</p>
            </div>
            </NavLink>
            <NavLink to='/Products'>
            <div className='box'>
              <CiHeadphones
              size={56} />
              <p>Headphones</p>
            </div>
            </NavLink>
            <NavLink to='/Products'>
            <div className='box'>
              <LuGamepad
              size={56}
              />
              <p>Gaming</p>
            </div>
            </NavLink>
          </div>
        </section>
  )
}

export default Main2