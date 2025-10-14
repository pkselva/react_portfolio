import { useState } from "react";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { link: "#home", value: "Home" },
    { link: "#about", value: "About" },
    { link: "#skills", value: "Skills" },
    { link: "#projects", value: "Projects" },
    { link: "#contact", value: "Contact" },
  ];

  return (
    <div className="bg-[#1f1f1f] flex items-center justify-between px-4 py-3">

      <div className="flex-shrink-0">
        <img src="/logo.png" alt="logo" width={150} height={40} />
      </div>

      <div className="hidden md:flex justify-end flex-1">
        {navList.map((val, idx) => (
          <a
            key={idx}
            href={val.link}
            className="px-5 py-2 text-white font-medium hover:text-[#c9f31d] transition"
          >
            {val.value}
          </a>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#c9f31d] rounded-full w-[45px] h-[45px] flex justify-center items-center"
        >
          <img src="/sidebar-tottler.svg" alt="sidebar" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#1f1f1f] flex flex-col items-center md:hidden z-50">
          {navList.map((val, idx) => (
            <a
              key={idx}
              href={val.link}
              className="py-3 w-full text-center text-white hover:bg-[#c9f31d] hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              {val.value}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavigationBar;
