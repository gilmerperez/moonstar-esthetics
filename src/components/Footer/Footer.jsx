import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <section className={styles.footerContainer}>
          {/* Navigation Links */}
          <nav className={styles.footerLinks} aria-label="Footer Navigation">
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service">Terms of Service</NavLink>
          </nav>

          {/* Business Disclaimer */}
          <p className={styles.legalDisclaimer}>
            Moonstar Esthetics provides professional skincare and wellness services. This website is for informational
            purposes only and does not offer medical advice, diagnosis, or treatment. All services are by appointment
            only. Please consult a licensed professional for personalized care.
          </p>
          {/* Copyright */}
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Moonstar Esthetics. All rights reserved.</p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
