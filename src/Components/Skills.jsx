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
      <div className='flex gap-5 items-center justify-center'>
        {skillsCard.map((val, idx) => {
          return (
            <div key={idx} className='px-8 cursor-pointer w-[150px] flex flex-col items-center py-[25px] border-[1px] hover:border-[#c9f31d] hover:text-[#c9f31d] border-[#ffffff1a] bg-[#1f1f1f] rounded-[14px]'>
              <div>
                <img src={val.img} alt={val.label} width={60} height={60} />
              </div>
              <h1 className='leading-[28px] text-[20px] mt-[15px] text-white'>{val.label}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills