import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 py-6">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Copyright Section */}
        <p className="text-sm">
          © {new Date().getFullYear()} Henry Alderslade. All Rights Reserved.
        </p>

        {/* Additional Links or Information */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* <a
            href="#"
            className="text-gray-400 hover:text-gray-100 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-100 transition-colors"
          >
            Terms of Service
          </a> */}
          <a
            href="https://github.com/heniscoding/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
