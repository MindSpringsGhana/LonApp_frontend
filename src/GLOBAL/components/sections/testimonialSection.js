import React, { useState } from "react";
import "../../styles/testimonial-section.scss";
import Arrow from "../Arrows";
import Ellipses from "../ellipses";
import TestimonialCard from "../cards/testimonialCard";

const testimonials = [
  {
    id: 1,
    text: "LonApp has truly revolutionized the way we manage our laundry business at City Laundry. As the CEO, I've seen firsthand the incredible impact it’s had on our efficiency, customer satisfaction, and overall operations. Thank you, LonApp, for being an invaluable partner in our success!",
    author: "Emmanuel Djokoto",
    position: "CEO of City Laundry",
    image: "path-to-image.jpg", // replace with the correct path to the image if necessary
  },
  {
    id: 2,
    text: "Another testimonial text goes here.",
    author: "Chris Thomas",
    position: "CEO of Red Button",
    image: "path-to-image.jpg", // replace with the correct path to the image if necessary
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonals-section">
      <div className="w-layout-blockcontainer section-padding-6 w-container">
        <div className="w-layout-blockcontainer ts-content-container w-container">
          <div className="w-layout-blockcontainer ts-header-container w-container">
            <h4 className="ts-sub-header">Testimonials</h4>
            <h2 className="ts-main-header">What people say about Us.</h2>
            <Ellipses
              section="testimonials"
              itemsList={testimonials}
              currentIndex={currentIndex}
            />
          </div>
          <div className="w-layout-blockcontainer testimonial-container w-container">
            <div className="ts-card-container">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                  currentIndex={currentIndex}
                />
              ))}
            </div>

            <Arrow className="ts-margin-right-none" variant="testimonial" onNext={handleNextClick}
              onPrev={handlePrevClick} />
          </div>
        </div>
        <Arrow className="flex-align" />
      </div>
    </section>
  );
};

export default TestimonialSection;
