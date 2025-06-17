import { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  // Change page title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Privacy Policy";
  }, []);

  return (
    <>
      <main>
        <section className={styles.privacyPolicyContainer}>Privacy Policy</section>
      </main>
    </>
  );
}

export default PrivacyPolicy;
