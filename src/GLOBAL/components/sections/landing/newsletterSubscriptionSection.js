import React, { useState } from "react";
import "../../../styles/homepageStyles/newsletter-subscription-section.scss";
import Arrow from "../../landing/Arrows";
import Ellipses from "../../landing/ellipses";
import {
  newsletterTelegramImg,
  newsletterBackgroundImg,
  nssStarsImg,
} from "../../../../utils/assets";
import FilledButton from "../../buttons/FilledButton";

const NewsletterSubscriptionSection = () => {
  return (
    <div class="subscribe-section" id="subscribe-section">
      <div class="w-layout-blockcontainer section-padding-7 w-container">
        <div className="parent">
          <img
            alt="newsletter-subscription-stars"
            title="newsletter-subscription-stars"
            src={nssStarsImg}
          />
        </div>
        <img
          className="subscribe-section-child"
          alt=""
          src={newsletterBackgroundImg}
        />
        <div class="nss-header-container">
          <p class="nss-header">
            Subscribe to get information, latest news and other
          </p>
          <p class="nss-header">interesting offers about LonApp</p>
        </div>
        <img
          class="subscribe-section-item"
          alt=""
          src={newsletterTelegramImg}
        />
        <div
          id="email-form"
          name="email-form"
          className="form group-parent"
          //   onSubmit={handleSubmit}
        >
          <input
            className="text-field w-input"
            maxLength="256"
            name="email"
            placeholder="Your email"
            type="email"
            id="email"
            required
            // value={email}
            // onChange={handleInputChange}
          />
          <FilledButton label="Subscribe" className="submit-button" />
        </div>
        <Arrow className="flex-align" />
      </div>
    </div>
  );
};

export default NewsletterSubscriptionSection;
