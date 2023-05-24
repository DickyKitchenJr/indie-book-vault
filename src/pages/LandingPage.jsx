import React from 'react';
import GenreTabs from '../components/GenreTabs';
import Header from '../components/Header';
import Nav from '../components/Nav';
import styles from '../styles/main-page.module.css';

function LandingPage() {
  return (
    <>
      <div>
        <main className={styles.main}>
        <Header />
        <Nav />
        <GenreTabs />
        </main>
      </div> 
    </>
  )
}

export default LandingPage
