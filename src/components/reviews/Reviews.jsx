import React from "react";
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
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>What Our Clients Say</h2>
      <div className="reviews-row">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p className="review-text">“{review.text}”</p>
            <p className="review-author">~ {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
