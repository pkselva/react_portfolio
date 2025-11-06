import myPhoto from "../assets/png/myphoto.png";

function HeaderSection() {
  return (
    <div className="bg-[#070707] text-white flex items-center justify-between pt-2 sm:pt-3 md:pt-5 pr-0 sm:pr-8 md:pr-10 gap-3 sm:gap-4 md:gap-10 lg:gap-20">

      <div className="flex items-end h-full">
        <img
          src={myPhoto}
          alt="Gowshik"
          className="w-[130px] sm:w-[320px] h-auto object-contain transition-transform duration-500"
        />
      </div>

      <div className="text-left flex-1">
        <div className="opacity-35 font-normal text-xl sm:text-3xl md:text-[45px] mb-1">Hello, I’m</div>
        <h1 className="text-2xl sm:text-5xl md:text-[65px] leading-6 sm:leading-[50px] md:leading-[70px] mb-3 md:mb-6">
          <b className="text-[#c9f31d]">Gowshik S</b>
          <br />
          web developer
        </h1>
        <p className='opacity-65 font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-4 sm:leading-6 md:leading-[30px] max-w-[900px]'>
          <span className="block sm:hidden">
            Passionate, efficient, collaborative, and solution-driven developer.
          </span>
          <span className="hidden sm:inline">
            Passionate about developing responsive, high-performing web applications with a focus on clean and efficient code.{" "}
            <span className="sm:hidden lg:inline">
              Skilled in problem-solving and known for strong collaboration within team environments.
            </span>
          </span>
        </p>

        <div className="flex items-center md:justify-start gap-3 sm:gap-6 md:gap-9 w-full mt-3 sm:mt-5 md:mt-8">
          <button
            className="bg-[#c9f31d] text-[8px] sm:text-[14px] md:text-[16px] px-2 sm:px-5 md:px-10 py-1 sm:py-2 md:py-3 text-[#070707] font-semibold rounded-md sm:rounded-[14px] cursor-pointer hover:bg-[#b4da1a] transition-all duration-300"
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Projects
          </button>

          <a
            href="https://drive.usercontent.google.com/download?id=10YTTKr8CrEyr_D4letgDEB1sQgofmlce&export=download&authuser=0&confirm=t&uuid=dd0f2216-22e2-49fe-852d-ba3248fa6458&at=ALWLOp7iJdKHL19zT5pvrJFRmncL:1762448013870"
            rel="noopener noreferrer"
            className="underline text-[8px] sm:text-[14px] md:text-[16px] font-medium cursor-pointer hover:text-[#c9f31d] transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
