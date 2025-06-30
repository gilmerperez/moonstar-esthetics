import { useEffect } from "react";
import styles from "./Information.module.css";

function Information() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Information";
  }, []);

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <main>
        <section className={styles.informationContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>How to Reach Us</h1>

          {/* Introduction */}
          <p className={styles.introduction}>
            Find our location, hours, payment options, and contact details below. Let us know how we can assist you!
          </p>

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
              <i className="fa-brands fa-paypal"></i>
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
            <div className={styles.hoursContainer}>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Sunday</p>
                <p className={styles.hoursTime}>Closed</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Monday</p>
                <p className={styles.hoursTime}>8AM - 8:30PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Tuesday</p>
                <p className={styles.hoursTime}>8AM - 8:30PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Wednesday</p>
                <p className={styles.hoursTime}>8AM - 8:30PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Thursday</p>
                <p className={styles.hoursTime}>8AM - 8:30PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Friday</p>
                <p className={styles.hoursTime}>8AM - 8PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Saturday</p>
                <p className={styles.hoursTime}>Closed</p>
              </div>
            </div>
            <p className={styles.cardSubheading}>All times displayed in Eastern Daylight Time (EDT).</p>
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
            <div className={styles.mapContainer}>
              <iframe
                title="Moonstar Esthetics Location"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=Moonstar+Esthetics,6881+Kingspointe+Pkwy+Suite+4+Orlando+FL+32819`}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <p className={styles.cardSubheading}>6881 Kingspointe Pkwy Suite 4 Orlando, FL 32819</p>
          </a>
        </section>
      </main>
    </>
  );
}

export default Information;
