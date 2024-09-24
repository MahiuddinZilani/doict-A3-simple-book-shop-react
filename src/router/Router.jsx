import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/Error/ErrorPage";
import Root from "../Layout/Root";
import Faq from "../pages/FAQ/FAQ";
import BookDetails from "../pages/BookDetails/BookDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("../bookShopApi.json"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../bookShopApi.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/book/:bookId",
        loader: () => fetch("../bookShopApi.json"),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

export default Router;
