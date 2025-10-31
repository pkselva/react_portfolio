
const Footer = () => {
  return (
    <footer className="px-6 sm:px-10 md:px-14 py-6 bg-[#111] text-white">
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">

          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              Copyright @2025{' '}
              <a
                href="#"
                className="font-semibold text-[#c9f31d] hover:text-[#c9f322] transition-colors"
              >
                Gowshik,
              </a>
              {' '}All Rights Reserved
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            Designed by{' '}
            <span className="font-medium text-[#c9f31d] hover:text-[#c9f322] transition-colors">
              Me.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
