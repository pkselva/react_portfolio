import React from 'react'

function HeaderSection() {
  return (
    <div className='bg-[#111] text-white p-6 sm:p-10 md:p-14'>
      <div className='max-w-120'>
        <div className='opacity-35 font-[400] text-2xl sm:text-3xl md:text-[45px] mb-1'>
          Hello, i’m
        </div>
        <h1 className='text-3xl sm:text-5xl md:text-[65px] leading-8 sm:leading-[56px] md:leading-[70px] mb-3 md:mb-6'>
          <b className='text-[#c9f31d]'>Gowshik S</b>
          <br />web developer
        </h1>
        <p className='opacity-65 font-[400] text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[24px] md:leading-[30px]'>
          Passionate about building responsive and efficient applications, Strong problem-solving and teamwork abilities.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-6 md:gap-9 w-full mt-6 sm:mt-8 text-[12px] sm:text-[14px] md:text-[16px]">
          <button
            className="bg-[#c9f31d] px-7 sm:px-9 md:px-12 py-2 sm:py-2.5 md:py-3 text-[#070707] font-[600] rounded-[12px] sm:rounded-[15px] cursor-pointer hover:bg-[#b4da1a] hover:transition-all duration-300">
            <a href="#projects" className="block">
              View My Projects
            </a>
          </button>

          <button
            className="underline text-[13px] sm:text-[14px] md:text-[16px] font-medium cursor-pointer hover:text-[#c9f31d] hover:transition-all duration-300">
            Download Resume
          </button>
        </div>

      </div>
    </div>
  )
}

export default HeaderSection