import React from "react";
import "../../styles/pricing-list-section.scss";
import PricingCard from "../../components/cards/pricingCard";
import Arrow from "../Arrows";
const PricingListSection = () => {
  const pricingData = [
    {
      plan: "STARTER",
      price: "900",
      capacity: "1500pcs",
    },
    {
      plan: "STANDARD",
      price: "1,500",
      capacity: "2500pcs",
    },
    {
      plan: "PLUS",
      price: "3,600",
      capacity: "6000pcs",
    },
    {
      plan: "PREMIUM",
      price: "7,200",
      capacity: "unlimited",
    },
  ];
  return (
    <>
      <div className="travel-agency-landing-page-ui">
        <div className="ready-pricing-list-default">
          <div className="title-parent">
            <div class="title">
              <div class="with-lots-of">
                Choose the right plan for your business{" "}
              </div>
              <b class="pricing-plans">Ready to Start a Business with Us</b>
            </div>
            <div class="full-toggle-parent">
              <div class="full-toggle">
                <div class="monthly">Monthly</div>
                <div class="rectangle-parent">
                  <div class="rectangle1"></div>
                  <div class="oval"></div>
                </div>
                <div class="yearly">Yearly</div>
                <div class="tagtag-02">
                  <div class="tag">
                    <div class="rectangle"></div>
                    <b class="save-25">Save 10%</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div34">
            <div className="pricing">
              {pricingData.map((data, index) => (
                <PricingCard
                  key={index}
                  plan={data.plan}
                  price={data.price}
                  capacity={data.capacity}
                />
              ))}
              <Arrow />
            </div>
			{/* <div className="div35"><div class="div-parent">
           
         
            <div class="customer-engagment">Customer Engagment</div>
           <div class="group-wrapper8">
              <div class="customer-self-service-parent">
                <div class="customer-self-service">Customer Self-Service </div>
				<img class="group-child8" alt="" src="Group 39534.svg" />
                <img class="group-child8" alt="" src="Group 39534.svg" />

              </div>
			  
            </div>

            <div class="span14">
              <i class="billed-separately-if">
                *Billed Separately if development work is required{" "}
              </i>
            </div>
          </div></div> */}
			
          </div>

         
        </div>
      </div>
    </>
  );
};

export default PricingListSection;
