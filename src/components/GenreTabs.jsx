import Children from '../assets/images/childrens-tab.webp';
import Comedy from '../assets/images/comedy-tab.webp';
import Drama from '../assets/images/drama-tab.webp';
import Dystopian from '../assets/images/dystopian-tab.webp';
import Fantasy from '../assets/images/fantasy-tab.webp';
import Horror from '../assets/images/horror-tab.webp';
import NonFiction from '../assets/images/non-fiction-tab.webp';
import Romance from '../assets/images/romance-tab.webp';
import SciFi from '../assets/images/sci-fi-tab.webp';
import Thriller from '../assets/images/thriller-tab.webp';
import Western from '../assets/images/western-tab.webp';
import React from 'react';
import styles from '../styles/genre-tabs.module.css';

// TODO: Randomize the presentation of the tabs on each page load; maybe put each tab object in another object with a num: number and then use math Random and math Floor to pick which genre is shown in which order?
function GenreTabs() {
  const tabs = [{src: Children, alt: "Children's"}, {src: Comedy, alt: "Comedy"}, {src: Drama, alt: "Drama"}, {src: Dystopian, alt: "Dystopian"}, {src: Fantasy, alt: "Fantasy"}, {src: Horror, alt: "Horror"}, {src: NonFiction, alt: "Non-Fiction"}, {src: Romance, alt:"Romance"}, {src: SciFi, alt: "Sci-Fi"}, {src: Thriller, alt: "Thriller"}, {src: Western, alt: "Western"}];
  return (
    <>
    <div className={styles.tabs}>
      {tabs.map(tab =>{
        return <img src={tab.src} alt={`${tab.alt} genre tab`} className={styles.img}/>
      })}  
    </div>
      
    </>
  )
}

export default GenreTabs
