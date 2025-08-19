import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Mobile from "./pages/services/Mobile"; // example
import Web from "./pages/services/Web"; // example
import RouterPage from "./RouterPage";

const App = () => {
  return (
    <>
      <RouterPage />
    </>
  );
};

export default App;
