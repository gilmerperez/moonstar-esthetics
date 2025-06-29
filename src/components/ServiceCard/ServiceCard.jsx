import styles from "./ServiceCard.module.css";

function ServiceCard({ service }) {
  return (
    <section className={styles.serviceCard}>
      {/* Service Image */}
      <div className={styles.serviceImageContainer}>
        <img src={service.image} alt={`${service.name} Service Image`} className={styles.serviceImage} />
      </div>

      {/* Service Content */}
      <div className={styles.serviceContent}>
        {/* Service Name */}
        <h2 className={styles.serviceName}>{service.name}</h2>

        {/* Service Duration and Price */}
        <div className={styles.serviceMetaContent}>
          <span className={styles.serviceDuration}>{service.duration}</span>
          <span className={styles.serviceMetaSeperator}>|</span>
          <span className={styles.servicePrice}>${service.price}</span>
        </div>

        {/* Service Description */}
        <p className={styles.serviceDescription}>{service.description}</p>

        {/* Book Now Button */}
        <div className={styles.buttonContainer}>
          <button className={styles.bookNowButton}>
            <a href="https://moonstaresthetics.setmore.com/book" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
