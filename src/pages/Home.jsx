import React from 'react';
import './Home.css';
import { projectsData, skillsList } from '../data/projectsData';

const UnityIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.38 17.38L8.14 21.26L2.34 17.91L4.58 14.03L10.38 17.38ZM21.66 17.91L15.86 21.26L13.62 17.38L19.42 14.03L21.66 17.91ZM12 2.74L17.8 6.09L15.56 9.97L9.76 6.62L12 2.74ZM12 8.78L16.24 11.23L13.76 15.52L9.52 13.07L12 8.78Z" />
  </svg>
);

const UnrealIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.42 4 20 7.58 20 12C20 14.09 19.2 15.98 17.88 17.41L15.34 14.87C15.76 14.05 16 13.06 16 12C16 9.79 14.21 8 12 8C11.18 8 10.42 8.25 9.78 8.68L7.38 6.28C8.72 4.86 10.26 4 12 4ZM4 12C4 9.91 4.8 8.02 6.12 6.59L8.66 9.13C8.24 9.95 8 10.94 8 12C8 14.21 9.79 16 12 16C12.82 16 13.58 15.75 14.22 15.32L16.62 17.72C15.28 19.14 13.74 20 12 20C7.58 20 4 16.42 4 12Z" />
  </svg>
);

const MonitorIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z" />
  </svg>
);

export default function Home({ onSelectProject, onNavigate }) {
  // Top 4 Level Design projects
  const topProjects = projectsData.slice(0, 4);
  // Bottom 2 row
  const bottomProjects = projectsData.slice(4, 6);

  const renderCard = (proj) => (
    <div
      key={proj.id}
      className="yp-card"
      onClick={() => onSelectProject && onSelectProject(proj)}
    >
      <div className="yp-card-poster">
        <img
          src={proj.thumbnail}
          alt={proj.title}
          className="yp-poster-img"
          style={proj.thumbStyle || {}}
        />

        {/* Top Badges */}
        <div className="yp-top-badges">
          <span className="yp-badge-pill">{proj.badge}</span>
          <div className="yp-meta-capsules">
            <span className="yp-icon-capsule" title={proj.engine}>
              {proj.engine.includes('Unreal') ? <UnrealIcon /> : <UnityIcon />}
            </span>
            <span className="yp-icon-capsule" title="PC Platform">
              <MonitorIcon />
            </span>
          </div>
        </div>

        {/* Hover Summary Overlay */}
        <div className="yp-hover-overlay">
          <div className="yp-hover-content">
            <div className="yp-hover-tags">
              <span className="yp-tag-pill">{proj.role}</span>
              <span className="yp-tag-pill">{proj.engine}</span>
            </div>
            <p className="yp-hover-desc">{proj.summary}</p>
            <div className="yp-hover-action">CLICK TO VIEW BREAKDOWN ➔</div>
          </div>
        </div>

        {/* Flush Frosted Glass Bar */}
        <div className="yp-glass-footer">
          <div className="yp-glass-avatar">
            <img
              src={proj.thumbnail}
              alt="icon"
              style={proj.thumbStyle || {}}
            />
          </div>
          <div className="yp-glass-text">
            <h3 className="yp-glass-title">{proj.title}</h3>
            <p className="yp-glass-date">
              {proj.role.toUpperCase()} • {proj.engine.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="home-page">
      {/* Cinematic Ayanokoji Backdrop */}
      <div className="home-cinematic-backdrop">
        <div className="backdrop-overlay-gradient"></div>
      </div>

      {/* 100vh Hero Screen */}
      <section id="hero" className="hero-screen">
        <div className="hero-center-box">
          <img
            src="/Data/CJ_cPPP4.png"
            alt="CJ Logo"
            className="hero-brand-logo"
          />
          <h1 className="hero-main-title">
            <span>CJ</span>
            <span className="accent-text">xGAMEDEV</span>
          </h1>
          <p className="hero-main-subtitle">LEVEL DESIGNER & GAME DEVELOPER</p>

          <a
            href="/Data/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume-pill"
          >
            MY RESUME 🗎
          </a>
        </div>

        <button
          className="scroll-down-pill"
          onClick={() => {
            const el = document.getElementById('about-preview');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          SCROLL DOWN 🠓
        </button>
      </section>

      {/* Content Container */}
      <div className="home-content-container">
        {/* Section 01: About */}
        <section id="about-preview" className="home-section">
          <div className="section-header-num">
            <span className="section-num">01</span>
            <h2 className="section-heading">ABOUT</h2>
          </div>
          <div className="about-text-block">
            <p>
              I'm <strong>Chetan Joshi (CJ)</strong>, a dedicated <strong>Level Designer</strong> and 3D Game Developer with <strong>2+ years of independent practice</strong> specializing in <strong>competitive arenas, psychological horror labyrinths, and high-velocity traversal layouts</strong>[cite: 26, 27]. Lead Developer at ThroneLeaf Games, authoring kinematic movement physics and metric-tight blockouts in <em>TenGen Parkour</em>[cite: 26].
            </p>
            <p>
              Actively designing spatial blockouts, encounter sightline pacing, and greybox prototypes using <strong>Unity C#</strong>, <strong>Unreal Engine</strong>, <strong>Blender 3D</strong>, and <strong>ProBuilder</strong>[cite: 26, 27]. Collaborating across indie titles including the nightmare labyrinth for <em>Devil's Legacy</em> and urban blockouts for <em>As The Stars Fall</em>.
            </p>
          </div>
        </section>

        {/* Section 02: Skills */}
        <section className="home-section">
          <div className="section-header-num">
            <span className="section-num">02</span>
            <h2 className="section-heading">MY LEVEL DESIGN SKILLS</h2>
          </div>
          <div className="skills-pill-grid">
            {skillsList.map((skill, idx) => (
              <div key={idx} className="skill-pill-item">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Section 03: Projects */}
        <section className="home-section">
          <div className="section-header-num">
            <span className="section-num">03</span>
            <h2 className="section-heading">FEATURED PROJECTS</h2>
          </div>

          {/* Row 1: 4 Cards */}
          <div className="yp-projects-grid yp-grid-4">
            {topProjects.map(renderCard)}
          </div>

          {/* Row 2: 5th & 6th cards aligned */}
          <div className="yp-projects-grid-bottom">
            {bottomProjects.map(renderCard)}
          </div>

          {/* View All Projects Button */}
          <div className="view-all-projects-box">
            <button
              className="view-all-btn"
              onClick={() => onNavigate && onNavigate('projects')}
            >
              VIEW ALL PROJECTS 🠚
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}