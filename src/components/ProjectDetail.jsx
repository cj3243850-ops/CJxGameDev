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

const GamepadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <line x1="15" y1="13" x2="15.01" y2="13" />
    <line x1="18" y1="11" x2="18.01" y2="11" />
    <rect x="2" y="6" width="20" height="12" rx="6" />
  </svg>
);

export default function ProjectDetail({ project, onClose, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Model Preview Modal State
  const [previewModal, setPreviewModal] = useState(null);
  // previewModal structure: { modelName: '', desc: '', items: [], currentIndex: 0 }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (previewModal) setPreviewModal(null);
        else if (showDemoModal) setShowDemoModal(false);
        else onClose();
      }
      if (previewModal) {
        if (e.key === 'ArrowLeft') handlePrevPreview();
        if (e.key === 'ArrowRight') handleNextPreview();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, showDemoModal, previewModal]);

  useEffect(() => {
    setCurrentSlide(0);
    setPreviewModal(null);
    setSubmitStatus(null);
    window.scrollTo(0, 0);

    if (project) {
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: `[DEMO REQUEST] Playable Build - ${project.title}`,
        message: `Hi Chetan,\n\nI reviewed your level design case study for "${project.title}" and would like to request access to the playable demo / executable build for spatial evaluation.\n\nPlatform requirement: Windows PC.`
      });
    }
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

  // Model Preview Handlers
  const openModelPreview = (model, startIndex = 0) => {
    const items = [];
    if (model.video) items.push({ type: 'video', src: model.video });
    if (model.images && model.images.length > 0) {
      model.images.forEach((img) => items.push({ type: 'image', src: img }));
    }
    setPreviewModal({
      modelName: model.name,
      desc: model.desc,
      items,
      currentIndex: startIndex
    });
  };

  const handlePrevPreview = () => {
    if (!previewModal) return;
    setPreviewModal((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.items.length - 1 : prev.currentIndex - 1
    }));
  };

  const handleNextPreview = () => {
    if (!previewModal) return;
    setPreviewModal((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === prev.items.length - 1 ? 0 : prev.currentIndex + 1
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ success: false, text: 'Please fill in Name, Email & Message.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '979d1ddb-39f6-4394-9d53-5381975ac340',
          subject: formData.subject,
          from_name: formData.name,
          email: formData.email,
          organization: formData.organization || 'Independent',
          project_requested: project.title,
          message: formData.message
        })
      });

      const res = await response.json();
      if (res.success) {
        setSubmitStatus({ success: true, text: 'Demo request sent successfully to inbox!' });
        setTimeout(() => {
          setShowDemoModal(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        throw new Error(res.message || 'Submission failed');
      }
    } catch {
      setSubmitStatus({
        success: false,
        text: 'Dispatching via email client fallback...'
      });
      setTimeout(() => {
        const mailtoUrl = `mailto:cj3243850@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `${formData.message}\n\nSender:${formData.name} (${formData.email})\nStudio:${formData.organization || 'Independent'}`
        )}`;
        window.location.href = mailtoUrl;
      }, 1200);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pd-page-view">
      {/* Animated Downward Arrow Rails */}
      <div className="pd-arrow-rail pd-arrow-rail-left">
        <div className="pd-arrow-track">
          <span className="pd-rail-arrow-icon">🠓</span>
          <span className="pd-rail-arrow-icon">🠓</span>
          <span className="pd-rail-arrow-icon">🠓</span>
          <span className="pd-rail-arrow-icon">🠓</span>
          <span className="pd-rail-arrow-icon">🠓</span>
        </div>
      </div>

      <div className="pd-arrow-rail pd-arrow-rail-right">
        <div className="pd-arrow-track">
          <span className="pd-rail-arrow-icon">🠓</span>
          <span className="pd-rail-arrow-icon">🠓</span>
          <span className="pd-rail-arrow-icon">🠓</span>
          <span className="pd-rail-arrow-icon">🠓</span>
          <span className="pd-rail-arrow-icon">🠓</span>
        </div>
      </div>

      {/* Header Bar */}
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
          <a
            href="/Data/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-resume-pill"
          >
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

      {/* Main Case Study Article */}
      <main className="pd-main-article">
        <h1 className="pd-title-heading">
          {project.caseTitle || `${project.title.toUpperCase()} : CASE STUDY`}
        </h1>

        <div className="pd-lead-block">
          <p className="pd-lead-text">{project.summary}</p>
          {project.subtext && <p className="pd-lead-subtext">{project.subtext}</p>}
        </div>

        {/* Studio Meta Card */}
        <div className="pd-studio-card">
          <div className="pd-studio-left">
            <div className="pd-studio-avatar">
              <span className="pd-avatar-letter">{project.studio ? project.studio.charAt(0) : 'C'}</span>
            </div>
            <div className="pd-studio-info">
              <h4 className="pd-studio-name">{project.studio ? project.studio.toUpperCase() : 'INDEPENDENT'}</h4>
              <p className="pd-studio-meta">
                {project.duration} • {project.role.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="pd-studio-right">
            <button
              className="pd-request-demo-pill"
              onClick={() => setShowDemoModal(true)}
              title="Request Playable Demo / Build Access"
            >
              <GamepadIcon />
              <span>REQUEST DEMO</span>
            </button>

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

        {/* Video / Showcase Stage */}
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

        {/* 3D Models Breakdown (Clickable Thumbnail with Zoom Preview) */}
        {project.modelsList && (
          <section id="pd-models-breakdown" className="pd-models-breakdown-section">
            <div className="pd-section-title-tag-row">
              <span className="pd-tag-pill-yellow">6 UNIQUE 3D MODELS</span>
              <h2 className="pd-section-heading">FEATURED ASSETS BREAKDOWN</h2>
            </div>
            <p className="pd-models-lead-text">
              Click on any asset thumbnail below to open the fullscreen 3D model inspection panel.
            </p>

            <div className="pd-models-grid">
              {project.modelsList.map((m, idx) => (
                <div key={idx} className="pd-model-card">
                  <div className="pd-model-card-header">
                    <span className="pd-model-number-tag">MODEL #{idx + 1}</span>
                    <h3 className="pd-model-title">{m.name}</h3>
                  </div>
                  <p className="pd-model-desc">{m.desc}</p>

                  <div className="pd-model-thumbs">
                    {m.video && (
                      <div
                        className="pd-thumb-clickable-box"
                        onClick={() => openModelPreview(m, 0)}
                        title="Click to inspect model turntable video"
                      >
                        <video autoPlay loop muted playsInline className="pd-model-thumb-media">
                          <source src={m.video} type="video/mp4" />
                        </video>
                        <div className="pd-thumb-zoom-badge">🔍 VIEW</div>
                      </div>
                    )}
                    {m.images?.map((imgSrc, imgIdx) => {
                      const startIndex = m.video ? imgIdx + 1 : imgIdx;
                      return (
                        <div
                          key={imgIdx}
                          className="pd-thumb-clickable-box"
                          onClick={() => openModelPreview(m, startIndex)}
                          title={`Click to inspect ${m.name} shot ${imgIdx + 1}`}
                        >
                          <img
                            src={imgSrc}
                            alt={`${m.name} screenshot ${imgIdx + 1}`}
                            className="pd-model-thumb-media"
                            onError={(e) => {
                              // Fallback agar 80000.png me path typo ho
                              if (imgSrc.includes('80000.png')) {
                                e.target.src = '/Data/800011.png';
                              }
                            }}
                          />
                          <div className="pd-thumb-zoom-badge">🔍 VIEW</div>
                        </div>
                      );
                    })}
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

      {/* =========================================================
          FULLSCREEN 3D MODEL INSPECTION PANEL MODAL
          ========================================================= */}
      {previewModal && (
        <div className="model-inspect-backdrop" onClick={() => setPreviewModal(null)}>
          <div className="model-inspect-card" onClick={(e) => e.stopPropagation()}>
            {/* Top Bar */}
            <div className="model-inspect-topbar">
              <div className="model-inspect-title-group">
                <span className="model-inspect-badge">MODEL INSPECTION VIEW</span>
                <h3 className="model-inspect-heading">{previewModal.modelName}</h3>
                <p className="model-inspect-desc">{previewModal.desc}</p>
              </div>
              <button
                className="model-inspect-close-btn"
                onClick={() => setPreviewModal(null)}
                title="Close Preview (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Media Stage */}
            <div className="model-inspect-stage">
              {previewModal.items[previewModal.currentIndex]?.type === 'video' ? (
                <video autoPlay loop controls className="model-inspect-media">
                  <source
                    src={previewModal.items[previewModal.currentIndex].src}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={previewModal.items[previewModal.currentIndex]?.src}
                  alt={previewModal.modelName}
                  className="model-inspect-media"
                />
              )}

              {/* Prev / Next Controls if multiple shots exist */}
              {previewModal.items.length > 1 && (
                <>
                  <button
                    className="model-inspect-arrow model-inspect-arrow-prev"
                    onClick={handlePrevPreview}
                    title="Previous Shot"
                  >
                    ❮
                  </button>
                  <button
                    className="model-inspect-arrow model-inspect-arrow-next"
                    onClick={handleNextPreview}
                    title="Next Shot"
                  >
                    ❯
                  </button>
                  <div className="model-inspect-counter">
                    {previewModal.currentIndex + 1} / {previewModal.items.length}
                  </div>
                </>
              )}
            </div>

            {/* Bottom Thumbs Strip */}
            {previewModal.items.length > 1 && (
              <div className="model-inspect-thumb-strip">
                {previewModal.items.map((item, idx) => (
                  <button
                    key={idx}
                    className={`model-inspect-thumb-btn ${previewModal.currentIndex === idx ? 'active' : ''}`}
                    onClick={() => setPreviewModal({ ...previewModal, currentIndex: idx })}
                  >
                    {item.type === 'video' ? (
                      <span className="thumb-video-icon">▶ VID</span>
                    ) : (
                      <img src={item.src} alt="thumb" className="thumb-strip-img" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Demo Request Modal */}
      {showDemoModal && (
        <div className="demo-modal-backdrop" onClick={() => setShowDemoModal(false)}>
          <div className="demo-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="demo-modal-top">
              <div className="demo-modal-title-box">
                <span className="demo-modal-chip">LEVEL DESIGN EVALUATION</span>
                <h3 className="demo-modal-heading">REQUEST PLAYABLE BUILD</h3>
                <p className="demo-modal-sub">
                  Target Project: <strong>{project.title}</strong>
                </p>
              </div>
              <button
                className="demo-modal-close"
                onClick={() => setShowDemoModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form className="demo-modal-form" onSubmit={handleFormSubmit}>
              <div className="demo-form-group">
                <label className="demo-label">RECIPIENT</label>
                <input
                  type="text"
                  value="cj3243850@gmail.com (Chetan Joshi)"
                  readOnly
                  className="demo-input demo-input-readonly"
                />
              </div>

              <div className="demo-form-row">
                <div className="demo-form-group">
                  <label className="demo-label">
                    YOUR NAME <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Lead Level Designer / Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="demo-input"
                    required
                  />
                </div>
                <div className="demo-form-group">
                  <label className="demo-label">
                    YOUR EMAIL <span className="req-star">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="contact@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="demo-input"
                    required
                  />
                </div>
              </div>

              <div className="demo-form-group">
                <label className="demo-label">STUDIO / COMPANY (OPTIONAL)</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="e.g. Indie Studio / Freelance Collective"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="demo-input"
                />
              </div>

              <div className="demo-form-group">
                <label className="demo-label">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="demo-input"
                  required
                />
              </div>

              <div className="demo-form-group">
                <label className="demo-label">
                  MESSAGE INTENT <span className="req-star">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="demo-textarea"
                  required
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`demo-status-banner ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.text}
                </div>
              )}

              <div className="demo-modal-actions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="demo-send-btn"
                >
                  {isSubmitting ? 'DISPATCHING...' : 'DISPATCH REQUEST ➔'}
                </button>
                <span className="demo-action-note">
                  Direct dispatch to Chetan Joshi via Web3Forms API
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}