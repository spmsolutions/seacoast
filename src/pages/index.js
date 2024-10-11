import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import "../theme/responsive.css";
import WhyChooseUs from "../components/whyus/WhyUs";

import Link from '@docusaurus/Link';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName="es-footer-white"
    >
      <div>
        <div
          className="responsive-container"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "80vh",
            background: `url(${useBaseUrl("img/homepage/porch.jpg")}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              textAlign: "left",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.0)", // Optional: to add a background overlay for better text readability
            }}
          >
            <div className="content-width">
              <h1
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                  color: "#E6E6FF",
                }}
              >
                Your Vision, Our Building Expertise
              </h1>
              <p
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "2rem",
                  color: "white",
                }}
              >
                Find out why we have been a trusted name in the Boston metro
                west area for over 20 years, and recently, in Cape Cod & the
                islands.
              </p>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="welcome-section">
            <div class="container">
              <div class="text-content">
                <h2 style={{ marginBottom: "20px" }}>
                  Welcome to Seacoast Builders
                </h2>
                <p>
                  Seacoast Builders has been building custom homes and additions
                  throughout Boston’s metro west area for over twenty years.
                  Recently relocated to Cape Cod, Seacoast Builders continues
                  provides their quality home building services throughout Cape
                  Cod and the Islands. Our careful attention to detail and solid
                  workmanship are the cornerstones of our business.
                </p>
              </div>
              <div class="image-content">
                <img
                  src="img/homepage/handshake.jpg"
                  alt="Seacoast Builders Intro"
                />
              </div>
            </div>

            <div className="promise-container">
              <div className="promise-image">
                <img
                  src="img/homepage/our-promise-team.jpg"
                  alt="Seacoast Builders Promise Image"
                />
              </div>
              <div className="promise-text">
                <h2 style={{ marginBottom: "20px" }}>Our Promise to You</h2>
                <p>
                  At Seacoast Builders, our commitment to you goes beyond bricks
                  and mortar. We understand that a home is a personal sanctuary,
                  a place where life unfolds and memories are made. That’s why
                  our promise to you is not just to build a house, but to craft
                  a home that is uniquely yours, reflecting your personality,
                  lifestyle, and dreams. Our work is backed by our guarantee of
                  integrity, honesty and a commitment to your on-going
                  satisfaction.
                </p>
              </div>
            </div>

            <div class="container">
              <div class="text-content">
                <h2 style={{ marginBottom: "20px" }}>Begin Your Journey</h2>
                <p>
                  Embark on a seamless journey with us, from concept to
                  completion, and experience the joy of living in a home or
                  renovation designed just for you. Every one of our projects is
                  a testament to our dedication to quality, customization, and
                  client satisfaction. With a commitment to excellence and a
                  passion for design, we invite you to start your journey with
                  us today. Contact us to learn more about how we can transform
                  your dream into reality.
                </p>
              </div>
              <div class="image-content">
                <img
                  src="img/portfolio/renovations/blue-white-kitchen.jpg"
                  alt="Seacoast Builders Intro"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              height: "auto",
              width: "100%",
              minHeight: "40vh",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `url(${"img/homepage/porch.jpg"}) no-repeat center center`,
                backgroundSize: "cover",
                opacity: 0.1,
                zIndex: 1,
              }}
            ></div>
            <div
              style={{ position: "relative", zIndex: 2, paddingTop: "120px" }}
            >
              <WhyChooseUs />
            </div>
          </div>
          <div className="journey-cta">
            At Seacoast Builders, we craft the backdrop for your life's precious
            moments with a commitment to excellence and a passion for design.
            Let us transform your dream into reality.
            <div style={{ marginTop: "24px" }}>
              <a
                href="http://localhost:3000/seacoast/contact-us"
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  backgroundColor: "#1992D4",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Start Your Journey Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
