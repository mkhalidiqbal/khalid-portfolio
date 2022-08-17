import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/AVTR.jpg";

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1 ,
    name: 'Mian Khalid' ,
    review: 'the secret of getting ahead is getting started'
  },
  {
    avatar: AVTR1 ,
    name: 'Mian Khalid' ,
    review: 'the secret of getting ahead is getting started'
  },
  {
    avatar:AVTR1 ,
    name: 'Mian Khalid' ,
    review: 'the secret of getting ahead is getting started'
  },
  {
    avatar: AVTR1 ,
    name: 'Mian Khalid' ,
    review: 'the secret of getting ahead is getting started'
  }
] 

const Testmonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials-container"
        modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name , review},index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="avatar">
                  <img src={avatar}  />

                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testmonials;
