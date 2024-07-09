import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Arrow from "../Arrows";
import "../../../GLOBAL/styles/book-a-trip.scss";
import ArrowedButton from "../buttons/arrowedButton";
import TextBodyItem from "../textBodyItem";
import { customerManagement, billingAndInvoicing, reportingAndAnalytics, laptopImg } from "../../../utils/assets";
import Ellipses from "../ellipses";
import iPhoneFrame from "../iPhone12Frame";

const BookATripSection = ({ classNameName }) => {
  const items = [
    {
      iconSrc: customerManagement,
      header: "Customer Management",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      iconSrc: billingAndInvoicing,
      header: "Billing and Invoicing",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      iconSrc: reportingAndAnalytics,
      header: "Reporting and Analytics",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);
  
  return (
    <section className="book-a-trip" id="book-a-trip">
      <div className="w-layout-blockcontainer section-padding-2 w-container">
        <div className="w-layout-blockcontainer content-container w-container">
          <div className="w-layout-blockcontainer text-body-side w-container">
          <Ellipses itemsList={items} activeIndex={activeIndex} section="book-a-trip"/>
          </div>
          <div className="w-layout-blockcontainer text-and-link-container w-container">
            <div className="book-a-trip-header">
              One System for Everything You Need
            </div>
            <div className="text-body">
              {items.map((item, index) => (
                <TextBodyItem
                className={index === activeIndex ? "active" : ""}
                  key={index}
                  iconSrc={item.iconSrc}
                  header={item.header}
                  paragraph={item.paragraph}
                />
              ))}
              <></>
              <ArrowedButton label="Learn More" className="margin-right"/>
            </div>
          </div>
          <div className="w-layout-blockcontainer image-container w-container">
            {/* <img className="laptop-icon" alt="" src={laptopImg}/> */}
            <iPhoneFrame/>
          </div>
        </div>
        <Arrow className="flex-align"/>
      </div>
    </section>
  );
};

export default BookATripSection;


