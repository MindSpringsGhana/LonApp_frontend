import React from "react";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilledButton from '../components/buttons/FilledButton'
import OutlineButton from "../components/buttons/OutlineButton";
import HeroSection from "../components/sections/landing/Hero";
import LaundryBrandSection from "../components/sections/landing/BrandSection";
import BookATripSection from "../components/sections/landing/BATSection"
import PricingListSection from "../components/sections/landing/pricingListSection";
import TestimonialSection from "../components/sections/landing/testimonialSection";
import NewsletterSubscriptionSection from "../components/sections/landing/newsletterSubscriptionSection";
// import Logo from "../components/Logo";

const Landing = () => {
  // I am setting cookies that ll later check for user browser when user logs in
  // this will help in setting the device info for login post API
  // I will do this for the landing and signup - signin
  // and it ll load when the user visits page or refreshes page with useEffect beneath this
  
  

  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <LaundryBrandSection/>
        <BookATripSection/>
        <PricingListSection/>
        <TestimonialSection/>
        <NewsletterSubscriptionSection/>
        <Footer />
      </main>
    </>
  );
};

export default Landing;
