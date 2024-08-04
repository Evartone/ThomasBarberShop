import React from 'react';
import Navbarr from "./component/Navbar";
import { Programs } from "./pages/Programs";
import { Program2 } from "./pages/Program2";
import "./index.css";
import Hero from "./component/Hero/Hero";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbarr />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/program2" element={<Program2 />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

