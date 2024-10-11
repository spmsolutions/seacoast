import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Reviews.css"; // Assuming you have a CSS file for styling

const reviews = [
  {
    text: "I want to thank Seacoast Builders for all their hard work and dedication. They truly went above the call of duty to handle all our needs and the building of our new home. We are so happy with it, and we enjoy each day living there.",
    author: "RICHARD G.",
  },
  {
    text: "Seacoast Builders provided a level of service that far exceeded our expectations. Their project management skills, attention to every detail, and high-quality workmanship were outstanding.",
    author: "NATE S.",
  },
  {
    text: "Seacoast Builders have made us feel very glad to have chosen them to completely transform our house. I’ve had nothing but pleasurable and professional experiences with them, and would highly recommend them.",
    author: "ROY A.",
  },
  {
    text: "What makes Seacoast Builders unique is their personal touch and helpful recommendations during the design phase. Tim Bernard and his team were very easy to work with from the beginning of construction until the end. I didn't have to worry about a single aspect of the scheduling or communication and his quick response to our needs were greatly appreciated!",
    author: "NANSIE B.",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review">
              <p className="review-text">“{review.text}”</p>
              <p className="review-author">~ {review.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
