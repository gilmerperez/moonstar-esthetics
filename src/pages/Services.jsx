import styles from "./Services.module.css";
import { useEffect, useState } from "react";
import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard/ServiceCard";

function Services() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Services";
  }, []);

  // Sort option state (applies globally to all categories)
  const [sortOption, setSortOption] = useState("default");

  // Track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState({});

  // Toggle category description expand/collapse
  const toggleExpand = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Convert duration string (e.g., "1h 30m") to total minutes
  const parseDuration = (durationStr) => {
    const match = durationStr.match(/(?:(\d+)h)?\s*(?:(\d+)m)?/);
    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    return hours * 60 + minutes;
  };

  return (
    <>
      <main>
        <section className={styles.servicesContainer}>
          {/* Filters */}
          <section className={styles.filterControls}>
            <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration-asc">Duration: Short to Long</option>
              <option value="duration-desc">Duration: Long to Short</option>
            </select>
          </section>

          {services.map((category) => {
            const isExpanded = expandedCategories[category.category];

            // Create a sorted copy of the services for this category
            let sortedServices = [...category.services];

            if (sortOption === "price-asc") {
              sortedServices.sort((a, b) => a.price - b.price);
            } else if (sortOption === "price-desc") {
              sortedServices.sort((a, b) => b.price - a.price);
            } else if (sortOption === "duration-asc") {
              sortedServices.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
            } else if (sortOption === "duration-desc") {
              sortedServices.sort((a, b) => parseDuration(b.duration) - parseDuration(a.duration));
            }

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
                  {sortedServices.map((service) => (
                    <a
                      key={service.id}
                      href="https://moonstaresthetics.setmore.com/#services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLinkWrapper}
                    >
                      <ServiceCard service={service} />
                    </a>
                  ))}
                </section>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Services;
