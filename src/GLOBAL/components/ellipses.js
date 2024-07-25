import React, { useState, useEffect } from "react";

const Ellipses = ({
  className,
  itemsList,
  currentIndex,
  activeIndex,
  section,
}) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // console.log(activeIndex)

  if (section === "book-a-trip")
    return (
      <>
        {itemsList.map((_, index) => (
          <div
            key={index}
            className={`ellipse ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </>
    );

  if (section === "testimonials") console.log(currentIndex);
  return (
    <>
      <div className="w-layout-blockcontainer container-3 w-container">
        {itemsList.map((_, index) => (
          <div
            key={index}
            className={`ts-ellipse ${
              index === currentIndex ? "ts-active" : ""
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Ellipses;
