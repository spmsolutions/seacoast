import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { TextCards } from "@infinum/docusaurus-theme";
import "../theme/responsive.css";
import Reviews from "../components/reviews/Reviews";
import WhyChooseUs from "../components/whyus/WhyUs";

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
              <div style={{ marginBottom: "16px" }}>
                <a
                  href={useBaseUrl("contact-us")}
                  className="free-consultation"
                >
                  Get a FREE Consultation
                </a>
              </div>
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
                  At Seacoast Builders, we bring your dream home to life with
                  precision and care. As custom home builders on Cape Cod and
                  the Islands, we specialize in bespoke homes, additions, and
                  renovations tailored to your unique style and needs. Enjoy a
                  seamless journey with us, from concept to completion, and
                  experience the joy of living in a home designed just for you.
                </p>
              </div>
              <div class="image-content">
                <img
                  src="img/homepage/intro-ai-home.jpg"
                  alt="Seacoast Builders Intro"
                />
              </div>
            </div>

            <div className="promise-container">
              <div className="promise-image">
                <img
                  src="img/homepage/promise-cropped-couple.png"
                  alt="Seacoast Builders Promise Image"
                />
              </div>
              <div className="promise-text">
                <h2 style={{ marginBottom: "20px" }}>Our Promise to You</h2>
                <p>
                  Our commitment goes beyond construction. We understand that a
                  home is a personal sanctuary where life unfolds and memories
                  are made. We promise to craft a home that reflects your
                  personality, lifestyle, and dreams. Each home we build is a
                  testament to our dedication to quality, customization, and
                  client satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              height: "auto",
              width: "100%",
              minHeight: "80vh",
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
              {/* <div id='get-started' style={{ color: '#5B77AF', backgroundColor: '#F5F9FF' }}> */}
              <div id="get-started" style={{ color: "#334E68" }}>
                <TextCards
                  title="Our Services"
                  subtitle="From excavation to completion, we offer a comprehensive, turn-key system for our customers, specializing in cape-style design and quality craftsmanship. Our meticulous attention to detail and exceptional workmanship are the cornerstones of our business. We provide reasonably priced services, backed by a guarantee of integrity, honesty, and a commitment to your ongoing satisfaction."
                  cards={[
                    {
                      title: "Custom Homes",
                      subtitle:
                        "At Seacoast Builders, we turn your dream home into reality with precision and care. Our custom home construction services are designed to reflect your unique style and needs, ensuring every detail is perfect. From concept to completion, we manage every aspect of the build, guaranteeing exceptional craftsmanship and a seamless experience. Trust us to create a home that is a true reflection of your vision.",
                    },
                    {
                      title: "Home Additions",
                      subtitle:
                        "When you love your house and neighborhood but need more space, building an addition or remodeling your entire home could be the solution. A well-designed addition or remodel not only enhances functionality but also significantly boosts your home's beauty, curb appeal, and resale value. Our team of remodeling professionals will assess your current home, space utilization, and future needs to create a seamless, customized addition or reconfiguration that fits your lifestyle perfectly.",
                    },
                    {
                      title: "Renovations",
                      subtitle:
                        "Seacoast Builders specializes in transforming your existing space into something extraordinary. Our renovation services enhance the functionality and aesthetic appeal of your home, ensuring it meets your evolving needs. Whether it's a kitchen makeover, a bathroom update, or a whole-house renovation, our attention to detail and commitment to quality will bring your vision to life. Experience the joy of a beautifully renovated home tailored to your lifestyle.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="journey-cta">
            At Seacoast Builders, we craft the backdrop for your life's precious
            moments with a commitment to excellence and a passion for design.
            Let us transform your dream into reality.
            <div style={{ marginTop: "24px" }}>
              <a
                href={useBaseUrl("contact-us")}
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  backgroundColor: "#5D55FA",
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

        <div
          style={{
            position: "relative",
            height: "auto",
            padding: "36px",
            background: "linear-gradient(180deg, #3EBD93, #FFF3C4)",
          }}
        >
          <Reviews />
        </div>
        <div style={{ backgroundColor: "#FFF3C4" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <hr style={{ border: "1px solid #627D98", width: "80%" }} />
          </div>
          <WhyChooseUs />
        </div>
      </div>
    </Layout>
  );
}
