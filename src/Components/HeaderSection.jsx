import myPhoto from "../assets/png/myphoto.png";

function HeaderSection() {
  return (
    <div className="bg-[#070707] text-white flex flex-col-reverse md:flex-row items-center justify-between pt-5 pr-10 gap-8 md:gap-20">

      <div className="">
        <img
          src={myPhoto}
          alt="Gowshik"
          className="-scale-x-100 w-[100px] sm:w-[180px] md:w-[250px] lg:w-[320px] h-auto object-contain transition-transform duration-500 hover:scale-[1.05]"
        />
      </div>

      <div className="text-center md:text-left flex-1">
        <div className="opacity-35 font-normal text-2xl sm:text-3xl md:text-[45px] mb-1">Hello, I’m</div>
        <h1 className="text-3xl sm:text-5xl md:text-[65px] leading-8 sm:leading-[50px] md:leading-[70px] mb-3 md:mb-6">
          <b className="text-[#c9f31d]">Gowshik S</b>
          <br />
          web developer
        </h1>
        <p className='opacity-65 font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-5 sm:leading-6 md:leading-[30px] max-w-[900px]'>
          Passionate about developing responsive, high-performing web applications with a focus on clean and efficient code. Skilled in problem-solving and known for strong collaboration within team environments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6 md:gap-9 w-full mt-6 sm:mt-8 text-[12px] sm:text-[14px] md:text-[16px]">
          <button
            className="bg-[#c9f31d] px-7 sm:px-9 md:px-12 py-2 sm:py-2.5 md:py-3 text-[#070707] font-semibold rounded-xl sm:rounded-[15px] cursor-pointer hover:bg-[#b4da1a] transition-all duration-300"
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Projects
          </button>

          <a
            href="https://drive.usercontent.google.com/download?id=1Y18aK6ixzlMW2PCgdsyQDQ_VJcCVfztj&export=download"
            rel="noopener noreferrer"
            className="underline text-[13px] sm:text-[14px] md:text-[16px] font-medium cursor-pointer hover:text-[#c9f31d] transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
