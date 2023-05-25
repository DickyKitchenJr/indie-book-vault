import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
