import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import styles from "../../styles/genre-pages.module.css";
import RandomAuthors from "../../components/RandomAuthors";
import ScrollToTop from "../../helpers/ScrollToTop";
import randomizeAuthors from "../../helpers/randomizeAuthors";

function Western({ authors }) {
  // PURPOSE: create randomized list of authors
  const shuffledList = randomizeAuthors(authors);

  // PURPOSE: assign a unique number to each author to be used when choosing which modal to show
  let authorNumber = 0;
  shuffledList.forEach((author) => (author.number = authorNumber++));

  return (
    <>
      <ScrollToTop />
      <div className={styles.fullPage}>
        <header>
          <h1 className={styles.h1}>Western</h1>
        </header>
        <Nav />
        <main className={styles.main}>
          <RandomAuthors authors={shuffledList} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Western;
