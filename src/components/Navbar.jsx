import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const preferredTheme = storedTheme || "dark"; // default to dark
    setTheme(preferredTheme);
    document.documentElement.classList.toggle(
      "dark",
      preferredTheme === "dark"
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", () => setIsOpen(false));
    scrollSpy.update();
    return () => Events.scrollEvent.remove("begin");
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = (extra = "") =>
    `nav-link block md:inline-block text-sm font-extrabold py-2 md:py-0 px-4 md:px-0 cursor-pointer 
   hover:text-orange-600 dark:hover:text-yellow-300 ${extra}`;

  const routerLinkClass =
    "nav-link text-custom-light-orange block md:inline-block text-sm font-extrabold py-2 md:py-0 px-4 md:px-0 cursor-pointer " +
    "hover:text-orange-600 dark:hover:text-yellow-300";

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-2 shadow-md z-50 transition-colors duration-500">
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div>
          {isHomePage ? (
            <ScrollLink
              to="hero"
              smooth
              duration={500}
              offset={-60}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              <div className="flex items-center">
                <img
                  src="/logo/Henry-dark-logo.png"
                  alt="Logo Light"
                  className="h-[60px] w-auto block dark:hidden no-shadow"
                />
                <img
                  src="/logo/Henry-white-logo.png"
                  alt="Logo Dark"
                  className="h-[60px] w-auto hidden dark:block no-shadow"
                />
              </div>
            </ScrollLink>
          ) : (
            <RouterLink to="/" state={{ scrollTo: "hero" }} onClick={closeMenu}>
              <div className="flex items-center">
                <img
                  src="/logo/Henry-dark-logo.png"
                  alt="Logo Light"
                  className="h-[60px] w-auto block dark:hidden no-shadow"
                />
                <img
                  src="/logo/Henry-white-logo.png"
                  alt="Logo Dark"
                  className="h-[60px] w-auto hidden dark:block no-shadow"
                />
              </div>
            </RouterLink>
          )}
        </div>

        {/* Desktop Nav + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          {isHomePage ? (
            <>
              <ScrollLink
                to="hero"
                smooth
                spy
                duration={500}
                offset={-60}
                activeClass="active"
                onClick={closeMenu}
                className={navLinkClass("scroll-link")}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth
                spy
                duration={500}
                offset={-60}
                activeClass="active"
                onClick={closeMenu}
                className={navLinkClass("scroll-link")}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth
                spy
                duration={500}
                offset={-60}
                activeClass="active"
                onClick={closeMenu}
                className={navLinkClass("scroll-link")}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth
                spy
                duration={500}
                offset={-60}
                activeClass="active"
                onClick={closeMenu}
                className={navLinkClass("scroll-link")}
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            <>
              <RouterLink
                to="/"
                state={{ scrollTo: "hero" }}
                onClick={closeMenu}
                className={routerLinkClass}
              >
                Home
              </RouterLink>
              <RouterLink
                to="/"
                state={{ scrollTo: "about" }}
                onClick={closeMenu}
                className={routerLinkClass}
              >
                About
              </RouterLink>
              <RouterLink
                to="/"
                state={{ scrollTo: "projects" }}
                onClick={closeMenu}
                className={routerLinkClass}
              >
                Projects
              </RouterLink>
              <RouterLink
                to="/"
                state={{ scrollTo: "contact" }}
                onClick={closeMenu}
                className={routerLinkClass}
              >
                Contact
              </RouterLink>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 flex items-center gap-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            aria-label="Toggle Theme"
          >
            <span className="text-sm">
              {theme === "light" ? "Dark" : "Light"}
            </span>
            <span
              className={`transform transition-transform duration-500 ${
                theme === "light" ? "rotate-0" : "rotate-180"
              }`}
            >
              {theme === "light" ? (
                <FaMoon className="text-yellow-500" />
              ) : (
                <FaSun className="text-yellow-300" />
              )}
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-transparent hover:bg-transparent p-0 focus:outline-none focus:ring-0 ml-auto"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-blue-400"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden px-4 py-4 bg-gray-100 dark:bg-gray-800 w-full transition-all duration-300`}
      >
        <div className="flex flex-col space-y-2">
          {isHomePage ? (
            <>
              <ScrollLink
                to="hero"
                smooth
                spy
                duration={500}
                offset={-60}
                activeClass="active"
                onClick={closeMenu}
                className={navLinkClass("scroll-link")}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth
                spy
                duration={500}
                offset={-60}
                activeClass="active"
                onClick={closeMenu}
                className={navLinkClass("scroll-link")}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth
                spy
                duration={500}
                offset={-60}
                activeClass="active"
                onClick={closeMenu}
                className={navLinkClass("scroll-link")}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth
                spy
                duration={500}
                offset={-60}
                activeClass="active"
                onClick={closeMenu}
                className={navLinkClass("scroll-link")}
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            <>
              <RouterLink
                to="/"
                state={{ scrollTo: "hero" }}
                onClick={closeMenu}
                className={routerLinkClass}
              >
                Home
              </RouterLink>
              <RouterLink
                to="/"
                state={{ scrollTo: "about" }}
                onClick={closeMenu}
                className={routerLinkClass}
              >
                About
              </RouterLink>
              <RouterLink
                to="/"
                state={{ scrollTo: "projects" }}
                onClick={closeMenu}
                className={routerLinkClass}
              >
                Projects
              </RouterLink>
              <RouterLink
                to="/"
                state={{ scrollTo: "contact" }}
                onClick={closeMenu}
                className={routerLinkClass}
              >
                Contact
              </RouterLink>
            </>
          )}

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="mt-4 flex items-center gap-2 self-start p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            aria-label="Toggle Theme"
          >
            <span className="text-sm">
              {theme === "light" ? "Dark" : "Light"}
            </span>
            <span
              className={`transform transition-transform duration-500 ${
                theme === "light" ? "rotate-0" : "rotate-180"
              }`}
            >
              {theme === "light" ? (
                <FaMoon className="text-yellow-500" />
              ) : (
                <FaSun className="text-yellow-300" />
              )}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
