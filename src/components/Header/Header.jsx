import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  // Make active page have custom styles
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

  return (
    <>
      <header>
        <section className={styles.headerContainer}>
          <section className={styles.headerLeft}>
            {/* Logo */}
            <NavLink to="/" className={styles.logoLink}>
              Moonstar Esthetics
            </NavLink>
          </section>
          <section className={styles.headerRight}>
            {/* Site Navigation */}
            <nav className={styles.navItems}>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/team" className={navLinkClass}>
                Team
              </NavLink>
              <NavLink to="/information" className={navLinkClass}>
                Information
              </NavLink>
              <NavLink to="/reviews" className={navLinkClass}>
                Reviews
              </NavLink>
            </nav>
            <span>|</span>
            <section className={styles.functionalButtons}>
              <button className={styles.languageButton}>
                <i class="fa-solid fa-earth-americas fa-sm"></i>
                <p>English</p>
              </button>
              <button className={styles.lightModeButton}>
                <i class="fa-solid fa-moon fa-sm"></i>
                <p>Dark</p>
              </button>
            </section>
          </section>
        </section>
      </header>
    </>
  );
}

export default Header;
