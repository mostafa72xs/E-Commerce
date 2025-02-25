import React from 'react'
import '../css/main.css'
import Itemcard from '../Itemcard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


function Main1(props) {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }; 

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        return (
        <button onClick={() => onClick()} className='right'>
          <FaArrowRightLong />
              </button>
        );
      };
      const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        return (
        <button onClick={() => onClick()} className='left'>
          <FaArrowLeftLong />
              </button>
        );
      };
    

  return (
        <section className='container first'>
          <div className='name'>
            <div className='tod'>
              <div className='point'></div>
              <p>Today's</p>
            </div>
            <div className='d-flex bar'>
              <div className='d-flex'>
                <h1>Flash Sales</h1>
              <div className='time'></div>
              </div>
              
            </div>
          </div>
          <div className='two'>
            <Carousel responsive={responsive}
            draggable={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            showDots={false}
            swipeable={true}
            infinite={true}
            >
              {props.json.slice(10, 25).map((item, index) => (
                <Itemcard
                key={index} 

              image={item.images[0]}
              name={item.title}
              price={item.price}
              rate={item.rating}
              id={item.id}
              dis={item.discountPercentage}
              data={item}
              />
              ))}
            </Carousel>
          </div>
              <button className='allpro'>
                View All Products
            </button>
        </section>
  )
}

export default Main1;