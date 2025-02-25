import React , { useState , useEffect } from 'react'
import { useProduct } from '../components/context/ProductsContext'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../components/css/productsD.css'
import { FaStar } from 'react-icons/fa6'
import { FaRegHeart } from "react-icons/fa";
import Itemcard from '../components/Itemcard';
import Deel from '../components/icons/icon-delivery.svg';
import Return from '../components/icons/Icon-return.svg';
import { useCart } from 'react-use-cart'


function ProductDetails() {

const data = [
    {
    "id": 1,"title": "Essence Mascara Lash Princess","description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.","category": "beauty","price": 9.99,"discountPercentage": 7.17,"rating": 4.94,"brand": "Essence","weight": 2,"dimensions": {    "width": 23.17,    "height": 14.43,    "depth": 28.01},"images": [    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"],
},
{
    "id": 2,"title": "Eyeshadow Palette with Mirror","description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.","category": "beauty","price": 19.99,"discountPercentage": 5.5,"rating": 3.28,"brand": "Glamour Beauty","dimensions": {    "width": 12.42,    "height": 8.63,    "depth": 29.13},"images": [    "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"],
},
{
    "id": 3,"title": "Powder Canister","description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.","category": "beauty","price": 14.99,"discountPercentage": 18.14,"rating": 3.82,"brand": "Velvet Touch","dimensions": {    "width": 24.16,    "height": 10.7,    "depth": 11.07},"images": [    "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"],
},
{
    "id": 4,"title": "Red Lipstick","description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.","category": "beauty","price": 12.99,"discountPercentage": 19.03,"rating": 2.51,"brand": "Chic Cosmetics","dimensions": {    "width": 14.37,    "height": 13.94,    "depth": 14.6},"images": [    "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"],
}]



    const { addItem , updateItemQuantity  } = useCart()

    const [ pro , setPro ] = useProduct();
    const [ count , setCount ] = useState(0)
    console.log(pro)
        const stars = Array(5).fill(pro.rating)
        const colors={
            yellow: "#FFAD33",
            grey:"a9a9a9"
        }
        const sizes = document.querySelectorAll('.size');
        sizes.forEach(button => {
            button.addEventListener('click', () => {
            sizes.forEach(button => button.classList.remove(' select'));
            button.classList.add(' select');
            });
          });
        



return (
    <div>
        <Nav />
        <div className='container'>
            <p>Home/ {pro.category} /<b>{pro.title}</b></p>
            <div className='proDetails'>
                <div className='imagescol'>
                    <div style={{background:'#f5f5f5'}}>
                    <img src={pro.images[1]} alt='two'  />
                    </div>
                    <div style={{background:'#f5f5f5'}}>
                        <img src={pro.images[2]} alt='three' />
                    </div>
                </div>
                <div className='bigimage' style={{background:'#f5f5f5'}}>
                    <img src={pro.images[0]} alt='mainimg'/>
                </div>
                <div className='details'>
                    <h2 style={{fontSize: '24px' , fontWeight:'bolder'}}>{pro.title}</h2>
                    <div className='stars d-flex'>
                        {stars.map((rating ,index) => {
                                return (
                                        <FaStar
                                            key={index}
                                            size={20}
                                            color={(rating) > index ? colors.yellow : colors.grey}
                                        />
                                    )
                                })}
                                <span className='dis' style={{textDecoration:'none'}}>({pro.reviews.length} reviews)  |</span>
                                <p style={{color:'#00ff66'}}> in stock</p>
                    </div>
                    <h2 style={{fontSize: '24px'}}>${pro.price}</h2>
                    <p style={{fontSize: '14px'}}>{pro.description}</p>
                    <div className='line'></div>
                    <div className='colors d-flex mt-3 justifyContent-space-between'>
                        <p style={{fontSize:'20px'}}>Colours:</p> <div style={{background:'black' , height:'20px' , width:'20px' , borderRadius:'50%',}}></div>
                        <div style={{background:'grey' , height:'20px' , width:'20px' , borderRadius:'50%',}}></div>
                    </div>
                    <div className='sizes d-flex'>
                        <p style={{fontSize:'20px'}}>Size:</p>
                        <button id='sizes' className='size'>XS</button>
                        <button id='sizes' className='size'>S</button>
                        <button id='sizes' className='size'>M</button>
                        <button id='sizes' className='size'>L</button>
                        <button id='sizes' className='size'>XL</button>
                    </div>
                    <div className='cb'>
                        <div className='cnn'>
                            <button className='run' onClick={() => updateItemQuantity(pro.id, (pro.quantity ?? 0) - 1)}>-</button>
                            <p className='d-inline pp'>{ pro.quantity ? pro.quantity : 1 } </p>
                            <button className='run' onClick={() => updateItemQuantity(pro.id, (pro.quantity ?? 0) + 1)}>+</button>
                        </div>
                        <button className='btnx' onClick={() => addItem(pro)}>Buy Now</button>
                        <button className='btnheart'><FaRegHeart /></button>
                    </div>
                    <div className='days'>
                        <div className='freeD' style={{borderBottom: '1px solid grey'}}>
                            <div>
                                <p>Free Delievry</p>
                                <p style={{fontSize:'12px'}}>Enter your Postal code</p>
                            </div>
                        </div>
                        <div className='freeD'>
                            <div>
                                <p>Return Delievry</p>
                                <p style={{fontSize:'12px'}}>Free 30 Days Delievry Return <u>details</u></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xr mt-5'>
            <div className='name'>
            <div className='d-flex bar mb-5'>
                <div className='tod'>
                <div className='point'></div>
                <p>Just For You</p>
            </div>
        </div>
            </div>
            <div className='bs d-flex '>
            {data.map((item, index) => (
                <Itemcard
                key={index}
                image={item.images}
                name={item.title}
                price={item.price}
                rate={item.rating}
                id={item.id}
                dis={item.discountPercentage}
                data={item}
                />
                ))}
            </div>
        </div>
        </div>
        <Footer />
    </div>
)
}

export default ProductDetails;
