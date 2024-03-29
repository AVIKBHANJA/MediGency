import React from "react";

import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Aboutus from "./Aboutus.jsx";
import Services from "./Services.jsx";
import Contactus from "./Contactus.jsx";
import Feedback from "./Feedback.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";



function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="services" element={<Services />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App