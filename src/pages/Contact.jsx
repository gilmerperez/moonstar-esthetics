import { useEffect } from "react";
import styles from "./Contact.module.css";

function Contact() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Contact";
  }, []);

  return (
    <main>
      <section className={styles.contactContainer}>
        {/* Heading */}
        <h1 className={styles.heading}>Get in Touch</h1>

        {/* Introduction */}
        <p className={styles.introduction}>
          We'd love to hear from you. Whether you have a question about our services, want to request a consultation, or
          simply want to say hello — feel free to reach out below.
        </p>

        {/* Form */}
        <section className={styles.formContainer}>
          <form action="mailto:moonstaresthetics@gmail.com" method="post" encType="text/plain">
            {/* Name */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <input type="text" id="name" placeholder="Name" required className={styles.formControl} />
              <label htmlFor="name">Name</label>
            </div>

            {/* Subject */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <input type="text" id="subject" placeholder="Subject" required className={styles.formControl} />
              <label htmlFor="subject">Subject</label>
            </div>

            {/* Email */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <input type="email" id="email" placeholder="Email Address" required className={styles.formControl} />
              <label htmlFor="email">Email Address</label>
            </div>

            {/* Message */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <textarea id="message" placeholder="Message" required className={styles.formControl}></textarea>
              <label htmlFor="message">Message</label>
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitBtn}>
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contact;
