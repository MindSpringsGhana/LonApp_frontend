import React from 'react';
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className="navbar-logo-left w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="2aef9e2a-c817-8a7c-8954-f66b3e0b6ff0" role="banner" data-duration="400" data-doc-height="1">
      <div className="navbarcontainer w-container">
        <div className="navbar-content">
        {/* <div className="navbar2_menu-button w-nav-button" style={{ WebkitUserSelect: 'text' }} aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
            <div className="menu-icon2">
              <div className="menu-icon2_line-top">
                <div className="menu-icon_line-middle-inner"></div>
              </div>
              <div className="menu-icon2_line-middle">
                <div className="menu-icon_line-middle-inner"></div>
              </div>
              <div className="menu-icon2_line-bottom">
                <div className="menu-icon_line-middle-inner"></div>
              </div>
            </div>
          </div> */}
          <div className="navbar-brand">
            <img src="https://cdn.prod.website-files.com/660d31df598571a9a961b06f/66645f99a6e8132a2025925c_LonApp.png" loading="lazy" alt="" />
          </div>
          <nav role="navigation" className="navbar-menu w-nav-menu">
            <a href="#" className="navbar-link w-nav-link" style={{ maxWidth: '1200px' }}>
              <div className="text-3">Home</div>
            </a>
            <a href="#" className="navbar-link w-nav-link" style={{ maxWidth: '1200px' }}>
              <div className="text-3">About</div>
            </a>
            <a href="#" className="navbar-link w-nav-link" style={{ maxWidth: '1200px' }}>
              <div className="text-3">Features</div>
            </a>
            <a href="#" className="navbar-link w-nav-link" style={{ maxWidth: '1200px' }}>
              <div className="text-3">Pricing</div>
            </a>
            <a href="#" className="navbar-link w-nav-link" style={{ maxWidth: '1200px' }}>
              <div className="text-3">Contact</div>
            </a>
          </nav>
          <a href="#" className="navbar-link-2 margin-0 w-nav-link">
            <div className="text-4">EN</div>
            <img src="https://cdn.prod.website-files.com/660d31df598571a9a961b06f/6610722cd5d2cf82f7232e95_Vectors-Wrapper.svg" loading="lazy" width="9" height="4.5" alt="" className="vectors-wrapper-9" />
          </a>
        </div>
      </div>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
  );
};

export default Header;