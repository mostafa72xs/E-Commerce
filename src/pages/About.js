import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Del from '../components/icons/del.svg'
import Serv from '../components/icons/Services.svg'
import Dast from '../components/icons/Services2.svg'
import Ic from '../components/icons/Frame 879.svg'
import "../components/css/about.css"
import { CiShop } from 'react-icons/ci'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import Bag from '../components/icons/Icon-Shopping bag.svg'
import Dots from '../components/icons/Frame 883.png'

function About() {
  return (
    <div>
        <Nav />
        <div className='container about'>
          <div className='tags d-flex'>Home /About</div>
          <div className='d-flex tworow'>
            <div className='tex'>
              <div className='center'>
                <h1>Our Story</h1>
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
              </div>
            </div>
            <div className='ime'>
              <img src='https://img.freepik.com/free-photo/portrait-bearded-male-dressed-grey-jacket-hat-isolated-grey-background_613910-3150.jpg?t=st=1740405067~exp=1740408667~hmac=931b58b1013b46e5dcacf9061d730329d50d8078b74536d2d86c8b2b3868ceab&w=1060' alt='img' height='609px' width='702px' />
            </div>
          </div>
          <div className='boxs'>
            <div className='rev'>
              <div className='logoicon'>
                  <CiShop size={35} />
              </div>
              <h1>10.5K</h1>
              <p>sallers active oursite</p>
            </div>
            <div className='rev'>
              <div className='logoicon'>
                <RiMoneyDollarCircleLine size={35} />
              </div>
              <h1>33K</h1>
              <p>monpnthly product sale</p>
            </div>
            <div className='rev'>
              <div className='logoicon'>
              <img src={Bag} alt='monyBag' width='35px' height='35px' />
              </div>
              <h1>45.5K</h1>
              <p>customer active in our site</p>
            </div>
            <div className='rev'>
              <div>
              <img src='https://cdn-icons-png.flaticon.com/512/245/245904.png' alt='monyBag' width='35px' height='35px' />
              </div>
              <h1>25K</h1>
              <p>anual grass sale in our sale</p>
            </div>
          </div>
          <div className='emplo'>
            <div className='persona p1'>
              <div className='personimg'>
                <img width='294px' height='397px' src='https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fL2Fb0p~BtPe0OCwHZnTfETd-INblPZ4CVsHDvBfUcuSK9dQfED0r0YKctwi94xPpIutue7MJbKhXntOXXpi7E5ZoZp5KYA4MX12~nycMz8dUnmBcXOO~bEzXzo~rxDN5B7UvXwzwrjfRgG6qgZnQP6TZRVyczz1c6EJha3UFk2S-dC29HAP3GWkP-r7BEvtuvqBZgoN9pdtpw5WKcdPKV7RLMR5mZPUMSZEw1llpNQAalLmA4ciXVlHrAel0yk8UXJ1rL59pGlHsr0floecnySYlFd0C-6vhWcICkkCumv5Q7dw0WpKJtxS8qp8Q1-tIMsEAm93047IwW3jEeOxLw__' alt='person' />
              </div>
              <div className='deat'>
                <h2>Tom Cruise</h2>
                <p>Founder & Chairman</p>
                <div>
                  <img src={Ic} alt='icons' />
                </div>
              </div>
            </div>
            <div className='persona p2'>
              <div className='personimg'>
                <img width='294px' height='397px' src='https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e9E0ZcLRuqnEOjrT3bRa-AAuIkTsWhJchQwlQhP5V6k04txAxEu~gzBE5mZVdR5TdzzB8MTIv6y7naIlaThJQdhVPTVdT0lR3Bj52L800bSBt4daV9myUsPgtZAFmp0XOULvmVLwAHWVVdPt0eAQ1V2WjLtZ6ZOLOtFst6lMuA~flUGR2j7SGN8IvBM~g00dBGTPbMCUdCKbs5kpSQ-GEgY5IDPy6rs-b18IIrRrL1U2A2H77pLqZ4tHTIJht-KXyA9sfiuKGwGhQ7FyDUCdvV4Qk28NbMrMaPsSLCBMMkoa8KVmy40uBbNOdmNwJsYuF39rFSzAMXjgBW7KJTCCOA__' alt='person' />
              </div>
              <div className='deat'>
              <h2>Emma Watson</h2>
                <p>Managing Director</p>
                <div>
                  <img src={Ic} alt='icons' />
                </div>
              </div>
            </div>
            <div className='persona p3'>
              <div className='personimg'>
                <img src='https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X2I~U~res9wdJeCl-J6Q~WGib~aHvBoqjbUjsZq1bjHimhILsGqioxq7Wog68cLS66hwKn7NiP3f7N3feQhOcf~gXJ6VAZmdGpXpTaMoYdvVt~2vGYEoqW9oqh7LR5gyXWutGZgXqWuDekCmWG5ESvZ5~es81Rxgr9oheHusezFwHvNgl~9PyhRbUpNIftPSU7uGxN-etHuP-xQUmZbKKJv7T-5bia4g1IcrgxazwZYa3yIJZUwWj~atDsVBKfMir99ARS0TzFjn4f54ZeIbjH-Uxr37uLkBGtqM1eiy6aIfekq3bP8dBt58nyYM~nYSmKSK~xQglxVck7clLEFzFw__' alt='person' width='294px' height='397px' />
              </div>
              <div className='deat'>
              <h2>Will Smith</h2>
                <p>Product Designer</p>
                <div>
                <img src={Ic} alt='icons' />
                </div>
              </div>
            </div>
          </div>
          <img src={Dots} alt='dots' className='dots' width='100px' height='15px' />
          <div className='six2'>
            <div className='Serv'>
              <img src={Del} alt='del' />
              <div>
                <h4>FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className='Serv'>
              <img src={Serv} alt='ser' />
              <div>
              <h4>24/7 CUSTOMER SERVICES</h4>
              <p>Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className='Serv'>
              <img src={Dast} alt='fad' />
              <div>
              <h4>MONEY BACK GUARANTEE</h4>
              <p>We return money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About