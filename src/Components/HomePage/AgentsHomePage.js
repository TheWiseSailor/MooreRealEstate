// the following images are from freepik.com, and unsplash.com

import React from "react";
import { Link } from "react-router-dom";
import AOSInitializer from "../AOS/AOSInitializer";
import "../../App.css";

import AimeeMooreImage from "../images/AgentHomepageImages/SamanthaBennett.png";
import CarterMooreImage from "../images/AgentHomepageImages/Carter.png";
// import ZachHollandImage from "../images/AgentHomepageImages/ZachHolland.png";
// import KenLowellImage from "../images/AgentHomepageImages/KenLowell.png";

const agentData = [
  {
    id: 1,
    name: "Aimee Moore",
    image: AimeeMooreImage,
  },
  {
    id: 2,
    name: "Carter Moore",
    image: CarterMooreImage,
  },
  // {
  //   id: 3,
  //   name: "Zach Holland",
  //   image: ZachHollandImage,
  // },
  // {
  //   id: 4,
  //   name: "Ken Lowell",
  //   image: KenLowellImage,
  // },
];

const AgentCard = ({ agent }) => (
  <div>
    {" "}
    <AOSInitializer />
    <div
      className="agent-card"
      data-aos="fade-up"
      data-aos-duration="3000"
      key={agent.id}
    >
      <img src={agent.image} alt={agent.name} className="agent-image" />
      <div className="agent-details">
        <Link to={`/agent/${agent.name}`} className="agent-name">
          {agent.name}
        </Link>
      </div>
    </div>
  </div>
);

const AgentsHomePage = () => {
  return (
    <div className="real-estate-agents-container">
      <AOSInitializer />
      <h1
        className="AgentHomepage mb-12"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Meet Our Agents!
      </h1>
      {agentData.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
};

export default AgentsHomePage;
