import React from 'react'
import '../css/main.css'
import { NavLink } from 'react-bootstrap';



function Main4() {
  return (
    <section className='four'>
            <div className='spea'>
              <p style={{color: '#00FF66'}}>categories</p>
              <h1 style={{color:'white'}}>Enhance Your <br/>Musice Experience</h1>
              <div className='time'>
                <div className='count'>
                  <p>23</p>
                  <span>Hours</span>
                </div>
                <div className='count'>
                  <p>05</p>
                  <span>Days</span>
                </div>
                <div className='count'>
                  <p>59</p>
                  <span>Minutes</span>
                </div>
                <div className='count'>
                  <p>35</p>
                  <span>Seconds</span>
                </div>
              </div>
              <NavLink to='/Products'>
              <button className='bn'>Buy Now</button>
              </NavLink>
            </div>
            <div className='speaker spea'>
              <div className='blur'>
                <img src='https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Cc4-5AOni1iGJ35LKtq0qQMU07KqNgqOAoOZ9yqpiwlVd98~RlTvIORJg4JvnUG16gGUgzCKMZRUbw3ztE9yNH2cRQtu3m-j7~0Mf~7I6irKyqJ6ZDDOGqxecjQYtZiKgu7UBauBEiDn5XClEJF1mRODuoqnLVk95EafTehqPnARgSoxoqKyVD6lnnu0dS5ky68nRdFjSJ28HiggFP8iQwnZz9QsJ3umsOiUBaILfaGYBhQV6~dg~nBsN2v-lrzzMwA-bjoCdqHkeav3xewDLI-IEJJixZ9sLGczs6EkF6WiP3A6buInJH9brfDriANXUCwOvrpqYvKsIEX8eJN8gg__' alt='speaker' />
              </div>
            </div>
        </section>
  )
}

export default Main4