import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Retail Sales Analysis",
      description: "Comprehensive analysis of retail sales data with interactive visualizations and insights into sales trends, customer behavior, and performance metrics.",
      tech: "Power BI"
    },
    {
      title: "Adidas Sales Dashboard 2020-2021",
      description: "Interactive dashboard tracking Adidas sales performance across multiple regions, products, and time periods with detailed KPI analysis.",
      tech: "Power BI"
    },
    {
      title: "HR Analytics Dashboard",
      description: "Data-driven HR analytics platform featuring employee metrics, attrition analysis, recruitment insights, and workforce planning tools.",
      tech: "Tableau"
    },
    {
      title: "Social Media Sentiment Analysis",
      description: "Natural language processing application that analyzes social media posts to determine sentiment patterns and trending topics in real-time.",
      tech: "Python"
    },
    {
      title: "Netflix Recommendation System",
      description: "Machine learning-based recommendation engine that suggests personalized content based on viewing history and user preferences.",
      tech: "Python"
    },
    {
      title: "Walmart Weekly Forecast",
      description: "Time series forecasting model predicting weekly sales for Walmart stores using historical data and external factors like holidays and weather.",
      tech: "Power BI, Python"
    },
    {
      title: "Covid-19 Analysis and Forecasting",
      description: "Comprehensive COVID-19 data analysis with predictive modeling for case trends, mortality rates, and vaccination impact across regions.",
      tech: "Power BI, Python"
    },
    {
      title: "Analysing Global Happiness Trends",
      description: "Statistical analysis of World Happiness Report data exploring correlations between happiness scores and socioeconomic factors.",
      tech: "R"
    },
    {
      title: "Airline Passenger and Luggage Management System",
      description: "Full-stack application for managing airline passenger bookings, luggage tracking, and flight scheduling with real-time updates.",
      tech: "C++"
    },
    {
      title: "Inventory Management System",
      description: "Enterprise-level inventory tracking system with features for stock management, order processing, and automated reordering.",
      tech: "Java, SpringBoot"
    },
    {
      title: "Live Dashboard – Retail Chain",
      description: "Real-time dashboard displaying live sales data, inventory levels, and performance metrics across multiple retail locations.",
      tech: "Tableau"
    },
    {
      title: "Hostel Management System",
      description: "Complete hostel management solution handling student records, room allocation, fee tracking, and maintenance requests.",
      tech: "MERN"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden">
      {/* AR Logo - Top Left */}
      <div className="absolute top-8 left-12 z-20">
        <h1 className="text-4xl font-bold text-white">AR</h1>
      </div>

      {/* Back Arrow - Top Center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <a 
          href="/"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <span className="text-2xl text-black">←</span>
        </a>
      </div>

      {/* Social Icons - Left Side */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        <a 
          href="https://www.linkedin.com/in/anto-raphael-d" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl text-white hover:opacity-70 transition-opacity"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/AntoRaphaelD" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl text-white hover:opacity-70 transition-opacity"
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/ANTORAPHAEL24" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl text-white hover:opacity-70 transition-opacity"
        >
          <FaTwitter />
        </a>
        <div className="h-32 w-0.5 bg-white"></div>
      </div>

      {/* Large WORK text in background */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <h1 className="text-[180px] font-bold text-gray-400 leading-none whitespace-nowrap">WORK</h1>
      </div>

      {/* Swipe text at bottom */}
      <div className="absolute bottom-32 right-32 opacity-20 pointer-events-none z-10">
        <h2 className="text-[100px] font-bold text-gray-400 leading-none">Swipe..</h2>
      </div>

      {/* Scrollable Projects Container */}
      <div className="w-full pt-48 pb-32">
        <div 
          ref={scrollRef}
          className="flex gap-8 px-32 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing py-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="flip-card flex-shrink-0">
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <div>
                    <h2 className="text-xl font-bold text-black mb-4 font-mono">
                      {project.title}
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-back bg-black border-2 border-black rounded-3xl p-8 shadow-lg">
                  <div className="h-full flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-white mb-6 font-mono">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {project.tech.split(',').map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-white text-black rounded-full text-sm font-mono font-semibold"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
