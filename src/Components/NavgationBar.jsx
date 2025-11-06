import { useState } from "react";
import logo from "../assets/svg/logo2.svg";
import sideBarIcon from "../assets/svg/sidebar-tottler.svg";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { link: "#home", value: "Home" },
    { link: "#about", value: "About" },
    { link: "#skills", value: "Skills" },
    { link: "#projects", value: "Projects" },
    { link: "#certifications", value: "Certifications" },
    { link: "#contact", value: "Contact" },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);

    if (link === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(link)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="bg-[#1f1f1f] flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 sticky top-0 z-50 shadow-md">
      <div
        className="flex items-center gap-3 cursor-pointer shrink-0"
        onClick={() => handleNavClick("#home")}
      >
        <img src={logo} alt="logo" className="w-8 sm:w-10 h-full" />
        <h1
          className="text-white text-2xl sm:text-3xl font-semibold tracking-wide font-[Gramatika]">
          Gowshik
        </h1>
      </div>

      <div className="hidden md:flex justify-end flex-1">
        {navList.map((nav, idx) => (
          <Link
            key={idx}
            onClick={() => handleNavClick(nav.link)}
            href={nav.link}
            className="px-4 lg:px-6 py-2 text-white text-sm sm:text-base font-medium hover:text-[#c9f31d] transition-colors duration-300">
            {nav.value}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-[#c9f31d] rounded-full w-8 sm:w-10 h-8 sm:h-10 flex justify-center items-center transition-all duration-300 hover:scale-105"
      >
        <img src={sideBarIcon} alt="menu toggle" className="w-4 h-4" />
      </button>

      <div className={`fixed top-14 md:top-16 left-0 w-full bg-[#1f1f1f]/90 backdrop-blur-md flex flex-col items-center transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        {navList.map((nav, idx) => (
          <Link
            key={idx}
            href={nav.link}
            onClick={() => handleNavClick(nav.link)}
            className="py-3 w-full text-center text-white text-base font-medium hover:bg-[#c9f31d] hover:text-black transition-all"
          >
            {nav.value}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavigationBar;
