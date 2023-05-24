import React from 'react'
import Nav from '../components/Nav'
import styles from '../styles/faq-page.module.css'

function FaqPage() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>FAQ</h1>
        <Nav />
        <div className={styles.faqs}>
          <h2 className={styles.h2}>I know an author I think you should add, how can I get them listed?</h2>
          <ul className={styles.ul}>
            <li>Every author has to apply to be part of Indie Book Vault themselves, so the best way to have your favorite author added to our site is to reach out to them and let them know we exist so they can apply to be included.</li>
          </ul>
          <h2 className={styles.h2}>I am an author, how can I be included on Indie Book Vault.</h2>
          <ul className={styles.ul}>
            <li>Click on the Contact link in the navigation bar above and you will be directed to a form you can submit for consideration to be included on our site.</li>
          </ul>
          <h2 className={styles.h2}>Is there a cost for an author to be listed on Indie Book Vault?</h2>
          <ul className={styles.ul}>
            <li>No. Indie Book Vault does not charge authors money to be included on our site. We are a group of volunteers passionate about the indie book world and provide this service to help support that community. In order to be included in the site we only ask that authors include a link to our site on their author website and put out at least one social media post informing the world that we are here.<br/><i>**While we do not charge authors or users of our site, we do accept donations to help with the cost of maintaining this service.**</i></li>
          </ul>
          <h2 className={styles.h2}>Are traditionally published authors listed on Indie Book Vault?</h2>
          <ul className={styles.ul}>
            <li>No. While we love tradionally published authors too, we feel that they have enough avenues to help readers find them and aim to help out the indie community which typically have less resources at their disposal.</li>
          </ul>
          <h2 className={styles.h2}>What type of authors will I find on Indie Book Vault?</h2>
          <ul className={styles.ul}>
            <li>Indie Book Vault proudly includes authors from multiple genres, all of whom are either indie published or self-published. These creative authors range from people with single publications to those with numerous published books, and include those who have been on the indie scene for years as well as those who are just breaking into the industry.</li>
          </ul>
          <h2 className={styles.h2}>Do you list free-to-read books on Indie Book Vault?</h2>
          <ul className={styles.ul}>
            <li>One of the criteria for authors to be included is that their work(s) must be commercially available, meaning readers can purchase their work(s) from various reputable websites (i.e. Amazon, Kobo, Smashwords, etc). While some authors may choose to include free-to-read material on their websites, all authors listed on Indie Book Vault have works available for purchase and we encourage you to help support them by buying something from those you find interesting.</li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default FaqPage
