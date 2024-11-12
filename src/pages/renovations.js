import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import RenovationsCarousel from "../components/gallery/Renovations";
import Layout from "@theme/Layout";

export default function RenovationsGallery() {
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
      <div className="gallery-wrapper">
        <RenovationsCarousel />
      </div>
    </Layout>
  );
}
