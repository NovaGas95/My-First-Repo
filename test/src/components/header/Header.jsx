import React from 'react'
import './header.css'
import CTA from '../header/CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>John Doe</h1>
        <h5 className="text-light">Front-End Developper</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="logo" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header