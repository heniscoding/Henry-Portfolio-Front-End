import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-gray-200 py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo on the Left */}
        <div className="text-xl font-bold">
          <RouterLink to="/" className="text-gray-200 hover:text-blue-400">
            Henry Alderslade
          </RouterLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-transparent hover:bg-transparent p-0 focus:outline-none focus:ring-0"
        >
          <svg
            className="w-6 h-6 text-gray-200 hover:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Items on the Right */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}
        >
          {isHomePage ? (
            <>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-custom-orange"
                className="block md:inline-block text-sm text-gray-200 hover:text-custom-orange py-2 md:py-0 px-4 md:px-0 cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-custom-orange"
                className="block md:inline-block text-sm text-gray-200 hover:text-custom-orange py-2 md:py-0 px-4 md:px-0 cursor-pointer"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-custom-orange"
                className="block md:inline-block text-sm text-gray-200 hover:text-custom-orange py-2 md:py-0 px-4 md:px-0 cursor-pointer"
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-custom-orange"
                className="block md:inline-block text-sm text-gray-200 hover:text-custom-orange py-2 md:py-0 px-4 md:px-0 cursor-pointer"
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            <>
              <RouterLink
                to="/"
                className="block md:inline-block text-gray-200 hover:text-custom-orange py-2 md:py-0 px-4 md:px-0"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/#about"
                className="block md:inline-block text-gray-200 hover:text-custom-orange py-2 md:py-0 px-4 md:px-0"
              >
                About
              </RouterLink>
              <RouterLink
                to="/#projects"
                className="block md:inline-block text-gray-200 hover:text-custom-orange py-2 md:py-0 px-4 md:px-0"
              >
                Projects
              </RouterLink>
              <RouterLink
                to="/#contact"
                className="block md:inline-block text-gray-200 hover:text-custom-orange py-2 md:py-0 px-4 md:px-0"
              >
                Contact
              </RouterLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
