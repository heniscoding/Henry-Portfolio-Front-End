import { Helmet } from "react-helmet";
import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import PhotoIndex from "./components/PhotoIndex";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Henry Alderslade | Freelance Software Developer</title>
        <meta
          name="description"
          content="Henry is a freelance software developer who builds sleek, user-friendly web apps with a focus on performance, design, and great user experience."
        />
      </Helmet>

      <Hero />
      <About />
      <ProjectsCarousel />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/photo-index" element={<PhotoIndex />} />
      </Routes>
    </Router>
  );
};

export default App;
