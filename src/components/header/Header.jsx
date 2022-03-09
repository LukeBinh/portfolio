import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/nhatbinh2.jpg'
import Headersocials from './Headersocials'


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tran Nhat Binh</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA/>
        <Headersocials/>

        <div className="me">
          <img src={ME} alt="me" width="50px"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header