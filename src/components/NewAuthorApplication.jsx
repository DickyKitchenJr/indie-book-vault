import React, { useState } from "react";

const AuthorApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    umbrellaGenre: [],
    subGenre: [],
    instagram: "",
    facebook: "",
    twitter: "",
    tiktok: "",
    goodreads: "",
    mastodon: "",
    amazonBio: "",
    threads: "",
    bookbub: "",
    bio: "",
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

  const apiAddress = import.meta.env.VITE_API_ADDRESS;

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
  const handleAddSubGenre = () => {
    setFormData({
      ...formData,
      subGenre: [...formData.subGenre, userChoice],
    });
    setUserChoice(""); // Assuming you clear userChoice as well
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
        //TODO: Handle successful form submission, e.g., redirect or show a success message
        console.log("Form submitted successfully");
      } else {
        // Handle errors, e.g., show an error message to the user
        alert(
          "Form submission failed. Please recheck your information and try again"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    // TODO: convert styles to external CSS
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* First Name Section*/}
      <label htmlFor="firstName">
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      {/* Last Name Section */}
      <label htmlFor="lastName">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      {/* Email Section */}
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      {/* Website Section */}
      <label htmlFor="website">
        Website:
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
        />
      </label>
      {/* Umbrella Genre Section */}
      <label htmlFor="umbrellaGenre">
        Umbrella Genre:
        {/* TODO: convert styles to external css */}
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
          <div>
            <input
              type="checkbox"
              id="romance"
              name="umbrellaGenre"
              value="romance"
              checked={formData.umbrellaGenre.includes("romance")}
              onChange={handleGenreChange}
            />
            <label htmlFor="romance">Romance</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="fantasy"
              name="umbrellaGenre"
              value="fantasy"
              checked={formData.umbrellaGenre.includes("fantasy")}
              onChange={handleGenreChange}
            />
            <label htmlFor="fantasy">Fantasy</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="thriller"
              name="umbrellaGenre"
              value="thriller"
              checked={formData.umbrellaGenre.includes("thriller")}
              onChange={handleGenreChange}
            />
            <label htmlFor="thriller">Thriller</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="scifi"
              name="umbrellaGenre"
              value="scifi"
              checked={formData.umbrellaGenre.includes("scifi")}
              onChange={handleGenreChange}
            />
            <label htmlFor="scifi">Sci-Fi</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="childrens"
              name="umbrellaGenre"
              value="childrens"
              checked={formData.umbrellaGenre.includes("childrens")}
              onChange={handleGenreChange}
            />
            <label htmlFor="childrens">Children's</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="drama"
              name="umbrellaGenre"
              value="drama"
              checked={formData.umbrellaGenre.includes("drama")}
              onChange={handleGenreChange}
            />
            <label htmlFor="drama">Drama</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="horror"
              name="umbrellaGenre"
              value="horror"
              checked={formData.umbrellaGenre.includes("horror")}
              onChange={handleGenreChange}
            />
            <label htmlFor="horror">Horror</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="comedy"
              name="umbrellaGenre"
              value="comedy"
              checked={formData.umbrellaGenre.includes("comedy")}
              onChange={handleGenreChange}
            />
            <label htmlFor="comedy">Comedy</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dystopian"
              name="umbrellaGenre"
              value="dystopian"
              checked={formData.umbrellaGenre.includes("dystopian")}
              onChange={handleGenreChange}
            />
            <label htmlFor="dystopian">Dystopian</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="nonfiction"
              name="umbrellaGenre"
              value="nonfiction"
              checked={formData.umbrellaGenre.includes("nonfiction")}
              onChange={handleGenreChange}
            />
            <label htmlFor="nonfiction">Non-Fiction</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="western"
              name="umbrellaGenre"
              value="western"
              checked={formData.umbrellaGenre.includes("western")}
              onChange={handleGenreChange}
            />
            <label htmlFor="western">Western</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="historicalfiction"
              name="umbrellaGenre"
              value="historicalfiction"
              checked={formData.umbrellaGenre.includes("historicalfiction")}
              onChange={handleGenreChange}
            />
            <label htmlFor="historicalfiction">Hist. Fict.</label>
          </div>
        </div>
      </label>
      {/* SubGenre section */}
      <label htmlFor="subGenre">
        SubGenre:
        <input type="text" value={userChoice} onChange={handleUserChoice} />
        {/* adds text to subGenre array */}
        <button onClick={handleAddSubGenre}>Add</button>
        {/* display current subGenre array */}
        <p>Current SubGenres Selected:</p>
        <p>
          {formData.subGenre.map((subGenre, index) => (
            <span key={index}>
              {subGenre}&nbsp;
              {/* removes the selected item from the array */}
              <span
                // TODO: convert style to external css
                style={{ cursor: "pointer", color: "red", fontWeight: "bold" }}
                onClick={() => handleRemoveSubGenre(index)}
              >
                -
              </span>
              &nbsp;
            </span>
          ))}
        </p>
      </label>
      {/* Bio section */}
      <label htmlFor="bio">
        Bio:
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
        />
      </label>
      {/* Additional Links section */}
      <label htmlFor="additionalLinks">
        Additional Links:
        {/* TODO: convert style to external css */}
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
          <div>
            <input
              type="checkbox"
              id="instagrambox"
              onChange={() => handleAdditionalLinksBox("instagrambox")}
              checked={additionalLink.instagrambox}
            />
            <label htmlFor="instagrambox">Instagram</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="facebookbox"
              onChange={() => handleAdditionalLinksBox("facebookbox")}
              checked={additionalLink.facebookbox}
            />
            <label htmlFor="facebookbox">Facebook</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="twitterbox"
              onChange={() => handleAdditionalLinksBox("twitterbox")}
              checked={additionalLink.twitterbox}
            />
            <label htmlFor="twitterbox">Twitter/X</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="tiktokbox"
              onChange={() => handleAdditionalLinksBox("tiktokbox")}
              checked={additionalLink.tiktokbox}
            />
            <label htmlFor="tiktokbox">TikTok</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="threadsbox"
              onChange={() => handleAdditionalLinksBox("threadsbox")}
              checked={additionalLink.threadsbox}
            />
            <label htmlFor="threadsbox">Threads</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mastodonbox"
              onChange={() => handleAdditionalLinksBox("mastodonbox")}
              checked={additionalLink.mastodonbox}
            />
            <label htmlFor="mastodonbox">Mastodon</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amazonbiobox"
              onChange={() => handleAdditionalLinksBox("amazonbiobox")}
              checked={additionalLink.amazonbiobox}
            />
            <label htmlFor="amazonbiobox">Amazon Author Page</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="goodreadsbox"
              onChange={() => handleAdditionalLinksBox("goodreadsbox")}
              checked={additionalLink.goodreadsbox}
            />
            <label htmlFor="goodreadsbox">Goodreads</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="bookbubbox"
              onChange={() => handleAdditionalLinksBox("bookbubbox")}
              checked={additionalLink.bookbubbox}
            />
            <label htmlFor="bookbubbox">BookBub</label>
          </div>
        </div>
        {additionalLink.instagrambox ? (
          <>
            <label htmlFor="instagram">
              Instagram:
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        {additionalLink.facebookbox ? (
          <>
            <label htmlFor="facebook">
              Facebook:
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        {additionalLink.twitterbox ? (
          <>
            <label htmlFor="twitter">
              Twitter/X:
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        {additionalLink.tiktokbox ? (
          <>
            <label htmlFor="tiktok">
              TikTok:
              <input
                type="text"
                name="tiktok"
                value={formData.tiktok}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        {additionalLink.threadsbox ? (
          <>
            <label htmlFor="threads">
              Threads:
              <input
                type="text"
                name="threads"
                value={formData.threads}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        {additionalLink.mastodonbox ? (
          <>
            <label htmlFor="mastodon">
              Mastodon:
              <input
                type="text"
                name="mastodon"
                value={formData.mastodon}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        {additionalLink.amazonbiobox ? (
          <>
            <label htmlFor="amazonBio">
              Amazon Author Page:
              <input
                type="text"
                name="amazonBio"
                value={formData.amazonBio}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        {additionalLink.goodreadsbox ? (
          <>
            <label htmlFor="goodreads">
              Goodreads:
              <input
                type="text"
                name="goodreads"
                value={formData.goodreads}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        {additionalLink.bookbubbox ? (
          <>
            <label htmlFor="bookbub">
              BookBub:
              <input
                type="text"
                name="bookbub"
                value={formData.bookbub}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthorApplication;
