import React from 'react'
import {BsLinkedin } from 'react-icons/bs'
import {FaGithub } from 'react-icons/fa'
import {MdWeb} from 'react-icons/md'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com" target="_blank"><FaGithub/></a>
      <a href="https://blibb.net" target="_blank"><MdWeb/></a>
      <a href="https://www.google.com/maps/place/568+31+Skillingaryd/
       @57.4305801,14.07636,14z/data=!3m1!4b1!4m5!3m4!1s0x46509877
       e2ad0ea3:0xa01907aa3404e20!8m2!3d57.4305818!4d14.0938696" className='sweden'>Sweden</a>
    </div>
  )
}

export default HeaderSocial
