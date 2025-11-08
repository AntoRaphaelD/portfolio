import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import crop from './public/crop.png';
import resume from './public/resume.pdf';

function Bio() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Split Background - Black and White */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-black"></div>
        <div className="w-1/2 bg-white"></div>
      </div>

      {/* Header Bar */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-12 py-6 z-30">
        <div className="text-4xl font-bold tracking-tighter text-white">
          <span className="font-cursive">AR</span>
        </div>

        <a
          href="mailto:antoraphael787@gmail.com"
          className="px-4 py-2 bg-white rounded-full hover:bg-gray-300 transition text-black font-medium border border-gray-400"
        >
          Say Hi
        </a>
      </header>

      {/* Center Navigation */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-30">
        {/* Resume PDF Link */}
        <a 
          href={resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl font-medium hover:text-gray-600 transition-colors text-white-700 absolute right-[100px]"
        >
          Resume  
        </a>

        {/* Back Button */}
        <Link 
          to="/"
          className="rounded-full border border-black p-3 hover:bg-gray-300 transition-colors bg-black absolute left-[50px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

      {/* Social Icons - Left Side */}
      <div className="absolute left-12 top-[350px] flex flex-col items-center gap-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anto-raphael-d"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AntoRaphaelD"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/ANTORAPHAEL24"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          {/* Vertical Line */}
          <div className="w-[6px] h-[250px] bg-white mt-8"></div>
        </div>


      {/* Large BIO text in background */}
      <div className="absolute top-20 left-12 opacity-10 pointer-events-none">
        <h1 className="text-[200px] font-bold text-gray-400 leading-none">BIO</h1>
      </div>

      {/* Projects Label - Left Side */}
      <div className="absolute left-[55px] top-[200px] flex flex-col z-20">
        <Link 
          to="/projects" 
          className="-rotate-90 transform origin-top-left whitespace-nowrap text-2xl font-medium tracking-wider hover:text-gray-600 text-white"
        >
          Projects
        </Link>
      </div>

      {/* Footer Links */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <div className="flex gap-40">
          <Link to="/about" className="text-2xl font-medium hover:text-gray-600 text-white">
            About
          </Link>
          <Link to="/skills" className="text-2xl font-medium hover:text-gray-600 text-black">
            My Skills
          </Link>
        </div>
      </div>

      {/* Main Content - Centered with bordered box */}
      <div className="flex items-center justify-center min-h-screen px-12 relative z-10">
        <div className="shadow-2xl max-w-6xl w-full flex">
          {/* Text Content - Black Background with White Border (Left, Top, Bottom) */}
          <div className="flex-1 bg-black p-12 text-white leading-relaxed font-mono flex flex-col justify-center border-l-4 border-t-4 border-b-4 border-white">
            <p className="text-7xl mb-4">Hi,</p>
            <p className="text-5xl mb-6">I'm Anto Raphael</p>
            <p className="text-xl leading-relaxed">
              Backend Developer | Data Analyst | Data Engineer
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I build scalable applications, design data pipelines, and transform data into actionable insights using Python, Power BI, and Tableau.
            </p>
          </div>

          {/* Gemini_Generated_Image_c4ppnwc4ppnwc4pp Image - White Background with Black Border (Right, Top, Bottom) */}
          <div className="flex-1 bg-white p-12 flex items-center justify-center border-r-4 border-t-4 border-b-4 border-black">
            <img
              src={crop} 
              alt="Anto Raphael"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
