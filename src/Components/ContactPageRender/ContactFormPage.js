import React, { useState } from "react";
import AOSInitializer from "../AOS/AOSInitializer.js";

import "./Contact.css";

const ContactFormPage = () => {
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

    setTyping((prevTyping) => ({
      ...prevTyping,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

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
    <div className="contact-container-form-page">
      <AOSInitializer />

      <div
        className="contact-form-container-page"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2 className="ContactHomePageHeader-container-page pb-6">
          Contact Form
        </h2>
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
              placeholder={typing.name ? "" : "John"}
            />

            <label className="label-container-page" htmlFor="email">
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

            <label className="label-container-page" htmlFor="phone">
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

            <label
              className="label-container-page bg-black-600"
              htmlFor="subject"
            >
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

            <label className="label-container-page" htmlFor="message">
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

            <button className="button-container-page" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactFormPage;
