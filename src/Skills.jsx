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
        <h1 className="text-4xl font-bold text-black">HR</h1>
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
      <div className="absolute left-12 top-[350px] flex flex-col items-center gap-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anto-raphael-d"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-black hover:text-gray-600"
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
            className="p-2 text-black hover:text-gray-600"
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
            className="p-2 text-black hover:text-gray-600"
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
          <div className="w-[6px] h-[250px] bg-black mt-8"></div>
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
