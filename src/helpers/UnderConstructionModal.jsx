import React, { useState } from "react";
import styles from "./under-construction-modal.module.css";

function UnderConstructionModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.centerMessage}>
          <h2 className={styles.h2}>Site is Currently Under Construction</h2>

          <div className={styles.imgDiv}>
            <img
              className={styles.img}
              src="https://media.tenor.com/gB6z2hBaWi8AAAAC/goofing-off-edd-gould.gif"
              alt="under construction gif"
            />
          </div>

          <div className={styles.message}>
            <p>
              Feel free to poke around and explore the site as we complete it's
              construction.
            </p>
            <br />
            <p>
              If you are an indie or self-published author interested in being
              listed on our site please visit the Contact page and submit an
              application.
            </p>
            <br />
            <p>Areas still being worked on:</p>
            <ul className={styles.ul}>
              <li>all genre specific pages</li>
              <li>minor tweaks to Contact Page</li>
            </ul>
          </div>

          <br />

          <div className={styles.buttonDiv}>
            <button
              className={styles.button}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnderConstructionModal;
