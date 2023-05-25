import React from 'react'
import Nav from '../components/Nav'
import styles from '../styles/about-page.module.css'

function AboutPage() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>About</h1>
        <Nav />
      </main>
      
    </>
  )
}

export default AboutPage
