import { useEffect } from "react";
import styles from "./TermsOfService.module.css";

function TermsOfService() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Terms of Service";
  }, []);

  return (
    <>
      <main>
        <section className={styles.termsOfServiceContainer}>Terms of Service</section>
      </main>
    </>
  );
}

export default TermsOfService;
