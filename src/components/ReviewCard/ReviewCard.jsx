import styles from "./ReviewCard.module.css";

function ReviewCard({ review }) {
  // Get initials from name
  const initials = review.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  // Stars display
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i} className={i < review.stars ? styles.filledStar : styles.emptyStar}>
        <i className="fa-regular fa-star fa-xs"></i>
      </span>
    ));

  return (
    <section className={styles.reviewCard}>
      {/* Reviewer Initials */}
      <div className={styles.reviewerInitials}>{initials}</div>
      <div className={styles.reviewContent}>
        {/* Reviewer Name */}
        <h3 className={styles.reviewerName}>{review.name}</h3>
        {/* Review Star Amount and Timestamp */}
        <div className={styles.reviewMetaContent}>
          {stars}
          <span className={styles.timestamp}>{review.timestamp}</span>
        </div>
        {/* Review Text */}
        <p className={styles.text}>{review.text}</p>
      </div>
    </section>
  );
}

export default ReviewCard;
