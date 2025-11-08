import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from 'react-icons/fa';

function Resume() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] relative overflow-hidden">
      {/* AR Logo - Top Left */}
      <div className="absolute top-8 left-12 z-20">
        <h1 className="text-4xl font-bold text-black">AR</h1>
      </div>

      {/* Back Arrow - Top Center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <a 
          href="/"
          className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          <span className="text-2xl">←</span>
        </a>
      </div>

      {/* Social Icons - Left Side */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        <a 
          href="https://www.linkedin.com/in/anto-raphael-d" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl text-black hover:opacity-70 transition-opacity"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/AntoRaphaelD" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl text-black hover:opacity-70 transition-opacity"
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/ANTORAPHAEL24" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl text-black hover:opacity-70 transition-opacity"
        >
          <FaTwitter />
        </a>
        <div className="h-32 w-0.5 bg-black"></div>
      </div>

      {/* Large RESUME text in background */}
      <div className="absolute top-20 right-12 opacity-10 pointer-events-none">
        <h1 className="text-[150px] font-bold text-gray-400 leading-none whitespace-nowrap">RESUME</h1>
      </div>

      {/* Download Button - Top Right */}
      <div className="absolute top-8 right-12 z-20">
        <a 
          href="/resume.pdf" 
          download="AntoRaphael_Resume.pdf"
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-mono"
        >
          <FaDownload />
          <span>Download</span>
        </a>
      </div>

      {/* Main Content - Resume Display */}
      <div className="pt-32 pb-16 px-8">
        <div className="max-w-5xl mx-auto">
          {/* Resume PDF Viewer */}
          <div className="bg-white border-4 border-black shadow-2xl">
            <iframe
              src="/resume.pdf"
              className="w-full h-[800px]"
              title="Resume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
