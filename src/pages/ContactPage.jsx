import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/contact-page.module.css";
import AuthorApplication from "../components/AuthorApplication";

function ContactPage() {
  return (
    <>
      <div className={styles.fullPage}>
        <header>
          <h1 className={styles.h1}>Contact</h1>
        </header>
        <Nav />
        <main className={styles.main}>
          <div className={styles.explanation}>
            <p>
              If you are an author that would like to be included on Indie Book
              Vault, read the requirements and fill out the form below.
            </p>
            <br />
            <p>By filling out the form you agree to the following:</p>
            <ul className={styles.ul}>
              <li>
                Authors are required to be published and have their work(s)
                available for purchase from a reputable website (i.e. Amazon,
                Kobo, Smashwords, etc)
              </li>
              <li>
                Authors must have a link to this site clearly labeled on their
                website to help readers find us and support the community
              </li>
              <li>
                Author's website must be complete and live. Websites still under
                construction are not accepted.
              </li>
              <li>
                Authors must create at least one original social media promotion
                informing readers and other writers that we exist
              </li>
              <li>
                Authors that <span className={styles.underline}>do not</span>{" "}
                have a website can be considered if they are willing to create
                monthly social media promotions to help readers find Indie Book
                Vault
              </li>
            </ul>
            <br />
            <p>
              **Linktree links are not accepted on the application. All links
              should be full website links (https://...) and not @yourName.
              Failure to provide correct information may result in rejection of
              application without notice.**
            </p>
          </div>
          <AuthorApplication />
          <p className={styles.explanation}>
            Feel free to reach out to us on social media on{" "}
            <a
              href="https://www.facebook.com/people/Indie-BookVault/100093471697773/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook{" "}
            </a>
            or{" "}
            <a
              href="https://www.instagram.com/indiebookvault/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
