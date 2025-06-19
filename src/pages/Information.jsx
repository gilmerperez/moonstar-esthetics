import { useEffect } from "react";
import styles from "./Information.module.css";

function Information() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Information";
  }, []);

  return (
    <>
      <main>
        <section className={styles.informationContainer}>Information</section>
      </main>
    </>
  );
}

export default Information;
