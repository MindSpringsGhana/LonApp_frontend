import React, { useState, useEffect } from "react";

const Ellipses = ({ className, itemsList, section }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (section === "book-a-trip") {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % itemsList.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [section, itemsList.length]);

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

  if (section === "testimonials")
    return (
      <>
      <div className="w-layout-blockcontainer container-3 w-container">
      {itemsList.map((_, index) => (
          <div
            key={index}
            className={`ts-ellipse ${index === activeIndex ? "ts-active" : ""}`}
          />
        ))}
      </div>
        
      </>
    );
};

export default Ellipses;
