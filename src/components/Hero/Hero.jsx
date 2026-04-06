"use client"
import { useRouter } from "next/navigation";
import styles from "./Hero.module.css";
import { HiArrowRight } from "react-icons/hi"; // From react-icons

const Hero = () => {
  const router = useRouter();
  
  const getInTouch = () => {
    router.push("/contact-us");
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>Nexel Data</span>
          </h1>
          <p className={styles.description}>
            We blend creativity with technology to build exceptional digital experiences. Whether it’s product design, enterprise software, or data security — we’ve got you covered.
          </p>
          <button type="button" className={styles.ctaButton} onClick={getInTouch}>
            Get in Touch <HiArrowRight size={20} />
          </button>
        </div>
        
        <div className={styles.imageBox}>
          {/* using standard img for simplicity but styling it nicely */}
          <img
            src="/images/3.png"
            alt="Hero Illustration"
            className={styles.image}
          />
        </div>
      </div>
      
      {/* Wave bottom separator */}
      <div className={styles.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="var(--background)"
            fillOpacity={1}
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;