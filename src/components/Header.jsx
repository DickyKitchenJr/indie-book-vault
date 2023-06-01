import React from "react";
import styles from "../styles/header.module.css";
import BookVault from "../assets/images/book-vault.webp";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.centerVertical}>
          <h1 className={styles.h1}>
            Indie
            <br />
            Book
            <br />
            Vault
          </h1>
        </div>
        <img className={styles.img} src={BookVault} alt="vault of books" />
      </header>
    </>
  );
}

export default Header;
