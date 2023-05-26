import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from '../../styles/genre-pages.module.css'

function Childrens() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Children's</h1>
        <Nav />
        <p className={styles.p}>Awaiting Authors</p>
      </main>
      <Footer />
    </>
  )
}

export default Childrens
