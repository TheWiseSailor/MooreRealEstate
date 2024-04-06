// HomepageRender.js
import React from "react";
import Hero from "./Hero";
import PropertyHomepage from "./PropertyHomePage";
import AgentHomePage from "./AgentsHomePage";
import ContactsHomePage from "./ContactsHomePage";
import Works from "./Works";
import AboutUs from "./AboutUs";
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
