import React, { useState } from 'react';
import './Projects.css';
import { projectsData } from '../data/projectsData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'LEVEL DESIGN', 'GAME MECHANICS', '3D MODELS', 'GAME UI'];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page-view">
      <div className="projects-container">
        {/* Header Block */}
        <div className="projects-header">
          <span className="projects-pill-tag">PORTFOLIO ARCHIVE</span>
          <h1 className="projects-main-title">ALL PROJECTS & CREATIVE WORKS</h1>
          <p className="projects-subtitle">
            Explore complete case studies across Level Design Blockouts, Gameplay Mechanics, 3D Hard-Surface Models, and Game UI Systems.
          </p>

          {/* Interactive Filter Pills */}
          <div className="projects-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="projects-archive-grid">
          {filteredProjects.map((proj) => {
            const isSpecialSection =
              proj.category === 'GAME MECHANICS' ||
              proj.category === '3D MODELS' ||
              proj.category === 'GAME UI';

            return (
              <div
                key={proj.id}
                className={`projects-card ${isSpecialSection ? 'card-highlight-yellow' : ''}`}
                onClick={() => onSelectProject(proj)}
              >
                <div className="projects-poster-box">
                  <img
                    src={proj.thumbnail}
                    alt={proj.title}
                    className="projects-img"
                    style={proj.thumbStyle || {}}
                  />
                  <span className="projects-badge-label">{proj.badge}</span>
                  <span
                    className={`projects-cat-tag ${
                      isSpecialSection ? 'cat-tag-yellow' : ''
                    }`}
                  >
                    {proj.category}
                  </span>
                </div>

                <div className="projects-info-box">
                  <h3 className="projects-card-title">{proj.title}</h3>
                  <p className="projects-card-engine">
                    {proj.role.toUpperCase()} • {proj.engine.toUpperCase()}
                  </p>
                  <p className="projects-card-desc">{proj.summary}</p>
                  <div
                    className={`projects-card-action ${
                      isSpecialSection ? 'action-yellow' : ''
                    }`}
                  >
                    VIEW CASE STUDY ➔
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}