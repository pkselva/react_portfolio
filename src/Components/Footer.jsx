import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    name: 'Github',
    icon: <FaGithub size={20} />,
    href: 'https://github.com/gowshiksankar',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/gowshikdev/',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={20} />,
    href: 'https://www.instagram.com/harrygowshik?igsh=MWRnMjd2NDdjODA1Yw==',
  },
];

const Footer = () => {
  return (
    <footer className="p-4 bg-[#070707] text-white">
      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <ul className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border
                     border-gray-700 text-gray-400 transition-colors
                     hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              Copyright @2025{' '}
              <a
                href="#"
                className="font-semibold text-lime-300 hover:text-lime-400 transition-colors"
              >
                Gowshik,
              </a>
              {' '}All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
