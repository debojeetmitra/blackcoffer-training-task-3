import React from 'react';

const col1Links = ['About us', 'About Founder', 'Contact us', 'Team', 'Locations'];
const col2Links = ['FAQ', 'Terms & Conditions', 'Careers', 'Solutions', 'Our Process'];

const socialIcons = [
  { name: 'Facebook', src: '/icons/image 18.png', fallback: '/icons/Frame 86.png' },
  { name: 'YouTube', src: '/icons/image 19.png', fallback: '/icons/Frame 87.png' },
  { name: 'LinkedIn', src: '/icons/image 20.png', fallback: '/icons/Frame 88.png' },
  { name: 'Twitter', src: '/icons/image 22.png', fallback: '/icons/Component 14.png' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 lg:px-12 font-sans overflow-hidden">
      <style>
        {`
          @keyframes float-animation {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float-illustration {
            animation: float-animation 5s ease-in-out infinite;
            will-change: transform;
          }
          .illustration-glow {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.05));
            transition: all 0.4s ease-out;
          }
          .illustration-glow:hover {
            transform: scale(1.03);
            filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.2));
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 lg:gap-8">


        <div className="w-full lg:w-[60%] flex flex-col sm:flex-row justify-between gap-12 sm:gap-8">


          <div className="flex flex-col space-y-5">
            {col1Links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-base text-gray-100 hover:text-gray-400 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>


          <div className="flex flex-col space-y-5">
            {col2Links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-base text-gray-100 hover:text-gray-400 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>


          <div className="flex flex-col max-w-[280px]">
            <h4 className="text-gray-400 text-lg font-medium mb-6">Get In Touch</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Taking seamless key performance indicators offline to maximise the long tail.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label={icon.name}
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-10 h-10 object-contain"

                  />
                </a>
              ))}
            </div>
          </div>

        </div>


        <div className="hidden lg:flex w-full lg:w-[40%] justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
          <div className="relative w-full h-[250px] max-w-[450px] animate-float-illustration illustration-glow">

            <div className="absolute top-[20%] right-0 w-[75%] h-[4px] bg-gradient-to-l from-transparent to-cyan-400 rounded-l-full"></div>
            <div className="absolute top-[20%] right-[75%] w-6 h-6 -mt-[11px] rounded-full border-[4px] border-cyan-400 bg-black shadow-[0_0_12px_rgba(34,211,238,0.8)] z-10"></div>


            <div className="absolute top-[40%] right-0 w-[55%] h-[4px] bg-gradient-to-l from-transparent to-blue-500 rounded-l-full"></div>
            <div className="absolute top-[40%] right-[55%] w-8 h-8 -mt-[14px] rounded-full border-[4px] border-blue-500 bg-black shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"></div>


            <div className="absolute top-[60%] right-0 w-[85%] h-[4px] bg-gradient-to-l from-transparent to-orange-500 rounded-l-full"></div>
            <div className="absolute top-[60%] right-[85%] w-5 h-5 -mt-[8.5px] rounded-full border-[4px] border-orange-500 bg-black shadow-[0_0_10px_rgba(249,115,22,0.8)] z-10"></div>


            <div className="absolute top-[80%] right-0 w-[45%] h-[4px] bg-gradient-to-l from-transparent to-green-500 rounded-l-full"></div>
            <div className="absolute top-[80%] right-[45%] w-7 h-7 -mt-[12px] rounded-full border-[4px] border-green-500 bg-black shadow-[0_0_12px_rgba(34,197,94,0.8)] z-10"></div>


            <div className="absolute top-[30%] right-[30%] w-[100px] h-[4px] bg-blue-400 -rotate-45 origin-right opacity-50"></div>


            <div className="absolute top-[70%] right-[20%] w-[80px] h-[4px] bg-orange-400 -rotate-45 origin-right opacity-50"></div>


            <div className="absolute top-[30%] right-[20%] w-4 h-4 rounded-full border-[3px] border-purple-500 bg-black shadow-[0_0_10px_rgba(168,85,247,0.8)] z-10 animate-pulse"></div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
