// HomepageRender.js
import React from "react";
import Hero from "../Components/HomePage/Hero";
import PropertyHomepage from "../Components/HomePage/PropertyHomePage";
import AgentHomePage from "../Components/HomePage/AgentsHomePage";
import ContactsHomePage from "../Components/HomePage/ContactsHomePage";
import Works from "../Components/HomePage/Works";
import AboutUs from "../Components/HomePage/AboutUs";
import "../App.css";

const HomepageRender = () => {
  return (
    <div className="App">
      <Hero />
      <Works />
      <PropertyHomepage />
      <AboutUs />
      <AgentHomePage />
      <ContactsHomePage />
    </div>
  );
};

export default HomepageRender;
