import React from "react";
import { Link, useRouteError } from "react-router-dom";
import styles from "../styles/error-page.module.css";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <div className={styles.errorBackground}>
        <div className={styles.errorMessage}>
          <h2 className={styles.center}>
            It appears an error has occured:{" "}
            <i>{error.statusText || error.message}</i>
          </h2>
        </div>

        <div className={styles.errorMessage}>
          <p className={styles.p}>
            Oh no! It seems you've gotten lost in the book vault!
          </p>
          <p className={styles.p}>Don't worry, we'll get you out.</p>
          <p className={styles.p}>
            Head back to the{" "}
            <Link to={"/"} className={styles.link}>
              home page
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
