import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // react-icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>Nexel Data</div>
            <p className={styles.desc}>
              We are the pioneers of leading in the software industry. Leading from the last 8 years, we handle every end-to-end solution.
            </p>
            <div className={styles.social}>
              <Link href="#" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebook />
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="Twitter">
                <FaTwitter />
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="GitHub">
                <FaGithub />
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedin />
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
              </Link>
            </div>
          </div>

          <div className={styles.navSection}>
            <h4 className={styles.navTitle}>Web Links</h4>
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink}>Home</Link></li>
              <li><Link href="/services" className={styles.navLink}>Services</Link></li>
              <li><Link href="/about-us" className={styles.navLink}>About Us</Link></li>
            </ul>
          </div>

          <div className={styles.navSection}>
            <h4 className={styles.navTitle}>Useful Links</h4>
            <ul className={styles.navList}>
              <li><Link href="/about-us" className={styles.navLink}>About Us</Link></li>
              <li><Link href="/terms-and-conditions" className={styles.navLink}>Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className={styles.navLink}>Privacy Policy</Link></li>
            </ul>
          </div>

          <div className={styles.navSection}>
            <h4 className={styles.navTitle}>Contact</h4>
            <ul className={styles.navList}>
              <li><Link href="/contact-us" className={styles.navLink}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        &copy; {new Date().getFullYear()} Nexel Data. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;