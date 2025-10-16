import { Fragment } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

function Certifications() {

    const certificationDetails = [
        { title: "Trained .Net Programmer", descripton: "at DSRC - Chennai" },
        { title: "Application Developer", descripton: "at HCL - Chennai" },
        { title: "CCNA Certification", descripton: "at TCS - Chennai" },
    ]

    return (
        <div className='bg-[#111] py-12 sm:py-16 md:py-20 px-6 sm:px-10 text-white text-center'>
            <div className='text-gray-400 mb-2 text-[12px] sm:text-sm md:text-base'>Explore My</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Certifications</h1>
            <div className='w-full sm:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
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
                                <span className='mr-2 mt-0.5'>
                                    <FaCircleCheck className="text-[#c9f31d] text-sm sm:text-lg md:text-2xl" />
                                </span>
                                {detail.descripton}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications
