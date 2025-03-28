import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactForm from "../components/contact/ContactForm";
import Layout from "@theme/Layout";

export default function ContactUs() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName="es-footer-white"
      style={{ backgroundColor: "white" }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          fontSize: "20px",
          fontWeight: 500,
        }}
      >
        <ContactForm />
      </div>
    </Layout>
  );
}
