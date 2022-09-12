import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio1.jpg'
import IMG5 from '../../assets/portfolio1.jpg'
import IMG6 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'AASDFGH',
    github: 'https://github.com',
    demo: '/pagenotfound'
  },
  {
    id: 2,
    image: IMG2,
    title: 'AASDFG',
    github: 'https://github.com',
    demo: '/pagenotfound'
  },
  {
    id: 3,
    image: IMG3,
    title: 'AASDF',
    github: 'https://github.com',
    demo: '/pagenotfound'
  },
  {
    id: 4,
    image: IMG4,
    title: 'AASD',
    github: 'https://github.com',
    demo: '/pagenotfound'
  },
  {
    id: 5,
    image: IMG5,
    title: 'AAS',
    github: 'https://github.com',
    demo: '/pagenotfound'
  },
  {
    id: 6,
    image: IMG6,
    title: 'AA',
    github: 'https://github.com',
    demo: '/pagenotfound'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>I work on the files...</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo }) => {
              return (
                <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={image} alt={title}/>
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn'>Github</a>
                    <a href={demo} className='btn btn-primary' target=''>Live Demo</a>
                  </div>
              </article>
              )
            })
          }  
        </div>
    </section>
  )
}

export default Portfolio
