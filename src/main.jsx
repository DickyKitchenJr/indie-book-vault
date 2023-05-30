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
import { Authors } from './components/Authors'

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
  authors.map(author => {
    author.umbrellaGenre.map(genre =>{
        switch(genre){
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
    })
  })
}

SortAuthorByGenre(Authors)

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
    element: <Childrens authors={childrensGenre}/>
  },
  {
    path: "comedy",
    element: <Comedy authors={comedyGenre}/>
  },
  {
    path: "drama",
    element: <Drama authors={dramaGenre}/>
  },
  {
    path: "dystopian",
    element: <Dystopian authors={dystopianGenre}/>
  },
  {
    path: "fantasy",
    element: <Fantasy authors={fantasyGenre}/>
  },
  {
    path: "horror",
    element: <Horror authors={horrorGenre}/>
  },
  {
    path: "nonfiction",
    element: <NonFiction authors={nonfictionGenre}/>
  },
  {
    path: "romance",
    element: <Romance authors={romanceGenre}/>
  },
  {
    path: "scifi",
    element: <SciFi authors={scifiGenre}/>
  },
  {
    path: "thriller",
    element: <Thriller authors={thrillerGenre}/>
  },
  {
    path: "western",
    element: <Western authors={westernGenre}/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
