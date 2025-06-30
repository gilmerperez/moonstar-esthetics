import { useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Home";
  }, []);

  return (
    <>
      <main>
        <section className={styles.homeContainer}>Main</section>
      </main>
    </>
  );
}

export default Home;
