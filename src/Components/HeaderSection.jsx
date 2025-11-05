import myPhoto from "../assets/png/myphoto.png"

function HeaderSection() {
  return (
    <div className='bg-[#070707] text-white flex justify-between items-center'>
      <div className='max-w-120 ml-6 sm:ml-10 md:ml-14'>
        <div className='opacity-35 font-normal text-2xl sm:text-3xl md:text-[45px] mb-1'>
          Hello, i’m
        </div>
        <h1 className='text-3xl sm:text-5xl md:text-[65px] leading-8 sm:leading-14 md:leading-[70px] mb-3 md:mb-6'>
          <b className='text-[#c9f31d]'>Gowshik S</b>
          <br />web developer
        </h1>
        <p className='opacity-65 font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-5 sm:leading-6 md:leading-[30px]'>
          Passionate about building responsive and efficient applications, Strong problem-solving and teamwork abilities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-6 md:gap-9 w-full mt-6 sm:mt-8 text-[12px] sm:text-[14px] md:text-[16px]">
          <button className="bg-[#c9f31d] px-7 sm:px-9 md:px-12 py-2 sm:py-2.5 md:py-3 text-[#070707] font-semibold rounded-xl sm:rounded-[15px] cursor-pointer hover:bg-[#b4da1a] hover:transition-all duration-300"
            onClick={() => {
              document.querySelector('#projects')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}>
            View My Projects
          </button>

          <a
            href="https://drive.usercontent.google.com/download?id=1Y18aK6ixzlMW2PCgdsyQDQ_VJcCVfztj&export=download&authuser=0&confirm=t&uuid=c79b3855-fbeb-4502-870c-76e892fa6e5f&at=AKSUxGMZLUTwn1HFd2NrvTSv42qo:1761417097492"
            rel="noopener noreferrer"
            className="underline text-[13px] sm:text-[14px] md:text-[16px] font-medium cursor-pointer hover:text-[#c9f31d] hover:transition-all duration-300">
            Download Resume
          </a>
        </div>

      </div>
      <div className="px-6 sm:px-10 md:px-14 pt-6 sm:pt-10 md:pt-14">
        <img src={myPhoto} alt="myPhoto" width={300} height="100%"/>
      </div>
    </div>
  )
}

export default HeaderSection