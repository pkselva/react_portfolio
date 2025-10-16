import htmlIcon from "../assets/png/html.png";
import cssIcon from "../assets/png/css.png";
import jsIcon from "../assets/png/js.png";
import reactIcon from "../assets/png/React.png";
import bootstrapIcon from "../assets/png/bootstrap.png";
import javaIcon from "../assets/png/java.png";
import mysqlIcon from "../assets/png/mysql.png";
import mongodbIcon from "../assets/png/mongodb.png";

function Skills() {

  const skillsCard = [
    { img: htmlIcon, label: "HTML" },
    { img: cssIcon, label: "CSS" },
    { img: jsIcon, label: "JavaScript" },
    { img: reactIcon, label: "React" },
    { img: bootstrapIcon, label: "Bootstrap" },
    { img: javaIcon, label: "Java" },
    { img: mysqlIcon, label: "SQL" },
    { img: mongodbIcon, label: "MongoDB" },
  ]

  return (
    <div id='skills' className='p-6 sm:p-12 md:p-16 bg-[#111]'>
      <div className='text-gray-400 mb-6 text-center'>My Skills</div>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 items-center justify-center'>
          {skillsCard.map((val, idx) => {
            return (
              <div key={idx} className='px-4 sm:px-6 lg:px-7 cursor-pointer w-full sm:w-[150px] flex flex-col justify-center items-center py-3 sm:py-5 lg:py-6 border border-[#ffffff1a] bg-[#1f1f1f] rounded-[14px] hover:border-[#c9f31d] text-white hover:text-[#c9f31d] transform hover:scale-102 hover:-translate-y-1 transition duration-300 ease-in-out'>
                <div className='w-[40px] md:w-[60px]'>
                  <img src={val.img} alt={val.label} />
                </div>
                <div className='leading-4 sm:leading-5 md:leading-7 text-[14px] sm:text-base md:text-xl mt-2 md:mt-4'>{val.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills