import { useEffect } from "react";
import styles from "./Contact.module.css";

function Contact() {
  // Change page title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Contact";
  }, []);

  return (
    <>
      <main>
        <section className={styles.contactContainer}>Contact</section>
      </main>
    </>
  );
}

export default Contact;
