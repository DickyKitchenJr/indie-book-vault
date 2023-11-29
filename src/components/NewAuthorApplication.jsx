import React, { useState } from "react";
import styles from "../styles/author-application.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const NewAuthorApplication = () => {
  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    website: null,
    umbrellaGenre: [],
    subGenre: [],
    instagram: null,
    facebook: null,
    twitter: null,
    tiktok: null,
    goodreads: null,
    mastodon: null,
    amazonBio: null,
    threads: null,
    bookbub: null,
    bio: null,
  });
  const [additionalLink, setAdditionalLink] = useState({
    instagrambox: false,
    facebookbox: false,
    twitterbox: false,
    tiktokbox: false,
    threadsbox: false,
    mastodonbox: false,
    amazonbiobox: false,
    goodreadsbox: false,
    bookbubbox: false,
  });
  const [userChoice, setUserChoice] = useState("");
  const [recapChecked, setRecapChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const apiAddress = import.meta.env.VITE_API_ADDRESS_FOR_FORM;
  const recapSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const navigate = useNavigate();

  //handler for terms checkbox
  const handleTermsChecked = () => {
    setTermsChecked(!termsChecked);
  };

  //handler for reCAPTCHA checkbox
  const handleRecapBox = () => {
    setRecapChecked(true);
  };

  //handlers for firstName, lastName, email, and links

  // used to make sure there is only one empty line between sections in the bio
  const enforceSingleLineBreaks = (input) => {
    return input.replace(/\n{2,}/g, "\n\n");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // if the input is for bio use enforceSingleLineBreaks, otherwise just return the value
    const processedValue =
      name === "bio" ? enforceSingleLineBreaks(value) : value;

    setFormData({ ...formData, [name]: processedValue });
  };

  // genre handlers
  const handleGenreChange = (e) => {
    const genreValue = e.target.value;
    const updatedGenres = [...formData.umbrellaGenre];

    if (e.target.checked) {
      // If checkbox is checked, add the genre to the array
      updatedGenres.push(genreValue);
    } else {
      // If checkbox is unchecked, remove the genre from the array
      const genreIndex = updatedGenres.indexOf(genreValue);
      if (genreIndex !== -1) {
        updatedGenres.splice(genreIndex, 1);
      }
    }

    setFormData({ ...formData, umbrellaGenre: updatedGenres });
  };

  // subGenre handlers
  const handleAddSubGenre = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      subGenre: [...formData.subGenre, userChoice],
    });
    // clear userChoice
    setUserChoice("");
  };

  const handleRemoveSubGenre = (index) => {
    const updatedSubGenre = formData.subGenre.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      subGenre: updatedSubGenre,
    });
  };

  const handleUserChoice = (e) => {
    const { value } = e.target;
    setUserChoice(value);
  };

  // additional links handler
  const handleAdditionalLinksBox = (checkboxName) => {
    setAdditionalLink((prevLinks) => ({
      ...prevLinks,
      [checkboxName]: !prevLinks[checkboxName],
    }));
  };

  // submit handlers

  const socialMediaLink =
    formData.instagram ||
    formData.facebook ||
    formData.twitter ||
    formData.tiktok ||
    formData.threads ||
    formData.mastodon;

  const isInputValid = (name, value) => {
    switch (name) {
      case "firstName":
        return value.length > 0;
      case "lastName":
        return value.length > 0;
      case "email":
        return value.length > 0;
      case "bio":
        return value.length > 0;
      case "website":
      case "instagram":
      case "facebook":
      case "twitter":
      case "tiktok":
      case "goodreads":
      case "mastodon":
      case "amazonBio":
      case "threads":
      case "bookbub":
        // URL validation logic
        const urlRegex =
          /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\/?([^\s]*)?$/;
        return urlRegex.test(value);
      default:
        return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(
      "Your form is processing. Please be patient and do not exit this page. You will be redirected when the form successfully submits. Please click 'OK' and wait."
    );
    const isFirstNameValid = isInputValid("firstName", formData.firstName);
    const isLastNameValid = isInputValid("lastName", formData.lastName);
    const isEmailValid = isInputValid("email", formData.email);
    const isBioValid = isInputValid("bio", formData.bio);
    const isLinkURL =
      (!formData.website || isInputValid("website", formData.website)) &&
      (!formData.instagram || isInputValid("instagram", formData.instagram)) &&
      (!formData.facebook || isInputValid("facebook", formData.facebook)) &&
      (!formData.twitter || isInputValid("twitter", formData.twitter)) &&
      (!formData.tiktok || isInputValid("tiktok", formData.tiktok)) &&
      (!formData.threads || isInputValid("threads", formData.threads)) &&
      (!formData.mastodon || isInputValid("mastodon", formData.mastodon)) &&
      (!formData.amazonBio || isInputValid("amazonBio", formData.amazonBio)) &&
      (!formData.goodreads || isInputValid("goodreads", formData.goodreads)) &&
      (!formData.bookbub || isInputValid("bookbub", formData.bookbub));

    // Check if First Name contains a response
    if (!isFirstNameValid) {
      alert("Please enter a first name");
      return;
    }

    // Check if Last Name contains a response
    if (!isLastNameValid) {
      alert("Please enter a last name");
      return;
    }

    // Check if Email contains a response
    if (!isEmailValid) {
      alert("Please enter an email address");
      return;
    }

    // Check if at least one social media link is included
    if (!socialMediaLink) {
      alert(
        "Please include a link for at least one of the following: Instagram, Facebook, Twitter/X, TikTok, Threads, Mastodon"
      );
      return;
    }

    // Check if links are in valid URL format
    if (!isLinkURL) {
      alert("All links must be in a valid format (ex. https://linkname.com)");
      return;
    }

    // Check if at least one umbrellaGenre is selected
    if (formData.umbrellaGenre.length === 0) {
      alert("Please select at least one Umbrella Genre");
      return;
    }

    // Check if at least one subGenre is added
    if (formData.subGenre.length === 0) {
      alert("Please add at least one SubGenre");
      return;
    }

    // Check if Bio contains a response
    if (!isBioValid) {
      alert("Please enter a bio");
    }

    try {
      const response = await fetch(apiAddress, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/thankyou");
      } else {
        const responseBody = await response.json();

        if (response.status === 400) {
          // Handle specific error for 400 status (Bad Request)
          alert(responseBody.error);
        } else {
          // Handle other errors, e.g., show a generic error message to the user
          alert(
            "Form submission failed. Please recheck your information and try again"
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* terms of agreement section */}
      <p className={styles.termsp}>
        Do you agree to the terms and requirements?
      </p>
      <div className={styles.terms}>
        <input
          type="checkbox"
          id="terms"
          onChange={handleTermsChecked}
          checked={termsChecked}
        />
        <label htmlFor="terms">Agree</label>
      </div>

      {/* author application form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.h2}>Author Application</h2>

        {/* First Name Section*/}
        <label htmlFor="firstName" className={styles.label}>
          First Name:
        </label>
        <input
          className={styles.text}
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          disabled={!termsChecked}
        />
        <br />
        {/* Last Name Section */}
        <label htmlFor="lastName" className={styles.label}>
          Last Name:
        </label>
        <input
          className={styles.text}
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          disabled={!termsChecked}
        />
        <br />
        {/* Email Section */}
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          className={styles.text}
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={!termsChecked}
        />
        <br />
        {/* Website Section */}
        <label htmlFor="website" className={styles.label}>
          Website:
        </label>
        <input
          className={styles.text}
          type="text"
          name="website"
          id="website"
          value={formData.website}
          onChange={handleInputChange}
          disabled={!termsChecked}
        />
        <br />
        {/* Umbrella Genre Section */}
        <label htmlFor="umbrellaGenre" className={styles.label}>
          Umbrella Genre:
        </label>
        <div id="umbrellaGenre" className={styles.checkbox}>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="romance"
              name="umbrellaGenre"
              value="romance"
              checked={formData.umbrellaGenre.includes("romance")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="romance" className={styles.checkboxLabels}>
              Romance
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="fantasy"
              name="umbrellaGenre"
              value="fantasy"
              checked={formData.umbrellaGenre.includes("fantasy")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="fantasy" className={styles.checkboxLabels}>
              Fantasy
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="thriller"
              name="umbrellaGenre"
              value="thriller"
              checked={formData.umbrellaGenre.includes("thriller")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="thriller" className={styles.checkboxLabels}>
              Thriller
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="scifi"
              name="umbrellaGenre"
              value="scifi"
              checked={formData.umbrellaGenre.includes("scifi")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="scifi" className={styles.checkboxLabels}>
              Sci-Fi
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="childrens"
              name="umbrellaGenre"
              value="childrens"
              checked={formData.umbrellaGenre.includes("childrens")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="childrens" className={styles.checkboxLabels}>
              Children's
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="drama"
              name="umbrellaGenre"
              value="drama"
              checked={formData.umbrellaGenre.includes("drama")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="drama" className={styles.checkboxLabels}>
              Drama
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="horror"
              name="umbrellaGenre"
              value="horror"
              checked={formData.umbrellaGenre.includes("horror")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="horror" className={styles.checkboxLabels}>
              Horror
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="comedy"
              name="umbrellaGenre"
              value="comedy"
              checked={formData.umbrellaGenre.includes("comedy")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="comedy" className={styles.checkboxLabels}>
              Comedy
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="dystopian"
              name="umbrellaGenre"
              value="dystopian"
              checked={formData.umbrellaGenre.includes("dystopian")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="dystopian" className={styles.checkboxLabels}>
              Dystopian
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="nonfiction"
              name="umbrellaGenre"
              value="nonfiction"
              checked={formData.umbrellaGenre.includes("nonfiction")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="nonfiction" className={styles.checkboxLabels}>
              Non-Fiction
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="western"
              name="umbrellaGenre"
              value="western"
              checked={formData.umbrellaGenre.includes("western")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label htmlFor="western" className={styles.checkboxLabels}>
              Western
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="historicalfiction"
              name="umbrellaGenre"
              value="historicalfiction"
              checked={formData.umbrellaGenre.includes("historicalfiction")}
              onChange={handleGenreChange}
              disabled={!termsChecked}
            />
            <label
              htmlFor="historicalfiction"
              className={styles.checkboxLabels}
            >
              Hist. Fict.
            </label>
          </div>
        </div>
        <br />
        {/* SubGenre section */}
        <label htmlFor="subGenre" className={styles.label}>
          SubGenre:
        </label>
        <div className={styles.subgenreadd}>
          <input
            className={styles.text}
            type="text"
            name="subGenre"
            id="subGenre"
            value={userChoice}
            onChange={handleUserChoice}
            disabled={!termsChecked}
          />
          {/* adds text to subGenre array */}
          <button
            className={styles.subgenreaddbutton}
            onClick={handleAddSubGenre}
          >
            Add
          </button>
        </div>
        {/* display current subGenre array */}
        <p className={styles.currentsubgenre}>Current SubGenres Selected:</p>
        <p className={styles.currentsubgenre}>
          {formData.subGenre.map((subGenre, index) => (
            <span key={index}>
              {subGenre}&nbsp;
              {/* removes the selected item from the array */}
              <span
                // TODO: convert style to external css
                style={{
                  cursor: "pointer",
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
                onClick={() => handleRemoveSubGenre(index)}
              >
                -
              </span>
              &nbsp;
            </span>
          ))}
        </p>
        <br />
        {/* Bio section */}
        <label htmlFor="bio" className={styles.label}>
          Bio:
        </label>
        <textarea
          className={styles.text}
          name="bio"
          id="bio"
          rows="10"
          cols="30"
          value={formData.bio}
          onChange={handleInputChange}
          disabled={!termsChecked}
        />
        <br />
        {/* Additional Links section */}
        <label htmlFor="additionalLinks" className={styles.label}>
          Additional Links:
        </label>
        <div className={styles.checkbox} id="additionalLinks">
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="instagrambox"
              onChange={() => handleAdditionalLinksBox("instagrambox")}
              checked={additionalLink.instagrambox}
              disabled={!termsChecked}
            />
            <label htmlFor="instagrambox" className={styles.checkboxLabels}>
              Instagram
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="facebookbox"
              onChange={() => handleAdditionalLinksBox("facebookbox")}
              checked={additionalLink.facebookbox}
              disabled={!termsChecked}
            />
            <label htmlFor="facebookbox" className={styles.checkboxLabels}>
              Facebook
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="twitterbox"
              onChange={() => handleAdditionalLinksBox("twitterbox")}
              checked={additionalLink.twitterbox}
              disabled={!termsChecked}
            />
            <label htmlFor="twitterbox" className={styles.checkboxLabels}>
              Twitter/X
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="tiktokbox"
              onChange={() => handleAdditionalLinksBox("tiktokbox")}
              checked={additionalLink.tiktokbox}
              disabled={!termsChecked}
            />
            <label htmlFor="tiktokbox" className={styles.checkboxLabels}>
              TikTok
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="threadsbox"
              onChange={() => handleAdditionalLinksBox("threadsbox")}
              checked={additionalLink.threadsbox}
              disabled={!termsChecked}
            />
            <label htmlFor="threadsbox" className={styles.checkboxLabels}>
              Threads
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="mastodonbox"
              onChange={() => handleAdditionalLinksBox("mastodonbox")}
              checked={additionalLink.mastodonbox}
              disabled={!termsChecked}
            />
            <label htmlFor="mastodonbox" className={styles.checkboxLabels}>
              Mastodon
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="amazonbiobox"
              onChange={() => handleAdditionalLinksBox("amazonbiobox")}
              checked={additionalLink.amazonbiobox}
              disabled={!termsChecked}
            />
            <label htmlFor="amazonbiobox" className={styles.checkboxLabels}>
              Amazon Author Page
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="goodreadsbox"
              onChange={() => handleAdditionalLinksBox("goodreadsbox")}
              checked={additionalLink.goodreadsbox}
              disabled={!termsChecked}
            />
            <label htmlFor="goodreadsbox" className={styles.checkboxLabels}>
              Goodreads
            </label>
          </div>
          <div className={styles.checkboxItems}>
            <input
              className={styles.inputBox}
              type="checkbox"
              id="bookbubbox"
              onChange={() => handleAdditionalLinksBox("bookbubbox")}
              checked={additionalLink.bookbubbox}
              disabled={!termsChecked}
            />
            <label htmlFor="bookbubbox" className={styles.checkboxLabels}>
              BookBub
            </label>
          </div>
        </div>
        <br />
        {additionalLink.instagrambox ? (
          <>
            <label htmlFor="instagram" className={styles.label}>
              Instagram:
            </label>
            <input
              className={styles.text}
              type="text"
              name="instagram"
              id="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        {additionalLink.facebookbox ? (
          <>
            <label htmlFor="facebook" className={styles.label}>
              Facebook:
            </label>
            <input
              className={styles.text}
              type="text"
              name="facebook"
              id="facebook"
              value={formData.facebook}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        {additionalLink.twitterbox ? (
          <>
            <label htmlFor="twitter" className={styles.label}>
              Twitter/X:
            </label>
            <input
              className={styles.text}
              type="text"
              name="twitter"
              id="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        {additionalLink.tiktokbox ? (
          <>
            <label htmlFor="tiktok" className={styles.label}>
              TikTok:
            </label>
            <input
              className={styles.text}
              type="text"
              name="tiktok"
              id="tiktok"
              value={formData.tiktok}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        {additionalLink.threadsbox ? (
          <>
            <label htmlFor="threads" className={styles.label}>
              Threads:
            </label>
            <input
              className={styles.text}
              type="text"
              name="threads"
              id="threads"
              value={formData.threads}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        {additionalLink.mastodonbox ? (
          <>
            <label htmlFor="mastodon" className={styles.label}>
              Mastodon:
            </label>
            <input
              className={styles.text}
              type="text"
              name="mastodon"
              id="mastodon"
              value={formData.mastodon}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        {additionalLink.amazonbiobox ? (
          <>
            <label htmlFor="amazonBio" className={styles.label}>
              Amazon Author Page:
            </label>
            <input
              className={styles.text}
              type="text"
              name="amazonBio"
              id="amazonBio"
              value={formData.amazonBio}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        {additionalLink.goodreadsbox ? (
          <>
            <label htmlFor="goodreads" className={styles.label}>
              Goodreads:
            </label>
            <input
              className={styles.text}
              type="text"
              name="goodreads"
              id="goodreads"
              value={formData.goodreads}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        {additionalLink.bookbubbox ? (
          <>
            <label htmlFor="bookbub" className={styles.label}>
              BookBub:
            </label>
            <input
              className={styles.text}
              type="text"
              name="bookbub"
              id="bookbub"
              value={formData.bookbub}
              onChange={handleInputChange}
            />
            <br />
          </>
        ) : null}
        <ReCAPTCHA sitekey={recapSiteKey} onChange={handleRecapBox} />
        <button
          type="submit"
          className={styles.submit}
          disabled={!recapChecked}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default NewAuthorApplication;
