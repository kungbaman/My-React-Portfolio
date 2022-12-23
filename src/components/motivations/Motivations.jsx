import React from 'react'
import './motivations.css'
import AVTR1 from '../../assets/speech1.png'
import AVTR2 from '../../assets/speech2.png'
import AVTR3 from '../../assets/speech3.png'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Motivations = () => {
  return (
    <section id="motivations">
      <h5>Favourite Speeches</h5>
      <h2>Motivationals</h2>

      <Swiper className="container motivations__container"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide className='motivation'>
          <div className="personal__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='personal__name'>Juice Wrld</h5>
          <small className="personal__speech">
          "Whatever struggle you're going through and turning it 
          into something positive to push yourself forward"
          </small>
        </SwiperSlide>

        <SwiperSlide className='motivation'>
          <div className="personal__avatar">
            <img src={AVTR2} alt="Avatar Two" />
          </div>
          <h5 className='personal__name'>Johan Sundstein</h5>
          <small className="personal__speech">
          "Everything can work !"
          <br />
          <br />
          </small>
        </SwiperSlide>

        <SwiperSlide className='motivation'>
          <div className="personal__avatar">
            <img src={AVTR3} alt="Avatar Three" />
          </div>
          <h5 className='personal__name'>Thiago Silva</h5>
          <small className="personal__speech">
          "If you want to go fast, go alone <br />
          If you want to go far, go together"
          <br />
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Motivations