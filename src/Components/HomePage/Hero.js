import React, { useEffect } from "react";
import Slider from "react-slick";
import AOSInitializer from "./AOS/AOSInitializer";
import "../App";
// Define the HeroSection functional component
const HeroSection = () => {
  // useEffect hook for performing side effects
  useEffect(() => {
    // Retrieve various DOM elements
    const headerElem = document.querySelector("header");
    const logo = document.getElementById("logo");
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");

    const propertiesSlider = document.getElementById("properties-slider");
    const testimonialsSlider = document.getElementById("testimonials-slider");

    // Function to initialize sliders
    const initSliders = () => {
      new Slider(propertiesSlider, {
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [],
      });

      new Slider(testimonialsSlider, {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>',
      });
    };

    // Event handling functions
    const handleNavToggleClick = () => {
      navMenu.style.right = "0";
    };

    const handleCloseFlyoutClick = () => {
      navMenu.style.right = "-100%";
    };

    const handleDocumentClick = (e) => {
      // Close the navMenu if clicked outside the toggle or menu
      const target = e.target;
      if (!(target.closest("#nav-toggle") || target.closest("#nav-menu"))) {
        navMenu.style.right = "-100%";
      }
    };
    const handleScroll = () => {
      // Handle changes in appearance on scroll
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 0) {
        navMenu.classList.add("is-sticky");
        logo.style.color = "#000";
        headerElem.style.background = "#fff";
        navToggle.style.borderColor = "#000";
        navToggle.querySelector(".strip").style.backgroundColor = "#000";
      } else {
        navMenu.classList.remove("is-sticky");
        logo.style.color = "#fff";
        headerElem.style.background = "transparent";
        navToggle.style.borderColor = "#fff";
        navToggle.querySelector(".strip").style.backgroundColor = "#fff";
      }

      headerElem.style.cssText =
        scrollTop >= 200
          ? "padding: 0.5rem; box-shadow: 0 -4px 10px 1px #999;"
          : "padding: 1rem 0; box-shadow: none;";
    };
    // Event listeners and initializations
    navToggle.addEventListener("click", handleNavToggleClick);
    document
      .getElementById("close-flyout")
      .addEventListener("click", handleCloseFlyoutClick);
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("scroll", handleScroll);

    initSliders(); // Initialize sliders
    handleScroll(); // Call handleScroll to set initial state

    // Cleanup: Remove event listeners
    return () => {
      navToggle.removeEventListener("click", handleNavToggleClick);
      document
        .getElementById("close-flyout")
        .removeEventListener("click", handleCloseFlyoutClick);
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array indicates useEffect runs once on mount

  // JSX to render the component
  return (
    <div id="header-hero-container">
      <section id="hero">
        <div className="fade"></div>
        <div className="hero-text">
          <AOSInitializer />
          <h1 data-aos="fade-down" data-aos-duration="3000">
            Buy and sell real estate properties
          </h1>
          <AOSInitializer />
          <p data-aos="fade-up" data-aos-duration="3000">
            {/* Explore a diverse range of real estate listings and find your dream
            home or property. */}
            Our platform makes buying and selling properties seamless and
            hassle-free, providing you with the best real estate experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
