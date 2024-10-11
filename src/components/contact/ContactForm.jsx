import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:tim@seacoastbuilders.org?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us TODAY</h2>
      <p>
        New home construction services from Seacoast Builders are expertly
        designed to provide you with the home of your dreams. We are masters in
        building custom homes and additions and believe that building a new home
        should be a fun and exciting time, and we want to make sure that your
        experience is as pleasant as possible.
      </p>
      <h3 style={{ textAlign: "center" }}>
        Call Us at{" "}
        <a
          href="tel:5082542804"
          style={{ color: "#1992D4", marginLeft: "4px" }}
        >
          508-254-2804
        </a>
      </h3>
      <p>
        Seacoast Builders <br></br>
        68 Elgin Road, <br></br>
        Pocasset, MA
      </p>
      <p>Email: tim@seacoastbuilders.org</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: "#1992D4" }}>
          {" "}
          Contact Us Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
