import React from 'react'

function Skills() {

  const skillsCard = [
    { img: "./html.png", label: "HTML" },
    { img: "./css.png", label: "CSS" },
    { img: "./js.png", label: "JavaScript" },
    { img: "./React.png", label: "React" },
    { img: "./bootstrap.png", label: "Bootstrap" },
    { img: "./java.png", label: "Java" },
    { img: "./mysql.png", label: "SQL" },
    { img: "./mongodb.png", label: "MongoDB" },
  ]

  return (
    <div className='p-8 bg-[#070707]'>
      <div className='text-gray-400 mb-6 text-center'>My Skills</div>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-5 items-center justify-center'>
          {skillsCard.map((val, idx) => {
            return (
              <div key={idx} className='px-8 cursor-pointer w-full sm:w-[150px] flex flex-col justify-center items-center py-[25px] border border-[#ffffff1a] bg-[#1f1f1f] rounded-[14px] hover:border-[#c9f31d] text-white hover:text-[#c9f31d] transform hover:scale-102 hover:-translate-y-1  transition duration-300 ease-in-out'>
                <div className='w-[40px] sm:w-[60px]'>
                  <img src={val.img} alt={val.label} />
                </div>
                <div className='leading-[28px] text-[20px] mt-[15px]'>{val.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills