import React from 'react'
import styles from '../styles/nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <Link to={"/"} className={styles.link}><li>Home</li></Link> 
        <li>About</li>
        <Link to={"faq"} className={styles.link}><li>FAQ</li></Link> 
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Nav
