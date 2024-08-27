import React from "react";
import "./WhyUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faDollarSign,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <h2>Why Choose Us</h2>
      <p>
        Choosing a home builder can seem daunting, but we've taken the time to
        research the industry and understand what customers want. That's why
        we're confident that our services will exceed expectations:
      </p>
      <div className="feature">
        <FontAwesomeIcon icon={faCheckCircle} className="icon" />
        <div className="feature-text">
          <h3>Attention To Detail</h3>
          <p>
            Our team has been building homes for years and has built over a
            hundred projects. From minor changes like paint color samples to
            major ones like adding extra windows.
          </p>
        </div>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faDollarSign} className="icon" />
        <div className="feature-text">
          <h3>Cost</h3>
          <p>
            We offer competitive rates for everything from custom homes to
            remodels, allowing you to choose what works best for your budget.
          </p>
        </div>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faHeadset} className="icon" />
        <div className="feature-text">
          <h3>24/7 Support</h3>
          <p>
            At Royal Home Builders, we understand how important it is to have
            someone who can answer any questions or concerns right away—and we
            do just that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
