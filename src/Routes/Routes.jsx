import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home, loader: () => fetch("booksData.json") },
      { path: "/listed-books", Component: ListedBooks },
      { path: "/page-to-read", Component: PagesToRead },
      {
        path: "/book-details/:id",
        
        Component: BookDetails,
      },
    ],
  },
]);
