import { useEffect } from "react";
import styles from "./Reviews.module.css";

function Reviews() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Reviews";
  }, []);

  return (
    <>
      <main>
        <section className={styles.reviewsContainer}>Reviews</section>
      </main>
    </>
  );
}

export default Reviews;
