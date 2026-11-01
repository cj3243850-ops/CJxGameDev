import React, { useEffect } from 'react';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resume-editorial-backdrop" onClick={onClose}>
      <div className="resume-editorial-card" onClick={(e) => e.stopPropagation()}>
        <div className="resume-topbar">
          <div className="resume-brand-tag">
            <span className="brand-dot"></span>
            <span>CHETAN JOSHI · TECHNICAL LEVEL DESIGNER</span>
          </div>

          <div className="resume-actions">
            <a
              href="/Data/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Chetan_Joshi_Resume.pdf"
              className="resume-pill-btn"
            >
              DOWNLOAD PDF ⤓
            </a>
            <button className="resume-close-pill" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        <div className="resume-scroll-body">
          <header className="resume-header-block">
            <h1 className="resume-name">CHETAN JOSHI</h1>
            <p className="resume-title">TECHNICAL LEVEL DESIGNER & GAME DEVELOPER</p>
            <p className="resume-meta">Udaipur, Rajasthan, India · cj3243850@gmail.com · Lead Developer, ThroneLeaf Games</p>
          </header>

          <section className="resume-section">
            <h3 className="section-label">01 / SUMMARY & OBJECTIVE</h3>
            <p className="section-p">
              Technical Level Designer with 2+ years of engine and modelling practice. I work on metric-driven greybox blockouts, competitive sightlines and responsive player movement, and I'm currently building indie titles with teams across different time zones.
            </p>
          </section>

          <section className="resume-section">
            <h3 className="section-label">02 / CORE TECHNICAL COMPETENCIES</h3>
            <div className="skills-editorial-grid">
              <div className="skill-item">
                <h4>LEVEL DESIGN</h4>
                <p>Greyboxing in Unity ProBuilder and Unreal Engine 5, symmetrical three-lane CTF metrics, sightline breaking, spatial pacing and player wayfinding.</p>
              </div>
              <div className="skill-item">
                <h4>PROGRAMMING & ENGINES</h4>
                <p>Unity C#, Unreal Engine Blueprints, kinematic movement controllers, state machines, C, Python, JavaScript.</p>
              </div>
              <div className="skill-item">
                <h4>3D MODELING & ART PIPELINE</h4>
                <p>Blender sub-d hard-surface modelling, non-destructive booleans, bevel modifiers, weighted normals and real-time PBR baking.</p>
              </div>
              <div className="skill-item">
                <h4>TOOLS & SYSTEMS</h4>
                <p>Git and GitHub, Linux workstations (Arch, EndeavourOS, Nobara), Krita, Unity UI Toolkit.</p>
              </div>
            </div>
          </section>

          <section className="resume-section">
            <h3 className="section-label">03 / PRODUCTION HIGHLIGHTS</h3>

            <div className="project-entry">
              <div className="project-title-row">
                <span className="entry-title">TenGent Parkour — High-Speed Traversal Game</span>
                <span className="entry-date">2025 – 2026</span>
              </div>
              <span className="entry-role">Lead Developer & Level Designer · ThroneLeaf Games (PC beta released on itch.io)</span>
              <ul className="entry-bullets">
                <li>Wrote the C# kinematic controller, with jitter-free wall-running, slide-hopping and ledge mantles.</li>
                <li>Designed seven obstacle courses with an escalating difficulty curve, paced to sprint rhythm.</li>
              </ul>
            </div>

            <div className="project-entry">
              <div className="project-title-row">
                <span className="entry-title">Devil's Legacy : The Final Dream Maze</span>
                <span className="entry-date">Collaboration (2025 – present)</span>
              </div>
              <span className="entry-role">Level Designer · DL-Core Indie Studio · Unity</span>
              <ul className="entry-bullets">
                <li>Designed a survival horror corridor maze around chase speed and deliberate disorientation.</li>
                <li>Built a circular pillar rotunda as the anchor point, plus double-back junctions timed to the audio triggers.</li>
              </ul>
            </div>

            <div className="project-entry">
              <div className="project-title-row">
                <span className="entry-title">Tactical 6v6 Arena — Competitive FPS Blockout</span>
                <span className="entry-date">1-week sprint (2025)</span>
              </div>
              <span className="entry-role">Level Designer · Solo Sprint · Unreal Engine</span>
              <ul className="entry-bullets">
                <li>Symmetrical three-lane CTF blockout with matched sprint timings from both spawns.</li>
                <li>Staggered cover that removes unfair sniper lines while keeping the catwalks exposed.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h3 className="section-label">04 / EDUCATION</h3>
            <div className="project-entry">
              <div className="project-title-row">
                <span className="entry-title">Bachelor of Technology (B.Tech) in Computer Science & Engineering</span>
                <span className="entry-date">2025 – present</span>
              </div>
              <span className="entry-role">Techno India NJR Institute of Technology (affiliated with RTU), Udaipur</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}