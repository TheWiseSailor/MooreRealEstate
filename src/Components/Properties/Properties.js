// src/components/Properties/Properties.js
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import "./Properties.css";
// images are from pixabay.com / unsplash.com
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

const Properties = () => {

  const otherProperties = [
    {
      id: 1,
      image: Property1,
      price: "$950,000 / $9-15k Month",
      details: "4 beds / 3 baths / 2800 sqft",
      address: "123 Main St, Wilmington, NC",
    },
    {
      id: 2,
      image: Property2,
      price: "$550,000 / $5-10k Month",
      details: "2 beds / 2 baths / 1500 sqft",
      address: "456 Oak St, Wilmington, NC",
    },
    {
      id: 3,
      image: Property3,
      price: "$1,500,000 / $15-25k Month",
      details: "6 beds / 5 baths / 4000 sqft",
      address: "789 Pine St, Wilmington, NC",
    },
    {
      id: 4,
      image: Property4,
      price: "$1,100,000 / $11-18k Month",
      details: "5 beds / 4.5 baths / 3500 sqft",
      address: "101 Maple St, Wilmington, NC",
    },
    {
      id: 5,
      image: Property5,
      price: "$750,000 / $7-12k Month",
      details: "3 beds / 2.5 baths / 2300 sqft",
      address: "202 Elm St, Wilmington, NC",
    },
    {
      id: 6,
      image: Property6,
      price: "$620,000 / $6-11k Month",
      details: "4 beds / 3 baths / 2600 sqft",
      address: "303 Birch St, Wilmington, NC",
    },
    {
      id: 7,
      image: Property7,
       price: "$890,000 / $8-14k Month",
      details: "5 beds / 4 baths / 3200 sqft",
      address: "404 Cedar St, Wilmington, NC",
    },
    {
      id: 8,
      image: Property8,
      price: "$1,200,000 / $12-20k Month",
      details: "6 beds / 5.5 baths / 4000 sqft",
      address: "505 Walnut St, Wilmington, NC",
    },
    {
      id: 9,
      image: Property9,     
       price: "$580,000 / $5-9k Month",
      details: "3 beds / 2 baths / 1800 sqft",
      address: "606 Pineapple St, Wilmington, NC",
    },
    {
      id: 10,
      image: Property10, 
      price: "$950,000 / $9-15k Month",
      details: "4 beds / 3.5 baths / 3400 sqft",
      address: "707 Orange St, Wilmington, NC",
    },
  ];
  const [searchInput, setSearchInput] = useState('');
  const filteredProperties = otherProperties.filter(property =>
    property.address.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="PropertyListingOfTheDayBg">
      <h1 className="PropertyListingDetailsTitle" data-aos="fade-down" data-aos-duration="3000">
        <input
          type="text"
          placeholder="Search Wilmington Properties..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="animated-search-bar"
        />
      </h1>

      {filteredProperties.map((property) => (
        <div key={property.id} className="property-card-container" data-aos="fade-down" data-aos-duration="3000">
          <img
            src={property.image}
            alt={`Property ${property.id} - ${property.address}`}
            className="PropertyListingImage"
          />
          <div className="PropertyListingDetails">
            <p>{property.price}</p>
            <p>{property.details}</p>
            <p className="property-address">{property.address}</p>
            <Link key={property.id} to={`/properties/${property.id}`}>
              <button className="green-button">View!</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;