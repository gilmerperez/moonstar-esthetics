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
              <li>Exfoliates the skin's surface and brightens overall tone.</li>
              <li>Water-soluble; best suited for dry or normal skin types.</li>
              <li>Helps reduce fine lines, rough texture, and dullness.</li>
              <li>Common AHAs include glycolic and lactic acids.</li>
              <li>Ideal for uneven, dehydrated, or lackluster skin.</li>
            </ul>
          </div>
          {/* BHAs */}
          <div className={styles.column}>
            <h3 className={styles.subHeading}>BHA</h3>
            <ul className={styles.listBox}>
              <li>Penetrates deep into pores to clear oil buildup.</li>
              <li>Oil-soluble; perfect for oily and combination skin.</li>
              <li>Targets acne, blackheads, and clogged pores.</li>
              <li>Common BHA: salicylic acid.</li>
              <li>Ideal for acne-prone or congested skin.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AHAvsBHA;
