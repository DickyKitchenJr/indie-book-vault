import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import styles from "../../styles/genre-pages.module.css";
import RandomAuthors from "../../components/RandomAuthors";

function Comedy({ authors }) {
  return (
    <>
      <div>
        <main className={styles.main}>
          <h1 className={styles.h1}>Comedy</h1>
          <Nav />
          <RandomAuthors authors={authors} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Comedy;
