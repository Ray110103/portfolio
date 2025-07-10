import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="h-fit p-10 bg-white text-black  items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex justify-center items-center">
        <div>
          <img src="about.jpeg" alt="Random" className="w-fit rounded " />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-12 ">About Me</h2>
          <p >
            
              I'm a Binusian Computer Science student with a focus on UI/UX
              Design and currently pursuing full-stack web development at
              Purwadhika. I’m a passionate developer experienced in building
              modern web applications using technologies like React, Next.js,
              and Node.js.
              <br />
              <br />
              I enjoy crafting intuitive and visually pleasing user experiences,
              writing clean and maintainable code, and learning new tools to
              keep up with industry trends. My approach blends creativity with
              logic, and I thrive in collaborative environments.
              <br />
              <br />
              Outside of tech, I'm also an illustrator who loves drawing anime
              fanart using tools like Procreate and Photoshop. I believe that
              design and development go hand-in-hand to shape meaningful digital
              experiences.
              <br />
              <br />
              I'm always open to new opportunities, feedback, and
              connections—whether for a project, collaboration, or creative
              exploration.
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
