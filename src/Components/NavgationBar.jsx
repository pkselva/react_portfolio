import React from 'react'
import { Link } from 'react-router-dom'

function NavgationBar() {

  const navList = [
    { link: "#home", value: "Home" },
    { link: "#about", value: "About" },
    { link: "#skills", value: "Skills" },
    { link: "#projects", value: "Projects" },
    { link: "#contact", value: "Contact" },
  ]

  return (
    <div className='bg-[#1f1f1f] flex items-center px-[15px]'>
      <div className='w-full text-left'>
        <img src="/logo.png" alt="logo" width={175} height={40}/>
      </div>
      <div className='w-full flex justify-center'>
        {navList.map((val, idx) => {
          return (
            <div key={idx} className='px-5 py-[25px] leading-[30px] text-white font-[500]'>
              <a href={val.link}>
                {val.value}
              </a>
            </div>
          )
        }
        )}
      </div>
      <div className='w-full flex justify-end'>
        <button className='bg-[#c9f31d] rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer'>
          <img src="./sidebar-tottler.svg" alt="sidebar" />
        </button>
      </div>
    </div>
  )
}

export default NavgationBar