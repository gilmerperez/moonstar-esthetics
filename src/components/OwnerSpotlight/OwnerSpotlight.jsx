import { useEffect, useState } from "react";
import styles from "./OwnerSpotlight.module.css";
import anakarina1 from "../../assets/images/anakarina-1.jpeg";
import anakarina2 from "../../assets/images/anakarina-2.JPG";
import anakarina3 from "../../assets/images/anakarina-3.JPG";

const images = [anakarina1, anakarina2, anakarina3];

// Calculate current age
const birthDate = new Date(1999, 9, 20);
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

// Calculate years of experience
const yearsOfExperience = age - 20;

function OwnerSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.ownerSpotlightSection}>
      {/* Images */}
      <div className={styles.imageContainer} style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>

      {/* Description */}
      <p className={styles.description}>
        Hi, I'm AnaKarina — a licensed esthetician at {age} years old, with {yearsOfExperience} years of experience
        helping clients look and feel their best. I've dedicated my career to personalized skincare, from customized
        facials and laser hair removal to expert waxing. My passion is empowering you to feel confident and radiant in
        your own skin. Whether you're seeking a luminous glow, silky-smooth results, or the perfect self-care routine,
        I'm here to make it happen. I truly cherish the trust my wonderful clients have placed in me over the years, and
        I can't wait to welcome you to my treatment room!
      </p>
    </section>
  );
}

export default OwnerSpotlight;
