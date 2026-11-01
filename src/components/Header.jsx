import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ onOpenHireModal }) {
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 90) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          setNavVisible(false);
        } else if (lastScrollY - currentScrollY > 6) {
          setNavVisible(true);
        }
      } else {
        setNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireClick = () => {
    setMobileMenuOpen(false);
    if (onOpenHireModal) onOpenHireModal();
  };

  return (
    <header className="automotive-header-root">
      {/* 1. Smart Scroll Auto-Hide Navbar */}
      <nav className={`musa-top-nav ${navVisible ? 'nav-visible' : 'nav-hidden'}`}>
        <div
          className="musa-brand-group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
        >
          <span className="brand-primary-tag">CJxGameDev</span>
          <span className="brand-secondary-label">TECHNICAL LEVEL DESIGNER</span>
        </div>

        {/* Desktop Navigation */}
        <div className="musa-nav-menu desktop-only">
          <button
            type="button"
            className="nav-text-btn"
            onClick={() => scrollToSection('panel-selected-work')}
          >
            PROJECTS
          </button>
          <button
            type="button"
            className="nav-text-btn"
            onClick={() => scrollToSection('panel-models-set')}
          >
            3D MODELS
          </button>
          <a
            href="/Data/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-text-btn nav-resume-link"
          >
            RESUME
          </a>
          <button
            type="button"
            className="nav-hire-pill"
            onClick={onOpenHireModal}
          >
            <span>HIRE ME</span>
            <span className="hire-arrow">➔</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`musa-mobile-burger ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="burger-bar top-bar"></span>
          <span className="burger-bar mid-bar"></span>
          <span className="burger-bar bot-bar"></span>
        </button>

        {/* Mobile Flyout Menu */}
        <div className={`musa-mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
          <button
            type="button"
            className="mobile-drawer-btn"
            onClick={() => scrollToSection('panel-selected-work')}
          >
            PROJECTS
          </button>
          <button
            type="button"
            className="mobile-drawer-btn"
            onClick={() => scrollToSection('panel-models-set')}
          >
            3D MODELS
          </button>
          <a
            href="/Data/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            RESUME (PDF)
          </a>
          <button
            type="button"
            className="nav-hire-pill mobile-drawer-pill"
            onClick={handleHireClick}
          >
            <span>HIRE ME</span>
            <span className="hire-arrow">➔</span>
          </button>
        </div>
      </nav>

      {/* 2. Free-Floating Hero Viewport */}
      <div className="musa-hero-viewport right-aligned">
        <div className="hero-editorial-statement floating-hero-block">
          <h1 className="hero-dominant-display hero-anim-1">
            CHETAN JOSHI
          </h1>

          <h2 className="hero-sub-designer-tag hero-anim-2">
            TECHNICAL LEVEL DESIGNER
          </h2>

          <p className="hero-subordinate-body hero-anim-3">
            Level designer and 3D artist. I build metric-accurate blockouts, competitive sightlines, and the movement systems that make them playable.
          </p>

          <div className="hero-cta-line hero-anim-4">
            <button
              type="button"
              className="editorial-cta-pill primary"
              onClick={() => scrollToSection('panel-selected-work')}
            >
              <span>Explore Selected Work</span>
              <span className="cta-arrow">➔</span>
            </button>
            <a
              href="/Data/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-cta-pill ghost"
            >
              <span>View Resume 🗎</span>
            </a>
          </div>
        </div>

        {/* Engine Telemetry */}
        <div className="hero-telemetry-badge hero-anim-5">
          <span>UNREAL</span>
          <span>UNITY</span>
          <span>C#</span>
          <span>C++</span>
          <span>BLENDER</span>
          <span>KRITA</span>
          <span>PHOTOSHOP</span>
        </div>
      </div>
    </header>
  );
}