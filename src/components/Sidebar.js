import React from 'react'
import { TiChevronRight } from "react-icons/ti";



function Sidebar() {
  return (
    <div style={{width: '20%' , height:'344px'}} className='sidebar col-3'>
        <ul className='list-unstyled g-2 side' style={{textAlign:'left',}}>
            <li className='list-inline-item'>Women's Fashion <TiChevronRight style={{marginLeft: '100px'}} /></li>
            <li className='list-inline-item'>Men's Fashion <TiChevronRight   style={{marginLeft: '120px'}} /></li>
            <li className='list-inline-item'>Electornics</li>
            <li className='list-inline-item'>Home & Lifestyle</li>
            <li className='list-inline-item'>Medicine</li>
            <li className='list-inline-item'>Sports & Outdoor</li>
            <li className='list-inline-item'>Baby's & Toys</li>
            <li className='list-inline-item'>Groceries & Pets</li>
            <li className='list-inline-item'>Health & Beauty</li>
        </ul>
    </div>
  )
}

export default Sidebar;