import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import PhotoIndex from "./components/PhotoIndex";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound"; // ← NEW

const Home = () => {
  const location = useLocation();
  const projectsRef = React.useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "projects") {
      projectsRef.current?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

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
      <ProjectsCarousel ref={projectsRef} />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* Full height layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Page content takes remaining space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/photo-index" element={<PhotoIndex />} />
            {/* Catch-all for any undefined route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
