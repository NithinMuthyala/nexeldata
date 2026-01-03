"use client";
import ContactUs from "@/components/ContactUs/ContactUs";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { iconMap } from "./iconMap";

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
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
      </div>
    );
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="container py-5">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-3 mb-md-0">
            <ol className="breadcrumb bg-light p-3 rounded-3 shadow-sm m-0">
              <li className="breadcrumb-item">
                <a
                  href="/"
                  className="text-decoration-none fw-semibold text-primary"
                >
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a
                  href="/services"
                  className="text-decoration-none fw-semibold text-primary"
                >
                  Services
                </a>
              </li>
              <li
                className="breadcrumb-item active fw-bold"
                aria-current="page"
              >
                {data.title}
              </li>
            </ol>
          </nav>
        </div>

        <p className="fs-5 text-primary">{data.sub_title}</p>

        <div className="mt-4">
          <p className="text-muted">{data.short_description}</p>
          <p className="text-muted">{data.long_description}</p>
          <p className="text-muted">{data.description}</p>
        </div>
      </section>
      <section className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">{data.our_process.title}</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {data.our_process.process.map((step, index) => {
            return (
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="card border rounded-4 shadow-sm h-100 text-center p-4">
                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "65px", height: "65px", fontSize: "26px" }}
                  >
                    <ServiceIcon iconName={step.icon} />
                  </div>
                  <h5 className="fw-semibold">{step.step}</h5>
                  <p className="text-muted small mt-2">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="position-relative text-white text-center py-5 mt-3"
        style={{
          backgroundImage: "url('/images/campanies/bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}
        ></div>
        <div className="position-relative container" style={{ zIndex: 2 }}>
          <h2 className="fw-bold mb-5">{data.industry_we_serve.title}</h2>

          <div className="row g-4 justify-content-center">
            {data.industry_we_serve.serve_details.map((item, index) => {
              return (
                <div className="col-12 col-md-4 col-lg-3" key={index}>
                  <div className="card bg-light text-dark rounded-4 shadow-sm py-4 px-3 h-100 d-flex flex-column align-items-center">
                         <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "65px", height: "65px", fontSize: "26px" }}
                  >
                    <ServiceIcon iconName={item.icon} />
                  </div>
                    <h6 className="fw-semibold text-center">{item.title}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default ServiceDetails;
