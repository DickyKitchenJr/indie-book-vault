import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Childrens = lazy(() => import("./pages/GenrePages/Childrens"));
const Comedy = lazy(() => import("./pages/GenrePages/Comedy"));
const Drama = lazy(() => import("./pages/GenrePages/Drama"));
const Dystopian = lazy(() => import("./pages/GenrePages/Dystopian"));
const Fantasy = lazy(() => import("./pages/GenrePages/Fantasy"));
const Horror = lazy(() => import("./pages/GenrePages/Horror"));
const NonFiction = lazy(() => import("./pages/GenrePages/NonFiction"));
const Romance = lazy(() => import("./pages/GenrePages/Romance"));
const SciFi = lazy(() => import("./pages/GenrePages/SciFi"));
const Thriller = lazy(() => import("./pages/GenrePages/Thriller"));
const Western = lazy(() => import("./pages/GenrePages/Western"));
import { Authors } from "./components/Authors";

const childrensGenre = [];
const comedyGenre = [];
const dramaGenre = [];
const dystopianGenre = [];
const fantasyGenre = [];
const horrorGenre = [];
const nonfictionGenre = [];
const romanceGenre = [];
const scifiGenre = [];
const thrillerGenre = [];
const westernGenre = [];

function SortAuthorByGenre(authors) {
  authors.map((author) => {
    author.umbrellaGenre.map((genre) => {
      switch (genre) {
        case "childrens":
          childrensGenre.push(author);
          break;
        case "comedy":
          comedyGenre.push(author);
          break;
        case "drama":
          dramaGenre.push(author);
          break;
        case "dystopian":
          dystopianGenre.push(author);
          break;
        case "fantasy":
          fantasyGenre.push(author);
          break;
        case "horror":
          horrorGenre.push(author);
          break;
        case "nonfiction":
          nonfictionGenre.push(author);
          break;
        case "romance":
          romanceGenre.push(author);
          break;
        case "scifi":
          scifiGenre.push(author);
          break;
        case "thriller":
          thrillerGenre.push(author);
          break;
        case "western":
          westernGenre.push(author);
          break;
        default:
          null;
      }
    });
  });
}

SortAuthorByGenre(Authors);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <ErrorPage />
      </Suspense>
    ),
  },
  {
    path: "faq",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <FaqPage />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "contact",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <ContactPage />
      </Suspense>
    ),
  },
  {
    path: "childrens",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Childrens authors={childrensGenre} />
      </Suspense>
    ),
  },
  {
    path: "comedy",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Comedy authors={comedyGenre} />
      </Suspense>
    ),
  },
  {
    path: "drama",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Drama authors={dramaGenre} />
      </Suspense>
    ),
  },
  {
    path: "dystopian",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Dystopian authors={dystopianGenre} />
      </Suspense>
    ),
  },
  {
    path: "fantasy",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Fantasy authors={fantasyGenre} />
      </Suspense>
    ),
  },
  {
    path: "horror",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Horror authors={horrorGenre} />
      </Suspense>
    ),
  },
  {
    path: "nonfiction",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <NonFiction authors={nonfictionGenre} />
      </Suspense>
    ),
  },
  {
    path: "romance",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Romance authors={romanceGenre} />
      </Suspense>
    ),
  },
  {
    path: "scifi",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <SciFi authors={scifiGenre} />
      </Suspense>
    ),
  },
  {
    path: "thriller",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Thriller authors={thrillerGenre} />
      </Suspense>
    ),
  },
  {
    path: "western",
    element: (
      <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading...</h3>}>
        <Western authors={westernGenre} />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
