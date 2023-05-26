import React from 'react'
import styles from '../styles/author-application.module.css'

function AuthorApplication() {
  return (
    <>
        <form
            className={styles.form}
            action="https://formsubmit.co/indiebookvault@gmail.com"
            method="POST"
          >
            <h2 className={styles.h2}>Author Application</h2>
            
            <label className={styles.label} htmlFor="name">Author Name:&nbsp;</label>
            <input type="text" id="name" name="name" placeholder="Author Name" required />
            <br />

            <label className={styles.label} htmlFor="email">Email:&nbsp;</label>
            <input
              type="email"
              id='email'
              name="email"
              placeholder="Email"
              required
            />   
            <br />

            <label className={styles.label} htmlFor="website">Website:&nbsp;</label>
            <input type="text" id='website' name="website" placeholder="Author Website Address" />   
            <br />

            <label className={styles.label} htmlFor="main-genre">Main Genre(s) [see Home page for currently available genres]:&nbsp;</label>
            <textarea id='main-genre' name="Main Genre" placeholder="Main Genre(s)" required />   
            <br />

            <label className={styles.label} htmlFor="sub-genre">Sub-Genre:&nbsp;</label>
            <textarea id='sub-genre' name="Sub-Genre" placeholder="Sub-Genre(s)" required /> 
            <br />
            
            <label className={styles.label} htmlFor="social-media">Social Media Account(s):&nbsp;</label>
            <textarea id='social-media' name="social media accounts" placeholder="Social Media" />  
            <br />

            <input type="text" name="_honey" style={{ display: "none" }} />
            
            <label className={styles.label} htmlFor="bio">Bio:&nbsp;</label>
            <textarea
              placeholder="Author Bio"
              name="message"
              rows="10"
              cols="30"
              required
            ></textarea>  

            <button className={styles.submit} type="submit">Submit</button>
        </form>
    </>
  )
}

export default AuthorApplication
