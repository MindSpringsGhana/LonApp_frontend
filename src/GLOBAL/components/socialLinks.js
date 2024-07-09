import React from "react";
import "../../GLOBAL/styles/footer-social-links.scss"
import { tiktokIcon, instagramIcon, facebookIcon, linkedInIcon } from "../../utils/assets";
// import facebookIcon from "./svgComponents/facebook-icon";

const FooterSocialLinks = ({className}) => {

  return (
    <>
    <div className="w-layout-blockcontainer social-links-container w-container">
              <a href="#" className="facebook-link w-inline-block">
                {/* <facebookIcon className="facebook-svg" fillColor="red"/> */}
                <img src={facebookIcon} loading="lazy" alt="" />
              </a>
              <a href="#" className="instagram-link w-inline-block">
                <img src={instagramIcon} loading="lazy" alt="" />
              </a>
              <a href="#" className="linkedin-link w-inline-block">
                <img src={linkedInIcon} loading="lazy" alt="" />
              </a>
              <a href="#" className="tiktok-link w-inline-block">
                <img src={tiktokIcon} loading="lazy" alt="" />
              </a>
            </div>
    </>
  );
};

export default FooterSocialLinks;
