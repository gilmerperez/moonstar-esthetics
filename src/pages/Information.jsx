import { useEffect } from "react";
import styles from "./Information.module.css";

function Information() {
  // Change page title
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
