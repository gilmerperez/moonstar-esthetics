import styles from "./AnaKarina.module.css";

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

function AnaKarina() {
  return (
    <section className={styles.anakarinaSection}>
      {/* Images */}
      <div className={styles.imageContainer}></div>

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

export default AnaKarina;
