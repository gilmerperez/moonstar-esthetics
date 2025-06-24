import { useEffect, useState } from "react";
import styles from "./Services.module.css";
import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard/ServiceCard";

function Services() {
  useEffect(() => {
    document.title = "Moonstar Esthetics | Services";
  }, []);

  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleExpand = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <main>
      <section className={styles.servicesContainer}>
        {services.map((category) => {
          const isExpanded = expandedCategories[category.category];

          return (
            <div key={category.category} className={styles.categorySection}>
              {/* Category Title */}
              <h1 className={styles.categoryTitle}>{category.category}</h1>

              {/* Category Description */}
              {category.description && (
                <>
                  <div className={`${styles.categoryDescription} ${isExpanded ? styles.expanded : styles.collapsed}`}>
                    <p>{category.description}</p>
                  </div>
                  <button className={styles.readMoreButton} onClick={() => toggleExpand(category.category)}>
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </>
              )}

              {/* Service Cards */}
              <section className={styles.serviceCards}>
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </section>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Services;
