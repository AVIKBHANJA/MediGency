import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Aboutus from "./Aboutus.jsx";
import Services from "./Services.jsx";
import Contactus from "./Contactus.jsx";
import Feedback from "./Feedback.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="services" element={<Services />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="feedback" element={<Feedback />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
