import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Layout from "@theme/Layout";

export default function Gallery() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} | Gallery`}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName="es-footer-white"
      style={{ backgroundColor: "#f9f9f9" }}
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
        className="gallery-container"
        style={{ height: "100%", fontSize: "20px", fontWeight: 500 }}
      >
        <h2>Gallery</h2>
        <p>Explore our projects, including New Homes and Renovations.</p>

        <div className="gallery-btns">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a href={useBaseUrl("/new-homes")}>
              <img
                src={useBaseUrl("img/portfolio/new-homes/woodbury-ct-home.png")}
                alt="Seacoast Builders Custom home image"
                style={{
                  borderRadius: "12px",
                  width: "600px",
                  marginBottom: "20px",
                }}
              />
            </a>
            <a
              href={useBaseUrl("/new-homes")}
              style={{
                display: "block",
                padding: "1rem",
                backgroundColor: "#1992D4",
                color: "#ffffff",
                borderRadius: "8px",
                textDecoration: "none",
                textAlign: "center",
                width: "280px",
              }}
            >
              New Homes
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a href={useBaseUrl("/renovations")}>
              <img
                src={useBaseUrl(
                  "img/portfolio/additions/home_addition_office.png",
                )}
                alt="Seacoast Builders Custom office image"
                style={{
                  borderRadius: "12px",
                  width: "600px",
                  marginBottom: "20px",
                }}
              />
            </a>
            <a
              href={useBaseUrl("/renovations")}
              style={{
                display: "block",
                padding: "1rem",
                backgroundColor: "#1992D4",
                color: "#ffffff",
                borderRadius: "8px",
                textDecoration: "none",
                textAlign: "center",
                width: "280px",
              }}
            >
              Renovations & Additions
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
