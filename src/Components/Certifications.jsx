import { FaCircleCheck } from 'react-icons/fa6'

function Certifications() {

    const certificationDetails = [
        { title: "Trained Full Stack Developer", description: "at Shiksha Simple Learn Solution - Madurai" },
        { title: "Web Developement and Cloud Hosting", description: "at Futrik Technologies - Madurai" },
    ]

    return (
        <div id='certifications' className='scroll-mt-14 sm:scroll-mt-16 bg-[#111] p-6 sm:p-10 md:p-14 text-white text-center'>
            <div className='text-gray-400 mb-2 text-[12px] sm:text-sm md:text-base'>Explore My</div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#c9f31d] mb-4 sm:mb-6 lg:mb-8">Certifications</h1>
            <div className='w-full sm:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
                {certificationDetails.map((detail, idx) => (
                    <div
                        key={idx}
                        className='border-[2px] hover:border-[#c9f31d] transition duration-500 rounded-3xl sm:rounded-4xl flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-5 md:p-6'
                    >
                        <div className='text-[14px] sm:text-lg md:text-2xl font-[500]'>
                            {detail.title}
                        </div>
                        <div className="flex justify-center">
                            <h1 className='flex gap-2 items-start text-[12px] sm:text-base md:text-xl sm:px-10 md:px-20 text-start'>
                                <span className='mr-0.5 mt-0.5'>
                                    <FaCircleCheck className="text-[#c9f31d] text-sm sm:text-lg md:text-2xl" />
                                </span>
                                {detail.description}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications
