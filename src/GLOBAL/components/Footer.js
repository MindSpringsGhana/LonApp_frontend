import React from 'react';
import '../styles/Footer.scss'
import Arrow from './Arrows';
import FooterSocialLinks from './socialLinks';

const Footer = () => {
  return (
    <section className="footer">
      <div className="w-layout-blockcontainer section-padding-8 w-container">
        <div className="rl_layout239_content-2">
          <div id="w-node-_42e13a9a-e3a7-d551-4910-515ef108b98c-a961b083" className="w-layout-blockcontainer company-desc cd-header w-container">
            <img src="https://cdn.prod.website-files.com/660d31df598571a9a961b06f/66645f99a6e8132a2025925c_LonApp.png" loading="lazy" alt="" />
            <p className="cd-paragraph">We contribute to empowering every aspect of your laundry</p>
          </div>
          <div id="w-node-_09932f30-e8f8-a8c1-503d-b26c5d5c50be-a961b083" className="w-layout-blockcontainer footer-links-container w-container">
            <div className="w-layout-blockcontainer footer-links-item w-container">
              <h5 className="fli-header">Company</h5>
              <div className="w-layout-blockcontainer fli-body w-container">
                <a href="#" className="body-item margin-top-0 w-inline-block">About</a>
                <a href="#" className="body-item w-inline-block">Careers</a>
                <a href="#" className="body-item w-inline-block">Services</a>
                <a href="#" className="body-item w-inline-block">Contact Us</a>
              </div>
            </div>
            <div className="w-layout-blockcontainer footer-links-item w-container">
              <h5 className="fli-header">Contact</h5>
              <div className="w-layout-blockcontainer fli-body w-container">
                <a href="#" className="body-item margin-top-0 w-inline-block">Partners</a>
                <a href="#" className="body-item w-inline-block">Press</a>
                <a href="#" className="body-item w-inline-block">Help</a>
                <a href="#" className="body-item w-inline-block">FAQ</a>
              </div>
            </div>
            <div className="w-layout-blockcontainer footer-links-item margin-right-0 w-container">
              <h5 className="fli-header">Follow Us</h5>
              <div className="w-layout-blockcontainer fli-body w-container">
                <a href="#" className="body-item margin-top-0 w-inline-block">Facebook</a>
                <a href="#" className="body-item w-inline-block">Instagram</a>
                <a href="#" className="body-item w-inline-block">LinkedIn</a>
              </div>
            </div>
            <div className="w-layout-blockcontainer footer-links-item margin-right-0 w-container">
              <h5 className="fli-header">Company</h5>
              <div className="w-layout-blockcontainer fli-body w-container">
                <a href="#" className="body-item margin-top-0 w-inline-block">About</a>
                <a href="#" className="body-item w-inline-block">Careers</a>
                <a href="#" className="body-item w-inline-block">Services</a>
                <a href="#" className="body-item w-inline-block">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="w-layout-blockcontainer app-links-container w-container">
            <FooterSocialLinks/>
            <p className="app-links-header">Discover our app</p>
            <div className="w-layout-blockcontainer app-links-body w-container">
              <a href="#" className="google-play-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/660d31df598571a9a961b06f/6612cba24694e27c54a3c96b_google%20play.svg" loading="lazy" alt="" className="google-play-image" />
              </a>
              <a href="#" className="app-gallery-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/660d31df598571a9a961b06f/6669b83b5c7aadeab6b1bd5f_Apple%20(1).svg" loading="lazy" alt="" />
              </a>
            </div>
            <div className="w-layout-blockcontainer app-links-body w-container">
              <a href="#" className="app-gallery-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/660d31df598571a9a961b06f/6612cba29d7f3e69f664084a_Explore%20it%20on%20AppGallery.svg" loading="lazy" alt="" className="app-gallery-image" />
              </a>
            </div>
          </div>
        </div>
        <Arrow/>
      </div>
      <p className="copyrights">Powered By MindSprings Limited</p>
    </section>
  );
};

export default Footer;
