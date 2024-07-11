import React from "react";
import { tickCircle, tickCircleDisabled } from "../../utils/assets";

const PricingBenefitItem = ({ benefitName, plans }) => {
  return (
    <div className="pack-benefit">
      <p className="benefit-name">{benefitName}</p>
      {Object.keys(plans).map((plan) => (
        <span className="tick-circle" key={plan}>
          <img src={plans[plan] ? tickCircle : tickCircleDisabled } alt="tick" />
        </span>
      ))}
    </div>
  );
};

const PricingBenefitsList = () => {
  const pricingBenefitsData = {
    Operations: {
      "Customer Management": { starter: true, standard: true, plus: true, premium: true },
      "Order Management": { starter: true, standard: true, plus: true, premium: true },
      "Laundry Processing": { starter: true, standard: true, plus: true, premium: true },
      "Quality Control": { starter: true, standard: true, plus: true, premium: true },
      "Billing and Invoicing": { starter: true, standard: true, plus: true, premium: true },
      "Scheduling and Routing": { starter: true, standard: true, plus: true, premium: true },
      "Inventory Management": { starter: false, standard: false, plus: true, premium: true },
      "Equipment Management": { starter: false, standard: false, plus: true, premium: true },
      "Compliance and Regulation": { starter: true, standard: true, plus: true, premium: true },
      "Workflow Automation Module": { starter: false, standard: false, plus: false, premium: true },
      "Scalability and Customization": { starter: false, standard: false, plus: false, premium: true },
    },
    "Customer Engagement": {
      "Customer Self-Service": { starter: true, standard: true, plus: true, premium: true },
      "Customer Communication": { starter: true, standard: true, plus: true, premium: true },
      "Feedback and Review": { starter: true, standard: true, plus: true, premium: true },
    },
    Technical: {
      "Integration and API": { starter: true, standard: true, plus: true, premium: true },
    },
  };

  return (
    <div className="pack-benefits-wrapper">
      {Object.keys(pricingBenefitsData).map((section) => (
        <div key={section}>
          <div className="pack-header">
            <h4>{section}</h4>
          </div>
          {Object.keys(pricingBenefitsData[section]).map((benefit) => (
            <PricingBenefitItem
              key={benefit}
              benefitName={benefit}
              plans={pricingBenefitsData[section][benefit]}
            />
          ))}
        </div>
      ))}
      <i class="billed-separately-if">*Billed Separately if development work is required </i>
    </div>
  );
};

export default PricingBenefitsList;
