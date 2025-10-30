import { Fragment } from "react"
import { FaRegEnvelope } from "react-icons/fa6"
import { FiPhone } from "react-icons/fi"
import { MdDone } from "react-icons/md"

function About() {

  const skills = [
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "Version Control"
  ]

  const contactDetails = [
    { icon: <FaRegEnvelope />, label: "Email me", value: "gowshik.webdev@gmail.com" },
    { icon: <FiPhone />, label: "Make A Call", value: "+91 9894309301" },
  ]

  return (
    <div id="about" className='scroll-mt-14 sm:scroll-mt-16 bg-[#070707] p-6 sm:p-10 md:p-14 text-white'>
      <div className='w-full lg:w-5/7'>
        <div className='text-gray-400 mb-3 text-sm md:text-base'>About Me</div>
        <h2 className='mb-6 text-2xl sm:text-4xl md:text-[45px] leading-9 sm:leading-11 md:leading-13 font-medium'>
          A Passionate Developer <br /> {"Creating "}
          <span className='text-[#c9f31d]'>Full-Stack Web Applications</span>
        </h2>
        <p className='opacity-65 font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-5 sm:leading-6 md:leading-[30px] mb-8'>
          Aspiring Full Stack Developer with a solid foundation in core Java, Spring Boot, SQL, React.js, Node.js, HTML, CSS, and MongoDB. Passionate about building responsive and efficient applications, Strong problem-solving and teamwork abilities. Eager to contribute and grow in a dynamic development team.
        </p>
        <div className="max-w-[620px]">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {skills.map((value, idx) => (
              <div key={idx} className="flex gap-2">
                <MdDone className="text-[#c9f31d] text-base sm:text-lg md:text-2xl" />
                <h1 className='text-[14px] sm:text-base md:text-xl font-medium'>{value}</h1>
              </div>
            ))}
          </div>

          <div className="gap-3 sm:gap-6 md:gap-[50px] flex md:flex flex-col md:flex-row md:items-center justify-start mt-6 bg-[#1f1f1f] rounded-[20px] p-2 md:px-10 md:py-4">
            {contactDetails.map((contactDetail, idx) => (
              <Fragment key={idx}>
                <div className="flex items-center gap-2 md:gap-[15px]">
                  <div className="w-10 h-10 bg-[#c9f31d] text-[#111] leading-10 rounded-full text-center">
                    <div className="h-full flex items-center justify-center">
                      {contactDetail.icon}
                    </div>
                  </div>
                  <div>
                    <p className="leading-3 sm:leading-4 md:leading-6 text-[10px] sm:text-[12px] md:text-[14px] opacity-65">{contactDetail.label}</p>
                    <p className="leading-3 sm:leading-4 md:leading-6 text-[14px] sm:text-[16px] md:text-[18px] hover:text-[#c9f31d] hover:transition cursor-pointer">{contactDetail.value}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About