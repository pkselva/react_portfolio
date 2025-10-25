import { FaTractor, FaBook, FaTint } from 'react-icons/fa';
import ProjectCard from '../shared/ProjectCard';

const projectData = [
  {
    icon: <FaTractor />,
    title: 'FARMING MACHINERY RENTAL SYSTEM',
    description: 'Developed a Farming Machinery Rental System, improving operational efficiency for farmers. Collaborated with a team, conducted testing, and provided ongoing updates.',
    features: [
      'HTML & CSS',
      'Java',
      'SQL Database',
    ]
  },
  {
    icon: <FaBook />,
    title: 'LIBRARY MANAGEMENT SYSTEM',
    description: 'Developed a Library Management System using Java. Designed to efficiently manage book inventory and support patron interactions with a command-line interface.',
    features: [
      'Java',
      'Inventory Management',
      'CLI',
    ]
  },
  {
    icon: <FaTint />,
    title: "Blood Donor System",
    description: "Developed a comprehensive Blood Donor Management System to streamline donor registration, blood bank inventory, and recipient matching. Aims to enhance efficiency and reduce manual errors.",
    features: [
      "PHP 5 & PHP 8",
      "MySQL",
      "jQuery & JavaScript",
    ]
  }
];

function Projects() {
  return (
    <div id='projects' className='scroll-mt-14 sm:scroll-mt-16 flex flex-col items-center p-6 sm:p-10 md:p-14 bg-[#070707] text-white'>
      <div className='text-gray-400 mb-2 text-sm md:text-base'>Explore</div>
      <h1 className="text-2xl md:text-3xl font-bold text-[#c9f31d] mb-4 sm:mb-0">My Projects</h1>

      <div className='w-full max-w-7xl'>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            features={project.features}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;