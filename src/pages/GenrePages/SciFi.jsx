import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import styles from "../../styles/genre-pages.module.css";
import RandomAuthors from "../../components/RandomAuthors";

function SciFi({ authors }) {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Sci-Fi</h1>
        <Nav />
        <RandomAuthors authors={authors} />
      </main>
      <Footer />
    </>
  );
}

export default SciFi;
