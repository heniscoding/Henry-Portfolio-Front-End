import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass =
    "block md:inline-block text-sm text-[#e1b721] font-extrabold hover:text-gray-200 py-2 md:py-0 px-4 md:px-0 cursor-pointer";

  const routerLinkClass =
    "block md:inline-block text-sm text-[#e1b721] font-extrabold hover:text-gray-200 py-2 md:py-0 px-4 md:px-0 cursor-pointer";

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-gray-200 py-2 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div>
          {isHomePage ? (
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-60}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              <img
                src="/logo/Henry-white-logo.png"
                alt="Henry Alderslade Logo"
                className="h-[60px] w-auto"
              />
            </ScrollLink>
          ) : (
            <RouterLink to="/" state={{ scrollTo: "hero" }} onClick={closeMenu}>
              <img
                src="/logo/Henry-white-logo.png"
                alt="Henry Alderslade Logo"
                className="h-[60px] w-auto"
              />
            </RouterLink>
          )}
        </div>

        {/* Mobile Hamburger */}
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

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}
        >
          {isHomePage ? (
            <>
              <ScrollLink to="hero" smooth duration={500} offset={-60} onClick={closeMenu} className={navLinkClass}>
                Home
              </ScrollLink>
              <ScrollLink to="about" smooth duration={500} offset={-60} onClick={closeMenu} className={navLinkClass}>
                About
              </ScrollLink>
              <ScrollLink to="projects" smooth duration={500} offset={-60} onClick={closeMenu} className={navLinkClass}>
                Projects
              </ScrollLink>
              <ScrollLink to="contact" smooth duration={500} offset={-60} onClick={closeMenu} className={navLinkClass}>
                Contact
              </ScrollLink>
            </>
          ) : (
            <>
              <RouterLink to="/" state={{ scrollTo: "hero" }} onClick={closeMenu} className={routerLinkClass}>
                Home
              </RouterLink>
              <RouterLink to="/" state={{ scrollTo: "about" }} onClick={closeMenu} className={routerLinkClass}>
                About
              </RouterLink>
              <RouterLink to="/" state={{ scrollTo: "projects" }} onClick={closeMenu} className={routerLinkClass}>
                Projects
              </RouterLink>
              <RouterLink to="/" state={{ scrollTo: "contact" }} onClick={closeMenu} className={routerLinkClass}>
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
