import React, { useState } from "react";
import styles from "../styles/author-application.module.css";

function AuthorApplication() {
  const [childrensCheck, setChildrensCheck] = useState(false);
  const [comedyCheck, setComedyCheck] = useState(false);
  const [dramaCheck, setDramaCheck] = useState(false);
  const [dystopianCheck, setDystopianCheck] = useState(false);
  const [fantasyCheck, setFantasyCheck] = useState(false);
  const [horrorCheck, setHorrorCheck] = useState(false);
  const [nonFictionCheck, setNonFictionCheck] = useState(false);
  const [romanceCheck, setRomanceCheck] = useState(false);
  const [sciFiCheck, setSciFiCheck] = useState(false);
  const [thrillerCheck, setThrillerCheck] = useState(false);
  const [westernCheck, setWesternCheck] = useState(false);
  const [atLeastOneChecked, setAtLeastOneChecked] = useState(0);

  const isChildrensCheck = () => {
    if (!childrensCheck) {
      setChildrensCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setChildrensCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isComdeyCheck = () => {
    if (!comedyCheck) {
      setComedyCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setComedyCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isDramaCheck = () => {
    if (!dramaCheck) {
      setDramaCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setDramaCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isDystopianCheck = () => {
    if (!dystopianCheck) {
      setDystopianCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setDystopianCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isFantasyCheck = () => {
    if (!fantasyCheck) {
      setFantasyCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setFantasyCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isHorroCheck = () => {
    if (!horrorCheck) {
      setHorrorCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setHorrorCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isnonFictionCheck = () => {
    if (!nonFictionCheck) {
      setNonFictionCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setNonFictionCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isRomanceCheck = () => {
    if (!romanceCheck) {
      setRomanceCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setRomanceCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isSciFiCheck = () => {
    if (!sciFiCheck) {
      setSciFiCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setSciFiCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isThrillerCheck = () => {
    if (!thrillerCheck) {
      setThrillerCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setThrillerCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  const isWesternCheck = () => {
    if (!westernCheck) {
      setWesternCheck(true);
      setAtLeastOneChecked(atLeastOneChecked + 1);
    } else {
      setWesternCheck(false);
      setAtLeastOneChecked(atLeastOneChecked - 1);
    }
  };

  return (
    <>
      <form
        className={styles.form}
        action="https://formsubmit.co/698f93e2a9acb27328358ef959c7837d"
        method="POST"
      >
        <h2 className={styles.h2}>Author Application</h2>

        <label className={styles.label} htmlFor="name">
          Author Name:&nbsp;
        </label>
        <input
          className={styles.text}
          type="text"
          id="name"
          name="name"
          placeholder="Author Name"
          required
        />
        <br />

        <label className={styles.label} htmlFor="email">
          Email:&nbsp;
        </label>
        <input
          className={styles.text}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />

        <label className={styles.label} htmlFor="website">
          Website:&nbsp;
        </label>
        <input
          className={styles.text}
          type="text"
          id="website"
          name="website"
          placeholder="Author Website Address (https://...)"
        />
        <br />

        <label className={styles.label} htmlFor="main-genre">
          Broad/Umbrella Genre(s):&nbsp;
        </label>
        <div className={styles.checkbox} id="main-genre">
          {atLeastOneChecked >= 1 ? (
            <>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="romance"
                  name="romance"
                  onChange={isRomanceCheck}
                  checked={romanceCheck}
                />
                <label htmlFor="romance">&nbsp;Romance&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="fantasy"
                  name="fantasy"
                  onChange={isFantasyCheck}
                  checked={fantasyCheck}
                />
                <label htmlFor="fantasy">&nbsp;Fantasy&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="thriller"
                  name="thriller"
                  onClick={isThrillerCheck}
                  checked={thrillerCheck}
                />
                <label htmlFor="thriller">&nbsp;Thriller&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="scifi"
                  name="scifi"
                  onChange={isSciFiCheck}
                  checked={sciFiCheck}
                />
                <label htmlFor="scifi">&nbsp;Sci-Fi&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="childrens"
                  name="childrens"
                  onChange={isChildrensCheck}
                  checked={childrensCheck}
                />
                <label htmlFor="childrens">&nbsp;Children's&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="drama"
                  name="drama"
                  onChange={isDramaCheck}
                  checked={dramaCheck}
                />
                <label htmlFor="drama">&nbsp;Drama&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="horror"
                  name="horror"
                  onChange={isHorroCheck}
                  checked={horrorCheck}
                />
                <label htmlFor="horror">&nbsp;Horror&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="comedy"
                  name="comedy"
                  onChange={isComdeyCheck}
                  checked={comedyCheck}
                />
                <label htmlFor="comedy">&nbsp;Comedy&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="dystopian"
                  name="dystopian"
                  onChange={isDystopianCheck}
                  checked={dystopianCheck}
                />
                <label htmlFor="dystopian">&nbsp;Dystopian&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="nonfiction"
                  name="nonfiction"
                  onChange={isnonFictionCheck}
                  checked={nonFictionCheck}
                />
                <label htmlFor="nonfiction">&nbsp;Non-Fiction&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="western"
                  name="western"
                  onChange={isWesternCheck}
                  checked={westernCheck}
                />
                <label htmlFor="western">&nbsp;Western&nbsp;</label>
              </div>
            </>
          ) : (
            <>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="romance"
                  name="romance"
                  onChange={isRomanceCheck}
                  checked={romanceCheck}
                  required
                />
                <label htmlFor="romance">&nbsp;Romance&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="fantasy"
                  name="fantasy"
                  onChange={isFantasyCheck}
                  checked={fantasyCheck}
                  required
                />
                <label htmlFor="fantasy">&nbsp;Fantasy&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="thriller"
                  name="thriller"
                  onChange={isThrillerCheck}
                  checked={thrillerCheck}
                  required
                />
                <label htmlFor="thriller">&nbsp;Thriller&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="scifi"
                  name="scifi"
                  onChange={isSciFiCheck}
                  checked={sciFiCheck}
                  required
                />
                <label htmlFor="scifi">&nbsp;Sci-Fi&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="childrens"
                  name="childrens"
                  onChange={isChildrensCheck}
                  checked={childrensCheck}
                  required
                />
                <label htmlFor="childrens">&nbsp;Children's&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="drama"
                  name="drama"
                  onChange={isDramaCheck}
                  checked={dramaCheck}
                  required
                />
                <label htmlFor="drama">&nbsp;Drama&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="horror"
                  name="horror"
                  onChange={isHorroCheck}
                  checked={horrorCheck}
                  required
                />
                <label htmlFor="horror">&nbsp;Horror&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="comedy"
                  name="comedy"
                  onChange={isComdeyCheck}
                  checked={comedyCheck}
                  required
                />
                <label htmlFor="comedy">&nbsp;Comedy&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="dystopian"
                  name="dystopian"
                  onChange={isDystopianCheck}
                  checked={dystopianCheck}
                  required
                />
                <label htmlFor="dystopian">&nbsp;Dystopian&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="nonfiction"
                  name="nonfiction"
                  onChange={isnonFictionCheck}
                  checked={nonFictionCheck}
                  required
                />
                <label htmlFor="nonfiction">&nbsp;Non-Fiction&nbsp;</label>
              </div>
              <div className={styles.checkboxItems}>
                <input
                  className={styles.inputBox}
                  type="checkbox"
                  id="western"
                  name="western"
                  onChange={isWesternCheck}
                  checked={westernCheck}
                  required
                />
                <label htmlFor="western">&nbsp;Western&nbsp;</label>
              </div>
            </>
          )}
        </div>
        <br />

        <label className={styles.label} htmlFor="sub-genre">
          Sub-Genre:&nbsp;
        </label>
        <textarea
          className={styles.text}
          id="sub-genre"
          name="Sub-Genre"
          placeholder="Sub-Genre(s)"
          required
        />
        <br />

        <label className={styles.label} htmlFor="social-media">
          Social Media Account(s):&nbsp;
        </label>
        <textarea
          className={styles.text}
          id="social-media"
          name="social media accounts"
          placeholder="Please include links; LinkTree NOT accepted"
          required
        />
        <br />

        <input type="text" name="_honey" style={{ display: "none" }} />

        <label className={styles.label} htmlFor="bio">
          Bio:&nbsp;
        </label>
        <textarea
          className={styles.text}
          placeholder="Author Bio"
          id="bio"
          name="message"
          rows="10"
          cols="30"
          required
        ></textarea>

        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default AuthorApplication;
