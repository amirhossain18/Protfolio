import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-warper">
              <div className="main-info">
                    <h1>Web development and Websites promotions</h1>
                    <Typed
                      className="typed-text"
                      strings={["web Design", "Web-Development", "Facebook Ads SMM", "Google Ads"]}
                      typeSpeed={70}
                      backSpeed={40}
                      loop
                    />
                    <a href="#" className="btn-main-offer"> Contact me</a>
               </div> 
        </div>
    );
};

export default Header;