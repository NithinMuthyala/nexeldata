"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.service || formData.service === "Select a service") {
      newErrors.service = "Please select a service";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);

      // Simulate API success
      setSubmitted(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
        message: "",
      });
      emailjs.send(
        "service_9ad07ap",
        "template_hpq6kgm",
        {
          name: `${formData.firstName} ${formData.lastName}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        "4H2pDx5Viz4ZfYg2A"
      );

      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="get-started">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
          <p className="lh-lg">
            We’d love to hear from you! Reach out to us for any queries or
            support.
          </p>
        </div>

        {/* START CTA */}
        <div className="row text-white">
          <div className="col-12 col-lg-6 gradient shadow p-3">
            <div className="cta-info w-100">
              <h4 className="display-4 fw-bold">
                100% Satisfaction Guaranteed
              </h4>
              <p className="lh-lg">
                At Nexel Data, we deliver top-notch IT solutions customized to
                your business needs. We ensure reliable support, seamless
                communication, and high-quality results.
              </p>
              <h3 className="display-3--brief">What will be the next step?</h3>
              <ul className="cta-info__list">
                <li>
                  We’ll review your requirements and prepare a detailed
                  proposal.
                </li>
                <li>Schedule a call and gather your input.</li>
                <li>
                  Kick off the project together and start building success!
                </li>
              </ul>
            </div>
          </div>

          {/* FORM SECTION */}
          <div className="col-12 col-lg-6 bg-white shadow pt-5 pb-4">
            {submitted && (
              <div className="alert alert-success text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form className="row" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="col-12 col-lg-6 mb-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="shadow form-control form-control-lg"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <small className="text-danger">{errors.firstName}</small>
                )}
              </div>

              {/* Last Name */}
              <div className="col-12 col-lg-6 mb-3">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="shadow form-control form-control-lg"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <small className="text-danger">{errors.lastName}</small>
                )}
              </div>

              {/* Email */}
              <div className="col-12 col-lg-12 mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="shadow form-control form-control-lg"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              {/* Service Dropdown */}
              <div className="col-12 col-lg-12 mb-3">
                <select
                  name="service"
                  className="shadow form-control form-control-lg"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option>Select a service</option>
                  <option>Design</option>
                  <option>Development</option>
                  <option>DevOps</option>
                  <option>Cyber Security</option>
                  <option>AI ML</option>
                  <option>Digital Marketing</option>
                  <option>Data Analytics</option>
                  <option>ERP</option>
                </select>
                {errors.service && (
                  <small className="text-danger">{errors.service}</small>
                )}
              </div>

              {/* Message */}
              <div className="col-12 col-lg-12 mb-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={8}
                  className="shadow form-control form-control-lg"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}
              </div>

              <div className="text-center d-grid mt-1">
                <button
                  type="submit"
                  className="rounded-pill btn-rounded pt-3 pb-3"
                >
                  Submit <i className="fas fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
