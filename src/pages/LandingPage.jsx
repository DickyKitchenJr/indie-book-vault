import React, { lazy, Suspense } from "react";
const GenreTabs = lazy(() => import("../components/GenreTabs"));
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/landing-page.module.css";

function LandingPage() {
  return (
    <>
      <div className={styles.fullPage}>
        <Header />
        <Nav />
        <main>
          <h2 className={styles.h2}>Pick A Genre</h2>
          <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}><GenreTabs /></Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
