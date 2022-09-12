import React from 'react'
import './Experience.css'
import {HiCheckCircle} from 'react-icons/hi'

const Experience = () => {
  return (
    <section className='experience' id='experience'>
      <h5>I work on the files...</h5>
      <h2>My Experiences</h2>
      <div className="container  experience__container">
        <div className="experience__frontend">
          <h2>Frontend Development</h2>
          <div className="experience__content">
            <article className='experience_details'>
               <HiCheckCircle className='experience_details-icon'/>
              <div>
              <h3>HTML</h3>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <HiCheckCircle className='experience_details-icon'/>
              <div>
              <h3>CSS</h3>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
               <HiCheckCircle className='experience_details-icon'/>
              <div>
              <h3>Sass</h3>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <HiCheckCircle className='experience_details-icon'/>
              <div>
              <h3>JavaScript</h3>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <HiCheckCircle className='experience_details-icon'/>
              <div>
              <h3>Typescript</h3>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
            <HiCheckCircle className='experience_details-icon'/>
              <div>
              <h3>ReactJs</h3>
              <small className='text-light'>Experienced</small>
              </div>
            </article>   
          </div>
        </div>

        <div className="experience__backend">
        <h2>Backend Development</h2>
          <div className="experience__content">
            <article className='experience_details'>
              <HiCheckCircle className='experience_details-icon'/>
              <div>
              <h3>Java Spring</h3>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
            <HiCheckCircle className='experience_details-icon'/>
              <div>
              <h3>SQL</h3>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
