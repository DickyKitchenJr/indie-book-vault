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
      {/* if there are no authors to populate the page */}
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
          {/* if there are authors to populate the page */}
          <div className={styles.authorsListed}>
            {authors.map((author) => {
              return (
                <>
                {/* author box showing abreviated author info for user to click to open modal */}
                  <div
                    className={styles.authorBox}
                    key={authors[authors.indexOf(author)] + author.lastName}
                    onClick={() => handleClick(author.lastName + author.number)}
                  >
                    <h3 className={styles.authorBoxH3}>
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
                  {/* information to be shown when modal is open */}
                  {isModalOpen &&
                  authorID === author.lastName + author.number ? (
                    <div
                      className={styles.authorModal}
                      onClick={() => handleClick()}
                    >
                      <div className={styles.modalInfo}>
                        <h3 className={styles.modalH3}>
                          {author.firstName} {author.lastName}
                        </h3>
                        <br />
                        <h4 className={styles.modalH4}>Genres:</h4>
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
                        <h4 className={styles.modalH4}>Bio:</h4>
                        {author.bio.length === 1
                          ? author.bio[0]
                          : author.bio.map((sentence) => {
                              return (
                                <>
                                  <p
                                    className={styles.modalP}
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
                        <h4 className={styles.modalH4}>Website:</h4>
                        <p>
                          ▪{" "}
                          <a
                            className={styles.modalA}
                            href={author.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {author.website}
                          </a>
                        </p>
                        <br />
                        <br />
                        <h4 className={styles.modalH4}>Social Media:</h4>
                        <ul className={styles.modalUl}>
                          {author.socialMedia.instagram ? (
                            <li>
                              ▪{" "}
                              <a
                                href={author.socialMedia.instagram}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Instagram
                              </a>
                            </li>
                          ) : null}
                          {author.socialMedia.facebook ? (
                            <li>
                              ▪{" "}
                              <a
                                href={author.socialMedia.facebook}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Facebook
                              </a>
                            </li>
                          ) : null}
                          {author.socialMedia.twitter ? (
                            <li>
                              ▪{" "}
                              <a
                                href={author.socialMedia.twitter}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Twitter
                              </a>
                            </li>
                          ) : null}
                          {author.socialMedia.mastadon ? (
                            <li>
                              ▪{" "}
                              <a
                                href={author.socialMedia.mastadon}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Mastadon
                              </a>
                            </li>
                          ) : null}
                          {author.socialMedia.goodreads ? (
                            <li>
                              ▪{" "}
                              <a
                                href={author.socialMedia.goodreads}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goodreads
                              </a>
                            </li>
                          ) : null}
                          {author.socialMedia.tiktok ? (
                            <li>
                              ▪{" "}
                              <a
                                href={author.socialMedia.tiktok}
                                target="_blank"
                                rel="noreferrer"
                              >
                                TikTok
                              </a>
                            </li>
                          ) : null}
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
