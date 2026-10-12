import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page-view">
      <div className="about-content-wrapper">
        {/* Header Block */}
        <div className="about-header-block">
          <span className="about-pill-tag">LEVEL DESIGNER & GAME DEVELOPER</span>
          <h1 className="about-main-title">CHETAN JOSHI (CJ)</h1>
          <p className="about-lead-intro">
            Motivated 3D Artist and Level Designer with 2+ years of independent practice specializing in metric-accurate greybox blockouts, competitive sightlines, and responsive kinematic gameplay systems[cite: 26, 27].
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="about-grid-layout">
          {/* Left Column: Bio & Core Projects */}
          <div className="about-bio-col">
            <h2 className="about-section-h2">EXPERIENCE & LEVEL DESIGN PHILOSOPHY</h2>
            <p className="about-body-text">
              Based in <strong>Udaipur, Rajasthan, India</strong>, pursuing B.Tech in CSE at Techno India NJR (RTU)[cite: 26, 27]. Over the past <strong>2+ years of independent development and team collaboration</strong>, my focus has been crafting gameplay spaces where spatial readability and encounter pacing dictate player decision making[cite: 27].
            </p>
            <p className="about-body-text">
              Lead Developer at <strong>ThroneLeaf Games</strong>, directing <em>TenGen Parkour</em> while authoring modular blockouts and greybox pipelines across Unity and Unreal Engine[cite: 26].
            </p>

            <h2 className="about-section-h2" style={{ marginTop: '36px' }}>LEVEL DESIGN CASE HIGHLIGHTS</h2>

            {/* Project 1: Devil's Legacy */}
            <div className="about-project-breakdown-card">
              <h3 className="about-card-h3">Devil's Legacy : Final Dream Maze</h3>
              <p className="about-sub-details">Level Designer • DL-Core Indie Studio • Unity</p>
              <ul className="about-points-list">
                <li>Designed psychological horror corridor maze calibrated for demonic chase pacing.</li>
                <li>Engineered circular pillar rotunda anchor and fake dead-ends to induce panic-driven memorization.</li>
                <li>Synced spatial routing directly with narrative music-box audio cues.</li>
              </ul>
            </div>

            {/* Project 2: As The Stars Fall */}
            <div className="about-project-breakdown-card" style={{ marginTop: '16px' }}>
              <h3 className="about-card-h3">As The Stars Fall : The Green City</h3>
              <p className="about-sub-details">Environment & Level Designer • Indie Collective • Blender/Unity</p>
              <ul className="about-points-list">
                <li>Constructed low-poly urban blockout calibrated for kid-sized character proportions (~100cm scale).</li>
                <li>Strategically placed visual navigation anchors (Subway, Bookstore, Pharmacy) at sightline intersections.</li>
                <li>Streamlined modular architecture with unified 2K/4K texture atlases to eliminate draw-call overhead.</li>
              </ul>
            </div>

            {/* Project 3: Tactical 6v6 Arena */}
            <div className="about-project-breakdown-card" style={{ marginTop: '16px' }}>
              <h3 className="about-card-h3">Tactical 6v6 Arena</h3>
              <p className="about-sub-details">Level Designer • Unreal Engine</p>
              <ul className="about-points-list">
                <li>Symmetrical 3-lane Capture-The-Flag arena blockout with balanced sprint timings from both spawn bases.</li>
                <li>Calculated modular cover placement (containers, barriers) eliminating uncounterable sniper headglitches.</li>
                <li>Multi-tiered catwalk verticality balanced with vulnerable side-flank stairwell vectors.</li>
              </ul>
            </div>

            {/* Project 4: Citadel & Urban Transformation */}
            <div className="about-project-breakdown-card" style={{ marginTop: '16px' }}>
              <h3 className="about-card-h3">Citadel Blockout & Urban Transformation</h3>
              <p className="about-sub-details">Workflow Breakdown • Unity ProBuilder & ThroneLeaf Games</p>
              <ul className="about-points-list">
                <li>End-to-end rapid prototyping proving greybox collision hulls transition seamlessly into dressed castle art.</li>
                <li>Day-to-night urban transformation verifying player traversal readability across stylized neon lighting cues.</li>
              </ul>
            </div>

            {/* Project 5: TenGen Parkour */}
            <div className="about-project-breakdown-card" style={{ marginTop: '16px' }}>
              <h3 className="about-card-h3">TenGen Parkour & Kinematic Mechanics</h3>
              <p className="about-sub-details">Lead Developer • Shipped PC Beta (Itch.io)[cite: 26]</p>
              <ul className="about-points-list">
                <li>Custom C# kinematic physics controller for wall-runs, slide-hops, and mantles without physics jitter[cite: 26].</li>
                <li>Created 50+ custom 3D assets, modular urban obstacles, and 7 escalating obstacle gauntlets[cite: 26].</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="about-card-col">
            <div className="about-profile-card">
              <div className="about-avatar-preview">
                <img
                  src="/Data/3.jpeg"
                  alt="Chetan Joshi Profile"
                  className="about-avatar-img"
                />
              </div>

              <div className="about-card-details">
                <h3 className="about-card-name">CHETAN JOSHI (CJ)</h3>
                <p className="about-card-sub">Level Designer | Indie Game Developer[cite: 26]</p>

                <div className="about-info-list">
                  <div className="info-item">
                    <span className="info-key">PRACTICE:</span>
                    <span className="info-val">2+ Years (3D Assets & Game Dev)[cite: 27]</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">LOCATION:</span>
                    <span className="info-val">Udaipur, Rajasthan, India[cite: 26]</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">EMAIL:</span>
                    <span className="info-val">cj3243850@gmail.com[cite: 26]</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">EDUCATION:</span>
                    <span className="info-val">B.Tech CSE, Techno India NJR (RTU)[cite: 27]</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">DEV OS SETUP:</span>
                    <span className="info-val">Arch Linux, EndeavourOS, Nobara[cite: 26, 27]</span>
                  </div>
                </div>

                <div className="about-card-actions">
                  <a
                    href="/Data/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-btn"
                  >
                    VIEW RESUME PDF 🗎
                  </a>
                  <a
                    href="mailto:cj3243850@gmail.com"
                    className="about-social-link"
                  >
                    Contact ✉
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chetan-joshi-50922a2a4/"
                    target="_blank"
                    rel="noreferrer"
                    className="about-social-link"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.youtube.com/@CjxGameDev"
                    target="_blank"
                    rel="noreferrer"
                    className="about-social-link"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Category Grid */}
        <section className="about-skills-section">
          <h2 className="about-section-h2">TECHNICAL SKILLS & WORKFLOW</h2>
          <div className="about-skills-categories-grid">
            <div className="skill-cat-box">
              <h4 className="skill-cat-title">LEVEL DESIGN & PROTOTYPING</h4>
              <p className="skill-cat-items">
                Metric Testing, Encounter Sightlines, Spatial Routing, Choke-Point Balancing, Unity ProBuilder, Unreal Engine Greyboxing, Level Design Documentation
              </p>
            </div>
            <div className="skill-cat-box">
              <h4 className="skill-cat-title">3D ART & PIPELINE</h4>
              <p className="skill-cat-items">
                Blender (Low-poly, Hard-Surface SubD, Stylized Texturing, Character Setup, UV Atlasing, Weighted Normals)[cite: 26]
              </p>
            </div>
            <div className="skill-cat-box">
              <h4 className="skill-cat-title">GAME ENGINES & CODE</h4>
              <p className="skill-cat-items">
                Unity (3D/2D), C# Gameplay Scripting, Custom Kinematic Character Controllers, Godot, C, Python, HTML/CSS[cite: 26]
              </p>
            </div>
            <div className="skill-cat-box">
              <h4 className="skill-cat-title">OPTIMIZATION & SYSTEMS</h4>
              <p className="skill-cat-items">
                Arch Linux & EndeavourOS high-performance render environments, Draw Call Optimization, Texture Packing, UI/UX Systems[cite: 26, 27]
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}