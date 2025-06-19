import { useEffect } from "react";
import styles from "./Services.module.css";
// import services from "../data/services.json";

function Services() {
  // Set Page Title
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
