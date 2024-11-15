import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import "../theme/responsive.css";
import Reviews from "../components/reviews/Reviews";

export default function Services() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const backgroundImage = useBaseUrl("img/homepage/porch.jpg");

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName="es-footer-white"
    >
      <div
        className="services-container"
        style={{
          height: "100%",
          backgroundColor: "#f9f9f9",
          fontSize: "20px",
          fontWeight: 500,
        }}
      >
        <h2 style={{ color: "#102a43", textAlign: "center" }}>
          Complete Home Construction and Renovation Services
        </h2>
        <div
          className="text-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <h2 style={{ color: "#486581", marginBottom: "18px" }}>
              Our Services
            </h2>
            <p style={{ color: "#102a43" }}>
              From excavation to completion, we offer a comprehensive, turn-key
              system for our customers, specializing in cape-style design and
              quality craftsmanship. Our meticulous attention to detail and
              exceptional workmanship are the cornerstones of our business. We
              provide reasonably priced services, backed by a guarantee of
              integrity, honesty, and a commitment to your ongoing satisfaction.
            </p>
          </div>
          <div class="container">
            <div class="text-content">
              <h2 style={{ color: "#486581", marginBottom: "18px" }}>
                Custom Homes
              </h2>
              <p style={{ color: "#102a43" }}>
                At Seacoast Builders, we turn your dream home into reality with
                precision and care. Our custom home construction services are
                designed to reflect your unique style and needs, ensuring every
                detail is perfect. From concept to completion, we manage every
                aspect of the build, guaranteeing exceptional craftsmanship and
                a seamless experience. Trust us to create a home that is a true
                reflection of your vision.
              </p>
            </div>
            <div class="image-content">
              <img
                src={useBaseUrl("img/portfolio/new-homes/single-family-home.png")}
                alt="Seacoast Builders Custom home image"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>
          <div className="promise-container" style={{width: '100%'}}>
            <div className="promise-image">
              <img
                src={useBaseUrl("img/portfolio/new-homes/three-story-house.png")}
                alt="Seacoast Builders Additions Image"
                style={{ borderRadius: "12px" }}
              />
            </div>
            <div className="promise-text">
              <h2 style={{ color: "#486581", marginBottom: "18px" }}>
                Home Additions
              </h2>
              <p style={{ color: "#102a43" }}>
                When you love your house and neighborhood but need more space,
                building an addition or remodeling your entire home could be the
                solution. A well-designed addition or remodel not only enhances
                functionality but also significantly boosts your home's beauty,
                curb appeal, and resale value. Our team of remodeling
                professionals will assess your current home, space utilization,
                and future needs to create a seamless, customized addition or
                reconfiguration that fits your lifestyle perfectly.
              </p>
            </div>
          </div>
          <div class="container">
            <div class="text-content">
              <h2 style={{ color: "#486581", marginBottom: "18px" }}>
                Renovations
              </h2>
              <p style={{ color: "#102a43" }}>
                Seacoast Builders specializes in transforming your existing
                space into something extraordinary. Our renovation services
                enhance the functionality and aesthetic appeal of your home,
                ensuring it meets your evolving needs. Whether it's a kitchen
                makeover, a bathroom update, or a whole-house renovation, our
                attention to detail and commitment to quality will bring your
                vision to life. Experience the joy of a beautifully renovated
                home tailored to your lifestyle.
              </p>
            </div>
            <div class="image-content">
              <img
                src={useBaseUrl("img/portfolio/renovations/grey-kitchen.png")}
                alt="Seacoast Builders Renovations Image"
                style={{ borderRadius: "12px" }}
              />
            </div>
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
            background: `url(${backgroundImage}) no-repeat center center`,
            backgroundSize: "cover",
            opacity: 0.1,
            zIndex: 1,
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 2, paddingTop: "20px" }}>
          <Reviews />
        </div>
      </div>
    </Layout>
  );
}
