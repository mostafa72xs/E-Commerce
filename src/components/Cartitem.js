import React from 'react'
import {FaChevronUp} from 'react-icons/fa'
import {FaChevronDown} from 'react-icons/fa'
import './css/cart.css'
import {useDispatch} from 'react-redux';
import { useCart } from 'react-use-cart'

function Cartitem(props){

    const { updateItemQuantity , removeItem } = useCart()
    
    const discount = (props.price - ((props.price / 100) * props.dis)) ;
    const val = discount.toFixed(2);
    
    

    const subtotal  = val * props.quantity
    return (
    <div className='item' key={props.id}>
        <div className='brand'>
            <button className='remove' onClick={() => removeItem(props.id)}>X</button>
            <div style={{width:"56px" , height:'56px' }}>
                <img src={props.images} alt='imgss' width='56px' height='56px' />
            </div>
            <p>{props.title}</p>
        </div>
        <div>
            <p>${val}</p>
        </div>
        <div className='c'>
            <div>{props.quantity}</div>
            <div className='z'>
                <button onClick={() => updateItemQuantity(props.id, (props.quantity ?? 0) + 1)}><FaChevronUp /></button>
                <button onClick={() => updateItemQuantity(props.id, (props.quantity ?? 0) - 1)}>< FaChevronDown /></button>
            </div>
        </div>
        <div>
            <p>${subtotal.toFixed(2)}</p>
        </div>
    </div>
)
}

export default Cartitem