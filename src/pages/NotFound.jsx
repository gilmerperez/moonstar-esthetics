import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <main className={styles.notFoundContainer}>
        {/* Heading */}
        <h1 className={styles.heading}>Page Not Found</h1>

        {/* Introduction */}
        <p className={styles.introduction}>Sorry, the page you are looking for does not exist</p>

        {/* Go Back to Home Link */}
        <Link to="/" className={styles.homeLink}>
          Go Back to Home
        </Link>
      </main>
    </>
  );
}

export default NotFound;
