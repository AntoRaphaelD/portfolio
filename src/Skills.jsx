import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaCode, FaDatabase, FaChartLine } from 'react-icons/fa';

function Skills() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = [];
    const nodeCount = 50;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.fillStyle = '#888';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw connections
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach(node2 => {
          const dx = node1.x - node2.x;
          const dy = node1.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.strokeStyle = `rgba(136, 136, 136, ${1 - distance / 150})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    }
    
    animate();

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1e8] relative overflow-hidden">
      {/* Animated network background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-20"
      ></canvas>

      {/* HR Logo - Top Left */}
      <div className="absolute top-8 left-12 z-10">
        <h1 className="text-4xl font-bold text-black">AR</h1>
      </div>

      {/* Back Arrow - Top Center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <a 
          href="/"
          className="w-10 h-10 bg-black border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors"
        >
          <span className="text-2xl">←</span>
        </a>
      </div>

      {/* Social Icons - Left Side */}
      <div className="absolute left-2 sm:left-10 top-1/4 sm:top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
              <a href="https://www.linkedin.com/in/anto-raphael-d" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a href="https://github.com/AntoRaphaelD" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
                <FaGithub className="h-8 w-8" />
              </a>
              <a href="https://x.com/ANTORAPHAEL24" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
                <FaTwitter className="h-8 w-8" />
              </a>
              <div className="w-1 h-24 sm:h-32 bg-black mt-4"></div>
            </div>

      {/* Large Skills text in background */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-10">
        <h1 className="text-[200px] font-bold text-gray-400 leading-none">Skills</h1>
      </div>

      {/* Main Content - Three Skill Cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-8 z-10">
        <div className="grid grid-cols-3 gap-8">
          
          {/* Backend Developer Card */}
          <div className="border-2 border-black bg-white p-8 hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <FaCode className="text-4xl text-black group-hover:text-white transition-colors" />
              <h2 className="text-2xl font-bold font-mono text-black group-hover:text-white transition-colors">Backend Developer</h2>
            </div>
            
            <p className="text-base font-mono mb-6 leading-relaxed text-gray-900 group-hover:text-white transition-colors">
              I build scalable server-side applications and robust APIs that power modern web services.
            </p>
            
            <div className="mb-6">
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">I LIKE TO CODE IN</h3>
              <p className="text-sm font-mono leading-relaxed text-gray-800 group-hover:text-gray-200 transition-colors">
                Python, Java, Node.js, Go, PHP, Ruby, C#, Rust
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">DATABASES</h3>
              <p className="text-sm font-mono leading-relaxed text-gray-800 group-hover:text-gray-200 transition-colors">
                PostgreSQL, MySQL, MongoDB, Redis, Cassandra, DynamoDB
              </p>
            </div>
            
            <div>
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">TOOLS & FRAMEWORKS</h3>
              <ul className="text-sm font-mono space-y-1 text-gray-800 group-hover:text-gray-200 transition-colors">
                <li>• Django, Flask, FastAPI</li>
                <li>• Express.js, NestJS</li>
                <li>• Docker, Kubernetes</li>
                <li>• AWS, Azure, GCP</li>
              </ul>
            </div>
          </div>

          {/* Data Analyst Card */}
          <div className="border-2 border-black bg-white p-8 hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <FaChartLine className="text-4xl text-black group-hover:text-white transition-colors" />
              <h2 className="text-2xl font-bold font-mono text-black group-hover:text-white transition-colors">Data Analyst</h2>
            </div>
            
            <p className="text-base font-mono mb-6 leading-relaxed text-gray-900 group-hover:text-white transition-colors">
              I transform raw data into actionable insights through statistical analysis and interactive dashboards.
            </p>
            
            <div className="mb-6">
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">ANALYSIS TOOLS</h3>
              <p className="text-sm font-mono leading-relaxed text-gray-800 group-hover:text-gray-200 transition-colors">
                Python (Pandas, NumPy, SciPy), R, SQL, Excel, SPSS
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">VISUALIZATION</h3>
              <p className="text-sm font-mono leading-relaxed text-gray-800 group-hover:text-gray-200 transition-colors">
                Power BI, Tableau, Excel Dashboards, Google Data Studio
              </p>
            </div>
            
            <div>
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">TECHNIQUES</h3>
              <ul className="text-sm font-mono space-y-1 text-gray-800 group-hover:text-gray-200 transition-colors">
                <li>• Statistical Analysis</li>
                <li>• A/B Testing</li>
                <li>• Predictive Modeling</li>
                <li>• Data Mining</li>
              </ul>
            </div>
          </div>

          {/* Data Engineer Card */}
          <div className="border-2 border-black bg-white p-8 hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <FaDatabase className="text-4xl text-black group-hover:text-white transition-colors" />
              <h2 className="text-2xl font-bold font-mono text-black group-hover:text-white transition-colors">Data Engineer</h2>
            </div>
            
            <p className="text-base font-mono mb-6 leading-relaxed text-gray-900 group-hover:text-white transition-colors">
              I design and build data pipelines and infrastructure for processing large-scale datasets.
            </p>
            
            <div className="mb-6">
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">BIG DATA TOOLS</h3>
              <p className="text-sm font-mono leading-relaxed text-gray-800 group-hover:text-gray-200 transition-colors">
                Apache Spark, Hadoop, Kafka, Airflow, Flink
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">DATA WAREHOUSES</h3>
              <p className="text-sm font-mono leading-relaxed text-gray-800 group-hover:text-gray-200 transition-colors">
                Snowflake, Redshift, BigQuery, Databricks
              </p>
            </div>
            
            <div>
              <h3 className="font-bold font-mono mb-3 text-black group-hover:text-white transition-colors">SKILLS</h3>
              <ul className="text-sm font-mono space-y-1 text-gray-800 group-hover:text-gray-200 transition-colors">
                <li>• ETL/ELT Pipelines</li>
                <li>• Data Modeling</li>
                <li>• Stream Processing</li>
                <li>• Data Quality</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
