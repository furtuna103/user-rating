import React from "react";
import avatarIImg from "./assets/1.jpg";
import avatarIIImg from "./assets/2.jpg";
import avatarIIIImg from "./assets/3.jpg";
import avatarIVImg from "./assets/4.jpg";
import avatarVImg from "./assets/5.jpg";
import { FaStar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay]);

export default function App() {
  const testimonials = [
    {
      avatar: avatarIImg,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium voluptate natus sunt, molestiae dolorum?",
      rating: 4
    },
    {
      avatar: avatarIIImg,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, animi libero facere eligendi illo consectetur!",
      rating: 3
    },
    {
      avatar: avatarIIIImg,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id quaerat, quas minus cum provident?",
      rating: 5
    },
    {
      avatar: avatarIVImg,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque culpa suscipit, ad iure esse nihil?",
      rating: 2
    },
    {
      avatar: avatarVImg,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta, quibusdam dolor eligendi quaerat nulla.",
      rating: 4
    },
  ];

  const renderStars = (rating) => {
    const filledStars = [];
    const emptyStars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        filledStars.push(<FaStar key={i} className="star-icon" />);
      } else {
        emptyStars.push(<FaStar key={i} className="star-icon-empty" />);
      }
    }

    return (
      <>
        {filledStars}
        {emptyStars}
      </>
    );
  };

  return (
    <>
      <section>
        <div className="main">
          <div className="head-p">
            <span style={{ paddingRight: "5px" }}>WHAT OUR </span>
            <span style={{ color: "#1D8BA0" }}> COUSTEMERS SAY</span>
          </div>
          <div className="head">TESTIMONIALS</div>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div style={{ paddingRight: 20, paddingLeft: 20 }}>
                  <div className="testimonials-profile-circle">
                    <img
                      src={testimonial.avatar}
                      alt="testimonial-avatar"
                      className="testimonial-avatar"
                    />
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="rating">{renderStars(testimonial.rating)}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}