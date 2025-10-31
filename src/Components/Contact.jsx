import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import ContactForm from "../shared/ContactForm";


function Contact() {
    const socialLinks = [
        {
            name: 'Github',
            icon: <FaGithub size={16} className="sm:size-5" />,
            href: 'https://github.com/gowshiksankar',
        },
        {
            name: 'Linkedin',
            icon: <FaLinkedin size={16} className="sm:size-5" />,
            href: 'https://www.linkedin.com/in/gowshikdev/',
        },
        {
            name: 'Instagram',
            icon: <FaInstagram size={16} className="sm:size-5" />,
            href: 'https://www.instagram.com/harrygowshik?igsh=MWRnMjd2NDdjODA1Yw==',
        },
        {
            name: 'Whatsapp',
            icon: <FaWhatsapp size={16} className="sm:size-5" />,
            href: 'https://wa.me/919894309301?text=Hi%20Gowshik%2C%20I%20found%20your%20portfolio!',
        },
    ];

    return (
        <div
            id="contact"
            className="scroll-mt-14 sm:scroll-mt-16 bg-[#070707] text-white p-6 sm:p-10 md:p-14"
        >
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <div className="w-full">
                    <div>
                        <div className="text-gray-400 mb-0 md:mb-3 text-sm md:text-base">Contact</div>
                        <h2 className="mb-3 md:mb-6 text-2xl sm:text-4xl md:text-[45px] leading-9 sm:leading-11 md:leading-13 font-medium">
                            Let’s <span className="text-[#c9f31d]">Connect Together</span>
                        </h2>
                        <p className="opacity-65 font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-5 sm:leading-6 md:leading-[30px] mb-4 md:mb-8">
                            Want to collaborate, discuss a project, or just say hi? Drop your
                            email or WhatsApp number below, and I’ll get in touch soon.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;
