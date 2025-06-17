import { useEffect } from "react";
import styles from "./Team.module.css";

function Team() {
  // Change page title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Team";
  }, []);

  return (
    <>
      <main>
        <section className={styles.teamContainer}>Team</section>
      </main>
    </>
  );
}

export default Team;
