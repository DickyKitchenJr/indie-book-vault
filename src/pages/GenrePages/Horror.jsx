import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from '../../styles/genre-pages.module.css'

function Horror() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Horror</h1>
        <Nav />
        <p className={styles.p}>Awaiting Authors</p>
      </main>
      <Footer />
    </>
  )
}

export default Horror
