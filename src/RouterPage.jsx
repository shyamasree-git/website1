import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mobile from "./pages/services/Mobile";
import Web from "./pages/services/Web";
import Gallery from "./pages/others/Gallery";
import Terms from "./pages/others/Terms";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";

const RouterPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/web" element={<Web />} />
          <Route path="/services/mobile" element={<Mobile />} />
          <Route path="/others/gallery" element={<Gallery />} />
          <Route path="/others/terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterPage;
