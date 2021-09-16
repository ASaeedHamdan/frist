import React, { useState } from 'react'
import logo from '../images/logo.png'

function Navbar() {
    const [nav,setnav] = useState(false);
    const changeBackground = ()=>
    {
        if(window.scrollY >= 50)
        {
            setnav(true);
        }
        else {
                setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return (
       <nav className={nav ? 'nav active' :'nav'}>
            <a href="#" className="logo">
              <h1> Haaba</h1>
             </a>
             <input type='checkbox' className='menu-btn' id = 'menu-btn'/>
             <label className='menu-icon' for='menu-btn'>
                 <span className='nav-icon'></span>
             </label>
             <ul className='menu'>
                 <li><a href='#'className="active">الصفحه الرئيسيه</a></li>
                 <li><a href='#'>ماركه</a></li>
                 <li><a href='#'>الطلبات</a></li>
                 <li><a href='#'>الاصناف </a></li>
             </ul>
       </nav>
    )
}

export default Navbar
