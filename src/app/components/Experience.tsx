import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="h-fit p-10 bg-gray-50 text-black">
      <h2 className="text-4xl font-bold mb-12 ">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">
            Frontend Developer - ABC Corp
          </h3>
          <p className="text-sm text-gray-600">Jan 2023 - Present</p>
          <p>
            Worked on building and maintaining company web applications using
            React and Next.js.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">UI/UX Designer - Freelance</h3>
          <p className="text-sm text-gray-600">2021 - 2022</p>
          <p>
            Designed and prototyped web and mobile apps for various clients
            using Figma.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Frontend Developer - ABC Studio
          </h3>
          <p className="text-sm text-gray-600">Jan 2022 - Dec 2022</p>
          <p>
            Built responsive websites and landing pages using React and Tailwind
            CSS for e-commerce and startup clients.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Design Intern - Creative Labs
          </h3>
          <p className="text-sm text-gray-600">Jul 2021 - Nov 2021</p>
          <p>
            Supported UI/UX design team in developing wireframes, prototypes,
            and high-fidelity visuals using Adobe XD and Figma.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Freelance Illustrator</h3>
          <p className="text-sm text-gray-600">2019 - Present</p>
          <p>
            Worked with various brands and individuals to create illustrations
            and digital art using Procreate and Photoshop.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Open Source Contributor</h3>
          <p className="text-sm text-gray-600">Ongoing</p>
          <p>
            Contributed to community-driven projects on GitHub, primarily within
            React and TypeScript ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
