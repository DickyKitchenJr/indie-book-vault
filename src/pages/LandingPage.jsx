import React from 'react';
import GenreTabs from '../components/GenreTabs';
import Header from '../components/Header';
import styles from '../styles/main-page.module.css';

function LandingPage() {
  return (
    <>
      <body className={styles.body}>
        <main className={styles.main}>
        <Header />
        <GenreTabs />
        </main>
      </body> 
    </>
  )
}

export default LandingPage
