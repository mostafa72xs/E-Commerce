import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import "./css/itemcard.css"
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch} from 'react-redux'
import { addToCart } from './reduxStore/reducer';
import { useCart } from 'react-use-cart';
import { useProduct } from '../components/context/ProductsContext'



function Itemcard(props ) {

  const [ pro , setPro ] = useProduct()

  const [ heart , useHeart ] = useState(false)

  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(addToCart(props.data));
  }
  const { addItem } = useCart()
  
    const colors={
        yellow: "#FFAD33",
        grey:"a9a9a9"
    }

    const discount = (props.price - ((props.price / 100) * props.dis)) ;
    const stars = Array(5).fill(props.rate)

    const val = discount.toFixed(2);

  return (
    <div className='card' key={props.key}>
      <div className='boximg'>
        <div className='disnumber' style={props.redbox}>-{props.dis}%</div>
        <div className='saveicon'>
          <button className='like' style={props.redbox} onClick={addToCartHandler}><FaRegHeart /></button>
          <button className='wh' onClick={() => setPro(props.data)} ><a href='/ProductDetails' style={{color:'black'}}><IoEyeOutline /></a></button>
        </div>
        <img src={props.image} alt='products' className='imc' />
          <button className='addbtn' onClick={() => addItem(props.data , props.data.quantity)}>Add To Cart</button>

      </div>
      <div className='cbody'>
        <h1>{props.name}</h1>
        <p>${val} <span className='dis'>${props.price.toFixed(2)}</span></p>
        <div className='d-flex '>
        {stars.map((rating ,index) => {
        return (
              <FaStar
                  key={index}
                  size={20}
                  color={(rating) > index ? colors.yellow : colors.grey}
              />
          )
      })}
      <span className='dis' style={{textDecoration:'none'}}>({props.id})</span>
        </div>
      </div>
    </div>
  )
}

export default Itemcard;
