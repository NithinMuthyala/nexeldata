"use client";
import ContactUs from "@/components/ContactUs/ContactUs";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { iconMap } from "./iconMap";
import styles from "./ServicesDetails.module.css";
import Link from "next/link";

const ServiceIcon = ({ iconName }) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const ServiceDetails = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const details = sessionStorage.getItem(pathname.split("/")[2]);
    if (details) {
      setData(JSON.parse(details));
      setLoading(false);
    }
  }, [pathname]);

  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner} role="status" aria-label="Loading..."></div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {/* PAGE HEADER */}
      <section className={styles.section}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>{data.title}</span>
        </div>

        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.subtitle}>{data.sub_title}</p>

        <div className={styles.descriptionBox}>
          <p className={styles.text}>{data.short_description}</p>
          <p className={styles.text}>{data.long_description}</p>
          <p className={styles.text}>{data.description}</p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className={styles.section}>
        <h2 className={styles.gridHeading}>{data.our_process.title}</h2>
        <div className={styles.grid}>
          {data.our_process.process.map((step, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.iconWrapper}>
                  <ServiceIcon iconName={step.icon} />
                </div>
                <h3 className={styles.cardTitle}>{step.step}</h3>
                <p className={styles.cardText}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className={styles.darkSection}>
        <div className={styles.overlay}></div>
        <div className={styles.darkContainer}>
          <h2 className={styles.darkHeading}>{data.industry_we_serve.title}</h2>
          <div className={styles.industryGrid}>
            {data.industry_we_serve.serve_details.map((item, index) => {
              return (
                <div className={styles.industryCard} key={index}>
                  <div className={styles.iconWrapper}>
                    <ServiceIcon iconName={item.icon} />
                  </div>
                  <h3 className={styles.cardTitle} style={{ color: "white" }}>
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactUs />
    </div>
  );
};

export default ServiceDetails;
