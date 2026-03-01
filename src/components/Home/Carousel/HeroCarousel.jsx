// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlide from "./CarouselSlide";
import fp from "../../../assets/images/fp2.jpg";
import os from "../../../assets/images/os2.jpg";
import technology from "../../../assets/images/fs2.jpg";

const HeroCarousel = () => {
  const slides = [
    {
      title: "FreelancerDesk",
      subtitle: "Empowering Businesses and Freelancers Worldwide",
      image: fp,
    },
    {
      title: "Our Services",
      subtitle: "Connecting You with Skilled Professionals Across Digital Industries.",
      image: os,
    },
    {
      title: "Your Digital World, Connected.",
      subtitle: "Your Digital World, Powered by Talent",
      image: technology,
    },
  ];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide
              title={slide.title}
              subtitle={slide.subtitle}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
