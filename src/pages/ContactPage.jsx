import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/contact-page.module.css";
import NewAuthorApplication from "../components/NewAuthorApplication";

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
            {/* <p className={styles.explanation}> */}
            <p>
              Have a question or want to say hi? Feel free to reach out to us on
              our social media accounts on either{" "}
              <a
                href="https://www.instagram.com/indiebookvault/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram{" "}
              </a>
              or{" "}
              <a
                href="https://www.facebook.com/people/Indie-BookVault/100093471697773/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              .
            </p>
            <br />
            <p>
              If you are an author that would like to be included on Indie Book
              Vault, read the requirements and fill out the form below.
            </p>
            <br />
            <p>By filling out the form you agree to the following terms and requirements:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                Authors are required to be published and have their work(s)
                available for purchase from a reputable website (i.e. Amazon,
                Kobo, Smashwords, etc)
              </li>
              <li className={styles.li}>
                Authors must have a link to this site clearly labeled and easily
                found on their website to help readers find us and support the
                community.
              </li>
              <li className={styles.li}>
                Author's website must be complete, live, and belong to/represent
                the author. Websites still under construction are not accepted,
                nor are websites shared by multiple authors (some exceptions may
                be made if all authors listed on the site apply and accept
                terms). Amazon author pages do not qualify as an author website
                for including a link to our site, but can be included in your
                listing.
              </li>
              <li className={styles.li}>
                Authors must create at least one original social media promotion
                informing readers and other writers that we exist
              </li>
              <li className={styles.li}>
                Authors that <span className={styles.underline}>do not</span>{" "}
                have a website can be considered if they are willing to create a
                social media promotion to help readers find Indie Book Vault and
                make a $15 (USD) annual membership donation on our{" "}
                <a
                  href="https://www.buymeacoffee.com/indiebookvault"
                  target="_blank"
                  rel="noreferrer"
                >
                  donation page
                </a>
                .
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
          <NewAuthorApplication />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
