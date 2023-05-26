import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from '../../styles/genre-pages.module.css'

function Romance() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Romance</h1>
        <Nav />
        <p className={styles.p}>Awaiting Authors</p>
      </main>
      <Footer />
    </>
  )
}

export default Romance
