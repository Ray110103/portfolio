import React from "react";

const Portofolio = () => {
  return (
    <section id="portfolio" className="h-fit p-10 bg-white text-black  ">
      <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        <div className="border rounded-lg overflow-hidden ">
          <img
            src="/kemenhut.png"
            alt="Project 1"
            className="w-full h-64 border-none object-cover"
          />

          <div className="p-4 mb-4">
            <a
              href="https://www.figma.com/file/MpTnauLAD155QmYKwLfqPF/FID?type=design&node-id=0-1&mode=design&t=O4ozWCpKL3ftc140-0"
              target="_blank"
              className="text-4xl font-semibold hover:underline "
            >
              Kemenhut
            </a>

            <div>
              <h1 className="text-2xl mt-2">Technologies : Figma</h1>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden ">
          <img
            src="/CleanLy.png"
            alt="Project 2"
            className="w-full h-64 border-none object-cover"
          />

          <div className="p-4 mb-4">
            <a
              href="https://www.figma.com/design/9V2Y8Iq0qJlk6yFVkbOXBj/cLeanLy?node-id=741-4898&t=92xWHon4h86rmAyG-0np"
              target="_blank"
              className="text-4xl font-semibold hover:underline "
            >
              CleanLy
            </a>

            <div>
              <h1 className="text-2xl mt-2">Technologies : Figma</h1>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden ">
          <img
            src="/melania.png"
            alt="Project 3"
            className="w-full h-64 border-none object-cover"
          />
          <div className="p-4 mb-4">
            <a
              href="https://www.figma.com/file/MpTnauLAD155QmYKwLfqPF/FID?type=design&node-id=0-1&mode=design&t=O4ozWCpKL3ftc140-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl font-semibold hover:underline"
            >
              Melania
            </a>

            <div>
              <h1 className="text-2xl mt-2">Technologies : Figma</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
