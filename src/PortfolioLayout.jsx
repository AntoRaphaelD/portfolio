import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] relative overflow-hidden">
      {/* HR Logo - Top Left */}
      <div className="absolute top-8 left-12">
        <h1 className="text-4xl font-bold text-black">HR</h1>
      </div>

      {/* Resume - Top Center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <a href="/" className="text-xl font-medium text-black hover:opacity-70">
          Resume
        </a>
      </div>

      {/* Say hi.. - Top Right */}
      <div className="absolute top-8 right-12">
        <a href="mailto:hareeshprogrammer@gmail.com" className="text-xl font-medium text-black hover:opacity-70">
          Say hi..
        </a>
      </div>

      {/* Back Arrow - Top Center Right */}
      <div className="absolute top-8 left-1/2 translate-x-12">
        <a href="/" className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
          <span className="text-2xl">←</span>
        </a>
      </div>

      {/* Projects - Left Side Vertical */}
      <div className="absolute left-8 top-40">
        <a href="/work" className="text-xl font-medium text-black hover:opacity-70 writing-mode-vertical transform -rotate-180">
          Projects
        </a>
      </div>

      {/* Feats - Right Side Vertical */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <a href="/blog" className="text-xl font-medium text-black hover:opacity-70 writing-mode-vertical transform rotate-180">
          Feats
        </a>
      </div>

      {/* Social Icons - Left Side */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        <a href="https://www.linkedin.com/in/hareesh-r/" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:opacity-70">
          <FaLinkedin />
        </a>
        <a href="https://github.com/hareesh-r" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:opacity-70">
          <FaGithub />
        </a>
        <a href="https://twitter.com/hareesh_dev" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:opacity-70">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/hareeshprogrammer" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:opacity-70">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com/@hareeshrajendran" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:opacity-70">
          <FaYoutube />
        </a>
        <div className="h-32 w-0.5 bg-black"></div>
      </div>

      {/* Center Content - Yin Yang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <button className="mb-4 focus:outline-none hover:scale-105 transition-transform">
          <div className="w-48 h-48 rounded-full bg-black relative overflow-hidden">
            {/* White half */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-l-full"></div>
            
            {/* Top small circle (white on black) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            
            {/* Bottom small circle (black on white) */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </button>
        <p className="text-lg text-black">click here</p>
      </div>

      {/* About - Bottom Left */}
      <div className="absolute bottom-12 left-1/3 -translate-x-1/2">
        <a href="/about" className="text-xl font-medium text-black hover:opacity-70">
          About
        </a>
      </div>

      {/* My Skills - Bottom Right */}
      <div className="absolute bottom-12 right-1/3 translate-x-1/2">
        <a href="/skills" className="text-xl font-medium text-black hover:opacity-70">
          My Skills
        </a>
      </div>
    </div>
  );
}

export default PortfolioLayout;
