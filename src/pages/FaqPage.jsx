import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/faq-page.module.css";

function FaqPage() {
  return (
    <>
      <div className={styles.fullPage}>
        <header>
          <h1 className={styles.h1}>FAQ</h1>
        </header>
        <Nav />
        <main className={styles.main}>
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
            I am an author and would like to be included on Indie Book Vault,
            but I don't see my exact genre on the Home page. What should I do?
            Will more genres be added in the future?
          </h2>
          <ul className={styles.ul}>
            <li>
              Yes, as our list of authors grow so will our offered genres. The
              best thing to do in the meantime is join Indie Book Vault and
              include yourself in the genre that most closely matches your
              preferred genre while providing your specific genre(s) in the
              Sub-Genre section of the author application. The genre(s) you
              provide in your application will be included in your listing and
              further help readers find you. Once you join you will also be
              added to our newsletter and will be informed when we add new genre
              pages so you can adjust your listing.
              <br />
              <br />
              The genres listed on the home page are intended to be broad genres
              and provide a starting point for us to build our author list.
              While we understand the genres listed aren't a perfect fit for
              every author, they were chosen to give us the broadest coverage
              possible to start building our list of authors while being
              conscious of our coding and graphics expenses. As the community
              grows and more authors join within your specific genre, we'll be
              able to better justify allocating resources to add more genre
              pages to our site (meaning the best way to get your specific genre
              added to the site is to join and help find other authors in your
              genre to join).
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
              out at least one social media promotion informing the world that
              we are here.
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
              <li className={styles.innerLi}>
                They are required to be published and have their work(s)
                available for purchase from a reputable website (i.e. Amazon,
                Kobo, Smashwords, etc)
              </li>
              <li className={styles.innerLi}>
                They must have a link to this site clearly labeled and easily
                found on their website to help readers find us and support the
                community
              </li>
              <li className={styles.innerLi}>
                Their website must be complete, live, and belong to/represent
                the author. Websites still under construction are not accepted,
                nor are Amazon author pages or websites shared by multiple
                authors (some exceptions may be made if all authors listed on
                the site apply and accept terms).
              </li>
              <li className={styles.innerLi}>
                They must create at least one social media promotion informing
                readers and other writers that we exist
              </li>
              <li className={styles.innerLi}>
                Authors that <span className={styles.underline}>do not</span>{" "}
                have a website can be considered if they are willing to create a
                social media promotion to help readers find Indie Book Vault and
                make a $15 (USD) annual membership donation on our{" "}
                <a
                  href="https://www.buymeacoffee.com/indiebookvault"
                  target="_blank"
                  rel="noreferrer"
                >
                  donation page
                </a>
                .
              </li>
            </ul>
          </ul>
          <h2 className={styles.h2}>
            Why is it so important that authors include a link or their website
            for Indie Book Vault and do at least one social media promotion?
          </h2>
          <ul className={styles.ul}>
            <li>
              In order for Indie Book Vault to remain a free resource for
              authors and readers we rely on authors listed on the site to
              spread the word of our existence. The easiest way for an author to
              do this is to include a link to our site on their author website,
              but since not all published authors have a website we offer the
              choice to promote monthly on social media as an alternative
              option. Due to the fleeting nature of a social media promotions vs
              the permanence of a link on a website, we require authors without
              a website to promote monthly on social media.
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
              <li className={styles.innerLi}>
                Their author name to be listed under
              </li>
              <li className={styles.innerLi}>
                An email address (this is not shared on the site and is strictly
                used for contacting the author regarding information pertaining
                to the site)
              </li>
              <li className={styles.innerLi}>
                Their website address to be listed on the site (and to verify a
                link to this site is included on their website)
              </li>
              <li className={styles.innerLi}>
                Their main genre(s) they have published books in to
                appropriately list them (currently the available major genres to
                choose from are: romance, fantasy, sci-fi, thriller, horror,
                dystopian, western, children's, drama, comedy, and nonfiction)
              </li>
              <li className={styles.innerLi}>
                What sub-genre(s) they have published books in (these are listed
                on the site to help readers better narrow down which authors
                interest them)
              </li>
              <li className={styles.innerLi}>
                An author bio that will be listed on the site
              </li>
              <li className={styles.innerLi}>
                Their social media accounts to be listed on the site
              </li>
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default FaqPage;
