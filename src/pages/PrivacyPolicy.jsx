import { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  // Set Page Title
  useEffect(() => {
    document.title = "Moonstar Esthetics | Privacy Policy";
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];

  return (
    <>
      <main>
        <section className={styles.privacyPolicyContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>Privacy Policy</h1>

          <section className={styles.policy}>
            {/* Introduction */}
            <p className={styles.description}>
              Your privacy is important to us. This Privacy Policy explains how we handle your information when you
              visit our website.
            </p>

            {/* Purpose of the Site */}
            <p className={styles.policyHeading}>Purpose of the Site</p>
            <p className={styles.policyText}>
              This website serves as an informational platform for Moonstar Esthetics. It provides details about our
              company, services, and booking options. It does not engage in advertising or e-commerce.
            </p>

            {/* Personal Information */}
            <p className={styles.policyHeading}>Personal Information</p>
            <p className={styles.policyText}>
              We do not collect any personal information directly through this website. You can browse our content
              freely without creating an account, signing in, or submitting any personal data.
            </p>

            {/* Cookies and Tracking */}
            <p className={styles.policyHeading}>Cookies and Analytics</p>
            <p className={styles.policyText}>
              This website does not use cookies, tracking pixels, or analytics tools. We do not track your activity,
              behavior, or device usage.
            </p>

            {/* Policy Updates */}
            <p className={styles.policyHeading}>Changes to This Policy</p>
            <p className={styles.policyText}>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page. Last
              updated: {month} {year}.
            </p>

            {/* Booking Platform */}
            <p className={styles.policyHeading}>Third-Party Booking Services</p>
            <p className={styles.policyText}>
              Appointment scheduling is handled through our trusted third-party platform,{" "}
              <a href="https://setmore.com" target="_blank" rel="noopener noreferrer">
                Setmore
              </a>
              . When booking a service, you may be asked to provide information such as your name, contact details, and
              appointment preferences. Please refer to Setmore's own{" "}
              <a href="https://www.setmore.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              for details on how your data is handled on their platform.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export default PrivacyPolicy;
