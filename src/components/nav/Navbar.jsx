import React from 'react'
import './Navbar.css'
import {RiHomeWifiFill } from 'react-icons/ri'
import {FaUserEdit } from 'react-icons/fa'
import {BiBook } from 'react-icons/bi'
import {MdDesignServices } from 'react-icons/md'
import {BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><RiHomeWifiFill/></a>
      <a href="/pagenotfound" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserEdit/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar
