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

        {/* Business Introduction */}
        <p className={styles.introduction}>
          Moonstar Esthetics is your destination for advanced skincare, offering custom facials, dermaplaning, chemical
          peels, IPL laser hair removal, and red light therapy. Our calm, welcoming studio is built on values of
          honesty, care, and personal attention—so every client can unwind, rejuvenate, and leave feeling truly radiant.
        </p>

        {/* Skincare Routine Section */}
        <section className={styles.routineSection}>
          <h3 className={styles.routineHeading}>SKINCARE ROUTINE STEPS</h3>
          <p className={styles.routineSubtextHeading}>
            Glow from start to finish by cleansing, toning, hydrating, and protecting your skin for radiance every day
          </p>

          <div className={styles.routineGrid}>
            {/* Step 1 */}
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepTitle}>CLEANSER</div>
            <div className={styles.stepDescription}>Refresh your skin and remove makeup</div>

            {/* Step 2 */}
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepTitle}>TONER</div>
            <div className={styles.stepDescription}>Refreshes your skin and removes make-up</div>

            {/* Step 3 */}
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepTitle}>EYE CREAM</div>
            <div className={styles.stepDescription}>Special formula for use on delicate skin around eyes</div>

            {/* Step 4 */}
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepTitle}>SERUM</div>
            <div className={styles.stepDescription}>Delivers specific active ingredients to the skin</div>

            {/* Step 5 */}
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepTitle}>MOISTURIZER</div>
            <div className={styles.stepDescription}>To increase the water content of the skin</div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
