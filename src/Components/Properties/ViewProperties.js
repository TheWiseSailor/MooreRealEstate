// src/components/Properties/ViewProperties.js
import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ViewProperties.css";
import { Link } from "react-router-dom";


import Property1 from "./PropertyListingImages/Property1.jpg";
import Property2 from "./PropertyListingImages/Property2.jpg";
import Property3 from "./PropertyListingImages/Property3.jpg";
import Property4 from "./PropertyListingImages/Property4.jpg";
import Property5 from "./PropertyListingImages/Property5.jpg";
import Property6 from "./PropertyListingImages/Property6.jpg";
import Property7 from "./PropertyListingImages/Property7.jpg";
import Property8 from "./PropertyListingImages/Property8.jpg";
import Property9 from "./PropertyListingImages/Property9.jpg";
import Property10 from "./PropertyListingImages/Property10.jpg";

const ViewProperties = () => {
  const { id } = useParams();


  const otherProperties = [
    {
      id: 1,
      images: [Property1],
      price: "$950,000 / $9-15k Month",
      details: "4 beds / 3 baths / 2800 sqft",
      address: "123 Main St, Wilmington, NC",
      agent: "Agent Name 1",
    },
    {
      id: 2,
      images: [Property2],
      price: "$550,000 / $5-10k Month",
      details: "2 beds / 2 baths / 1500 sqft",
      address: "456 Oak St, Wilmington, NC",
      agent: "Agent Name 2",
    },
    {
      id: 3,
      images: [Property3],
      price: "$1,500,000 / $15-25k Month",
      details: "6 beds / 5 baths / 4000 sqft",
      address: "789 Pine St, Wilmington, NC",
      agent: "Agent Name 3",
    },
    {
      id: 4,
      images: [Property4],
      price: "$1,100,000 / $11-18k Month",
      details: "5 beds / 4.5 baths / 3500 sqft",
      address: "101 Maple St, Wilmington, NC",
      agent: "Agent Name 4",
    },
    {
      id: 5,
      images: [Property5],
      price: "$750,000 / $7-12k Month",
      details: "3 beds / 2.5 baths / 2300 sqft",
      address: "202 Elm St, Wilmington, NC",
      agent: "Agent Name 5",
    },
    {
      id: 6,
      images: [Property6],
      price: "$620,000 / $6-11k Month",
      details: "4 beds / 3 baths / 2600 sqft",
      address: "303 Birch St, Wilmington, NC",
      agent: "Agent Name 6",
    },
    {
      id: 7,
      images: [Property7],
      price: "$890,000 / $8-14k Month",
      details: "5 beds / 4 baths / 3200 sqft",
      address: "404 Cedar St, Wilmington, NC",
      agent: "Agent Name 7",
    },
    {
      id: 8,
      images: [Property8],
      price: "$1,200,000 / $12-20k Month",
      details: "6 beds / 5.5 baths / 4000 sqft",
      address: "505 Walnut St, Wilmington, NC",
      agent: "Agent Name 8",
    },
    {
      id: 9,
      images: [Property9],
      price: "$580,000 / $5-9k Month",
      details: "3 beds / 2 baths / 1800 sqft",
      address: "606 Pineapple St, Wilmington, NC",
      agent: "Agent Name 9",
    },
    {
      id: 10,
      images: [Property10],
      price: "$950,000 / $9-15k Month",
      details: "4 beds / 3.5 baths / 3400 sqft",
      address: "707 Orange St, Wilmington, NC",
      agent: "Agent Name 10",
    },
  ];

  const property = otherProperties.find(
    (property) => property.id === parseInt(id)
  );

  if (!property) {
    return <div>Property not found</div>;
  }
  return (
    <div className="ViewPropertiesBg">
      <Carousel className="Carousel" showThumbs={false}>
        {property.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              className="PropertyImage"
              alt={`Property ${property.id} - ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>

      <div className="DetailsAndForm">
        <div className="PropertyDetails">
          <div className="DetailPropertyNameSize text-1xl ">
            <div className="PropertyDetailsTitle font-bold ">
              About This Property!
            </div>
            <p>{property.price}</p>
            <p>{property.details}</p>
            <p>{property.address}</p>
            <p>Agent: {property.agent}</p>
          </div>
        </div>
        <div className="ContactForm ">
          <form>
            <div className="ContactFormTitle font-bold text-2xl">
              Contact Your Agent!
            </div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>

            <input className="mb-6 mt-6 " type="submit" value="Submit" />
          </form>
        </div>
      </div>


      <div className="BackButton">
        <Link to="/properties">
          <button className="green-button mb-96">Back to Listings</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewProperties;

//populate the images now