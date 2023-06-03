import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import styles from "../../styles/genre-pages.module.css";
import RandomAuthors from "../../components/RandomAuthors";

function Western({ authors }) {

  const randomizeAuthors = (genreAuthors) => {
    let count = genreAuthors.length;
    let firstItemHolder;
    let swappedItem;

    // PURPOSE: while count is above 0
    while (count) {
      // PURPOSE: pick a random item and subtract 1 from count
      swappedItem = Math.floor(Math.random() * count--);
      // PURPOSE: temporarily hold the information about to be replaced by the swap
      firstItemHolder = genreAuthors[count];
      // PURPOSE: swap the current item with secondItem
      genreAuthors[count] = genreAuthors[swappedItem];
      // PURPOSE: put the replaced item where secondItem originally was
      genreAuthors[swappedItem] = firstItemHolder;
    }
    return genreAuthors;
  };

  // PURPOSE: create randomized list of authors
  const shuffledList = randomizeAuthors(authors);

  // PURPOSE: assign a unique number to each author to be used when choosing which modal to show
  let authorNumber = 0;
  shuffledList.forEach((author) => (author.number = authorNumber++));

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Western</h1>
        <Nav />
        <RandomAuthors authors={shuffledList} />
      </main>
      <Footer />
    </>
  );
}

export default Western;
