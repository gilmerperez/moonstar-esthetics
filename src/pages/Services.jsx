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
            // All Service Categories
            <div key={category.category} className={styles.categorySection}>
              {/* Individual Service Category Title */}
              <h1 className={styles.categoryTitle}>{category.category}</h1>
              {/* Service Card */}
              <section className={styles.serviceCards}>
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </section>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Services;
