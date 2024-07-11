import React from "react";
import "../../styles/pricing-list-section.scss";
import PricingCard from "../../components/cards/pricingCard";
import Arrow from "../Arrows";
import MonthlyYearlyToggler from "../monthlyYearlyToggler";
import { pricingSectionBg1, pricingSectionBg2 } from "../../../utils/assets";
import PricingBenefitsList from "../pricingBenefitsList";
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
      <div className="travel-agency-landing-page-ui" id="pricing-list-section">
        <div className="ready-pricing-list-default">
        <div className="pricing-section-bg1-container"><img className="pricing-section-bg1" src={pricingSectionBg1}/></div>
        <div className="pricing-section-bg2-container"><img className="pricing-section-bg2" src={pricingSectionBg2}/></div>
          <div className="title-parent">
            <div class="title">
              
              <div class="with-lots-of">
                Choose the right plan for your business{" "}
              </div>
              <b class="pricing-plans">Ready to Start a Business with Us</b>
            </div>
            <MonthlyYearlyToggler />
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

          </div>
          <PricingBenefitsList/>
        </div>
      </div>
    </>
  );
};

export default PricingListSection;
