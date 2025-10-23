import { FaAsterisk } from 'react-icons/fa';

function ProjectCard({ icon, title, description, features }) {
  return (
    <div
      className="
        flex flex-col lg:grid 
        lg:grid-cols-12 lg:items-center 
        gap-2 sm:gap-4 lg:gap-6 
        py-4 sm:py-6 lg:py-10 
        border-b border-gray-800 last:border-b-0
      "
    >

      <div className="col-span-4 flex items-center gap-4 sm:gap-6 w-full">
        <div className="text-[40px] lg:text-[80px] text-gray-400 flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-base sm:text-lg lg:text-2xl leading-7 sm:leading-8 tracking-[1px] sm:tracking-[1.5px] uppercase font-semibold">
          {title}
        </h2>
      </div>

      <div
        className="
          col-span-5 
          text-[#757575] leading-relaxed
          text-[13px] sm:text-[15px] md:text-[16px]
          mt-4
          mr-[2%] md:mr-[5%]
          pl-4 md:pl-5 
          border-l border-[#c9f31d]
        "
      >
        {description}
      </div>

      <div className="col-span-3 w-full mt-4 md:mt-0">
        <ul className="flex flex-col gap-1 sm:gap-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 sm:gap-3">
              <FaAsterisk className="text-[#c9f31d] text-sm sm:text-base md:text-lg" />
              <span className="text-sm sm:text-base md:text-lg font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default ProjectCard;
