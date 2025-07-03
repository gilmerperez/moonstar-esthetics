import { useEffect } from "react";
import styles from "./Home.module.css";
import logo from "../assets/images/moonstar-logo.png";
import OwnerSpotlight from "../components/OwnerSpotlight/OwnerSpotlight";

function Home() {
  useEffect(() => {
    document.title = "Moonstar Esthetics | Home";
  }, []);

  return (
    <main>
      <section className={styles.homeContainer}>
        {/* Moonstar Esthetics Logo */}
        <img src={logo} alt="Moonstar Esthetics Logo" className={styles.moonstarLogo} />

        {/* AnaKarina's Introduction */}
        <OwnerSpotlight />

        {/* Heading */}
        <h2 className={styles.heading}>RADIANT SKIN IS HERE</h2>

        {/* Business Introduction */}
        <p className={styles.introduction}>
          Moonstar Esthetics is your destination for advanced skincare, offering custom facials, dermaplaning, chemical
          peels, IPL laser hair removal, and red light therapy. Our calm, welcoming studio is built on values of
          honesty, care, and personal attention—so every client can unwind, rejuvenate, and leave feeling truly radiant.
        </p>

        {/* Dermaplaning */}
        <section className={styles.dermaplaningSection}>
          <div className={styles.dermaplaningContent}>
            <h2 className={styles.dermaplaningHeading}>What is Dermaplaning</h2>
            <p className={styles.dermaplaningText1}>
              Dermaplaning is a manual exfoliation technique that involves gently scraping the surface of the skin with
              a sterile surgical scalpel. The goal is to remove dead skin cells and fine vellus hair or more commonly
              known as peach fuzz.
            </p>
            <p className={styles.dermaplaningText2}>
              Want to learn more about dermaplaning and see real results? Visit my page to explore this service and
              more.
            </p>
            <a
              href="https://moonstaresthetics.setmore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookButton}
            >
              Book Appointment
            </a>
          </div>
        </section>

        {/* Red Light Therapy */}
        <section className={styles.redLightTherapySection}>
          <div className={styles.redLightTherapyContent}>
            <h2 className={styles.redLightTherapyHeading}>LED Red Light Therapy</h2>
            <p className={styles.redLightTherapyText1}>
              LED Red Light Therapy is a non-invasive treatment that uses specific wavelengths of light to rejuvenate
              the skin. It stimulates collagen production, reduces redness, fades acne scars, and helps achieve a
              firmer, more radiant complexion.
            </p>
            <p className={styles.redLightTherapyText2}>
              Experience the power of light to transform your skin's health and glow from within.
            </p>
            <a
              href="https://www.instagram.com/moonstaresthetics/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.learnMoreButton}
            >
              Learn More
            </a>
          </div>
        </section>

        {/* IPL Laser Hair Removal */}
        <section className={styles.iplSection}>
          <div className={styles.iplContent}>
            <h2 className={styles.iplHeading}>What is IPL Laser Hair Removal</h2>
            <p className={styles.iplText1}>
              IPL (Intense Pulsed Light) hair removal is a non-invasive treatment that uses broad-spectrum light to
              target and heat hair follicles, reducing and inhibiting future hair growth over time.
            </p>
            <p className={styles.iplText2}>
              Discover smooth, hair-free skin and book your IPL session today for long-lasting results.
            </p>
            <a
              href="https://moonstaresthetics.setmore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookButton}
            >
              Book Appointment
            </a>
          </div>
        </section>

        {/* Skincare Routine */}
        <a href="https://www.instagram.com/moonstaresthetics/" target="_blank" rel="noopener noreferrer">
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
        </a>
      </section>
    </main>
  );
}

export default Home;
