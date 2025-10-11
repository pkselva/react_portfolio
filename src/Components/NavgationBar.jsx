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
    <div className='bg-[#1f1f1f] flex justify-between items-center px-[15px]'>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className='flex'>
        {navList.map((val, idx) => {
          return (
            <div key={idx} className='px-5 py-[25px] leading-[30px] text-white'>
              <a href={val.link}>
                {val.value}
              </a>
            </div>
          )
        }
        )}
      </div>
      <div>

      </div>
    </div>
  )
}

export default NavgationBar