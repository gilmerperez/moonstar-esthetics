import { useEffect } from "react";
import styles from "./Information.module.css";

function Information() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Information";
  }, []);

  return (
    <>
      <main>
        <section className={styles.informationContainer}>
          <div className={styles.cardsRow}>
            {/* Phone Card */}
            <a href="tel:3213520639" className={styles.infoCard}>
              <div className={styles.iconRow}>
                <i className="fa-solid fa-phone"></i>
                <h3>Phone</h3>
              </div>
              <p className={styles.contactDetail}>(321) 352-0639</p>
              <p className={styles.cardSubheading}>Call or text us with any questions or concerns</p>
            </a>

            {/* Email Card */}
            <a href="mailto:moonstaresthetics@gmail.com" className={styles.infoCard}>
              <div className={styles.iconRow}>
                <i className="fa-solid fa-envelope"></i>
                <h3>Email</h3>
              </div>
              <p className={styles.contactDetail}>moonstaresthetics@gmail.com</p>
              <p className={styles.cardSubheading}>We typically respond within a few hours</p>
            </a>
          </div>

          {/* Payment Card */}
          <div className={styles.paymentCard}>
            <div className={styles.iconRow}>
              <i className="fa-solid fa-credit-card"></i>
              <h3>Payment Options</h3>
            </div>
            <div className={styles.paymentIcons}>
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-amex"></i>
              <i className="fa-brands fa-cc-discover"></i>
              <i className="fa-brands fa-apple-pay"></i>
              <i className="fa-brands fa-google-pay"></i>
            </div>
            <p className={styles.cardSubheading}>Pay easily with any of our online payment options or in person.</p>
          </div>

          {/* Hours Card */}
          <div className={styles.hoursCard}>
            <div className={styles.iconRow}>
              <i className="fa-solid fa-clock fa-xl"></i>
              <h3>Hours of Operation</h3>
            </div>
            <ul className={styles.hoursList}>
              <li>
                <strong>Sunday:</strong> Closed
              </li>
              <li>
                <strong>Monday:</strong> 8AM - 8:30PM
              </li>
              <li>
                <strong>Tuesday:</strong> 8AM - 8:30PM
              </li>
              <li>
                <strong>Wednesday:</strong> 8AM - 8:30PM
              </li>
              <li>
                <strong>Thursday:</strong> 8AM - 8:30PM
              </li>
              <li>
                <strong>Friday:</strong> 8AM - 8PM
              </li>
              <li>
                <strong>Saturday:</strong> Closed
              </li>
            </ul>
          </div>

          {/* Address Card */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Moonstar+Esthetics+6881+Kingspointe+Pkwy+Suite+4+Orlando+FL+32819"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addressCard}
          >
            <div className={styles.iconRow}>
              <i className="fa-solid fa-location-dot"></i>
              <h3>Location</h3>
            </div>
            <p className={styles.addressText}>6881 Kingspointe Pkwy Suite 4 Orlando, FL 32819</p>
            <div className={styles.mapContainer}>
              <iframe
                title="Moonstar Esthetics Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAJNKkHMAzbl4I67nEf9I1F6PaaHoY_AtY&q=Moonstar+Esthetics,6881+Kingspointe+Pkwy+Suite+4+Orlando+FL+32819"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </a>
        </section>
      </main>
    </>
  );
}

export default Information;
