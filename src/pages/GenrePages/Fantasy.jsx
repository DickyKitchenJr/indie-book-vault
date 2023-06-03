import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import styles from "../../styles/genre-pages.module.css";
import RandomAuthors from "../../components/RandomAuthors";

function Fantasy({ authors }) {
  const shuffledList = [...authors].sort(() => 0.5 - Math.random()) 

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Fantasy</h1>
        <Nav />
        <RandomAuthors authors={authors} shuffledList={shuffledList}/>
      </main>
      <Footer />
    </>
  );
}

export default Fantasy;
