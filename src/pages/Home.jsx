import { useEffect } from "react";
import styles from "./Home.module.css";
import logo from "../assets/logo.png";

function Home() {
  useEffect(() => {
    document.title = "Moonstar Esthetics | Home";
  }, []);

  return (
    <main>
      <section className={styles.homeContainer}>
        {/* Moonstar Esthetics Logo */}
        <img src={logo} alt="Moonstar Esthetics Logo" className={styles.moonstarLogo} />

        {/* Heading */}
        <h2 className={styles.heading}>𓇼 RADIANT SKIN IS HERE 𓇼</h2>

        {/* Business Instroduction */}
        <p className={styles.introduction}>
          Moonstar Esthetics is your destination for advanced skincare, offering custom facials, dermaplaning, chemical
          peels, IPL laser hair removal, and red light therapy. Our calm, welcoming studio is built on values of
          honesty, care, and personal attention—so every client can unwind, rejuvenate, and leave feeling truly radiant.
        </p>
      </section>
    </main>
  );
}

export default Home;
