import { useEffect } from "react";
import styles from "./Services.module.css";

function Services() {
  // Change page title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Service";
  }, []);

  return (
    <>
      <main>
        <section className={styles.servicesContainer}>Services</section>
      </main>
    </>
  );
}

export default Services;
