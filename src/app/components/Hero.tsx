import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-100 p-10 flex items-center justify-center text-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12">Hi, I am Graygorius Arif</h1>
          <p className="text-lg mb-2">
            Fullstack Developer | UI/UX Designer | Illustrator
          </p>
          <p className="text-md text-gray-600">
            I build beautiful and performant web applications with modern
            technologies. Passionate about creating meaningful user experiences
            and writing clean, maintainable code.
          </p>

          <div className="mt-5 flex gap-4 flex-wrap md:flex-nowrap">
            <a
              href="#portfolio"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded hover:bg-gray-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/profile.png" alt="thumbnail" className="w-100 h-100  " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
