import React from 'react';

const About = () => {
  return (
    <section id="about" className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-center max-w-3xl">
        Hello! I'm [Your Name], a freelance software developer with a passion for building
        beautiful and functional web applications. I specialize in technologies like React,
        Node.js, and MongoDB, and I'm always excited to learn new tools and frameworks to
        expand my skillset. Let's work together to create something amazing!
      </p>
    </section>
  );
};

export default About;
