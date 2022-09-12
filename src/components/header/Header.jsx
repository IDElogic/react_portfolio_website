import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Welcome to My Portfolio</h5>
        <h1>Ildiko Cs. Fabian</h1>
        <h5 className="text-light">web developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
            <img src={ME} alt="me" className='me-img'/>
            
        </div>
       <a href="#contact" className='scroll__down'>Scroll Down</a>
       
      </div>
    </header>
  )
}

export default Header
