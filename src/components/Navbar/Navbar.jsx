"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi"; // using react-icons since it's in package.json
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();

  const handleShowBar = () => {
    setShowMenu((prev) => !prev);
  }

  useEffect(() => {
    if (showMenu) {
      setShowMenu(false);
    }
  }, [pathName]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.logo} href="/">
          <img src="/images/nexel_logo.png" alt="Nexel Data Logo" />
        </Link>
        <button
          className={styles.mobileToggle}
          onClick={handleShowBar}
          aria-label="Toggle navigation"
        >
          {showMenu ? <HiX /> : <HiMenu />}
        </button>
        <div className={`${styles.navMenu} ${showMenu ? styles.show : ""}`}>
          <Link className={`${styles.navLink} ${pathName === "/" ? styles.active : ""}`} href="/">
            Home
          </Link>
          <Link className={`${styles.navLink} ${pathName === "/services" ? styles.active : ""}`} href="/services">
            Services
          </Link>
          <Link className={`${styles.navLink} ${pathName === "/contact-us" ? styles.active : ""}`} href="/contact-us">
            Contact
          </Link>
          <Link className={`${styles.navLink} ${pathName === "/about-us" ? styles.active : ""}`} href="/about-us">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;