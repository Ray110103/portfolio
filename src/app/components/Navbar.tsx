
const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-black shadow  p-4 text-white">
        <ul className="flex gap-6 justify-center">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#portfolio" className="hover:text-blue-500">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
  )
}

export default Navbar