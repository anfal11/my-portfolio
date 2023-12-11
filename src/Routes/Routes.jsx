import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
]);
