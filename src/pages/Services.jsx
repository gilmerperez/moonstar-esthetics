import { useEffect } from "react";
import styles from "./Services.module.css";
import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard/ServiceCard";

function Services() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Services";
  }, []);

  return (
    <>
      <main>
        <section className={styles.servicesContainer}>
          {services.map((category) => (
            <div key={category.category} className={styles.categorySection}>
              <h1 className={styles.categoryTitle}>{category.category}</h1>
              <div className={styles.servicesGrid}>
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Services;
