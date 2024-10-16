import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="my-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <picture>
            <img src={slide1} alt={slide1} />
          </picture>
          <h3 className="text-xl -mt-12 text-white md:text-4xl md:-mt-16 uppercase text-center">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img src={slide2} alt={slide2} />
          </picture>
          <h3 className="text-xl -mt-12 text-white md:text-4xl md:-mt-16 uppercase text-center">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img src={slide3} alt={slide3} />
          </picture>
          <h3 className="text-xl -mt-12 text-white md:text-4xl md:-mt-16 uppercase text-center">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img src={slide4} alt={slide4} />
          </picture>
          <h3 className="text-xl -mt-12 text-white md:text-4xl md:-mt-16 uppercase text-center">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img src={slide5} alt={slide5} />
          </picture>
          <h3 className="text-xl -mt-12 text-white md:text-4xl md:-mt-16 uppercase text-center">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
