import styles from "./Header.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

function Header() {
  // Toggle for mobile sidebar menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Make active page have custom styles
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

  return (
    <>
      <header>
        <section className={styles.headerContainer}>
          {/* Logo */}
          <section className={styles.logoContainer}>
            <NavLink to="/" className={styles.logo}>
              Moonstar Esthetics
            </NavLink>
          </section>

          {/* Site Navigation */}
          <section className={styles.navContainer}>
            <nav className={styles.navItems}>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/team" className={navLinkClass}>
                Team
              </NavLink>
              <NavLink to="/reviews" className={navLinkClass}>
                Reviews
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/information" className={navLinkClass}>
                Information
              </NavLink>
            </nav>

            {/* Seperate Site Navigation and Functional Buttons */}
            <span className={styles.seperator}>|</span>

            {/* Functional Buttons */}
            <section className={styles.functionalButtons}>
              {/* Change Light Mode Button */}
              <button className={styles.lightModeButton}>
                <i class="fa-solid fa-moon fa-sm"></i>
                <p>Dark</p>
              </button>
              {/* Change Language Button */}
              <button className={styles.languageButton}>
                <i class="fa-solid fa-earth-americas fa-sm"></i>
                <p>English</p>
              </button>
              {/* Get Started Button */}
              <button className={styles.ctaButton}>
                <a href="https://moonstaresthetics.setmore.com/" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </button>
            </section>

            {/* Hamburger menu for mobile */}
            <button className={styles.hamburger} onClick={() => setMenuOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </section>
        </section>
      </header>

      {/* Sidebar Overlay */}
      {menuOpen &&
        createPortal(
          <div className={styles.sidebarOverlay} onClick={() => setMenuOpen(false)}>
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              <button className={styles.sidebarClose} onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Sidebar Site Navigation */}
              <nav className={styles.sidebarNav}>
                <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/team" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Team
                </NavLink>
                <NavLink to="/reviews" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Reviews
                </NavLink>
                <NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Services
                </NavLink>
                <NavLink to="/information" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Information
                </NavLink>
              </nav>

              {/* Sidebar Functional Buttons */}
              <div className={styles.sidebarButtons}>
                {/* Change Light Mode Button */}
                <button className={styles.lightModeButton}>
                  <i className="fa-solid fa-moon fa-sm"></i>
                  <p>Dark</p>
                </button>
                {/* Change Language Button */}
                <button className={styles.languageButton}>
                  <i className="fa-solid fa-earth-americas fa-sm"></i>
                  <p>English</p>
                </button>
                {/* Get Started Button */}
                <button className={`${styles.ctaButton} ${styles.sidebarCTAButton}`}>
                  <a href="https://moonstaresthetics.setmore.com/" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </button>
              </div>

              {/* Site Map */}
              <footer className={styles.sidebarFooter}>
                <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Contact
                </NavLink>
                <NavLink to="/privacy-policy" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Privacy Policy
                </NavLink>
                <NavLink to="/terms-of-service" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Terms of Service
                </NavLink>
              </footer>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
