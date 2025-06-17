import { useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  // Change page title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Home";
  }, []);

  return (
    <>
      <main>
        <section className={styles.mainContainer}>Main</section>
      </main>
    </>
  );
}

export default Home;
