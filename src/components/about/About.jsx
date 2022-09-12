import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import {FaAward} from  'react-icons/fa'
import {BsFolderCheck} from  'react-icons/bs'



const About = () => {
  return (
    <section className='glass' id='about'>
      <h5>I work on the files...</h5>
      <h2>About Me</h2>
      

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about" />
            </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ yearst</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Clients</h5>
              <small>all of my friends</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>20+</small>
            </article>

            
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore earum maiores iste, laborum delectus dolores eligendi aspernatur minima quasi nihil. Fugiat cum expedita dolorem autem minima minus consectetur id!
          </p>
          <a href="#contact" className='btn btn-primary'> Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About
