import React, { useState, useEffect } from "react";
import { tsCardImg } from "../../../utils/assets";
const TestimonialCard = ({ testimonial, index, currentIndex }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // console.log(activeIndex)
 
  return (
    <div
                  key={testimonial.id}
                  className={`ts-card ${
                    index === currentIndex ? "" : "shadow-card"
                  }`}
                >
                  <div
                    className={`${
                      index === currentIndex ? "group-item" : "group-child"
                    }`}
                  ></div>
                  <img
                    className="ts-card-img"
                    alt={testimonial.author}
                    src={tsCardImg}
                  />
                  <div className="testimonial">{index === currentIndex ? testimonial.text : ''}</div>
                  <div
                    className={`ts-card-author ${
                      index === currentIndex ? "active" : ""
                    }`}
                  >
                    {testimonial.author},
                  </div>
                  <div
                    className={`ts-card-position ${
                      index === currentIndex ? "active" : ""
                    }`}
                  >
                    {testimonial.position}
                  </div>
                </div>
  )

  
};

export default TestimonialCard;
