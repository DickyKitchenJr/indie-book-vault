import React from 'react'
import styles from '../styles/nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <Link to={"/"} className={styles.link}><li>Home</li></Link> 
        <Link to={"/about"} className={styles.link}><li>About</li></Link>
        <Link to={"/faq"} className={styles.link}><li>FAQ</li></Link> 
        <Link to={"/contact"} className={styles.link}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
