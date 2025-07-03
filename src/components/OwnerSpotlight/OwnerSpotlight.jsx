import { useEffect, useState } from "react";
import styles from "./OwnerSpotlight.module.css";
import anakarina1 from "../../assets/images/anakarina-1.JPG";
import anakarina2 from "../../assets/images/anakarina-2.jpeg";
import anakarina3 from "../../assets/images/anakarina-3.JPG";

const images = [anakarina1, anakarina2, anakarina3];

function OwnerSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Owner Spotlight Images
    <section className={styles.ownerSpotlightSection} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className={styles.overlay}>
        <div className={styles.textContent}>
          {/* Heading */}
          <h2 className={styles.heading}>Meet AnaKarina</h2>
          {/* Description */}
          <p className={styles.description}>
            Hi, I'm AnaKarina — a licensed esthetician with 5 years of experience helping clients look and feel their
            best. At just 25, I've dedicated my career to personalized skincare, from customized facials and laser hair
            removal to expert waxing. My passion is empowering you to feel confident and radiant in your own skin.
            Whether you're seeking a luminous glow, silky-smooth results, or the perfect self-care routine, I'm here to
            make it happen. I truly cherish the trust my wonderful clients have placed in me over the years, and I can't
            wait to welcome you to my treatment room!
          </p>
        </div>
      </div>
    </section>
  );
}

export default OwnerSpotlight;
