import { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import reviews from "../data/reviews.json";
import ReviewCard from "../components/ReviewCard/ReviewCard";

function Reviews() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Reviews";
  }, []);

  // Sort state
  const [sortOption, setSortOption] = useState("highest");

  // Sorted reviews
  const sortedReviews = [...reviews];
  if (sortOption === "highest") {
    sortedReviews.sort((a, b) => b.stars - a.stars);
  } else if (sortOption === "lowest") {
    sortedReviews.sort((a, b) => a.stars - b.stars);
  }

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;
  const roundedAverage = Math.round(averageRating * 10) / 10;
  const ratingPercentage = (averageRating / 5) * 100;

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
          <section className={styles.reviewSummary}>
            <section className={styles.reviewBreakdown}>
              {/* Average Rating */}
              <h2 className={styles.averageRating}>{roundedAverage}</h2>
              {/* Stars */}
              <div className={styles.starsContainer}>
                <div className={styles.starsBackground}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <i key={i} className="fa-regular fa-star"></i>
                    ))}
                </div>
                <div className={styles.starsForeground} style={{ width: `${ratingPercentage}%` }}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                </div>
              </div>
              {/* Number of Reviews */}
              <p className={styles.reviewCount}>{reviews.length} reviews</p>
            </section>

            {/* Rating Distribution */}
            <section className={styles.ratingDistribution}>
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className={styles.ratingBar}>
                  <span className={styles.ratingSpan}>{rating.stars} stars</span>
                  <div className={styles.barContainer}>
                    <div className={styles.barFill} style={{ width: `${rating.percentage}%` }}></div>
                  </div>
                  <span>{rating.percentage}%</span>
                </div>
              ))}
            </section>
          </section>

          {/* Filter Controls */}
          <section className={styles.filterControls}>
            <select id="sortReviews" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
            </select>
          </section>

          {/* Review Cards */}
          <section className={styles.reviewCards}>
            {sortedReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </section>

          {/* Leave Review CTA */}
          <section className={styles.leaveReviewCard}>
            <h2 className={styles.leaveReviewHeading}>Happy with your service?</h2>
            <p className={styles.leaveReviewText}>
              Share your experience and get 10% off your next service as a thank you!
            </p>
            <a
              href="https://moonstaresthetics.setmore.com/#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.leaveReviewButton}
            >
              Leave a Review
            </a>
          </section>
        </section>
      </main>
    </>
  );
}

export default Reviews;
