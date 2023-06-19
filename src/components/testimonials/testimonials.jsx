import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-3.svg";

import { Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image1,
    title: "Jaydeep Gedam",
    subtitle: "Student and Full-Stack Developer",
    comment:
      "I learn a lot from Bhavesh and enjoy working with him.I'm a full-stack web developer and Bhavesh's project partner for the academic project Nayaan. ",
  },
  {
    id: 2,
    image: Image2,
    title: "Sakshi Khadilkar",
    subtitle: "Student and expert programmer",
    comment:
      'Working with Bhavesh is fun, and I learn so much.I am a competitive expert programmer  on Leetcode. In the academic project "Nayaan," Bhavesh and I are project partners. It has always been enjoyable to work with Bhavesh. ',
  },
];



const testimonials = () => {
  return (
    <section className="testimonials container section ">
      <h2 className="section__title">Testimonials & Reviews</h2>
      <Swiper className='testimonials__container grid'
      modules={[ Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt=""/>
              </div>
              <h3 className="testimonial__title">{title }</h3>
              <span className="subtitle">{subtitle }</span>
              <div className="comment">{comment }</div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}

export default testimonials