import React from 'react'
import './testimonials.css'

import BillGates from '../../assets/billgates.jpg'
import Markzuckerberg from '../../assets/markzuckerberg.jpg'
import Johnresig from '../../assets/johnresig.jpg'



import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Famous People</h5>
      <h2>Quote</h2>

      <Swiper className="container testimonials__container"
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
        >
        <SwiperSlide className='testimonials'>
          <div className="client__avatar">
            <img src={BillGates} alt="" />
          </div>
          <h5 className='client__name'>Bill Gates</h5>
          <small className='client__review'>The world won’t care about your self-esteem. The world will expect you to accomplish something before you feel good about yourself.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className="client__avatar">
            <img src={Markzuckerberg} alt="" />
          </div>
          <h5 className='client__name'>Mark Zuckerberg</h5>
          <small className='client__review'>Successful people always have two thing on their lips: 1.Silence 2.Smile</small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className="client__avatar">
            <img src={Johnresig} alt="" />
          </div>
          <h5 className='client__name'>John Resig</h5>
          <small className='client__review'>Sometimes the people we have known for a short amount of time have the biggest impact on our lives, even more than those we have known forever</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials