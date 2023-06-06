import React from "react";
import styles from "../styles/nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to={"/"} className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to={"/faq"} className={styles.link}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
