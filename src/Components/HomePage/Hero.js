import React, { useEffect } from "react";
import Slider from "react-slick";
import AOSInitializer from "../AOS/AOSInitializer";
import "../../App.css";

const HeroSection = () => {
 
     

  return (
    <div id="header-hero-container">
      <section id="hero">
        <div className="fade"></div>
        <div className="hero-text">
          <AOSInitializer />
          <h1 data-aos="fade-down" data-aos-duration="3000">
          Get "MOORE" with us!
          </h1>
          <AOSInitializer />
          <p data-aos="fade-up" data-aos-duration="3000">
            Our platform makes buying and selling properties seamless and hassle-free, providing you with the best real estate experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
