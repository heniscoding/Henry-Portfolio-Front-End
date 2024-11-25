import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-center space-x-8">
        {isHomePage ? (
          <>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-400"
              className="hover:text-blue-400 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-400"
              className="hover:text-blue-400 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-400"
              className="hover:text-blue-400 cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-400"
              className="hover:text-blue-400 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </>
        ) : (
          <>
            <RouterLink to="/" className="hover:text-blue-400">
              Home
            </RouterLink>
            <RouterLink to="/#about" className="hover:text-blue-400">
              About
            </RouterLink>
            <RouterLink to="/#projects" className="hover:text-blue-400">
              Projects
            </RouterLink>
            <RouterLink to="/#contact" className="hover:text-blue-400">
              Contact
            </RouterLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
