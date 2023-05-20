import React from 'react';
import styles from '../styles/header.module.css';
import BookVault from '../assets/images/book-vault-small.webp';

function Header() {
  return (
    <>
    <header className={styles.header}>
        <h1 className={styles.h1}> Indie Book Vault</h1> 
        {/* TODO: Add img? */}
    </header>
    </>
  )
}

export default Header