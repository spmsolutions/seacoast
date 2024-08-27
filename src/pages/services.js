import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ServicesCarousel from "../components/services/Portfolio";
import Layout from "@theme/Layout";

export default function Services() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName="es-footer-white"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div style={{ backgroundColor: "#f9f9f9", height: "100%" }}>
        <ServicesCarousel />
      </div>
    </Layout>
  );
}
