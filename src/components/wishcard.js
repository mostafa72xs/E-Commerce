import React from 'react'
import { FaStar } from 'react-icons/fa6'
import "./css/itemcard.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch} from 'react-redux'
import { removeItem } from './reduxStore/reducer';
import { useCart } from 'react-use-cart';

function Wishcard(props) {

  const dispatch = useDispatch()

const Wishlist = () =>{
    dispatch(removeItem(props.id))
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
    <div classNamr='card' key={props.id}>
      <div className='boximg'>
        <div className='disnumber' style={props.redbox}>-{props.dis}%</div>
        <div className='saveicon'>
          <button className='like' onClick={Wishlist}><FaRegTrashAlt /></button>
        </div>
        <img src={props.image[0]} alt='products' className='imc' />
        <button className='addbtn' onClick={() => addItem(props.data)}>Add To Cart</button>
      </div>
      <div className='cbody'>
        <h1>{props.name}</h1>
        <p>${val}</p>
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

export default Wishcard;