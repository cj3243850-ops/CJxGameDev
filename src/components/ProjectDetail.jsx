import React, { useState, useEffect } from 'react';
import './ProjectDetail.css';

const SteamIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-10 9.87c0 4.8 3.4 8.8 8 9.83v-5.27a3.5 3.5 0 0 1-.77-2.07l-3.21-.92a2.4 2.4 0 0 1-2.42-2.39 2.4 2.4 0 0 1 2.4-2.4c1.16 0 2.12.82 2.36 1.91l3.18.91a3.5 3.5 0 0 1 3.46-.86 3.5 3.5 0 0 1 2.65 2.66 3.5 3.5 0 0 1-.86 3.46v.04l-2.06 3.09a3.5 3.5 0 0 1-1.73-.45v4.54A10 10 0 0 0 12 2Z" />
  </svg>
);

const WebIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ShareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export default function ProjectDetail({ project, onClose, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    setCurrentSlide(0);
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.thumbnail];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pd-page-view">
      {/* 1. Sticky Header Bar */}
      <header className="pd-top-header">
        <div className="pd-nav-brand" onClick={onClose}>
          <img src="/Data/CJ_cPPP4.png" alt="CJ Logo" className="pd-brand-logo" />
        </div>

        <nav className="pd-nav-items">
          <button className="pd-nav-link active" onClick={onClose}>
            HOME
          </button>
          <button
            className="pd-nav-link"
            onClick={() => {
              onClose();
              if (onNavigate) onNavigate('projects');
            }}
          >
            PROJECTS
          </button>
          <button
            className="pd-nav-link"
            onClick={() => {
              onClose();
              if (onNavigate) onNavigate('about');
            }}
          >
            ABOUT ME
          </button>
        </nav>

        <div className="pd-nav-actions">
          <a href="mailto:cj3243850@gmail.com" className="pd-resume-pill">
            MY RESUME 🗎
          </a>
          <a
            href="https://www.linkedin.com/in/chetan-joshi-50922a2a4/"
            target="_blank"
            rel="noreferrer"
            className="pd-social-icon"
          >
            in
          </a>
          <a
            href="https://www.youtube.com/@CjxGameDev"
            target="_blank"
            rel="noreferrer"
            className="pd-social-icon"
          >
            ▶
          </a>
          <button className="pd-nav-close-btn" onClick={onClose} title="Back to Portfolio">
            ✕
          </button>
        </div>
      </header>

      {/* 2. Main Article View */}
      <main className="pd-main-article">
        {/* Title */}
        <h1 className="pd-title-heading">
          {project.caseTitle || `${project.title.toUpperCase()} : CASE STUDY`}
        </h1>

        {/* Lead Summary */}
        <div className="pd-lead-block">
          <p className="pd-lead-text">{project.summary}</p>
          {project.subtext && <p className="pd-lead-subtext">{project.subtext}</p>}
        </div>

        {/* Studio Meta Card */}
        <div className="pd-studio-card">
          <div className="pd-studio-left">
            <div className="pd-studio-avatar">
              <span className="pd-avatar-letter">{project.studio.charAt(0)}</span>
            </div>
            <div className="pd-studio-info">
              <h4 className="pd-studio-name">{project.studio.toUpperCase()}</h4>
              <p className="pd-studio-meta">
                {project.duration || '2025 - 2026'} • {project.role.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="pd-studio-right">
            <button className="pd-circle-btn" title="Platform">
              <SteamIcon />
            </button>
            <button className="pd-circle-btn" title="Website">
              <WebIcon />
            </button>
            <button
              className="pd-pill-share-btn"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: project.title, url: window.location.href });
                }
              }}
            >
              SHARE <ShareIcon />
            </button>
          </div>
        </div>

        {/* =========================================================
            PRIMARY SHOWCASE: VERTICAL TOP-TO-BOTTOM VIDEO FLOW
            ========================================================= */}
        {project.videoPlaylist ? (
          <div className="pd-vertical-video-feed">
            <h2 className="pd-section-heading">GAMEPLAY MECHANICS CLIPS STREAM</h2>
            <p className="pd-feed-subtitle">
              All 13 modular kinematic movement and gameplay interaction clips rendered sequentially.
            </p>

            <div className="pd-video-stack">
              {project.videoPlaylist.map((clip, idx) => (
                <div key={idx} className="pd-stacked-video-card">
                  <div className="pd-video-card-topbar">
                    <span className="pd-video-num-badge">VIDEO CLIP #{idx + 1}</span>
                    <span className="pd-video-title-text">{clip.title}</span>
                  </div>
                  <div className="pd-stacked-video-wrapper">
                    <video controls loop muted playsInline className="pd-stacked-video-element">
                      <source src={clip.file} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="pd-video-frame">
            {project.youtubeId ? (
              <div className="pd-embed-box">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : project.videoFile ? (
              <video autoPlay loop controls className="pd-video-element">
                <source src={project.videoFile} type="video/mp4" />
              </video>
            ) : (
              <img src={project.thumbnail} alt={project.title} className="pd-image-element" />
            )}
          </div>
        )}

        {/* Section 1 */}
        <section className="pd-content-section">
          <h2 className="pd-section-heading">
            {project.section1Title || 'WORKING TOWARDS THE RELEASE'}
          </h2>
          <p className="pd-section-paragraph">{project.section1Para}</p>

          <ul className="pd-bullet-points">
            {project.highlights?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 3D Models Breakdown */}
        {project.modelsList && (
          <section className="pd-models-breakdown-section">
            <h2 className="pd-section-heading">FEATURED ASSETS BREAKDOWN</h2>
            <div className="pd-models-grid">
              {project.modelsList.map((m, idx) => (
                <div key={idx} className="pd-model-card">
                  <h3 className="pd-model-title">{m.name}</h3>
                  <p className="pd-model-desc">{m.desc}</p>
                  <div className="pd-model-thumbs">
                    {m.video && (
                      <video autoPlay loop muted className="pd-model-thumb-media">
                        <source src={m.video} type="video/mp4" />
                      </video>
                    )}
                    {m.images?.map((imgSrc, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={imgSrc}
                        alt={`${m.name} shot`}
                        className="pd-model-thumb-media"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery Slider (Level Design & UI) */}
        {galleryImages.length > 0 && !project.modelsList && !project.videoPlaylist && (
          <section className="pd-slider-section">
            <div className="pd-slider-wrapper">
              <img
                src={galleryImages[currentSlide]}
                alt={`Screenshot ${currentSlide + 1}`}
                className="pd-slider-image"
              />

              {galleryImages.length > 1 && (
                <>
                  <button className="pd-arrow pd-arrow-prev" onClick={handlePrevSlide}>
                    ❮
                  </button>
                  <button className="pd-arrow pd-arrow-next" onClick={handleNextSlide}>
                    ❯
                  </button>
                  <div className="pd-counter-badge">
                    {currentSlide + 1} / {galleryImages.length}
                  </div>
                </>
              )}
            </div>
            <p className="pd-slider-caption">
              SCREENSHOT {currentSlide + 1} OF {galleryImages.length}
            </p>
          </section>
        )}

        {/* Section 2 */}
        <section className="pd-content-section">
          <h2 className="pd-section-heading">
            {project.section2Title || 'METRICS & ITERATION'}
          </h2>
          <p className="pd-section-paragraph">{project.section2Para}</p>
        </section>

        {/* Special Thanks */}
        <section className="pd-content-section pd-thanks-section">
          <h2 className="pd-section-heading">SPECIAL THANKS</h2>
          <p className="pd-section-paragraph">
            Special thanks to mentors, collaborators, and players testing builds and providing feedback.
          </p>

          {project.itchUrl && (
            <div className="pd-itch-row">
              <a href={project.itchUrl} target="_blank" rel="noreferrer" className="pd-itch-button">
                PLAY SHIPPED BUILD ON ITCH.IO 🠚
              </a>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}