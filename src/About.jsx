import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import spaceman from './public/spaceman.png';
import ar from './public/AR.jpg';

function About() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* AR Logo - Top Left */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-12 z-20">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-pacifico">AR</h1>
      </div>

      {/* Back Arrow - Top Center */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <a 
          href="/bio"
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <span className="text-xl sm:text-2xl text-black">←</span>
        </a>
      </div>

      {/* Social Icons - Left Side (responsive vertical) */}
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
      {/* Large ABOUT text in background */}
      <div className="absolute top-20 left-4 sm:left-12 opacity-10 z-0 pointer-events-none select-none">
        <h1 className="text-[60px] sm:text-[150px] md:text-[200px] font-bold text-gray-400 leading-none">ABOUT</h1>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 w-full flex items-center justify-center px-2 sm:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 w-full max-w-5xl">
          
          {/* Text Content with Border */}
          <div className="w-full lg:w-3/5 border-2 border-white p-4 sm:p-8 rounded-xl bg-opacity-30 bg-black">
            <p className="text-white text-base sm:text-lg font-mono leading-relaxed mb-4">
              I'm a Backend Developer and Data Professional. I specialize in building robust server-side applications and transforming data into meaningful insights. I consider myself to be a lifelong learner with strong expertise in data structures and algorithms.
            </p>
            <p className="text-white text-base sm:text-lg font-mono leading-relaxed mb-4">
              I'm passionate about Data Engineering and Analytics, creating efficient data pipelines and compelling visualizations. I love working with Power BI and Tableau to tell stories through data.
            </p>
            <p className="text-white text-base sm:text-lg font-mono leading-relaxed mb-4">
              I'm a tech enthusiast who enjoys exploring new technologies and frameworks. When I'm not coding, you can find me analyzing datasets or learning about the latest developments in AI and machine learning.
            </p>
            <p className="text-white text-base sm:text-lg font-mono leading-relaxed">
              I've been passionate about technology and data since my early days, building solutions that make a real impact on businesses and users.
            </p>
          </div>
          
          {/* Character Illustration */}
          <div className="w-48 sm:w-64 lg:w-72 flex-shrink-0">
            <img
              src={spaceman}
              alt="Spaceman"
              className="w-full h-auto"
              style={{ animation: "float-animation 3s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
