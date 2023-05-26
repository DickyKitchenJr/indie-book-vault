import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Childrens from './pages/GenrePages/Childrens'
import Comedy from './pages/GenrePages/Comedy'
import Drama from './pages/GenrePages/Drama'
import Dystopian from './pages/GenrePages/Dystopian'
import Fantasy from './pages/GenrePages/Fantasy'
import Horror from './pages/GenrePages/Horror'
import NonFiction from './pages/GenrePages/NonFiction'
import Romance from './pages/GenrePages/Romance'
import SciFi from './pages/GenrePages/SciFi'
import Thriller from './pages/GenrePages/Thriller'
import Western from './pages/GenrePages/Western'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "faq",
    element: <FaqPage />
  },
  {
    path: "about",
    element: <AboutPage />
  },
  {
    path: "contact",
    element: <ContactPage />
  },
  {
    path: "childrens",
    element: <Childrens />
  },
  {
    path: "comedy",
    element: <Comedy />
  },
  {
    path: "drama",
    element: <Drama />
  },
  {
    path: "dystopian",
    element: <Dystopian />
  },
  {
    path: "fantasy",
    element: <Fantasy />
  },
  {
    path: "horror",
    element: <Horror />
  },
  {
    path: "nonfiction",
    element: <NonFiction />
  },
  {
    path: "romance",
    element: <Romance />
  },
  {
    path: "scifi",
    element: <SciFi />
  },
  {
    path: "thriller",
    element: <Thriller />
  },
  {
    path: "western",
    element: <Western />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
