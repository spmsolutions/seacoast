import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./Reviews.css";

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
  {
    text: "Seacoast Builders designed and built our current home. Beyond the quality of the construction and attention to detail, Tim was an absolute pleasure to work with throughout the process. From building such a high-quality home to providing assistance long after the original sale, Tim has been a great builder to work with and we are so happy that we bought our home from him.",
    author: "NAVIN K."
  },
  {
    text: "Seacoast Builders renovated our kitchen and laundry room and installed a new HVAC system. They were very easy to work with, always communicating with us and going above and beyond to quote multiple sub-contractors. They completed the project on budget and within our timeline. We would definitely hire Seacoast Builders for another project and highly recommend their services to our friends.",
author: "LAURA T."
  }
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 3000, // 3 seconds delay between slides
        //   disableOnInteraction: false, // Keep autoplay even if the user interacts
        // }}
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
