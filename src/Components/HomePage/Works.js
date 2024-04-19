import React from "react";
import "../../App.css";
import homeIcon from "../HomePage/HomePageImages/homeicon.png";
import dollarIcon from "../HomePage/HomePageImages/dollaricon.png";
import searchIcon from "../HomePage/HomePageImages/searchicon.png";
import AOSInitializer from "../AOS/AOSInitializer";
const HowItWorksSection = () => {
  return (
    <section id="how-it-works" data-aos="fade-down" data-aos-duration="2000">
      <h2>How It Works</h2>
      <div className="container">
        <AOSInitializer />
        
        <div className="flex">
          <div>
            <span
              className="fas fa-home "
              data-aos="fade-down"
              data-aos-duration="3000"
            ></span>
                <img src={searchIcon} alt="Search Icon" />
            <h4>Find a Property.</h4>
            <p className="works-p">
              Explore a variety of properties to find the perfect one that suits
              your needs and preferences.
            </p>
          </div>

          <div>
            <span
              className="fas fa-dollar-sign "
              data-aos="fade-down"
              data-aos-duration="3000"
            ></span>
                <img src={homeIcon} alt="Home Icon" />
            <h4>Buy a Property.</h4>
            <p className="works-p">
              Discover the joy of home ownership by exploring our diverse range
              of properties available for purchase.
            </p>
          </div>

          <div>
            <span
              className="fas fa-chart-line"
              data-aos="fade-down"
              data-aos-duration="3000"
            ></span>
                 <img src={dollarIcon} alt="Dollar Icon" />
            <h4>Investing.</h4>
            <p className="works-p">
              Explore investment opportunities in real estate and make informed
              decisions for a secure financial future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
