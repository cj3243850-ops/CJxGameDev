import React, { useState, useEffect, useRef } from 'react';
import './ProjectDetail.css';

export default function ProjectDetail({ project, onClose, onRequestBuild }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewMedia, setPreviewMedia] = useState(null);

  // Unified Media Playback State
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('0:00');
  const [durationFormatted, setDurationFormatted] = useState('0:00');

  // Unified Audio State
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const overlayRef = useRef(null);
  const ytPlayerRef = useRef(null);
  const ytContainerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const nativeVideoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (previewMedia) setPreviewMedia(null);
        else if (onClose) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, previewMedia]);

  useEffect(() => {
    setCurrentSlide(0);
    setPreviewMedia(null);
    setVideoLoaded(false);
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
    setCurrentTimeFormatted('0:00');
    setDurationFormatted('0:00');
    if (overlayRef.current) overlayRef.current.scrollTop = 0;
  }, [project]);

  // YouTube API Integration
  useEffect(() => {
    if (!project || !project.youtubeId) return;

    let isSubscribed = true;

    const setupPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.destroy();
        } catch (e) {}
      }

      ytPlayerRef.current = new window.YT.Player(`custom-yt-${project.youtubeId}`, {
        videoId: project.youtubeId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          enablejsapi: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (e) => {
            if (!isSubscribed) return;
            setVideoLoaded(true);
            const total = e.target.getDuration();
            setDuration(total);
            setDurationFormatted(formatTime(total));
            e.target.setVolume(volume * 100);
            if (isMuted) e.target.mute();
            e.target.playVideo();
            setIsPlaying(true);
          },
          onStateChange: (e) => {
            if (!isSubscribed) return;
            if (e.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              setVideoLoaded(true);
            } else if (e.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            } else if (e.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              setProgress(100);
            }
          }
        }
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = setupPlayer;
      document.body.appendChild(tag);
    } else {
      setupPlayer();
    }

    progressIntervalRef.current = setInterval(() => {
      if (ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === 'function') {
        const curr = ytPlayerRef.current.getCurrentTime() || 0;
        const total = ytPlayerRef.current.getDuration() || 1;
        setProgress((curr / total) * 100);
        setCurrentTimeFormatted(formatTime(curr));
      }
    }, 250);

    return () => {
      isSubscribed = false;
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.destroy();
        } catch (e) {}
      }
    };
  }, [project]);

  const handleNativeTimeUpdate = () => {
    if (nativeVideoRef.current) {
      const curr = nativeVideoRef.current.currentTime || 0;
      const total = nativeVideoRef.current.duration || 1;
      setProgress((curr / total) * 100);
      setCurrentTimeFormatted(formatTime(curr));
    }
  };

  const handleNativeLoadedMetadata = () => {
    if (nativeVideoRef.current) {
      const total = nativeVideoRef.current.duration || 0;
      setDuration(total);
      setDurationFormatted(formatTime(total));
      setVideoLoaded(true);
      nativeVideoRef.current.volume = isMuted ? 0 : volume;
      nativeVideoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (project.youtubeId && ytPlayerRef.current && typeof ytPlayerRef.current.getPlayerState === 'function') {
      if (isPlaying) ytPlayerRef.current.pauseVideo();
      else ytPlayerRef.current.playVideo();
    } else if (nativeVideoRef.current) {
      if (nativeVideoRef.current.paused) {
        nativeVideoRef.current.play();
        setIsPlaying(true);
      } else {
        nativeVideoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetTime = clickPos * duration;

    if (project.youtubeId && ytPlayerRef.current && typeof ytPlayerRef.current.seekTo === 'function') {
      ytPlayerRef.current.seekTo(targetTime, true);
      setProgress(clickPos * 100);
    } else if (nativeVideoRef.current) {
      nativeVideoRef.current.currentTime = targetTime;
      setProgress(clickPos * 100);
    }
  };

  const handleVolumeChange = (newVol) => {
    const clamped = Math.max(0, Math.min(1, newVol));
    setVolume(clamped);
    setIsMuted(clamped === 0);

    if (project.youtubeId && ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === 'function') {
      if (clamped === 0) ytPlayerRef.current.mute();
      else {
        ytPlayerRef.current.unMute();
        ytPlayerRef.current.setVolume(clamped * 100);
      }
    } else if (nativeVideoRef.current) {
      nativeVideoRef.current.volume = clamped;
      nativeVideoRef.current.muted = clamped === 0;
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (isMuted) {
      setIsMuted(false);
      handleVolumeChange(volume === 0 ? 0.75 : volume);
    } else {
      setIsMuted(true);
      if (project.youtubeId && ytPlayerRef.current && typeof ytPlayerRef.current.mute === 'function') {
        ytPlayerRef.current.mute();
      } else if (nativeVideoRef.current) {
        nativeVideoRef.current.muted = true;
      }
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (ytContainerRef.current) {
      if (!document.fullscreenElement) {
        ytContainerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  if (!project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.thumbnail];

  // Specific checking: Sirf in teen projects par Itch.io khulega
  const isTengent = project.id === 'tengent-parkour';
  const isUrbanShowcase = project.id === 'transformation-breakdown' || (project.title && project.title.toLowerCase().includes('urban showcase'));
  const isCitadel = project.id === 'probuilder-showcase' || project.id === 'citadel-blockout';

  // In dono par Request Modal trigger hoga
  const isStarsFall = project.id === 'as-the-stars-fall';
  const isDevilsLegacy = project.id === 'devils-legacy';
  const is3DModels = project.id === '3d-models-collection' || Boolean(project.modelsList);

  const handleBuildRequest = (e, customTitle) => {
    e.stopPropagation();
    if (onRequestBuild) {
      onRequestBuild(customTitle || project.title);
    } else {
      window.location.href = `mailto:cj3243850@gmail.com?subject=${encodeURIComponent(`[REQUEST ACCESS] ${customTitle || project.title}`)}`;
    }
  };

  return (
    <div className="pd-editorial-overlay" ref={overlayRef} data-lenis-prevent="true">
      {/* Header Bar */}
      <header className="pd-editorial-nav">
        <div className="pd-nav-brand" onClick={onClose}>
          <span className="pd-nav-brand-title">CJxGameDev</span>
          <span className="pd-nav-brand-sub">TECHNICAL LEVEL DESIGNER</span>
        </div>

        <div className="pd-nav-controls">
          <a href="/Data/Resume.pdf" target="_blank" rel="noopener noreferrer" className="pd-resume-link">
            RESUME (PDF)
          </a>
          <button type="button" className="pd-close-btn" onClick={onClose} title="Close (Esc)">
            ✕
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pd-editorial-body-wrapper">
        <div className="pd-lead-editorial">
          <div className="pd-meta-lead-row">
            <span>ENGINE: {project.engine ? project.engine.toUpperCase() : 'BLENDER 3D & UNITY'}</span>
            <span>/</span>
            <span>ROLE: {is3DModels ? '3D HARD-SURFACE ARTIST' : 'TECHNICAL LEVEL DESIGNER'}</span>
            <span>/</span>
            <span>DURATION: {project.duration || '2025 - 2026'}</span>
          </div>

          <h1 className="pd-editorial-title">{project.caseTitle || project.title}</h1>
          <p className="pd-editorial-summary">{project.summary}</p>
        </div>

        {/* Video Canvas Stage */}
        {project.videoPlaylist ? (
          <div className="pd-mechanics-stream">
            <h2 className="pd-section-title">Gameplay Mechanics Clips</h2>
            <div className="pd-mechanics-grid">
              {project.videoPlaylist.map((clip, idx) => (
                <div key={idx} className="pd-mechanic-card">
                  <div className="pd-mechanic-header">
                    <span className="pd-mechanic-tag">SYSTEM 0{idx + 1}</span>
                    <span className="pd-mechanic-label">{clip.title}</span>
                  </div>
                  <video controls loop muted playsInline className="pd-mechanic-video">
                    <source src={clip.file} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        ) : !is3DModels ? (
          <div className="custom-cinematic-player-wrap" ref={ytContainerRef}>
            {!videoLoaded && (
              <div className="player-loading-skeleton">
                <div className="skeleton-grid-scan"></div>
                <div className="skeleton-status-box">
                  <div className="scanner-line"></div>
                  <span className="skeleton-text">Loading level walkthrough...</span>
                  <span className="skeleton-sub">1080p · Metric validation</span>
                </div>
              </div>
            )}

            <div className="custom-media-frame">
              {project.youtubeId ? (
                <div className="custom-yt-crop">
                  <div id={`custom-yt-${project.youtubeId}`} className="yt-iframe-fill" />
                </div>
              ) : project.videoFile ? (
                <video
                  ref={nativeVideoRef}
                  playsInline
                  onTimeUpdate={handleNativeTimeUpdate}
                  onLoadedMetadata={handleNativeLoadedMetadata}
                  onCanPlay={() => setVideoLoaded(true)}
                  onWaiting={() => setVideoLoaded(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="native-stream-video"
                >
                  <source src={project.videoFile} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  onLoad={() => setVideoLoaded(true)}
                  className="fallback-static-img"
                />
              )}
            </div>

            {/* Custom SVG Controls Bar */}
            <div className="inbuilt-player-controls-bar">
              <button type="button" className="inbuilt-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>

              <div className="inbuilt-scrub-timeline" onClick={handleSeek}>
                <div className="inbuilt-scrub-track">
                  <div className="inbuilt-scrub-progress" style={{ width: `${progress}%` }}>
                    <span className="scrub-playhead"></span>
                  </div>
                </div>
              </div>

              <div className="inbuilt-timestamp">
                <span>{currentTimeFormatted}</span>
                <span className="time-sep">/</span>
                <span>{durationFormatted}</span>
              </div>

              <div
                className="inbuilt-volume-cluster"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <button type="button" className="inbuilt-btn volume-btn" onClick={toggleMute} title="Volume">
                  {isMuted || volume === 0 ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : volume < 0.5 ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )}
                </button>

                <div className={`volume-slider-popup ${showVolumeSlider ? 'is-open' : ''}`}>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="custom-volume-range"
                  />
                </div>
              </div>

              <button type="button" className="inbuilt-btn" onClick={toggleFullscreen} title="Fullscreen">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              </button>
            </div>
          </div>
        ) : null}

        {/* =========================================================
            SECTION 01: MY TECHNICAL ROLE & BREAKDOWN
            ========================================================= */}
        <section className="pd-narrative-section">
          <h2 className="pd-section-title">01 / My Role & Implementation</h2>
          <p className="pd-section-para">
            {is3DModels ? (
              <>
                In this <strong>3D hard-surface asset pipeline</strong> I modelled six game-ready props in Blender. The work was built on non-destructive booleans, bevel chamfers and weighted normals, so each prop holds a crisp look in-engine without shading artefacts.
              </>
            ) : isTengent ? (
              <>
                On <strong>TenGent Parkour</strong> I worked as lead developer and level designer. I wrote the Unity C# movement controller, using downward raycasts to remove bounce and collision jitter, and designed seven obstacle courses paced around continuous speed and wall-running rhythm.
              </>
            ) : isDevilsLegacy ? (
              <>
                For <strong>Devil's Legacy</strong> I designed the blockout of <em>The Final Dream Maze</em>. The core of the work was a central pillar rotunda that deliberately disorients the player, plus 90-degree corridor turns that cut the monster's line of sight and build panic alongside the audio triggers.
              </>
            ) : isCitadel ? (
              <>
                For the <strong>Citadel blockout</strong> I built a fortress combat environment in Unity ProBuilder. The layout relies on elevated ramparts and archer sightlines, balanced by portcullis choke points so spawns can't be camped.
              </>
            ) : isStarsFall ? (
              <>
                For <strong>As The Stars Fall</strong> I blockouted an overgrown city street grid for a narrative adventure. Streets and alleys were scaled to a 100 cm character, with strict zero n-gon facade topology and landmark spires for orientation.
              </>
            ) : isUrbanShowcase ? (
              <>
                For the <strong>Urban Area Showcase</strong> I blockouted modular streets and building facade kits in Blender and Unity. Streets were scaled to traversal speed and I ran real-time lighting passes across the layout.
              </>
            ) : (
              project.section1Para || project.summary
            )}
          </p>

          {/* ACCURATE METRICS */}
          <div className="pd-metric-cards-grid">
            {is3DModels ? (
              <>
              </>
            ) : isTengent ? (
              <>
              </>
            ) : isDevilsLegacy ? (
              <>
              </>
            ) : isCitadel ? (
              <>
              </>
            ) : isStarsFall ? (
              <>
              </>
            ) : (
              <>
              </>
            )}
          </div>
        </section>

        {/* =========================================================
            SECTION 02: 3D HARD-SURFACE ASSET BREAKDOWN (IF 3D SUITE)
            ========================================================= */}
        {is3DModels && project.modelsList && (
          <section className="pd-narrative-section">
            <h2 className="pd-section-title">02 / 3D Hard-Surface Assets</h2>
            <div className="pd-models-breakdown-grid">
              {project.modelsList.map((m, idx) => (
                <div key={idx} className="pd-model-item-card">
                  <div className="pd-model-info-bar">
                    <span className="pd-model-badge">MODEL 0{idx + 1}</span>
                    <h3 className="pd-model-name">{m.name}</h3>
                  </div>
                  {m.specs && <span className="pd-model-specs-tag">{m.specs}</span>}
                  <p className="pd-model-description">{m.desc}</p>
                  <div className="pd-model-thumbs-row">
                    {m.video && (
                      <div
                        className="pd-model-thumb-box"
                        role="button"
                        tabIndex={0}
                        onClick={() => setPreviewMedia({ type: 'video', src: m.video, name: m.name })}
                      >
                        <video autoPlay loop muted playsInline>
                          <source src={m.video} type="video/mp4" />
                        </video>
                        <span className="pd-thumb-overlay">PLAY</span>
                      </div>
                    )}
                    {m.images?.map((img, i) => (
                      <div
                        key={i}
                        className="pd-model-thumb-box"
                        role="button"
                        tabIndex={0}
                        onClick={() => setPreviewMedia({ type: 'image', src: img, name: m.name })}
                      >
                        <img src={img} alt={m.name} />
                        <span className="pd-thumb-overlay">VIEW</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Greybox Slider (Levels Only) */}
        {!is3DModels && galleryImages.length > 1 && !project.videoPlaylist && (
          <section className="pd-narrative-section">
            <h2 className="pd-section-title">02 / Greybox Evolution & Sightlines</h2>
            <div className="pd-slider-box">
              <img src={galleryImages[currentSlide]} alt="Gallery Slide" />
              <button
                type="button"
                className="pd-slide-arrow left"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
              >
                ❮
              </button>
              <button
                type="button"
                className="pd-slide-arrow right"
                onClick={() => setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
              >
                ❯
              </button>
              <div className="pd-slide-counter">
                {currentSlide + 1} / {galleryImages.length}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            SECTION 03: ACTIONS & VERIFIED TARGETS (LINK OR REQUEST PANEL)
            ========================================================= */}
        <section className="pd-narrative-section">
          <h2 className="pd-section-title">03 / Project Access</h2>
          <p className="pd-section-para">
            {is3DModels
              ? "All six models were built in Blender and checked against a production pipeline. High-poly .blend sources, low-poly OBJ/FBX hulls and 4K PBR maps are available on request."
              : isTengent
              ? "The playable beta is live on itch.io, with all seven courses, wall-running and momentum carry implemented."
              : isUrbanShowcase
              ? "The modular street environment is live on itch.io, showing real-time scale and environment lighting."
              : isCitadel
              ? "The fortress blockout is live on itch.io, showing the archer perimeters and courtyard pacing."
              : isStarsFall
              ? "Greybox passes and a playable evaluation build for As The Stars Fall are available on request."
              : isDevilsLegacy
              ? "A prototype build of The Final Dream Maze is available on request for level design evaluation."
              : "Source files, greybox passes and documentation are available on request."}
          </p>

          <div className="pd-action-cluster">
            {/* 1. TENGENT PARKOUR: ITCH.IO */}
            {isTengent ? (
              <a
                href="https://theroneleaf-games.itch.io/tg-parkour"
                target="_blank"
                rel="noreferrer"
                className="editorial-cta-pill primary"
              >
                <span>Play TenGent Parkour on itch.io</span>
                <span className="cta-arrow">➔</span>
              </a>
            ) : /* 2. URBAN SHOWCASE: ITCH.IO */
            isUrbanShowcase ? (
              <a
                href="https://theroneleaf-games.itch.io/urban-showcaselevel-art"
                target="_blank"
                rel="noreferrer"
                className="editorial-cta-pill primary"
              >
                <span>View Urban Showcase on itch.io</span>
                <span className="cta-arrow">➔</span>
              </a>
            ) : /* 3. CITADEL BLOCKOUT: ITCH.IO */
            isCitadel ? (
              <a
                href="https://theroneleaf-games.itch.io/citadel-blockout"
                target="_blank"
                rel="noreferrer"
                className="editorial-cta-pill primary"
              >
                <span>View Citadel Blockout on itch.io</span>
                <span className="cta-arrow">➔</span>
              </a>
            ) : /* 4. AS THE STARS FALL: REQUEST PANEL */
            isStarsFall ? (
              <button
                type="button"
                className="editorial-cta-pill primary"
                onClick={(e) => handleBuildRequest(e, 'Build Access Request: As The Stars Fall')}
              >
                <span>Request build access ➔</span>
              </button>
            ) : /* 5. DEVIL'S LEGACY: REQUEST PANEL */
            isDevilsLegacy ? (
              <button
                type="button"
                className="editorial-cta-pill primary"
                onClick={(e) => handleBuildRequest(e, "Playable Build Request: Devil's Legacy")}
              >
                <span>Request playable build ➔</span>
              </button>
            ) : /* 6. 3D MODELS: REQUEST PANEL */
            is3DModels ? (
              <button
                type="button"
                className="editorial-cta-pill primary"
                onClick={(e) => handleBuildRequest(e, '3D Asset Source Files Request')}
              >
                <span>Request 3D source files (.blend / FBX) ➔</span>
              </button>
            ) : (
              /* GENERAL FALLBACK: REQUEST PANEL */
              <button
                type="button"
                className="editorial-cta-pill primary"
                onClick={(e) => handleBuildRequest(e, `Evaluation Request: ${project.title}`)}
              >
                <span>Request project files ➔</span>
              </button>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {previewMedia && (
        <div className="pd-lightbox-backdrop" onClick={() => setPreviewMedia(null)}>
          <div className="pd-lightbox-card" onClick={(e) => e.stopPropagation()}>
            <div className="pd-lightbox-top">
              <span className="pd-lightbox-title">{previewMedia.name}</span>
              <button type="button" className="pd-close-btn" onClick={() => setPreviewMedia(null)}>✕</button>
            </div>
            <div className="pd-lightbox-media-wrap">
              {previewMedia.type === 'video' ? (
                <video autoPlay loop controls className="pd-lightbox-full">
                  <source src={previewMedia.src} type="video/mp4" />
                </video>
              ) : (
                <img src={previewMedia.src} alt="Full preview" className="pd-lightbox-full" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}