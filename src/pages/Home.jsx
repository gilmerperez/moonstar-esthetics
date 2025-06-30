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

        {/* Business Instroduction */}
        <div className={styles.introduction}>
          <h1 className={styles.heading}>Welcome to Moonstar Esthetics</h1>
          <p>
            At Moonstar Esthetics, we specialize in advanced skincare treatments designed to rejuvenate, restore, and
            elevate your natural beauty. From custom facials, dermaplaning, and chemical peels to IPL laser hair removal
            and red light therapy, we offer a comprehensive range of services tailored to your unique needs.
          </p>
          <p>
            Our studio is a calm, welcoming space where you can unwind and focus entirely on yourself. We believe that
            self-care is essential, and our mission is to deliver expert treatments with genuine care, honesty, and
            personalized attention that ensures every client leaves feeling radiant and confident.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
