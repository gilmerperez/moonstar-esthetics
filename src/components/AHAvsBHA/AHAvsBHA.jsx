import styles from "./AHAvsBHA.module.css";

function AHAvsBHA() {
  return (
    <section className={styles.ahaBhaSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>AHAs vs BHAs</h2>
        <div className={styles.contentGrid}>
          {/* AHAs */}
          <div className={styles.column}>
            <h3 className={styles.subHeading}>AHA</h3>
            <ul className={styles.listBox}>
              <li>Exfoliates surface of the skin, brightens skin tone</li>
              <li>Water-soluble, for dry skin types</li>
              <li>Reduces fine lines and texture</li>
              <li>Common AHAs: glycolic, lactic acids</li>
              <li>Ideal for uneven, dull skin</li>
            </ul>
          </div>
          {/* BHAs */}
          <div className={styles.column}>
            <h3 className={styles.subHeading}>BHA</h3>
            <ul className={styles.listBox}>
              <li>Penetrates pores, clears oil buildup</li>
              <li>Oil-soluble, for oily skin types</li>
              <li>Targets acne and blackheads</li>
              <li>Common BHAs: Salicyclic acid</li>
              <li>Ideal for acne-prone skin</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AHAvsBHA;
