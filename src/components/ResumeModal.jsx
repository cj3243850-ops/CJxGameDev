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
    <div className="resume-backdrop" onClick={onClose}>
      <div className="resume-panel" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="resume-topbar">
          <div className="resume-tag-box">
            <span className="resume-status-dot"></span>
            <span className="resume-pill-tag">VERIFIED RESUME // LEVEL DESIGN & DEV</span>
          </div>

          <div className="resume-top-actions">
            <a
              href="/Data/Resume.pdf"
              download="Chetan_Joshi_Resume.pdf"
              className="resume-btn-action"
              title="Download PDF"
            >
              DOWNLOAD PDF ⤓
            </a>
            <button
              onClick={() => window.print()}
              className="resume-btn-action secondary"
              title="Print Resume"
            >
              PRINT 🖨
            </button>
            <button className="resume-close-btn" onClick={onClose} title="Close (Esc)">
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Sheet */}
        <div className="resume-sheet">
          {/* Header */}
          <header className="sheet-header">
            <div className="sheet-title-block">
              <h1 className="sheet-name">CHETAN JOSHI (CJ)</h1>
              <p className="sheet-role">LEVEL DESIGNER & INDIE GAME DEVELOPER</p>
            </div>
            <div className="sheet-contact-block">
              <p><span>LOCATION:</span> Udaipur, Rajasthan, India</p>
              <p><span>EMAIL:</span> <a href="mailto:cj3243850@gmail.com">cj3243850@gmail.com</a></p>
              <p><span>STUDIO:</span> ThroneLeaf Games (Lead Dev)</p>
              <p><span>PORTFOLIO:</span> cjx-gamedev.vercel.app</p>
            </div>
          </header>

          {/* Section: Profile */}
          <section className="sheet-section">
            <h2 className="sheet-h2">CAREER SUMMARY & PROFILE</h2>
            <p className="sheet-body">
              Motivated Level Designer and 3D Technical Artist with <strong>2+ years of independent practice</strong> specializing in metric-accurate greybox blockouts, competitive sightline balancing, and responsive kinematic gameplay systems. Experienced in collaborating across distributed indie teams (DL-Core Indie Studio, Indie Collective) and directing in-house productions at ThroneLeaf Games. Adept at rapid whitebox prototyping in Unity ProBuilder and Unreal Engine, complemented by robust SubD hard-surface modeling pipelines in Blender.
            </p>
          </section>

          {/* Section: Technical Skills */}
          <section className="sheet-section">
            <h2 className="sheet-h2">TECHNICAL SKILLS & WORKFLOW</h2>
            <div className="sheet-skills-grid">
              <div className="sheet-skill-col">
                <h3>LEVEL DESIGN & ARCHITECTURE</h3>
                <ul>
                  <li>Greyboxing & Metric Blockouts (Unity ProBuilder, Unreal Engine 5)</li>
                  <li>Spatial Pacing, Sightlines & Choke-Point Balancing</li>
                  <li>Symmetrical 3-Lane Competitive Arena Layouts</li>
                  <li>Narrative Audio Cue Integration & Navigation Anchor Readability</li>
                </ul>
              </div>
              <div className="sheet-skill-col">
                <h3>GAME ENGINES & SCRIPTING</h3>
                <ul>
                  <li>Unity (3D & 2D Architecture, Universal RP)</li>
                  <li>C# Kinematic Gameplay Controllers (Wall-Run, Slide-Hop, Mantle)</li>
                  <li>Unreal Engine Blueprint Layout Prototyping</li>
                  <li>Languages: C#, C, Python, JavaScript, HTML/CSS</li>
                </ul>
              </div>
              <div className="sheet-skill-col">
                <h3>3D MODELING & ART PIPELINE</h3>
                <ul>
                  <li>Blender (Hard-Surface SubD, Non-Destructive Booleans, Bevel Weights)</li>
                  <li>Weighted Normals & PBR Low-to-High Poly Baking Workflows</li>
                  <li>Texture Atlasing, Draw-Call Optimization & UV Packing (&gt;85%)</li>
                  <li>Stylized Environment & Prop Asset Creation</li>
                </ul>
              </div>
              <div className="sheet-skill-col">
                <h3>SYSTEMS & OS ENVIRONMENTS</h3>
                <ul>
                  <li>Arch Linux, EndeavourOS, Nobara (High-performance render setups)</li>
                  <li>Git / GitHub Version Control Pipelines</li>
                  <li>Game UI / HUD Systems (Unity Canvas, Responsive Layouts)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Core Experience & Projects */}
          <section className="sheet-section">
            <h2 className="sheet-h2">PRODUCTION PROJECTS & LEVEL DESIGN HIGHLIGHTS</h2>

            {/* TenGen Parkour */}
            <div className="sheet-item">
              <div className="sheet-item-row">
                <h3 className="sheet-item-title">TenGen Parkour — High-Speed Traversal Game</h3>
                <span className="sheet-item-date">8 MONTHS (2025 - 2026)</span>
              </div>
              <p className="sheet-item-sub">Lead Developer & Level Designer • ThroneLeaf Games • Released PC Beta on Itch.io</p>
              <ul className="sheet-bullets">
                <li>Engineered custom kinematic C# movement controller delivering jitter-free wall-runs, slide-hops, ledge mantles, and momentum buffers.</li>
                <li>Designed and greyboxed 7 escalating platforming obstacle courses calibrated to rhythmic acceleration pacing.</li>
                <li>Modeled 50+ modular 3D props and urban assets in Blender with strict collision hull optimization.</li>
              </ul>
            </div>

            {/* Devil's Legacy */}
            <div className="sheet-item">
              <div className="sheet-item-row">
                <h3 className="sheet-item-title">Devil's Legacy : The Final Dream Maze</h3>
                <span className="sheet-item-date">ACTIVE COLLABORATION (2025 - PRESENT)</span>
              </div>
              <p className="sheet-item-sub">Level Designer • DL-Core Indie Studio • Unity</p>
              <ul className="sheet-bullets">
                <li>Authored psychological survival horror corridor maze calibrated for high-tension chase pacing and spatial disorientation.</li>
                <li>Engineered circular pillar rotunda anchor and deceptive double-back junctions synced with narrative music-box audio triggers.</li>
              </ul>
            </div>

            {/* As The Stars Fall */}
            <div className="sheet-item">
              <div className="sheet-item-row">
                <h3 className="sheet-item-title">As The Stars Fall : The Green City</h3>
                <span className="sheet-item-date">ACTIVE COLLABORATION (2025 - PRESENT)</span>
              </div>
              <p className="sheet-item-sub">Environment & Level Designer • Indie Collective • Blender / Unity</p>
              <ul className="sheet-bullets">
                <li>Constructed low-poly urban street grid scaled for kid-proportioned traversal mechanics (~100cm scale).</li>
                <li>Strategically placed landmark anchors (Subway, Pharmacy, Bookstore) to maintain wayfinding readability without intrusive UI markers.</li>
              </ul>
            </div>

            {/* Tactical Arena */}
            <div className="sheet-item">
              <div className="sheet-item-row">
                <h3 className="sheet-item-title">Tactical 6v6 Arena — Competitive FPS Blockout</h3>
                <span className="sheet-item-date">1-WEEK SPRINT (2025)</span>
              </div>
              <p className="sheet-item-sub">Level Designer • Solo Sprint • Unreal Engine</p>
              <ul className="sheet-bullets">
                <li>Developed symmetrical 3-lane Capture-The-Flag arena blockout balancing sprint timings from both spawn points.</li>
                <li>Engineered cover placements to eliminate unfair sniper sightlines while providing high-ground catwalk verticality.</li>
              </ul>
            </div>

            {/* 3D Asset Collection */}
            <div className="sheet-item">
              <div className="sheet-item-row">
                <h3 className="sheet-item-title">Hard-Surface 3D Asset Pipeline</h3>
                <span className="sheet-item-date">2+ YEARS INDEPENDENT PRACTICE</span>
              </div>
              <p className="sheet-item-sub">3D Modeler • Blender 3D</p>
              <ul className="sheet-bullets">
                <li>Authored 6 comprehensive production assets: Combat Robot Foot Assembly, Ring Spaceship (Q-Ship), 3D Perfume Bottle Lookdev, Sci-Fi Modular Tower, Hand-Painted Supply Box, and Robotic Sci-Fi Hard-Surface Crate.</li>
                <li>Mastered weighted normals, edge bevel weights, and high-to-low poly baking for pristine real-time PBR shading.</li>
              </ul>
            </div>
          </section>

          {/* Section: Education */}
          <section className="sheet-section">
            <h2 className="sheet-h2">EDUCATION</h2>
            <div className="sheet-item-row">
              <div>
                <h3 className="sheet-item-title">Bachelor of Technology (B.Tech) in Computer Science & Engineering</h3>
                <p className="sheet-item-sub">Techno India NJR Institute of Technology (Affiliated with RTU), Udaipur, Rajasthan</p>
              </div>
              <span className="sheet-item-date">2025 – PRESENT</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}