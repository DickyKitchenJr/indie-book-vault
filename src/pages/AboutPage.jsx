import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/about-page.module.css";

function AboutPage() {
  return (
    <>
      <div className={styles.fullPage}>
        <header>
          <h1 className={styles.h1}>About</h1>
        </header>
        <Nav />
        <main className={styles.main}>
          <h2 className={styles.h2}>What is Indie Book Vault?</h2>
          <p className={styles.p}>
            Indie Book Vault is a volunteer-run site with one goal:{" "}
            <span className={styles.standOut}>
              To help readers connect with great indie authors!
            </span>
          </p>
          <br />
          <p className={styles.p}>
            For fans of indie books, finding new authors and books can be a
            struggle. Without knowing an author's name it can be next to
            impossible to find indie authors who don't already have huge
            followings, and searching for "indie books" or "indie authors"
            online results in being shown a bunch of sites where authors can pay
            to be included; meaning you're missing out on 99% of the indie
            content out there!
          </p>
          <br />
          <p className={styles.p}>Enter Indie Book Vault.</p>
          <br />
          <p className={styles.p}>
            This site was created to provide a free, volunteer-run place for
            readers to find their next great book and for authors to connect
            with readers who otherwise would never find them.
          </p>
          <br />
          <p className={styles.p}>
            We do this by offering authors a free listing on our site and only
            ask that they include a clearly labeled link to our site on their
            author site and create at least one social media promotion telling the
            world about Indie Book Vault. By doing that we create a community
            supported network where readers can find us simply by clicking the
            link on their favorite indie author's site.
          </p>
          <br />
          <p className={styles.p}>
            For every author that joins Indie Book Vault, every other author on
            the site gains the potential readers of that author and that author
            gains the potential readers of every other author on the site. That
            gives you, the reader, an ever growing resource to find your next
            book! Everybody wins!
          </p>
          <br />
          <p className={styles.p}>
            In addition, as an added way to help readers find new authors, we
            randomize the order that authors are shown in every time you click a
            genre tab on the home page. This means that every author has the
            chance to be shown at the top of the list, unlike sites that charge
            authors for top listings, which also improves a reader's chance to
            find a new and terrific author in their favorite genre with every
            visit to our site!
          </p>
          <br />
          <p className={styles.p}>
            Rather than charge authors to grow and maintain the site, we rely on
            authors and readers to spread word about us through their sites and
            social media accounts, and for those who can spare a dollar we also
            accept donations through the link at the bottom of the page.
          </p>
          <br />
          <p className={styles.p}>
            In short: We're Indie Book Vault, and we're here because indie
            readers and indie authors are awesome!
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
