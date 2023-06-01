import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/faq-page.module.css";

function FaqPage() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>FAQ</h1>
        <Nav />
        <div className={styles.faqs}>
          <h2 className={styles.h2}>
            I know an author I think you should add, how can I get them listed?
          </h2>
          <ul className={styles.ul}>
            <li>
              Every author has to apply to be part of Indie Book Vault
              themselves, so the best way to have your favorite author added to
              our site is to reach out to them and let them know we exist so
              they can apply to be included.
            </li>
          </ul>
          <h2 className={styles.h2}>
            I am an author, how can I be included on Indie Book Vault.
          </h2>
          <ul className={styles.ul}>
            <li>
              Click on the Contact link in the navigation bar above and you will
              be directed to a form you can submit for consideration to be
              included on our site.
            </li>
          </ul>
          <h2 className={styles.h2}>
            Is there a cost for an author to be listed on Indie Book Vault?
          </h2>
          <ul className={styles.ul}>
            <li>
              No. Indie Book Vault does not charge authors money to be included
              on our site. We are a group of volunteers passionate about the
              indie book world and provide this service to help support that
              community. In order to be included in the site we only ask that
              authors include a link to our site on their author website and put
              out at least one social media post informing the world that we are
              here.
              <br />
              <i>
                **While we do not charge authors or users of our site, we do
                accept donations to help with the cost of maintaining this
                service.**
              </i>
            </li>
          </ul>
          <h2 className={styles.h2}>
            Are traditionally published authors listed on Indie Book Vault?
          </h2>
          <ul className={styles.ul}>
            <li>
              No. While we love tradionally published authors too, we feel that
              they have enough avenues to help readers find them and aim to help
              out the indie community which typically have less resources at
              their disposal.
            </li>
          </ul>
          <h2 className={styles.h2}>
            What type of authors will I find on Indie Book Vault?
          </h2>
          <ul className={styles.ul}>
            <li>
              Indie Book Vault proudly includes authors from multiple genres,
              all of whom are either indie published or self-published. These
              creative authors range from people with single publications to
              those with numerous published books, and include those who have
              been on the indie scene for years as well as those who are just
              breaking into the industry.
            </li>
          </ul>
          <h2 className={styles.h2}>
            Do you list free-to-read books on Indie Book Vault?
          </h2>
          <ul className={styles.ul}>
            <li>
              One of the criteria for authors to be included is that their
              work(s) must be commercially available, meaning readers can
              purchase their work(s) from various reputable websites (i.e.
              Amazon, Kobo, Smashwords, etc). While some authors may choose to
              include free-to-read material on their websites, all authors
              listed on Indie Book Vault have works available for purchase and
              we encourage you to help support them by buying something from
              those you find interesting.
            </li>
          </ul>
          <h2 className={styles.h2}>
            What criteria do authors have to meet to be listed?
          </h2>
          <ul className={styles.ul}>
            <li>Authors must meet the following criteria to be listed:</li>
            <ul className={styles.innerUl}>
              <li>
                They are required to be published and have their work(s)
                available for purchase from a reputable website (i.e. Amazon,
                Kobo, Smashwords, etc)
              </li>
              <li>
                They must have a link to this site clearly labeled on their
                website to help readers find us and support the community
              </li>
              <li>
                The must post at least one social media post informing readers
                and other writers that we exist
              </li>
              <li>
                Authors that <span className={styles.underline}>do not</span>{" "}
                have a website can be considered if they are willing to put
                monthly social media post up promoting Indie Book Vault
              </li>
            </ul>
          </ul>
          <h2 className={styles.h2}>
            Why is it so important that authors include a link or their website
            for Indie Book Vault or do monthly social media post?
          </h2>
          <ul className={styles.ul}>
            <li>
              In order for Indie Book Vault to remain a free resource for
              authors and readers we rely on authors listed on the site to
              spread the word of our existence. The easiest way for an author to
              do this is to include a link to our site on their author website,
              but since not all published authors have a website we offer the
              option to post monthly on social media as an alternative option.
              Due to the fleeting nature of a social media post vs the
              permanence of a link on a website, we require authors without a
              website to post monthly on social media.
            </li>
          </ul>
          <h2 className={styles.h2}>
            What information does an author need to provide to be listed?
          </h2>
          <ul className={styles.ul}>
            <li>
              Authors provide us with the following information to be listed:
            </li>
            <ul className={styles.innerUl}>
              <li>Their author name to be listed under</li>
              <li>
                An email address (this is not shared on the site and is strictly
                used for contacting the author regarding information pertaining
                to the site)
              </li>
              <li>
                Their website address to be listed on the site (and to verify a
                link to this site is included on their website)
              </li>
              <li>
                Their main genre(s) they have published books in to
                appropriately list them (currently the available major genres to
                choose from are: romance, fantasy, sci-fi, thriller, horror,
                dystopian, western, children's, drama, comedy, and nonfiction)
              </li>
              <li>
                What sub-genre(s) they have published books in (these are listed
                on the site to help readers better narrow down which authors
                interest them)
              </li>
              <li>An author bio that will be listed on the site</li>
              <li>Their social media accounts to be listed on the site</li>
            </ul>
          </ul>
          <h2 className={styles.h2}>
            I love this! How can I help support Indie Book Vault?
          </h2>
          <ul className={styles.ul}>
            <li>
              We accept donations through the link at the bottom of the page,
              and use those donations to help us cover the cost of site
              maintenance and grow as a community. We greatly appreciate all
              donations. In addition to donations, you can also spread the word
              about us on social media and by word of mouth. The more authors
              and readers know about us, the happier we are.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FaqPage;
