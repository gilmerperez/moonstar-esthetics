import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  // Mobile sidebar toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Custom styles for active page
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

  // Theme state, default null while deciding
  const [theme, setTheme] = useState(null);

  // On mount: determine and set initial theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const systemTheme = systemPrefersDark.matches ? "dark" : "light";

    const initialTheme = storedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    // Watch for system theme changes (only if user hasn’t selected a theme)
    const handleSystemChange = (e) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    systemPrefersDark.addEventListener("change", handleSystemChange);
    return () => systemPrefersDark.removeEventListener("change", handleSystemChange);
  }, []);

  // Store manual theme changes
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Toggle manually
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <header>
        <section className={styles.headerContainer}>
          {/* Logo */}
          <NavLink to="/" className={styles.moonstarLogo}>
            <span className={styles.moonstar}>MOONSTAR</span>
            <span className={styles.esthetics}>ESTHETICS</span>
          </NavLink>

          {/* Site Navigation */}
          <section className={styles.navContainer}>
            <nav className={styles.navItems}>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/reviews" className={navLinkClass}>
                Reviews
              </NavLink>
              <NavLink to="/information" className={navLinkClass}>
                Information
              </NavLink>
            </nav>

            {/* Seperate Site Navigation and Functional Buttons */}
            <span className={styles.seperator}>|</span>

            {/* Functional Buttons */}
            <section className={styles.functionalButtons}>
              {/* Theme Button */}
              <button className={styles.themeButton} onClick={toggleTheme}>
                <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"} fa-sm`}></i>
                <p>{theme === "dark" ? "Dark" : "Light"}</p>
              </button>
              {/* Language Button */}
              <button className={styles.languageButton}>
                <i className="fa-solid fa-earth-americas fa-sm"></i>
                <p>English</p>
              </button>
              {/* Book Now Button */}
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
                <NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Services
                </NavLink>
                <NavLink to="/reviews" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Reviews
                </NavLink>
                <NavLink to="/information" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Information
                </NavLink>
              </nav>

              {/* Sidebar Functional Buttons */}
              <div className={styles.sidebarFunctionalButtons}>
                {/* Theme Button */}
                <button className={`${styles.themeButton} ${styles.sidebarThemeButton}`} onClick={toggleTheme}>
                  <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"} fa-sm`}></i>
                  <p>{theme === "dark" ? "Dark" : "Light"}</p>
                </button>
                {/* Language Button */}
                <button className={`${styles.languageButton} ${styles.sidebarLanguageButton}`}>
                  <i className="fa-solid fa-earth-americas fa-sm"></i>
                  <p>English</p>
                </button>
                {/* Book Now Button */}
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
