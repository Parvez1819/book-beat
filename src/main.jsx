import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import Blogs from './Components/Blogs/Blogs.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () =>
          fetch('/books.json')

      }
      ,
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () =>
          fetch('/books.json') // do not load all data load only what you need

      }, {
        path: '/page-to-reload',
        element: <PagesToRead></PagesToRead>,
        loader: () =>
          fetch('/books.json')
      }, {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () =>
          fetch('/blogs.json')
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
