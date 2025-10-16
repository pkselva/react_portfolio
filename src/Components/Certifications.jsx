import { Fragment } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

function Certifications() {

    const certificationDetails = [
        { title: "Trained .Net Programmer", descripton: "at DSRC - Chennai" },
        { title: "Application Developer", descripton: "at HCL - Chennai" },
        { title: "CCNA Certification", descripton: "at TCS - Chennai" },
    ]

    return (
        <div className='bg-[#111] py-12 sm:py-16 md:py-20 px-10 text-white text-center'>
            <div className='text-gray-400 mb-2'>Explore My</div>
            <h1 className="text-3xl font-bold mb-8">Certifications</h1>
            <div className='w-4/5 mx-auto grid grid-cols-3 gap-8'>
                {certificationDetails.map((detail, idx) => (
                    <div key={idx} className='border-[2px] hover:border-[#c9f31d] transition duration-500 rounded-4xl flex flex-col items-center gap-6 p-5'>
                        <div className='text-[16px] sm:text-lg md:text-2xl font-[500]'>
                            {detail.title}
                        </div>
                        <div className="flex justify-center">
                            <h1 className='flex gap-2 items-start text-[12px] text-start sm:text-base md:text-xl px-20'>
                                <span className='mr-2 mt-0.5'>
                                    <FaCircleCheck className="text-[#c9f31d] text-base sm:text-lg md:text-2xl" />
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