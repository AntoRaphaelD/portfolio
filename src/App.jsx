import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PortfolioPage from './PortfolioPage';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Bio from './Bio';
import Resume from './Resume';

// Page wrapper for animation
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -80 }}
    transition={{ duration: 0.45, ease: "easeInOut" }}
    style={{ minHeight: "100vh" }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/bio" element={<PageWrapper><Bio /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
