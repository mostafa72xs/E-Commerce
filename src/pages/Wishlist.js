import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import '../components/css/wishlist.css'
import Wishcard from '../components/wishcard'
import { useSelector } from 'react-redux';
import Itemcard from '../components/Itemcard';

function Wishlist(props) {

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

  const cartitem  = useSelector( (state) =>  state.cart.cart  )

  const Wishcards = () =>{
    if(cartitem.length < 0 ){
      return(
        <div>
          the Wishlist  is empty
        </div>
      )
    }
    else{
      return(
        cartitem.map((item , index) => (
        <Wishcard key={index} 
        image={item.images}
        name={item.title}
        price={item.price}
        rate={item.rating}
        id={item.id}
        dis={item.discountPercentage}
        data={item}
        redbox={{display: 'none'}} />
      ))
      )
      
    }
  }

  return (
    <div className='wish'>
      <Nav />
        <div className='container'>
            <div>
                <div className='title'>
                    <h1>Wishlist</h1>
                    <button>Move All To Bag</button>
                </div>
                <div className='gridee'>
                  <Wishcards />
                </div>
              <div className='x'>
              <div className='name'>
            <div className='d-flex bar mb-3'>
              <div className='tod'>
              <div className='point'></div>
              <p>Just For You</p>
            </div>
              <button className='boxv'>See All</button>
            </div>
          </div>
          <div className='bs d-flex'>
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
              redbox={{display: 'none'}}
              />
              ))}
          </div>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Wishlist