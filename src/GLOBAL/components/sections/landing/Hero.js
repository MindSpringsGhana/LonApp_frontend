import React from "react";
import "../../../styles/homepageStyles/Hero.scss";
import FilledButton from "../../buttons/FilledButton";
import OutlineButton from "../../buttons/OutlineButton";
import Arrow from "../../landing/Arrows";
const HeroSection = ({ label, action, page, isDisabled = false }) => {
  return (
    <>
      <section className="hero-section">
        <div className="w-layout-blockcontainer section-padding-0 w-container">
          <div className="w-layout-blockcontainer hero-container hero-container-background w-container">
            <div className="w-layout-blockcontainer hero-text w-container">
              <div className="hero-heading">
                We Help You to Boost Your Laundry Business{" "}
              </div>
              <div className="desc-2">
                LaundryApp is an all-in-one platform that helps your laundry
                business to grow bigger each day. We focus on empowering every
                aspect of your Laundry business.{" "}
                <a href="#" className="w-inline-block">
                  <span className="desc-4">Learn More</span>
                </a>
              </div>
              <div className="w-layout-blockcontainer container w-container">
                <FilledButton
                  className="text-underline-none w-inline-block"
                  label="I am New Here"
                  page="/signup"
                />
                <OutlineButton
                  className="w-inline-block"
                  label="I Already have an Account"
                  page="/login"
                />
              </div>
            </div>
            
          </div>
          <Arrow className="flex-align" nextSectionId="laundry-brands-section"/>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
