import React from 'react'
import './Footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {TbBrandTwitter} from 'react-icons/tb'




const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ildiko Cs.Fabian</a>
     <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
     </ul>

     <div className='footer__socials'>
      <a href="https://facebook.com"><FiFacebook/></a>
      <a href="https://instagram.com"><FaInstagram/></a>
      <a href="https://twitter.com"><TbBrandTwitter/></a>
     </div>

     <div className="footer__copyright">
      <small>&copy; Blibb.  All rights reserved.</small>
     </div>
    </footer>
  )
}

export default Footer
