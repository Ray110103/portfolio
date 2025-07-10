import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-100 px-6 py-20 flex items-center justify-center text-black"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Hi, I am Graygorius Arif
          </h1>
          <p className="text-xl mb-2">
            Fullstack Developer | UI/UX Designer | Illustrator
          </p>
          <p className="text-gray-700 mb-6">
            I build beautiful and performant web applications with modern
            technologies. Passionate about creating meaningful user experiences
            and writing clean, maintainable code. And also illustrating anime character
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/profile-removebg-preview.png"
            alt="Profile"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
