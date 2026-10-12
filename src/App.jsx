import React, { useState } from 'react';
import './App.css';
import SplashScreen from './components/SplashScreen';
import ProjectDetail from './components/ProjectDetail';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavigate = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* 1. Splash Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* 2. Left Side Vertical Watermark Rail */}
      <div className="vertical-watermark-rail">
        <div className="vertical-watermark-text">
          {activeTab.toUpperCase()} — LEVEL DESIGN — CJxGAMEDEV — PORTFOLIO —
        </div>
      </div>

      {/* 3. Top Navigation */}
      <nav className="top-nav">
        <div className="nav-brand" onClick={() => handleNavigate('home')}>
          <img src="/Data/CJ_cPPP4.png" alt="CJ Logo" className="brand-logo" />
        </div>

        <div className="nav-links">
          <button
            className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigate('home')}
          >
            HOME
          </button>
          <button
            className={`nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavigate('projects')}
          >
            PROJECTS
          </button>
          <button
            className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleNavigate('about')}
          >
            ABOUT ME
          </button>
        </div>

        <div className="nav-actions">
          {/* Click karne par direct Resume.pdf open hogi */}
          <a
            href="/Data/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            MY RESUME 🗎
          </a>
          <a
            href="https://www.linkedin.com/in/chetan-joshi-50922a2a4/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            title="LinkedIn"
          >
            in
          </a>
          <a
            href="https://www.youtube.com/@CjxGameDev"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            title="YouTube"
          >
            ▶
          </a>
        </div>
      </nav>

      {/* 4. Page Viewport */}
      <div className="main-viewport">
        {activeTab === 'home' && (
          <Home
            onSelectProject={(proj) => setSelectedProject(proj)}
            onNavigate={handleNavigate}
          />
        )}
        {activeTab === 'projects' && (
          <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
        )}
        {activeTab === 'about' && <About />}
      </div>

      {/* 5. Footer */}
      <footer className="site-footer">
        <p>© 2026 CHETAN JOSHI — CJxGameDev Portfolio</p>
      </footer>

      {/* 6. Modular Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}