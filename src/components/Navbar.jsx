import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const menuRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const preferredTheme = storedTheme || "dark";
    setTheme(preferredTheme);
    document.documentElement.classList.toggle("dark", preferredTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    Events.scrollEvent.register("begin", closeMenu);
    scrollSpy.update();
    return () => Events.scrollEvent.remove("begin");
  }, []);

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
            </ScrollLink>
          ) : (
            <RouterLink to="/" state={{ scrollTo: "hero" }} onClick={closeMenu}>
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
            </RouterLink>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          {isHomePage ? (
            <>
              <ScrollLink to="hero" smooth spy duration={500} offset={-60} className={navLinkClass()}>Home</ScrollLink>
              <ScrollLink to="about" smooth spy duration={500} offset={-60} className={navLinkClass()}>About</ScrollLink>
              <ScrollLink to="projects" smooth spy duration={500} offset={-60} className={navLinkClass()}>Projects</ScrollLink>
              <ScrollLink to="contact" smooth spy duration={500} offset={-60} className={navLinkClass()}>Contact</ScrollLink>
            </>
          ) : (
            <>
              <RouterLink to="/" state={{ scrollTo: "hero" }} onClick={closeMenu} className={routerLinkClass}>Home</RouterLink>
              <RouterLink to="/" state={{ scrollTo: "about" }} onClick={closeMenu} className={routerLinkClass}>About</RouterLink>
              <RouterLink to="/" state={{ scrollTo: "projects" }} onClick={closeMenu} className={routerLinkClass}>Projects</RouterLink>
              <RouterLink to="/" state={{ scrollTo: "contact" }} onClick={closeMenu} className={routerLinkClass}>Contact</RouterLink>
            </>
          )}

          {/* Theme Toggle Desktop */}
          <button
            onClick={toggleTheme}
            className="ml-4 flex items-center gap-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            aria-label="Toggle Theme"
          >
            <span className="text-sm">{theme === "light" ? "Dark" : "Light"}</span>
            {theme === "light" ? (
              <FaMoon className="text-yellow-500 transition-transform duration-500" />
            ) : (
              <FaSun className="text-yellow-300 transition-transform duration-500 rotate-180" />
            )}
          </button>
        </div>

        {/* Mobile: Theme Icon + Hamburger */}
        <div className="md:hidden flex items-center gap-3 ml-auto">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <FaMoon className="text-yellow-500 text-lg" />
            ) : (
              <FaSun className="text-yellow-300 text-lg rotate-180 transition-transform duration-500" />
            )}
          </button>
          <button onClick={toggleMenu} className="p-2" aria-label="Toggle Menu">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "max-h-[500px] translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0"
        } bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-4`}
      >
        <div className="flex flex-col space-y-2 py-4">
          {isHomePage ? (
            <>
              <ScrollLink to="hero" smooth duration={500} offset={-60} onClick={closeMenu} className={navLinkClass()}>Home</ScrollLink>
              <ScrollLink to="about" smooth duration={500} offset={-60} onClick={closeMenu} className={navLinkClass()}>About</ScrollLink>
              <ScrollLink to="projects" smooth duration={500} offset={-60} onClick={closeMenu} className={navLinkClass()}>Projects</ScrollLink>
              <ScrollLink to="contact" smooth duration={500} offset={-60} onClick={closeMenu} className={navLinkClass()}>Contact</ScrollLink>
            </>
          ) : (
            <>
              <RouterLink to="/" state={{ scrollTo: "hero" }} onClick={closeMenu} className={routerLinkClass}>Home</RouterLink>
              <RouterLink to="/" state={{ scrollTo: "about" }} onClick={closeMenu} className={routerLinkClass}>About</RouterLink>
              <RouterLink to="/" state={{ scrollTo: "projects" }} onClick={closeMenu} className={routerLinkClass}>Projects</RouterLink>
              <RouterLink to="/" state={{ scrollTo: "contact" }} onClick={closeMenu} className={routerLinkClass}>Contact</RouterLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
