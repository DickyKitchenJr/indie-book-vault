import React, { useState } from "react";
import styles from "../styles/genre-pages.module.css";
import { Link } from "react-router-dom";

function RandomAuthors({ authors }) {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [authorID, setAuthorID] = useState("");

  const handleClick = (authorUniqueID) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      setAuthorID(authorUniqueID);
    } else {
      setIsModalOpen(false);
      setAuthorID("");
    }
  };

  return (
    <>
      {authors.length === 0 ? (
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
            {authors.map((author) => {
              return (
                <>
                  <div
                    className={styles.authorBox}
                    key={authors[authors.indexOf(author)] + author.lastName}
                    onClick={() => handleClick(author.lastName + author.number)}
                  >
                    <h3>
                      {author.firstName} {author.lastName}
                    </h3>
                    <br />
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
                    <br />
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
                    <p className={styles.authorBoxModalArrow}>▼</p>
                  </div>

                  {isModalOpen &&
                  authorID === author.lastName + author.number ? (
                    <div
                      className={styles.authorModal}
                      onClick={() => handleClick()}
                    >
                      <div className={styles.modalInfo}>
                        <h3 className={styles.modalH1}>
                          {author.firstName} {author.lastName}
                        </h3>
                        <br />
                        <h4>Genres:</h4>
                        {author.subGenre.length === 1 ? (
                          <ul
                            className={styles.modalUl}
                            key={"0G" + author.lastName}
                          >
                            <li>▪ {author.subGenre[0]}</li>
                          </ul>
                        ) : (
                          author.subGenre.map((genre) => {
                            return (
                              <ul
                                className={styles.modalUl}
                                key={
                                  author.subGenre[
                                    author.subGenre.indexOf(genre)
                                  ] +
                                  "G" +
                                  author.lastName
                                }
                              >
                                <li>▪ {genre} </li>
                              </ul>
                            );
                          })
                        )}
                        <br />
                        <h4>Bio:</h4>
                        {author.bio.length === 1
                          ? author.bio[0]
                          : author.bio.map((sentence) => {
                              return (
                                <>
                                  <p
                                    key={
                                      author.bio[author.bio.indexOf(sentence)] +
                                      "B" +
                                      author.lastName
                                    }
                                  >
                                    {sentence}
                                  </p>
                                  <br />
                                </>
                              );
                            })}
                        <br />
                        <br />
                        <h4>Website:</h4>
                        <a href={author.website}>{author.website}</a>
                        <br />
                        <br />
                        <h4>Social Media:</h4>
                        <ul className={styles.modalUl}>
                          {author.socialMedia.length === 1 ? (
                            <li key={"0SM" + author.lastName}>
                              ▪{" "}
                              <a href={author.socialMedia[0]}>
                                {author.socialMedia[0]}
                              </a>
                            </li>
                          ) : (
                            author.socialMedia.map((platform) => {
                              return (
                                <li
                                  key={
                                    author.socialMedia[
                                      author.socialMedia.indexOf(platform)
                                    ] +
                                    "SM" +
                                    author.lastName
                                  }
                                >
                                  ▪ <a href={platform}>{platform}</a>
                                </li>
                              );
                            })
                          )}
                        </ul>
                        <p className={styles.authorBoxModalArrow}>▲</p>
                      </div>
                    </div>
                  ) : null}
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default RandomAuthors;
