import React, { useState, useEffect } from "react";
import "../App.css";
import AOSInitializer from "./AOS/AOSInitializer";
import AboutUsImage from "./images/AboutUsImages/About us.png";
import TopAboutImage from "./images/AboutUsImages/TopAboutImage.png";
import BottomAboutImage from "./images/AboutUsImages/BottomAboutImage.png";

const AboutUs = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjusted for mobile devices
    };

    // Set initial view
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="about-us-container">
      <AOSInitializer />

      <div
        className="about-us-content"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <AOSInitializer />
        <div className="about-us-text">
          <h2>About Us</h2>
          {isMobileView ? (
            <>
              <img
                src={TopAboutImage}
                alt="Top About Us"
                className="about-us-image mobile-image"
              />
              <img
                src={BottomAboutImage}
                alt="Bottom About Us"
                className="about-us-image mobile-image"
              />
            </>
          ) : (
            <img src={AboutUsImage} alt="About Us" className="about-us-image" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
