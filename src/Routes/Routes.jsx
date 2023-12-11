import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      }
    ],
  },
]);
