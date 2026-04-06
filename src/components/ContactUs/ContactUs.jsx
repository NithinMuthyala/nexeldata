"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactUs.module.css";
import { FaPaperPlane } from "react-icons/fa"; // react-icons

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
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get started</h2>
          <p className={styles.subtitle}>
            We’d love to hear from you! Reach out to us for any queries or support.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>100% Satisfaction Guaranteed</h3>
            <p className={styles.infoDesc}>
              At Nexel Data, we deliver top-notch IT solutions customized to your business needs. We ensure reliable support, seamless communication, and high-quality results.
            </p>
            <h4 className={styles.infoTitle} style={{fontSize: "1.5rem"}}>What will be the next step?</h4>
            <ul className={styles.infoList}>
              <li>We’ll review your requirements and prepare a detailed proposal.</li>
              <li>Schedule a call and gather your input.</li>
              <li>Kick off the project together and start building success!</li>
            </ul>
          </div>

          <div className={styles.formCard}>
            {submitted && (
              <div className={styles.successMsg}>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className={styles.input}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className={styles.input}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <select
                  name="service"
                  className={styles.input}
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
                {errors.service && <span className={styles.error}>{errors.service}</span>}
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Message"
                  className={styles.input}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
