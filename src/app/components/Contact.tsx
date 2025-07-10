import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-fit p-10 bg-gray-50 text-black py-10"
    >
      <h2 className="text-4xl font-bold mb-12 text-center ">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 ">
        <div>
          <p className="mb-6 text-lg">
            I'd love to hear from you! Whether it's a project, job opportunity,
            or just a chat. Feel free to connect with me via the form or through
            my social links below.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/graygorius.arif.7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.instagram.com/gray_arf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/graygorius-arif-ab66a630b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
