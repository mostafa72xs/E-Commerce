import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Itemcard from '../Itemcard'
import '../css/main.css'
import { NavLink } from 'react-bootstrap'

function Main5(props) {
  return (
    <secction className='fifth'>
        <div className='name'>
            <div className='tod'>
              <div className='point'></div>
              <p>Our Products</p>
            </div>
            <div className='d-flex bar'>
              <div className='d-flex'>
                <h1>Explore Our Products</h1>
              </div>
              <div className='arrows'>
                <button><FaArrowLeftLong /></button>
                <button><FaArrowRightLong /></button>
              </div>
            </div>
          </div>
          <div className='lastbs'>
          {props.json.slice(0,8).map((item, index) => (
              <Itemcard
              key={index} 
              image={item.images[0]}
              name={item.title}
              price={item.price}
              rate={item.rating}
              id={item.id}
              item={item}
              dis={item.discountPercentage}
              redbox={{display: 'none'}}
              />
              ))}
          </div>
          <NavLink to='/Products'>
              <button className='allpro'>
                View All Products
            </button>
          </NavLink>
          
        </secction>
  )
}

export default Main5