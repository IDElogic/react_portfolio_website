import React from 'react'
import './Others.css'
import AVTR1 from '../../assets/me.jpg'
import AVTR2 from '../../assets/me.jpg'
import AVTR3 from '../../assets/me.jpg'
import AVTR4 from '../../assets/me.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    image: AVTR1,
    name: 'AASDFGH',
    review:'Lorem ipsum'
  },
  {
    id: 2,
    image: AVTR2,
    name: 'AASDFGH',
    review:'Lorem ipsum'
  },
  {
    id: 3,
    image: AVTR3,
    name: 'AASDFGH',
    review:'Lorem ipsum'
  },
  {
    id: 4,
    image: AVTR4,
    name: 'AASDFGH',
    review:'Lorem ipsum'
  },
]

const Others = () => {
  return (
    <section id='others'>
      <h5>I work on the files...</h5>
      <h2>Others </h2>

      <Swiper className="container others__container"
          modules={[ Pagination ]}
          spaceBetween={60}
          slidesPerView={2}
          pagination={{ clickable: true }}>
  
        {
        data.map(({id, name, image, review }) => {
        return (
        <SwiperSlide key={id} className='others'>
          <div className="client__avatar">
            <img src={image} alt="avatar1" />
          </div>
          <h5 className='client__review'>{name}</h5>
            <small>{review}
            </small>
        </SwiperSlide>
         )
        })
      } 
      </Swiper>
    </section>
  )
}

export default Others
