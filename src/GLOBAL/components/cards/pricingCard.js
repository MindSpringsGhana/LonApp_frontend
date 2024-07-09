// src/components/PricingCard.js
import React from 'react';
import FilledButton from '../buttons/FilledButton';
import { headerImg } from '../../../utils/assets';

const PricingCard = ({ plan, price, capacity }) => {
  return (
    <div className="pricing-card">
      <div className="pricing-card-header">
        <b className="header-main">{plan}</b>
        <img className="header-img" alt="" src={headerImg} />
      </div>
      <div className="monthly-price-wrapper">
        <div className="monthly-price">
          <span className="currency">gh</span>
          <span className="price">{price}</span>
        </div>
        <div className="month">/month</div>
      </div>
      <div className="laundry-capacity-wrapper">
        <div className="laundry-capacity-content">
          <span>Laundry Cap:</span>
          <span className="pcs">{capacity}</span>
        </div>
      </div>
      <FilledButton className="pricing-button" label="Get This Plan" />
    </div>
  );
};

export default PricingCard;
