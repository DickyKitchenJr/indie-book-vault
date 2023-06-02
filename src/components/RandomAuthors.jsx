import React, { useRef, useState } from "react";
import styles from "../styles/genre-pages.module.css";
import { Link } from "react-router-dom";

// PURPOSE: take all authors in the genre and randomize them then display
function RandomAuthors({ authors }) {
  let isModalOpen = useRef(false);
  let authorID = useRef("");

  const randomizeAuthors = (genreAuthors) => {
    let count = genreAuthors.length;
    let firstItemHolder;
    let swappedItem;

    // PURPOSE: while count is above 0
    while (count) {
      // PURPOSE: pick a random item and subtract 1 from count
      swappedItem = Math.floor(Math.random() * count--);
      // PURPOSE: temporarily hold the information about to be replaced by the swap
      firstItemHolder = genreAuthors[count];
      // PURPOSE: swap the current item with secondItem
      genreAuthors[count] = genreAuthors[swappedItem];
      // PURPOSE: put the replaced item where secondItem originally was
      genreAuthors[swappedItem] = firstItemHolder;
    }
    return genreAuthors;
  };

  // PURPOSE: create randomized list of authors
  const shuffledList = randomizeAuthors(authors);

  // PURPOSE: assign a unique number to each author to be used when choosing which modal to show
  let authorNumber = 0;
  shuffledList.forEach(author => author.number = authorNumber++)

  const handleClick = (authorUniqueID) =>{
    if (!isModalOpen.current) {
      isModalOpen.current =true;
      authorID.current = authorUniqueID;
      console.log(isModalOpen)
      console.log(authorID.current)
    } else {
      isModalOpen.current =false;
      authorID.current = "";
      console.log(isModalOpen.current);
      console.log(authorID.current);
    }
  }


  return (
    <>
      {shuffledList.length === 0 ? (
        <div className={styles.awaitingAuthors}>
          <h3 className={styles.awaitingH3}>Awaiting Authors</h3>
          <p className={styles.awaitingP}>
            If you know an indie or self-published author who writes this genre,
            send them our website and lets get them listed so more readers can
            find them!
          </p>
          <br />
          <p className={styles.awaitingP}>
            Authors can sign up on our <Link to="/contact">Contact</Link> page.
          </p>
        </div>
      ) : (
        <>
          <div className={styles.authorsListed}>
            {shuffledList.map((author) => {
              return (
                <>
                  <div
                    className={styles.authorBox}
                    key={
                      shuffledList[shuffledList.indexOf(author)] +
                      author.lastName
                    }
                    onClick={() => handleClick(author.lastName + author.number)}
                  >
                    <h3>
                      {author.firstName} {author.lastName}
                    </h3>
                    <p className={styles.authorBoxP}>
                      {author.subGenre.length === 1 ? (
                        <span key={"0G" + author.lastName}>
                          ▪ {author.subGenre[0]}
                        </span>
                      ) : (
                        author.subGenre.map((genre) => {
                          return (
                            <span
                              key={
                                author.subGenre[
                                  author.subGenre.indexOf(genre)
                                ] +
                                "G" +
                                author.lastName
                              }
                            >
                              ▪ {genre}{" "}
                            </span>
                          );
                        })
                      )}
                    </p>
                    <p className={styles.authorBoxP}>
                      Bio:{" "}
                      {author.bio.length === 1
                        ? author.bio[0]
                        : author.bio.map((sentence) => {
                            return (
                              <>
                                <span
                                  key={
                                    author.bio[author.bio.indexOf(sentence)] +
                                    "B" +
                                    author.lastName
                                  }
                                >
                                  {sentence}
                                </span>
                                <br />
                              </>
                            );
                          })}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          
          {console.log('Yes this is working')}
          {shuffledList ? console.log("This works too") : null}
          {shuffledList ? <h1>This also works, must be your tenary operator</h1> : null}
          {/* WHY ISN'T THIS WORKING??? */}
          {isModalOpen.current &&
          authorID.current
            ? console.log(`The current authorID is ${authorID.current}`)
            : console.log('Still not working')}
        </>
      )}
    </>
  );
}

export default RandomAuthors;

{/* <div
  className={styles.authorInfo}
  key={shuffledList[shuffledList.indexOf(author)] + author.lastName}
>
  <p>
    Name: {author.firstName} {author.lastName}
  </p>
  <p>Genres:</p>
  <ul>
    {author.subGenre.length === 1 ? (
      <li key={"0G" + author.lastName}>{author.subGenre[0]}</li>
    ) : (
      author.subGenre.map((genre) => {
        return (
          <li
            key={
              author.subGenre[author.subGenre.indexOf(genre)] +
              "G" +
              author.lastName
            }
          >
            {genre}
          </li>
        );
      })
    )}
  </ul>
  <p>
    Bio:{" "}
    {author.bio.length === 1
      ? author.bio[0]
      : author.bio.map((sentence) => {
          return (
            <>
              <span
                key={
                  author.bio[author.bio.indexOf(sentence)] +
                  "B" +
                  author.lastName
                }
              >
                {sentence}
              </span>
              <br />
              <br />
            </>
          );
        })}
  </p>
  <p>Website: {author.website}</p>
  <p>Social Media:</p>
  <ul>
    {author.socialMedia.length === 1 ? (
      <li key={"0SM" + author.lastName}>{author.socialMedia[0]}</li>
    ) : (
      author.socialMedia.map((platform) => {
        return (
          <li
            key={
              author.socialMedia[author.socialMedia.indexOf(platform)] +
              "SM" +
              author.lastName
            }
          >
            {platform}
          </li>
        );
      })
    )}
  </ul>
  <br />
</div>; */}