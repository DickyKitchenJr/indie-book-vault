import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/contact-page.module.css'

function ContactPage() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Contact</h1>
        <Nav />
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
