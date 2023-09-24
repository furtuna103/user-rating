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
      name: "hannah Doe",
      text: "Your focus should include creating communities outside of your site for people to connect with you, your products, and others within the community.",
      rating: 4
    },
    {
      avatar: avatarIIImg,
      name: "Jane Smith",
      text: "The customer's perception is your reality.",
      rating: 3
    },
    {
      avatar: avatarIIIImg,
      name: "Mike Johnson",
      text: "I believe customer service doesn't cost — it pays.",
      rating: 5
    },
    {
      avatar: avatarIVImg,
      name: "Emily Davis",
      text: "Customer service means servicing customers, and it's so much more than just solving problems or addressing complaints.",
      rating: 4
    },
    {
      avatar: avatarVImg,
      name: "Alex Wilson",
      text: "It comes down to how your customer experiences the brand – and how that brand makes a person feel.",
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
            <span style={{ color: "#1D8BA0" }}>CUSTOMERS SAY</span>
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
                  <div className="customer-name">{testimonial.name}</div>
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