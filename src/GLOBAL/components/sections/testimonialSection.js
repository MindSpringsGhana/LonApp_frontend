// import React, { useState } from "react";
// import "../../styles/testimonial-section.scss";
// import Arrow from "../Arrows";
// import Ellipses from "../ellipses";
// import { tsCardImg } from "../../../utils/assets";
// const testimonials = [
//   {
//     id: 1,
//     text: "LonApp has truly revolutionized the way we manage our laundry business at City Laundry. As the CEO, I've seen firsthand the incredible impact it’s had on our efficiency, customer satisfaction, and overall operations. Thank you, LonApp, for being an invaluable partner in our success!",
//     author: "Emmanuel Djokoto",
//     position: "CEO of City Laundry",
//     image: "path-to-image.jpg", // replace with the correct path to the image if necessary
//   },
//   {
//     id: 2,
//     text: "Another testimonial text goes here.",
//     author: "Chris Thomas",
//     position: "CEO of Red Button",
//     image: "path-to-image.jpg", // replace with the correct path to the image if necessary
//   },
//   // Add more testimonials as needed
// ];

// const TestimonialSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <section className="testimonals-section">
//       <div className="w-layout-blockcontainer section-padding-6 w-container">
//         <div className="w-layout-blockcontainer ts-content-container w-container">
//           <div className="w-layout-blockcontainer ts-header-container w-container">
//             <h4 className="ts-sub-header">Testimonials</h4>
//             <h2 className="ts-main-header">What people say about Us.</h2>

//             <Ellipses section="testimonials" itemsList={testimonials} />
//           </div>
//           <div className="w-layout-blockcontainer testimonial-container w-container">
//             <div className="ts-card-container" >
//             <div className="ts-card">
//                 <div className="group-item"></div>
//                 <img className="ts-card-img" alt="" src={tsCardImg} />
//                 <div className="testimonial">
//                   LonApp has truly revolutionized the way we manage our laundry
//                   business at City Laundry. As the CEO, I've seen firsthand the
//                   incredible impact it's had on our efficiency, customer
//                   satisfaction, and overall operations. Thank you, LonApp, for
//                   being an invaluable partner in our success!"
//                 </div>

//                 <div className="ts-card-author active">Emmanuel Djokoto,</div>
//                 <div className="ts-card-position active">
//                   CEO of City Laundry
//                 </div>
//               </div>
//               <div className="ts-card shadow-card">
//                 <div className="group-child"></div>
//                 <div className="ts-card-author">Chris Thomas</div>
//                 <div className="ts-card-position">CEO of Red Button</div>
//               </div>

//             </div>

//             <Arrow variant="testimonial" className="ts-margin-right-none" />
//           </div>
//         </div>
//         <Arrow className="flex-align" />
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
import React, { useState } from "react";
import "../../styles/testimonial-section.scss";
import Arrow from "../Arrows";
import Ellipses from "../ellipses";
import { tsCardImg } from "../../../utils/assets";

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
            <Ellipses section="testimonials" itemsList={testimonials} />
          </div>
          <div className="w-layout-blockcontainer testimonial-container w-container">
            <div className="ts-card-container">
              {testimonials.map((testimonial, index) => (
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
                  <div className="testimonial">{testimonial.text}</div>
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
              ))}
            </div>

            <Arrow className="ts-margin-right-none" variant="testimonial" />

          </div>
        </div>
        <Arrow className="flex-align" />
      </div>
      
    </section>
  );
};

export default TestimonialSection;
