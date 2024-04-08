import React from "react";
import { useParams } from "react-router-dom";
import agent1Image from "../images/AgentHomepageImages/SamanthaBennett.png";
import agent2Image from "../images/AgentHomepageImages/AnnaMae.png";
import agent3Image from "../images/AgentHomepageImages/ZachHolland.png";
import agent4Image from "../images/AgentHomepageImages/KenLowell.png";
import AOSInitializer from "../AOS/AOSInitializer.js";
import facebookIcon from "./Facebook.png";
import instagramIcon from "./Instagram.png";
import twitterIcon from "./Twitter.png";

import "./agents.css";

const agentData = [
  {
    id: 1,
    name: "Samantha Bennett",
    image: agent1Image,
    description: "Real Estate Broker",

    phoneNumber: "+1234567890",
    address: "513 Main St, Wilmington, NC",
    socials: {
      facebook: "facebook.com/samantha.bennett",
      twitter: "@samantha_realtor",
      instagram: "@samantha_realestate",
    },
  },
  {
    id: 2,
    name: "Anna Mae",
    image: agent2Image,
    description: "Broker Associate Agent",
    phoneNumber: "+1234567890",
    address: "693 West Main St, Wilmington, NC",
    socials: {
      facebook: "facebook.com/samantha.bennett",
      twitter: "@AnnaMae_realtor",
      instagram: "@AnnaMae_realestate",
    },
  },
  {
    id: 3,
    name: "Zach Holland",
    image: agent3Image,
    description: "Senior Real Estate Agent",
    phoneNumber: "+1234567890",
    address: "324 South Main St, Wilmington, NC",
    socials: {
      facebook: "facebook.com/samantha.bennett",
      twitter: "@ZachHolland_realtor",
      instagram: "@ZachH_realestate",
    },
  },
  {
    id: 4,
    name: "Ken Lowell",
    image: agent4Image,
    description: "Senior Real Estate Agent",
    phoneNumber: "+1234567890",
    address: "183 North Main St, Wilmington, NC",
    socials: {
      facebook: "facebook.com/samantha.bennett",
      twitter: "@Ken_realtor",
      instagram: "@Ken_realestate",
    },
  },
];

const AgentProfile = () => {
  const { name } = useParams();

  const agent = agentData.find((agent) => agent.name === name);

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div>
      <div className="AgentProfileBg ">
        <AOSInitializer />
        <img
          src={agent.image}
          alt={agent.name}
          className="AgentImage"
          data-aos="fade-up"
          data-aos-duration="3000"
        />
        <h1 className="AgentName" data-aos="fade-down" data-aos-duration="3000">
          {agent.name}
        </h1>
        <p className="Description" data-aos="fade-up" data-aos-duration="3000">
          {agent.description}
        </p>

        {/* Additional Sections */}

        {agent.address && (
          <p className="Address" data-aos="fade-up" data-aos-duration="3000">
            {agent.address}
          </p>
        )}
        {agent.phoneNumber && (
          <p
            className="PhoneNumber"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Phone: {agent.phoneNumber}
          </p>
        )}

        {agent.socials && (
          <div className="SocialLinks ">
            <AOSInitializer />
            {agent.socials.facebook && (
              <a
                href={agent.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="social-icon"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                />
              </a>
            )}
            {agent.socials.twitter && (
              <a
                href={`https://twitter.com/${agent.socials.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AOSInitializer />
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="social-icon"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                />
              </a>
            )}
            {agent.socials.instagram && (
              <a
                href={`https://instagram.com/${agent.socials.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;
