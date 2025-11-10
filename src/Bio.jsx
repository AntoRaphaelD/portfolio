import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import crop from './public/crop.png';
import resume from './public/resume.pdf';

function Bio() {
  return (
    <div className="min-h-screen w-full relative flex flex-col overflow-hidden">
      {/* Responsive Split Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop: vertical split | Mobile: horizontal split */}
        <div className="hidden sm:grid grid-cols-2 h-full w-full absolute inset-0">
          <div className="bg-black h-full w-full" />
          <div className="bg-white h-full w-full" />
        </div>
        <div className="sm:hidden grid grid-rows-2 h-full w-full absolute inset-0">
          <div className="bg-black h-full w-full" />
          <div className="bg-white h-full w-full" />
        </div>
      </div>

      {/* Header Bar */}
      <header className="relative z-20 flex items-center justify-between px-4 sm:px-12 py-4 sm:py-6">
        <div className="text-2xl sm:text-4xl font-bold tracking-tighter text-white">
          <span className="font-cursive">AR</span>
        </div>
        <a
          href="mailto:antoraphael787@gmail.com"
          className="px-3 sm:px-4 py-2 bg-white rounded-full hover:bg-gray-300 transition text-black font-medium border border-black text-sm sm:text-base"
        >
          Say Hi
        </a>
      </header>

      {/* Center Navigation - Made responsive by removing fixed positioning */}
      <div className="relative z-20 flex items-center justify-center mt-2 sm:mt-4 space-x-4 sm:space-x-8">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base sm:text-2xl font-medium hover:text-white transition-colors text-white"
        >
          Resume
        </a>
        <Link
          to="/"
          className="bg-black rounded-full border border-black p-2 sm:p-3 hover:text-black hover:bg-gray-400 text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      {/* Social Icons - Left Side, vertically centered on left */}
      <div className="absolute left-2 sm:left-10 top-1/4 sm:top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
        <a href="https://www.linkedin.com/in/anto-raphael-d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
          <FaLinkedin className="h-8 w-8" />
        </a>
        <a href="https://github.com/AntoRaphaelD" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
          <FaGithub className="h-8 w-8" />
        </a>
        <a href="https://x.com/ANTORAPHAEL24" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
          <FaTwitter className="h-8 w-8" />
        </a>
        <div className="w-1 h-24 sm:h-32 bg-white mt-4"></div>
      </div>

      {/* Projects Label - Right Side, Rotated - Adjusted position for mobile to bottom (white) half */}
      <div
        className="absolute right-4 sm:right-2 md:right-3 lg:right-4 top-[70%] sm:top-[42%] md:top-[45%] flex flex-col items-end"
        style={{ minWidth: "50px", minHeight: "100px", zIndex: 50 }}
      >
        <Link
          to="/projects"
          className="text-black rotate-90 transform origin-left whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium tracking-wider hover:text-black block"
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

      {/* Large BIO text in background */}
      {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none z-0 select-none">
        <h1 className="text-[64px] sm:text-[120px] md:text-[200px] font-bold text-white leading-none">BIO</h1>
      </div> */}

      {/* Main Content - Responsive grid */}
      <div className="flex-1 flex items-center justify-center px-2 sm:px-12 py-8 z-10 relative">
        {/* Desktop: two columns; Mobile: two rows */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 gap-0 shadow-2xl">
          {/* Text Section - Black background, positioned in top half on mobile to match black bg */}
          <div className="bg-black flex flex-col justify-center p-6 sm:p-12 text-white font-mono">
            <h2 className="text-3xl sm:text-6xl mb-2 sm:mb-4 font-bold">Hi,</h2>
            <h3 className="text-xl sm:text-3xl mb-2 sm:mb-6 font-medium">I'm Anto Raphael</h3>
            <p className="text-sm sm:text-lg font-semibold mb-2">
              Backend Developer | Data Analyst | Data Engineer
            </p>
            <p className="text-xs sm:text-base leading-relaxed mt-2 sm:mt-4">
              I build scalable applications, design data pipelines, and transform data into actionable insights using Python, Power BI, and Tableau.
            </p>
          </div>
          {/* Image Section - White background, positioned in bottom half on mobile to match white bg */}
          <div className="bg-white flex items-center justify-center p-6 sm:p-12">
            <img src={crop} alt="Anto Raphael" className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Footer Links - Adjusted colors for responsiveness */}
      <div className="relative z-20 py-4 sm:py-6">
        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20">
          <Link to="/about" className="text-base sm:text-2xl font-medium hover:text-gray-600 text-black sm:text-white transition">
            About
          </Link>
          <Link to="/skills" className="text-base sm:text-2xl font-medium hover:text-black text-black transition">
            My Skills
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bio;