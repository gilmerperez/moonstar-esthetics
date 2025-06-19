import { useEffect } from "react";
import styles from "./Reviews.module.css";
// import reviews from "../data/reviews.json";

function Reviews() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Reviews";
  }, []);

  return (
    <>
      <main>
        <section className={styles.reviewsContainer}>
          {/* {reviews.map(({ id, name, stars, timestamp, text }) => (
            <ReviewCard key={id} name={name} stars={stars} timestamp={timestamp} text={text} />
          ))} */}
        </section>
      </main>
    </>
  );
}

export default Reviews;
