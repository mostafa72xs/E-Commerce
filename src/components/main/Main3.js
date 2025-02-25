import React from 'react'
import Itemcard from '../Itemcard'
import '../css/main.css'
import { NavLink } from 'react-bootstrap';


function Main3(props) {
  return (
    <section className='third'>
        <div className='name'>
            <div className='tod'>
              <div className='point'></div>
              <p>This Month</p>
            </div>
            <div className='d-flex bar'>
              <div className='d-flex'>
                <h1>Best Selling Products</h1>
              </div>
              <NavLink to='/Products'>
              <button className='boxv'>Veiw All</button>
              </NavLink>
            </div>
          </div>
          <div className='bs mt-3 d-flex'>
          {props.json.slice(0,4).map((item, index) => (
              <Itemcard
              key={index} 
              image={item.images[0]}
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
        </section>
  )
}

export default Main3