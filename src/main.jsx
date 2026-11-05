import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { router } from "./Routes/Routes";
import ThemeProvider from "./context/ThemeContext";
import AppToaster from "./Shared/AppToaster";

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
      <AppToaster />
    </ThemeProvider>
  </React.StrictMode>
);
