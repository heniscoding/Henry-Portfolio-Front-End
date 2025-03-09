import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_i5hmohu", // Your EmailJS Service ID
        "template_d2z873w", // Your EmailJS Template ID
        {
          to_name: "Your Name",
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "dTheL8ujYAZSJN7ic" // Your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-50 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center justify-center px-6"
    >
      <h3 className="mb-3 text-1lg md:text-2xl text-gray-300 font-extrabold mb-10 animate-fadeIn">
        Get In<span className="text-custom-light-orange"> Contact</span>
      </h3>
      <p className="my-6 text-sm leading-relaxed text-gray-200 text-center animate-fadeIn delay-200">
        Interested in getting a project off the ground or collaborating on something interesting?
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
          className="bg-gray-200 text-gray-100 rounded-none border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-200 text-gray-100 rounded-none border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-200 text-gray-100 rounded-none border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
          rows="5"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-custom-light-orange rounded-none text-xs md:text-xs text-gray-700 px-6 py-3 uppercase font-bold tracking-wide hover:text-white hover:bg-[#caa10d] focus:ring-4 focus:ring-blue-700 focus:outline-none"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
