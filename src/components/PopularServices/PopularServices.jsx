import styles from "./PopularServices.module.css";

function PopularServices() {
  return (
    <section className={styles.popularServicesSection}>
      <div className={styles.overlay}>
        {/* Heading */}
        <h2 className={styles.heading}>Our Most Loved Treatments</h2>
        {/* Subheading */}
        <p className={styles.subheading}>
          Below are some of our most popular services that clients keep coming back for. Whether you're looking for a
          quick laser session or a luxurious deep-cleansing facial, we're here to help you look and feel your absolute
          best.
        </p>

        {/* Services */}
        <div className={styles.servicesList}>
          {/* 1st Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Signature Facial</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$120</span>
          </div>
          {/* 2nd Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Laser Hair Removal (Small Area)</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$80</span>
          </div>
          {/* 3rd Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Dermaplaning</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$95</span>
          </div>
          {/* 4th Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Hydrating Facial</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$110</span>
          </div>
          {/* 5th Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Acne Clearing Treatment</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$130</span>
          </div>
          {/* 6th Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>LED Light Therapy</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$70</span>
          </div>
          {/* 7th Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Chemical Peel</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$140</span>
          </div>
          {/* 8th Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Full Face Waxing</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$55</span>
          </div>
          {/* 9th Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Back Facial</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$125</span>
          </div>
          {/* 10th Item */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>IPL Pigmentation Treatment</span>
            <span className={styles.line}></span>
            <span className={styles.price}>$150</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularServices;
