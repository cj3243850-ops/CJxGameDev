import React from 'react';
import './Footer.css';

export default function Footer({ onOpenHireModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="musa-footer-wrapper">
      {/* UNIFIED SCROLL STAGE */}
      <div className="footer-unified-scroll-stage reveal-on-scroll">
        
        {/* UPPER HERO VIEWPORT (Clean Left Docked) */}
        <div className="footer-hero-left-dock">
          <h2 className="footer-monumental-headline">
            LET'S BUILD<br />PLAYABLE WORLDS.
          </h2>
          
          <p className="footer-editorial-lead">
            Available for Technical Level Design contracts, metric-accurate greybox blockouts, whitebox prototyping, and kinematic gameplay systems implementation.
          </p>

          <div className="footer-cta-row">
            <button
              type="button"
              className="editorial-cta-pill primary"
              onClick={onOpenHireModal}
            >
              <span>HIRE ME</span>
              <span className="cta-arrow">➔</span>
            </button>
            <button
              type="button"
              className="editorial-cta-pill ghost"
              onClick={scrollToTop}
            >
              <span>BACK TO TOP</span>
              <span className="cta-arrow">↑</span>
            </button>
          </div>
        </div>

        {/* LOWER COMPACT TRANSLUCENT CURTAIN PANEL */}
        <div className="footer-sliding-curtain-panel compact-glass">
          {/* MUSA / BMW Style Vibrant Tri-Color Accent Band */}
          <div className="musa-accent-band-strip" aria-hidden="true">
            <div className="musa-band-segment bmw-blue"></div>
            <div className="musa-band-segment bmw-navy"></div>
            <div className="musa-band-segment bmw-red"></div>
          </div>

          {/* Four-Column Architecture Grid */}
          <div className="footer-musa-columns-grid">
            {/* Col 1: Brand */}
            <div className="musa-col col-brand">
              <h3 className="musa-brand-heading">CJxGameDev</h3>
              <p className="musa-brand-sub">TECHNICAL LEVEL DESIGNER</p>
              <span className="musa-brand-meta">UDAIPUR, RAJASTHAN, INDIA</span>
            </div>

            {/* Col 2: Direct Contact */}
            <div className="musa-col col-contact">
              <a href="mailto:official.cjxgamedev" className="musa-contact-link primary-mail">
                official.cjxgamedev@gmail.com
              </a>
              <p className="musa-contact-text">Remote / Worldwide Distributed Ready</p>
              <p className="musa-contact-text">IST (UTC +5:30) Timezone</p>
              <a href="/Data/Resume.pdf" target="_blank" rel="noopener noreferrer" className="musa-contact-link resume-action">
                Download Verified Resume ➔
              </a>
            </div>

            {/* Col 3: Navigation */}
            <div className="musa-col col-nav">
              <span className="musa-col-title">NAVIGATION</span>
              <button className="musa-nav-btn" onClick={() => scrollToSection('panel-selected-work')}>
                Selected Work
              </button>
              <button className="musa-nav-btn" onClick={() => scrollToSection('panel-models-set')}>
                3D Models Suite
              </button>
              <button className="musa-nav-btn" onClick={scrollToTop}>
                Overview
              </button>
            </div>

            {/* Col 4: Platforms */}
            <div className="musa-col col-platforms">
              <span className="musa-col-title">PLATFORMS</span>
              <a href="https://www.linkedin.com/in/chetan-joshi-50922a2a4/" target="_blank" rel="noreferrer" className="musa-nav-btn">
                LinkedIn
              </a>
              <a href="https://theroneleaf-games.itch.io/tg-parkour" target="_blank" rel="noreferrer" className="musa-nav-btn">
                Itch.io
              </a>
              <a href="https://www.youtube.com/@CjxGameDev" target="_blank" rel="noreferrer" className="musa-nav-btn">
                YouTube
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}