import React from 'react';
import GenreTabs from '../components/GenreTabs';
import Header from '../components/Header';
import Nav from '../components/Nav';
import styles from '../styles/landing-page.module.css';

function LandingPage() {
  return (
    <>
      <div>
        <main className={styles.main}>
        <Header />
        <Nav />
        <h2 className={styles.h2}>Pick A Genre</h2>
        <GenreTabs />
        </main>
      </div> 
    </>
  )
}

export default LandingPage
