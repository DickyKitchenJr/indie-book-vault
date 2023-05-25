import React from 'react'
import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <>
     <footer className={styles.footer}>
        <p className={styles.p}>If you'd like to help support Indie Book Vault, we graciously accept donations through: &nbsp;</p>
        <br />
        <a className={styles.a} href="https://www.buymeacoffee.com/indiebookvault"><img className={styles.img} src="https://img.buymeacoffee.com/button-api/?text=Buy me a book&emoji=📖&slug=indiebookvault&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>
     </footer> 
    </>
  )
}
export default Footer
