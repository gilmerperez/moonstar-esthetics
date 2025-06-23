import { useEffect } from "react";
import styles from "./Reviews.module.css";
import reviews from "../data/reviews.json";
import ReviewCard from "../components/ReviewCard/ReviewCard";

function Reviews() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Reviews";
  }, []);

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;
  const roundedAverage = Math.round(averageRating * 10) / 10;

  // Calculate rating distribution
  const ratingDistribution = Array(5)
    .fill(0)
    .map((_, i) => ({
      stars: 5 - i,
      count: reviews.filter((review) => review.stars === 5 - i).length,
      percentage: Math.round((reviews.filter((review) => review.stars === 5 - i).length / reviews.length) * 100),
    }));

  return (
    <>
      <main>
        <section className={styles.reviewsContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>Reviews</h1>

          {/* Introduction */}
          <p className={styles.introduction}>See what our previous customers have said about our services!</p>

          {/* Reviews Summary */}
          <section className={styles.reviewStats}>
            <div className={styles.reviewSummary}>
              <div className={styles.reviewBreakdown}>
                {/* Average Rating */}
                <h2 className={styles.averageRating}>{roundedAverage}</h2>
                {/* Stars */}
                <div className={styles.averageStars}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className={i < Math.round(averageRating) ? styles.filledStar : styles.emptyStar}>
                        <i className="fa-regular fa-star fa-xs"></i>
                        {/* ★ */}
                      </span>
                    ))}
                </div>
                {/* Number of Reviews */}
                <p className={styles.reviewCount}>{reviews.length} reviews</p>
              </div>

              {/* Rating Distribution */}
              <div className={styles.ratingDistribution}>
                {ratingDistribution.map((rating) => (
                  <div key={rating.stars} className={styles.ratingBar}>
                    <span className={styles.ratingSpan}>{rating.stars} stars</span>
                    <div className={styles.barContainer}>
                      <div className={styles.barFill} style={{ width: `${rating.percentage}%` }}></div>
                    </div>
                    <span>{rating.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Review Cards */}
          <section className={styles.reviewCards}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

export default Reviews;
