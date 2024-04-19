import React, { useState } from "react";
import "../../App.css";
import Instagram from "../SocialLinkImages/Instagram.png";
import Facebook from "../SocialLinkImages/Facebook.png";
import Twitter from "../SocialLinkImages/Twitter.png";
import AOSInitializer from "../AOS/AOSInitializer";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [typing, setTyping] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Set typing to true once the user starts typing
    setTyping((prevTyping) => ({
      ...prevTyping,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // Set formSubmitted to true once the form is submitted
    setFormSubmitted(true);

    // Reset form data and typing status
    setFormData(initialFormData);
    setTyping({
      name: false,
      email: false,
      phone: false,
      subject: false,
      message: false,
    });
  };

  return (
    <div className="contact-container-formbg">
    <div className="contact-container-form">
      <h1
        className="ContactUsNow mb-12"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Contact Us!
      </h1>
      <AOSInitializer />

      <div
        className="contact-form-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2 className="ContactHomePageHeader pb-6">Contact Form</h2>
        {formSubmitted ? (
          <div className="confirmation-message-container">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form className="form-container" onSubmit={handleSubmit}>
            <label className="label-container" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={typing.name ? "" : "John"} // Display placeholder if not typing
            />

            <label className="label-container" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={typing.email ? "" : "john@example.com"}
            />

            <label className="label-container" htmlFor="phone">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder={typing.phone ? "" : "555-123-4567"}
            />

            <label className="label-container bg-black-600" htmlFor="subject">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={typing.subject ? "" : "Write your subject here!"}
            />

            <label className="label-container" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              placeholder={typing.message ? "" : "Write your message here!"}
            ></textarea>

            <button className="button-container" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>

      <div
        className="company-info-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2 className="pb-12">Our Socials</h2>
  
        <p className="pb-6">Phone: +1 (555) 123-4567</p>
        <div className="social-logos-container">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" className="social-logo" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="social-logo pl-6 pr-6"
            />
          </a>
          <a
            href="https://www.x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Twitter}
              alt="Twitter (now called 'x')"
              className="social-logo"
            />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
