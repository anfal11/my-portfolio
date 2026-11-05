import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { router } from "./Routes/Routes";
import ThemeProvider from "./context/ThemeContext";

AOS.init({
  once: true,
  duration: 800,
  easing: "ease-out-cubic",
  offset: 60,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </ThemeProvider>
  </React.StrictMode>
);
