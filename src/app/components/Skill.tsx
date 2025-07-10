import React from "react";

const Skills = () => {
  return (
    <section className="h-fit p-10 bg-gray-50 text-black text-center ">
      <h2 className="text-4xl font-bold mb-12 ">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-10">
        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg"
            alt="JavaScript"
            className="w-10 h-10"
          />
          <span>JavaScript</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg"
            alt="TypeScript"
            className="w-10 h-10"
          />
          <span>TypeScript</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
            alt="React"
            className="w-10 h-10"
          />
          <span>React</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg"
            alt="Next.js"
            className="w-10 h-10"
          />
          <span>Next.js</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg"
            alt="Node.js"
            className="w-10 h-10"
          />
          <span>Node.js</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg"
            alt="Tailwind CSS"
            className="w-10 h-10"
          />
          <span>Tailwind CSS</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg"
            alt="Figma"
            className="w-10 h-10"
          />
          <span>Figma</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobephotoshop.svg"
            alt="Photoshop"
            className="w-10 h-10"
          />
          <span>Photoshop</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg"
            alt="Canva"
            className="w-10 h-10"
          />
          <span>Canva</span>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg"
            alt="Git"
            className="w-10 h-10"
          />
          <span>Git</span>
        </li>

      </ul>
    </section>
  );
};

export default Skills;
