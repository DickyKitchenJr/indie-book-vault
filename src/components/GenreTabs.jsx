import Children from "../assets/images/childrens-tab.webp";
import Comedy from "../assets/images/comedy-tab.webp";
import Drama from "../assets/images/drama-tab.webp";
import Dystopian from "../assets/images/dystopian-tab.webp";
import Fantasy from "../assets/images/fantasy-tab.webp";
import Horror from "../assets/images/horror-tab.webp";
import NonFiction from "../assets/images/non-fiction-tab.webp";
import Romance from "../assets/images/romance-tab.webp";
import SciFi from "../assets/images/sci-fi-tab.webp";
import Thriller from "../assets/images/thriller-tab.webp";
import Western from "../assets/images/western-tab.webp";
import HistFict from "../assets/images/historical-fiction-tab.webp";
import React from "react";
import styles from "../styles/genre-tabs.module.css";
import { Link } from "react-router-dom";

function GenreTabs() {
  const tabs = [
    { src: Children, alt: "Children's", link: "childrens" },
    { src: Comedy, alt: "Comedy", link: "comedy" },
    { src: Drama, alt: "Drama", link: "drama" },
    { src: Dystopian, alt: "Dystopian", link: "dystopian" },
    { src: Fantasy, alt: "Fantasy", link: "fantasy" },
    { src: HistFict, alt: "Historical Fiction", link: "historicalfiction" },
    { src: Horror, alt: "Horror", link: "horror" },
    { src: NonFiction, alt: "Non-Fiction", link: "nonfiction" },
    { src: Romance, alt: "Romance", link: "romance" },
    { src: SciFi, alt: "Sci-Fi", link: "scifi" },
    { src: Thriller, alt: "Thriller", link: "thriller" },
    { src: Western, alt: "Western", link: "western" },
  ];

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map((tab) => {
          return (
            <Link to={`/${tab.link}`} key={tab.alt}>
              <img
                src={tab.src}
                alt={`${tab.alt} genre tab`}
                className={styles.img}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default GenreTabs;
