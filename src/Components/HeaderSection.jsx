import React from 'react'

function HeaderSection() {
  return (
    <div className='bg-[#111] text-white py-12 sm:py-16 md:py-20 px-10'>
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
        <div className='flex flex-col sm:flex-row gap-4 w-full items-center sm:gap-9 mt-8 text-[12px] sm:text-[14px] md:text-[16px]'>
          <button className='bg-[#c9f31d] px-9 py-2.5  text-[#070707] font-[600] rounded-[15px] cursor-pointer '>
            <a href="#projects">View My Project</a>
          </button>
          <button className='underline text-[14px] cursor-pointer hover:text-[#c9f31d] hover:transition'>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection