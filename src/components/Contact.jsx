import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, type, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-sm font-semibold z-50
            ${
              type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_i5hmohu",
        "template_d2z873w",
        {
          to_name: "Your Name",
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "dTheL8ujYAZSJN7ic"
      )
      .then(
        () => {
          showToast(
            "Thanks for reaching out! I'll be in contact soon.",
            "success"
          );
          setFormData({ name: "", email: "", message: "" });
          setIsLoading(false);
        },
        () => {
          showToast("Oops! Something went wrong. Please try again.", "error");
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-50 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center justify-center px-6"
    >
      <h3 className="text-center text-gray-300 font-extrabold mb-6">
        Get In<span className="text-custom-light-orange"> Contact</span>
      </h3>
      <p className="text-center text-gray-200 mb-8">
        Interested in getting a project off the ground or collaborating on
        something interesting?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center mb-6">
        <a
          href="mailto:henryalderslade@gmail.com"
          className="flex items-center gap-2 text-custom-light-orange hover:text-blue-500 transition justify-center"
        >
          <FaEnvelope /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/henry-alderslade-4b798755/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-custom-light-orange hover:text-blue-500 transition justify-center"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-200 text-gray-800 rounded-none border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-200 text-gray-800 rounded-none border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-200 text-gray-800 rounded-none border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
          rows="5"
          required
        />
        <button
          type="submit"
          className="btn-custom-orange px-4 py-2 text-sm uppercase font-bold tracking-wide focus:ring-4 focus:ring-blue-700 focus:outline-none transition-all duration-300 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Toast Message */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "" })}
      />
    </section>
  );
};

export default Contact;
