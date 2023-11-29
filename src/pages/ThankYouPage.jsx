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
            closer to being listed on Indie Book Vault.
          </p>
          <br />
          <p className={styles.p}>
            If you are an author applying without the ability or desire to list
            us on your website, please make sure you go to our{" "}
            <a
              href="https://www.buymeacoffee.com/indiebookvault"
              target="_blank"
              rel="noreferrer"
            >
              donation page
            </a>{" "}
            to make your $15 (USD) annual membership donation, making sure to
            use the author name used on the application in the name section of
            the donation, as author applications that do not include an author
            website for listing our link will not be processed until the
            donation is made.
          </p>
          <br />
          <p className={styles.p}>
            If you did include an author website on your application, you are
            all set and your application will be processed in the order it was
            received.
          </p>
          <br />
          <p className={styles.p}>
            After we process your application you will receive an email from us,
            so please keep an eye on your inbox and spam folder.
          </p>
          <br />
          <p className={styles.p}>
            Once you receive the welcome email you will have 7 days to complete
            the required link on your website and the required social media
            promotion. (no required website link for authors who donated $15 for
            an annual membership)
          </p>
          <br />
          <p className={styles.p}>
            If you have any questions or want to verify that we have received
            your application, feel free to reach out to us on{" "}
            <a
              href="https://www.instagram.com/indiebookvault/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            .
          </p>
          <br />
          <p className={styles.p}>
            While you are here, you might as well go find your next great read
            from one of our wonderful authors. So what are you waiting for? Go
            check out other author's listings and feed your reading addiction!
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ThankYouPage;
