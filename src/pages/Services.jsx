import { useEffect } from "react";
import styles from "./Services.module.css";
import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard/ServiceCard";

function Services() {
  useEffect(() => {
    document.title = "Moonstar Esthetics | Services";
  }, []);

  return (
    <main>
      <section className={styles.servicesContainer}>
        {services.map((category) => (
          <div key={category.category} className={styles.categorySection}>
            {/* Category Title */}
            <h1 className={styles.categoryTitle}>{category.category}</h1>

            {/* Category Description */}
            {category.description && <p className={styles.categoryDescription}>{category.description}</p>}

            {/* Service Cards */}
            <section className={styles.serviceCards}>
              {category.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;
