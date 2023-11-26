import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/thank-you-page.module.css";

function ThankYouPage() {
  return (
    <>
      <div className={styles.fullPage}>
        <header>
          <h1 className={styles.h1}>Thank You</h1>
        </header>
        <Nav />
        <main className={styles.main}>
          <h2 className={styles.h2}>Application Submitted</h2>
          <p className={styles.p}>Congratulations!</p>
          <br />
          <p className={styles.p}>
            Your Author Application has been submitted and you are now one step
            closer to being listed on our site.
          </p>
          <br />
          <p className={styles.p}>
            After we process your application you will receive an email from us,
            so please keep an eye on your inbox and spam folder.
          </p>
          <br />
          <p className={styles.p}>
            Once you receive the welcome email you will have 7 days to complete the required link on your website and the required social media promotion.
          </p>
          <br />
          
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ThankYouPage;
