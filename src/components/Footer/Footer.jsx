import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <section className={styles.footerContainer}>
          {/* Navigation Links */}
          <nav className={styles.footerLinks}>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service">Terms of Service</NavLink>
          </nav>
          {/* Legal Disclaimer */}
          <p className={styles.legalDisclaimer}>
            Reelix is a Movie and TV Show database. It does not host, stream, or distribute any copyrighted content. All
            metadata and media previews are provided via public APIs. No user accounts, payments, or downloads are
            required.
          </p>
          {/* Copyright */}
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Moonstar Esthetics</p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
