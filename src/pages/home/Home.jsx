import React from 'react'
import './Home.css'
import Navbar from '../../components/nav/Navbar'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Experience from '../../components/experience/Experience'
import Services from '../../components/services/Services'
import Others from '../../components/others/Others'
import Contact from '../../components/contact/Contact'
import Footer from '../footer/Footer'
import Portfolio from '../../components/portfolio/Portfolio'


const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Others/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
