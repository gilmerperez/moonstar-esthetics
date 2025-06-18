import styles from "./Header.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

function Header() {
  // Mobile sidebar toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Custom styles for active page
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

  // Theme Toggle
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme") || "dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <header>
        <section className={styles.headerContainer}>
          {/* Logo */}
          <NavLink to="/" className={styles.moonstarLogo}>
            Moonstar Esthetics
          </NavLink>

          {/* Site Navigation */}
          <section className={styles.navContainer}>
            <nav className={styles.navItems}>
              <NavLink to="/" className={navLinkClass}>
                Home
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
              <button className={styles.lightModeButton} onClick={toggleTheme}>
                <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"} fa-sm`}></i>
                <p>{theme === "dark" ? "Dark" : "Light"}</p>
              </button>

              {/* Change Language Button */}
              <button className={styles.languageButton}>
                <i className="fa-solid fa-earth-americas fa-sm"></i>
                <p>English</p>
              </button>
              {/* Get Started Button */}
              <button className={styles.bookNowButton}>
                <a href="https://moonstaresthetics.setmore.com/" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </button>
            </section>

            {/* Mobile Hamburger Menu */}
            <button className={styles.hamburger} onClick={() => setMenuOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </section>
        </section>
      </header>

      {/* Sidebar Overlay */}
      {menuOpen &&
        createPortal(
          <section className={styles.sidebarOverlay} onClick={() => setMenuOpen(false)}>
            {/* Sidebar */}
            <section className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              {/* Sidebar Close Button */}
              <button className={styles.sidebarClose} onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Sidebar Site Navigation */}
              <nav className={styles.sidebarNavItems}>
                <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Home
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
              <div className={styles.sidebarFunctionalButtons}>
                {/* Change Light Mode Button */}
                <button className={styles.lightModeButton} onClick={toggleTheme}>
                  <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"} fa-sm`}></i>
                  <p>{theme === "dark" ? "Dark" : "Light"}</p>
                </button>

                {/* Change Language Button */}
                <button className={styles.languageButton}>
                  <i className="fa-solid fa-earth-americas fa-sm"></i>
                  <p>English</p>
                </button>
                {/* Get Started Button */}
                <button className={`${styles.bookNowButton} ${styles.sidebarBookNowButton}`}>
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
            </section>
          </section>,
          document.body
        )}
    </>
  );
}

export default Header;
