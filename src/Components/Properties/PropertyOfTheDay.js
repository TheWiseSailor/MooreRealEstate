

//propertyoftheday.js
import React from "react";
// images are from unsplash.com and freepik.com
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Listing1Image1 from "./PropertyOfTheDayImages/Listing1/Listing1.png";
import Listing1Image2 from "./PropertyOfTheDayImages/Listing1/Listing1Image2.jpg";
import Listing1Image3 from "./PropertyOfTheDayImages/Listing1/Listing1Image3.jpg";
import Listing1Image4 from "./PropertyOfTheDayImages/Listing1/Listing1Image4.jpg";
//listing1 end
import Listing2Image1 from "./PropertyHomepageImages/Listing2.png";
import Listing2Image2 from "./PropertyOfTheDayImages/Listing2/Listing2Image1.jpg";
import Listing2Image3 from "./PropertyOfTheDayImages/Listing2/Listing2Image2.jpg";
import Listing2Image4 from "./PropertyOfTheDayImages/Listing2/Listing2Image3.jpg";
//listing2 end
import Listing3Image1 from "./PropertyHomepageImages/Listing3.png";
import Listing3Image2 from "./PropertyOfTheDayImages/Listing3/Listing3Image2.jpg";
import Listing3Image3 from "./PropertyOfTheDayImages/Listing3/Listing3Image3.jpg";
import Listing3Image4 from "./PropertyOfTheDayImages/Listing3/Listing3Image4.jpg";
import Listing3Image5 from "./PropertyOfTheDayImages/Listing3/Listing3Image5.jpg";
//listing4 end
import Listing4Image1 from "./PropertyHomepageImages/Listing4.png";
import Listing4Image2 from "./PropertyOfTheDayImages/Listing4/Listing4Image2.jpg";
import Listing4Image3 from "./PropertyOfTheDayImages/Listing4/Listing4Image3.jpg";
import Listing4Image4 from "./PropertyOfTheDayImages/Listing4/Listing4Image4.jpg";
import Listing4Image5 from "./PropertyOfTheDayImages/Listing4/Listing4Image5.jpg";
import "./PropertyOfTheDay.css";

const PropertyOfTheDay = () => {
  const { id } = useParams();

  const allProperties = [
    {
      id: 1,
      images: [Listing1Image1, Listing1Image2, Listing1Image3, Listing1Image4],
      price: "$1,200,000 / $12-20k Month",
      details: "3 beds / 2 baths / 3500 sqft",
      address: "Wilmington, NC",
      agent: "Samantha Bennett",
    },
    {
      id: 2,
      images: [Listing2Image1, Listing2Image2, Listing2Image3, Listing2Image4],
      price: "$700,000 / $7-14k Month",
      details: "2 beds / 3 baths / 2000 sqft",
      address: "Charleston, SC",
      agent: "Ken Lowell",
    },

    // populate the rest of the properties with new images
    // then start working on the peroperties page
    {
      id: 3,
      images: [Listing3Image1, Listing3Image2, Listing3Image3,Listing3Image4, Listing3Image5],
      price: "$600,000 / $6-12k Month",
      details: "3 beds / 2.5 baths / 1800 sqft",
      address: "Wilmington, NC",
      agent: "Zach Holland",
    },
    {
      id: 4,
      images: [Listing4Image1, Listing4Image2, Listing4Image3, Listing4Image4, Listing4Image5],
      price: "$800,000 / $8-16k Month",
      details: "5 beds / 4 baths / 2500 sqft",
      address: "Wrightsville, NC",
      agent: "Anna Mae",
    },
  ];

  const property = allProperties.find(
    (property) => property.id === parseInt(id)
  );

  if (!property) {
    return <div>Property not found</div>;
  }
  return (
    <div className="PropertyOfTheDayBg">
      <Carousel className="Carousel" showThumbs={false}>
        {property.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              className="PropertyImage"
              alt={`mr-12: Property ${property.id} - ${index + 1}`}
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
            <>Agent</>
            <p>{property.agent}</p>
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
    </div>
  );
};

export default PropertyOfTheDay;
