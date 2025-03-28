import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Process from "../components/process/Process";
import Layout from "@theme/Layout";

export default function AboutUs() {
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
      <div
        style={{
          position: "absolute",
          top: "64px",
          left: "20px",
          zIndex: 10,
        }}
      >
        <img
          src={useBaseUrl("img/logo.jpg")}
          alt="Seacoast Builders Logo"
          style={{ height: "180px" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          fontSize: "20px",
          fontWeight: 500,
        }}
      >
        <div class="process-container">
          <div class="process-image-content">
            <img
              src={useBaseUrl("img/homepage/reviewing-plans.jpg")}
              alt="Image of Seacoast Builders About Us Team Reviewing Plans"
            />
          </div>
          <div class="text-content">
            <h2 style={{ color: "#102a43" }}>About Us</h2>
            <p>
              The team at Seacoast Builders has been building custom homes and
              additions throughout Boston’s metro west area for over twenty
              years. Recently relocated to Cape Cod, Seacoast Builders continues
              provides their quality home building services throughout Cape Cod
              and the Islands.
              <br></br>
              From excavation to completion, we provide a turn-key system for
              our customers with a focus on cape-style design and quality
              craftmanship Our careful attention to detail and solid workmanship
              are the cornerstones of our business. Our work is reasonably
              priced and backed by a guarantee of integrity, honesty and a
              commitment to your on-going satisfaction.
            </p>
          </div>
        </div>
        <div
          class="text-content"
          style={{ width: "80%", margin: "auto", padding: "0 40px" }}
        >
          <h2
            style={{
              marginBottom: "20px",
              marginTop: "0px",
              color: "#102a43",
            }}
          >
            Our Process
          </h2>
          <p>
            Whether building a new custom home, or remodeling an existing home,
            Seacoast Builders understands that everyone wants a home which is a
            special place that reflects your own style and taste. However, for
            many people building a custom home or starting a remodeling project
            can be overwhelming. Where do you start? Are there budget
            considerations? What about the style, design, and plans? Our process
            follows simple steps to ensure your vision is becomes a reality.
          </p>
        </div>
        <Process />
      </div>
    </Layout>
  );
}
