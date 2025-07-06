
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";
import Portofolio from "./components/Portofolio";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div className={`${montserrat.className}`}>
      <Hero />
      <About />
      <Skills />
      <Portofolio />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
