import React, { useState } from "react";
import emailjs from "emailjs-com";

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
        'service_i5hmohu', // Your EmailJS Service ID
        'template_d2z873w', // Your EmailJS Template ID
        {
          to_name: 'Your Name', // Replace with your name
          from_name: formData.name, // Sender's name from the form
          email: formData.email, // Sender's email from the form
          message: formData.message, // Message from the form
        },
        'dTheL8ujYAZSJN7ic' // Your EmailJS Public Key
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear the form
        },
        (error) => {
          console.error('EmailJS Error:', error); // Log error for debugging
          alert('Failed to send message. Please try again.');
        }
      );
  };
  
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-gray-300 text-gray-800"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg p-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border rounded-lg p-2"
          rows="5"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
