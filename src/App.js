import { Helmet } from "react-helmet";
import React, { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";

// Scroll to section when hash or state.scrollTo exists
const ScrollToSection = () => {
  const location = useLocation();
  const hash = location.hash?.replace("#", "");
  const scrollTo = location.state?.scrollTo;

  useLayoutEffect(() => {
    const targetId = scrollTo || hash;
    if (!targetId) return;

    let attempts = 0;
    const tryScroll = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "instant" });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    tryScroll();
  }, [hash, scrollTo]);

  return null;
};

const Home = () => (
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
    <Projects />
    <Contact />
    <Footer />
  </>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname + location.hash}>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToSection />
      <Navbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
