import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ServiceCard.module.css";

function ServiceCard({ service }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className={styles.serviceCard}>
        {/* Service Image */}
        <div className={styles.serviceImageContainer}>
          <img src={service.image} alt={`${service.name} Service Image`} className={styles.serviceImage} />
        </div>

        {/* Service Content */}
        <div className={styles.serviceContent}>
          <h2 className={styles.serviceName}>{service.name}</h2>
          <div className={styles.serviceMetaContent}>
            <span className={styles.serviceDuration}>{service.duration}</span>
            <span className={styles.serviceMetaSeperator}>|</span>
            <span className={styles.servicePrice}>${service.price}</span>
          </div>
          <p className={styles.serviceDescription}>{service.description}</p>

          {/* Book Now Button */}
          <div className={styles.buttonContainer}>
            <button className={styles.bookNowButton}>
              <a href="https://moonstaresthetics.setmore.com/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </button>

            {/* Cancellation Policy Modal */}
            <button
              className={styles.policyIconButton}
              onClick={() => setShowModal(true)}
              aria-label="View Cancellation Policy"
            >
              <i className="fa-regular fa-calendar"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Show/Hide Modal */}
      {showModal &&
        createPortal(
          <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2 className={styles.modalHeading}>Cancellation Policy</h2>
              <p className={styles.modalText}>
                You can cancel or reschedule up to 24 hours before the appointment time.
              </p>
              <button onClick={() => setShowModal(false)} className={styles.modalCloseButton}>
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ServiceCard;
