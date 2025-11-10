import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import panda from './public/panda.png'; // Your PNG (with transparency for best results)
import resume from './public/resume.pdf'; // Remove space in filename if needed!

const PortfolioPage = () => {
  const yinYangRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Add rotation animation to the image
    if (yinYangRef.current) {
      yinYangRef.current.style.animation = 'spin 2s linear infinite';
    }
  }, []);

  const handleClick = () => {
    navigate('/bio');
  };

  return (
    <div className="bg-white min-h-screen w-full text-black">
      {/* Rotation animation */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* Main Container */}
      <div className="relative w-full min-h-screen rounded-xl overflow-hidden bg-gray-50 flex flex-col">

        {/* Header Bar */}
        <header className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6 md:py-8 flex-shrink-0">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            <span className="font-cursive">AR</span>
          </div>
          <a
            href="mailto:antoraphael787@gmail.com"
            className="px-3 sm:px-4 py-2 bg-white rounded-full hover:bg-gray-300 transition text-black font-medium border border-gray-400 text-sm sm:text-base"
          >
            Say Hi
          </a>
        </header>

        {/* Center Navigation */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-4 md:space-x-6 z-20">
          {/* Resume PDF Link */}
          <a 
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            Resume
          </a>
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="rounded-full border border-gray-400 p-1.5 sm:p-2 md:p-3 hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* Social Links - Left Side, Slightly Below Center */}
        <div className="absolute left-2 sm:left-4 md:left-6 lg:left-12 top-[55%] sm:top-[58%] md:top-[60%] flex flex-col items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 z-10">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anto-raphael-d"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 text-black hover:text-blue-600 transition-colors"
          >
            {/* SVG icon code */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/AntoRaphaelD"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 text-black hover:text-gray-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192 .694 .801 .576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          {/* Twitter/X */}
          <a
            href="https://x.com/ANTORAPHAEL24"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 text-black hover:text-gray-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883 .392 -1.832 .656 -2.828 .775 1.017 -.609 1.798 -1.574 2.165 -2.724 -.951 .564 -2.005 .974 -3.127 1.195 -.897 -.957 -2.178 -1.555 -3.594 -1.555 -3.179 0 -5.515 2.966 -4.797 6.045 -4.091 -.205 -7.719 -2.165 -10.148 -5.144 -1.29 2.213 -.669 5.108 1.523 6.574 -.806 -.026 -1.566 -.247 -2.229 -.616 -.054 2.281 1.581 4.415 3.949 4.89 -.693 .188 -1.452 .232 -2.224 .084 .626 1.956 2.444 3.379 4.6 3.419 -2.07 1.623 -4.678 2.348 -7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307 -7.721 13.995 -14.646 .962 -.695 1.797 -1.562 2.457 -2.549z"/></svg>
          </a>
          {/* Vertical Line */}
          <div className="w-1 sm:w-1 md:w-[3px] lg:w-[6px] h-20 sm:h-32 md:h-48 lg:h-[250px] bg-black mt-2 sm:mt-4 md:mt-6 lg:mt-8"></div>
        </div>

        {/* Center Image (Rotating Panda) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 w-full px-4">
          <div className="cursor-pointer" onClick={handleClick}>
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 flex items-center justify-center mx-auto">
              <img
                src={panda}
                alt="panda"
                ref={yinYangRef}
                className="w-full h-full object-contain rounded-full border-4 border-black bg-black"
              />                    
            </div>
            <p className="relative mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-900 font-semibold text-center px-2">
              click here
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 flex-shrink-0">
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 2xl:gap-40 flex-wrap justify-center">
            <Link to="/about" className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium hover:text-gray-600 whitespace-nowrap">
              About
            </Link>
            <Link to="/skills" className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium hover:text-gray-600 whitespace-nowrap">
              My Skills
            </Link>
          </div>
        </div>

        {/* Projects Label - Right Side, Slightly Above Center */}
        <div
          className="absolute left-[275px] sm:right-2 md:right-3 lg:right-4 top-[40%] sm:top-[42%] md:top-[45%] flex flex-col items-end"
          style={{ minWidth: "50px", minHeight: "100px", zIndex: 50 }}
        >
          <Link
            to="/projects"
            className="rotate-90 transform origin-left whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium tracking-wider hover:text-gray-600 block"
            style={{
              display: "inline-block",
              cursor: "pointer",
              padding: "8px 12px",
              background: "rgba(255,255,255,0.02)"
            }}
          >
            Projects
          </Link>
        </div>
              

        {/* Spacer to prevent overlap on very small screens */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default PortfolioPage;