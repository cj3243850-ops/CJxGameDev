import React from 'react';
import './Mid.css';
import { projectsData } from '../data/projectsData';

export default function Mid({ onSelectProject, onRequestBuild }) {
  const tengentParkour = projectsData.find((p) => p.id === 'tengent-parkour') || projectsData[1];
  const urbanShowcase = projectsData.find((p) => p.id === 'transformation-breakdown') || projectsData[3] || {
    id: 'urban-showcase',
    title: 'Urban Area Showcase',
    caseTitle: 'Urban Area Showcase: Environment Art',
    thumbnail: '/Data/800011.png',
    summary: 'A dense urban environment built from modular kits, with landmark layout and real-time lighting passes.'
  };
  const citadelBlockout = projectsData.find((p) => p.id === 'probuilder-showcase') || {
    id: 'citadel-blockout',
    title: 'Citadel Blockout',
    caseTitle: 'Citadel Blockout: Modular ProBuilder Pass',
    thumbnail: '/Data/700.png',
    summary: 'A fortress greybox built for vertical navigation, archer sightlines and defensive choke points.'
  };
  const asTheStarsFall = projectsData.find((p) => p.id === 'as-the-stars-fall') || projectsData[3];
  const devilsLegacy = projectsData.find((p) => p.id === 'devils-legacy') || projectsData[0];
  const threeDModels = projectsData.find((p) => p.id === '3d-models-collection') || projectsData[4];
  const gameplayMechanics = projectsData.find((p) => p.id === 'game-mechanics') || projectsData[5];

  const handleAction = (e, actionType, projectTitle) => {
    e.stopPropagation();

    if (actionType === 'tengent-demo') {
      window.open('https://theroneleaf-games.itch.io/tg-parkour', '_blank');
    } else if (actionType === 'urban-itch') {
      window.open('https://theroneleaf-games.itch.io/urban-showcaselevel-art', '_blank');
    } else if (actionType === 'citadel-itch') {
      window.open('https://theroneleaf-games.itch.io/citadel-blockout', '_blank');
    } else if (actionType === 'locked-playstore') {
      return;
    } else if (onRequestBuild) {
      onRequestBuild(projectTitle);
    } else {
      window.location.href = `mailto:cj3243850@gmail.com?subject=${encodeURIComponent(`[BUILD REQUEST] ${projectTitle}`)}`;
    }
  };

  return (
    <div className="edge-experience-stream">
      <div className="hero-scroll-buffer" aria-hidden="true" />

      {/* 01 / TENGENT PARKOUR */}
      <section id="panel-selected-work" className="edge-full-section dirty-white-panel reveal-on-scroll">
        <div className="edge-inner-container">
          <div className="edge-headline-strip dw-border">
            <span className="edge-index-label dw-text-dark">01 / Released Game</span>
            <span className="edge-meta-label dw-text-muted">ThroneLeaf Games — PC platformer</span>
          </div>

          <div className="edge-editorial-grid">
            <div className="edge-text-block">
              <h2 className="edge-display-title dw-display-title">TenGent Parkour</h2>
              <h3 className="models-sub-tag dw-sub-tag">Movement controller & obstacle courses</h3>

              <p className="models-description-lead dw-lead-p">
                A high-speed 3D momentum platformer released on itch.io. I wrote the C# kinematic physics for wall-running, slide-hopping and ledge mantles, and built seven obstacle courses that escalate in difficulty.
              </p>

              <div className="edge-specs-list">
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Raycast ground checks replace default rigidbody physics, removing jitter on slopes.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Courses measured against sprint speed so the pacing stays tight.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>A central practice hub with looping routes for rehearsing movement.</p>
                </div>
              </div>

              <div className="edge-cta-cluster">
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill"
                  onClick={() => onSelectProject(tengentParkour)}
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="dw-btn-arrow">➔</span>
                </button>
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill-ghost"
                  onClick={(e) => handleAction(e, 'tengent-demo', 'TenGent Parkour')}
                >
                  <span>PLAY DEMO ⤓</span>
                </button>
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill-locked"
                  onClick={(e) => handleAction(e, 'locked-playstore', 'TenGent Parkour')}
                  title="Coming soon on Google Play"
                >
                  <span>PLAY STORE 🔒</span>
                </button>
              </div>
            </div>

            <div className="edge-media-showcase dw-media-frame" onClick={() => onSelectProject(tengentParkour)}>
              <div className="edge-aspect-box">
                <img src={tengentParkour.thumbnail} alt="TenGent Parkour" />
                <span className="edge-floating-badge dw-badge">RELEASED ON ITCH.IO</span>
              </div>
              <div className="edge-media-caption-bar dw-caption-bar">
                <span className="caption-sub dw-num">Unity C# / 8-month production</span>
                <h4 className="caption-title dw-text-dark">TenGent Parkour</h4>
                <p className="caption-p dw-text-muted">Playable build with seven courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="edge-scroll-spacer" aria-hidden="true" />

      {/* 02 / URBAN AREA SHOWCASE */}
      <section className="edge-full-section dirty-white-panel reveal-on-scroll">
        <div className="edge-inner-container">
          <div className="edge-headline-strip dw-border">
            <span className="edge-index-label dw-text-dark">02 / Environment Art</span>
            <span className="edge-meta-label dw-text-muted">Blender & Unity — modular level art</span>
          </div>

          <div className="edge-editorial-grid">
            <div className="edge-text-block">
              <h2 className="edge-display-title dw-display-title">Urban Area Showcase</h2>
              <h3 className="models-sub-tag dw-sub-tag">Modular kits & real-time lighting</h3>

              <p className="models-description-lead dw-lead-p">
                A dense urban district built from reusable modular facade kits, with prop dressing and dynamic shadows tuned for a stable frame rate.
              </p>

              <div className="edge-specs-list">
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Grid-snapped architecture with even texel density.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Culling set up so geometry doesn't pop in.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Baked reflection probes and placed light shafts.</p>
                </div>
              </div>

              <div className="edge-cta-cluster">
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill"
                  onClick={() => onSelectProject(urbanShowcase)}
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="dw-btn-arrow">➔</span>
                </button>
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill-ghost"
                  onClick={(e) => handleAction(e, 'urban-itch', 'Urban Area Showcase')}
                >
                  <span>PLAY ON ITCH.IO ⤓</span>
                </button>
              </div>
            </div>

            <div className="edge-media-showcase dw-media-frame" onClick={() => onSelectProject(urbanShowcase)}>
              <div className="edge-aspect-box">
                <img src={urbanShowcase.thumbnail} alt="Urban Area Showcase" />
                <span className="edge-floating-badge dw-badge">LEVEL ART DEMO</span>
              </div>
              <div className="edge-media-caption-bar dw-caption-bar">
                <span className="caption-sub dw-num">Blender & Unity / PBR pipeline</span>
                <h4 className="caption-title dw-text-dark">Urban Showcase</h4>
                <p className="caption-p dw-text-muted">Modular architecture & real-time street lighting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="edge-scroll-spacer" aria-hidden="true" />

      {/* 03 / CITADEL BLOCKOUT */}
      <section className="edge-full-section dirty-white-panel reveal-on-scroll">
        <div className="edge-inner-container">
          <div className="edge-headline-strip dw-border">
            <span className="edge-index-label dw-text-dark">03 / Spatial Layout</span>
            <span className="edge-meta-label dw-text-muted">Unity ProBuilder — combat fortress</span>
          </div>

          <div className="edge-editorial-grid">
            <div className="edge-text-block">
              <h2 className="edge-display-title dw-display-title">Citadel Blockout</h2>
              <h3 className="models-sub-tag dw-sub-tag">Vertical defence & archer sightlines</h3>

              <p className="models-description-lead dw-lead-p">
                A fortress combat blockout built around height advantage, courtyard choke points and an inner keep. Paced for fast player combat.
              </p>

              <div className="edge-specs-list">
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Multi-tier ramparts for high-angle vantage.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Portcullis tunnels that prevent spawn trapping.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Stairs and ramps sized to sprint speed.</p>
                </div>
              </div>

              <div className="edge-cta-cluster">
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill"
                  onClick={() => onSelectProject(citadelBlockout)}
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="dw-btn-arrow">➔</span>
                </button>
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill-ghost"
                  onClick={(e) => handleAction(e, 'citadel-itch', 'Citadel Blockout')}
                >
                  <span>PLAY ON ITCH.IO ⤓</span>
                </button>
              </div>
            </div>

            <div className="edge-media-showcase dw-media-frame" onClick={() => onSelectProject(citadelBlockout)}>
              <div className="edge-aspect-box">
                <img src={citadelBlockout.thumbnail} alt="Citadel Blockout" />
                <span className="edge-floating-badge dw-badge">GREYBOX MAP</span>
              </div>
              <div className="edge-media-caption-bar dw-caption-bar">
                <span className="caption-sub dw-num">Unity ProBuilder / vertical combat</span>
                <h4 className="caption-title dw-text-dark">Citadel Fortress</h4>
                <p className="caption-p dw-text-muted">Ramparts, keeps and courtyard chokes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="edge-scroll-spacer" aria-hidden="true" />

      {/* 04 / AS THE STARS FALL */}
      <section className="edge-full-section dirty-white-panel reveal-on-scroll">
        <div className="edge-inner-container">
          <div className="edge-headline-strip dw-border">
            <span className="edge-index-label dw-text-dark">04 / Environment Design</span>
            <span className="edge-meta-label dw-text-muted">Indie collaboration — Blender & Unity</span>
          </div>

          <div className="edge-editorial-grid">
            <div className="edge-text-block">
              <h2 className="edge-display-title dw-display-title">As The Stars Fall</h2>
              <h3 className="models-sub-tag dw-sub-tag">The Green City street grid</h3>

              <p className="models-description-lead dw-lead-p">
                Environment and level design for an overgrown metropolis narrative game. Street layout, landmark wayfinding and one shared texture atlas.
              </p>

              <div className="edge-specs-list">
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Routes scaled to a 100 cm character.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Low-poly metrics with zero n-gons on the facades.</p>
                </div>
              </div>

              <div className="edge-cta-cluster">
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill"
                  onClick={() => onSelectProject(asTheStarsFall)}
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="dw-btn-arrow">➔</span>
                </button>
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill-ghost"
                  onClick={(e) => handleAction(e, 'request-build', 'As The Stars Fall')}
                >
                  <span>REQUEST ACCESS ⤓</span>
                </button>
              </div>
            </div>

            <div className="edge-media-showcase dw-media-frame" onClick={() => onSelectProject(asTheStarsFall)}>
              <div className="edge-aspect-box">
                <img src={asTheStarsFall.thumbnail} alt="As The Stars Fall" />
                <span className="edge-floating-badge dw-badge">URBAN GRID</span>
              </div>
              <div className="edge-media-caption-bar dw-caption-bar">
                <span className="caption-sub dw-num">Blender & Unity / urban layout</span>
                <h4 className="caption-title dw-text-dark">The Green City</h4>
                <p className="caption-p dw-text-muted">Street grid and landmark wayfinding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="edge-scroll-spacer" aria-hidden="true" />

      {/* 05 / DEVIL'S LEGACY */}
      <section className="edge-full-section dirty-white-panel reveal-on-scroll">
        <div className="edge-inner-container">
          <div className="edge-headline-strip dw-border">
            <span className="edge-index-label dw-text-dark">05 / Indie Collaboration</span>
            <span className="edge-meta-label dw-text-muted">DL-Core Indie Studio — survival horror</span>
          </div>

          <div className="edge-editorial-grid">
            <div className="edge-text-block">
              <h2 className="edge-display-title dw-display-title">Devil's Legacy</h2>
              <h3 className="models-sub-tag dw-sub-tag">The Final Dream Maze blockout</h3>

              <p className="models-description-lead dw-lead-p">
                Psychological survival horror level design. Tight corridor networks, broken sightlines and dead ends timed to the audio cues.
              </p>

              <div className="edge-specs-list">
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>A pillar rotunda that anchors the sequence and disorients.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>90-degree turns built for chase tension.</p>
                </div>
                <div className="edge-spec-row dw-spec-row">
                  <span className="edge-dash dw-dash">-</span>
                  <p>Low-poly proxy meshes used for occlusion and light bounce.</p>
                </div>
              </div>

              <div className="edge-cta-cluster">
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill"
                  onClick={() => onSelectProject(devilsLegacy)}
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="dw-btn-arrow">➔</span>
                </button>
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill-ghost"
                  onClick={(e) => handleAction(e, 'request-build', "Devil's Legacy")}
                >
                  <span>REQUEST BUILD ⤓</span>
                </button>
              </div>
            </div>

            <div className="edge-media-showcase dw-media-frame" onClick={() => onSelectProject(devilsLegacy)}>
              <div className="edge-aspect-box">
                <img src={devilsLegacy.thumbnail} alt="Devil's Legacy" />
                <span className="edge-floating-badge dw-badge">HORROR LABYRINTH</span>
              </div>
              <div className="edge-media-caption-bar dw-caption-bar">
                <span className="caption-sub dw-num">DL-Core Indie Studio / Unity</span>
                <h4 className="caption-title dw-text-dark">Devil's Legacy</h4>
                <p className="caption-p dw-text-muted">Labyrinth pacing and encounter triggers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="edge-scroll-spacer" aria-hidden="true" />

      {/* 06 / 3D HARD-SURFACE ASSET SUITE */}
      <section id="panel-models-set" className="edge-full-section dirty-white-panel reveal-on-scroll">
        <div className="edge-inner-container">
          <div className="edge-headline-strip dw-border">
            <span className="edge-index-label dw-text-dark">Asset Suite</span>
            <span className="edge-meta-label dw-text-muted">Blender sub-d & real-time PBR</span>
          </div>

          <div className="models-hero-layout-split">
            <div className="models-left-narrative">
              <h2 className="edge-display-title dw-display-title">3D Hard-Surface Assets</h2>
              <h3 className="models-sub-tag dw-sub-tag">Sub-d topology · Chamfers · PBR</h3>

              <p className="models-description-lead dw-lead-p">
                Six game-ready hard-surface props modelled in Blender with non-destructive booleans, chamfer bevels and weighted normals.
              </p>

              <div className="models-left-action-box">
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill"
                  onClick={() => onSelectProject(threeDModels)}
                >
                  <span>VIEW THE FULL ASSET SUITE</span>
                  <span className="dw-btn-arrow">➔</span>
                </button>
              </div>
            </div>

            <div className="models-right-gallery-grid">
              <div className="model-grid-tile dw-tile" onClick={() => onSelectProject(threeDModels)}>
                <div className="tile-thumb-wrap">
                  <img src="/Data/69.png" alt="Robot Foot Assembly" />
                </div>
                <div className="tile-caption dw-caption">
                  <span className="tile-num dw-num">01</span>
                  <h4>Robot Foot Assembly</h4>
                  <p>Mechanical pivot clearance & sub-d joints</p>
                </div>
              </div>

              <div className="model-grid-tile dw-tile" onClick={() => onSelectProject(threeDModels)}>
                <div className="tile-thumb-wrap">
                  <img src="/Data/61.png" alt="Ring Spaceship" />
                </div>
                <div className="tile-caption dw-caption">
                  <span className="tile-num dw-num">02</span>
                  <h4>Ring Spaceship (Q-Ship)</h4>
                  <p>Curved hull panelling & low-poly baking</p>
                </div>
              </div>

              <div className="model-grid-tile dw-tile" onClick={() => onSelectProject(threeDModels)}>
                <div className="tile-thumb-wrap">
                  <img src="/Data/7.png" alt="Modular Tower" />
                </div>
                <div className="tile-caption dw-caption">
                  <span className="tile-num dw-num">03</span>
                  <h4>Sci-Fi Modular Tower</h4>
                  <p>Beacon prop with even texel density</p>
                </div>
              </div>

              <div className="model-grid-tile dw-tile" onClick={() => onSelectProject(threeDModels)}>
                <div className="tile-thumb-wrap">
                  <img src="/Data/800000.png" alt="Robotic Crate" />
                </div>
                <div className="tile-caption dw-caption">
                  <span className="tile-num dw-num">04</span>
                  <h4>Robotic Supply Box</h4>
                  <p>Heavy latch mechanics with sub-d chamfers</p>
                </div>
              </div>

              <div className="model-grid-tile dw-tile" onClick={() => onSelectProject(threeDModels)}>
                <div className="tile-thumb-wrap">
                  <img src="/Data/2.png" alt="Painted Crate" />
                </div>
                <div className="tile-caption dw-caption">
                  <span className="tile-num dw-num">05</span>
                  <h4>Painted Game Crate</h4>
                  <p>Weathering layers, stencils & edge wear</p>
                </div>
              </div>

              <div className="model-grid-tile dw-tile" onClick={() => onSelectProject(threeDModels)}>
                <div className="tile-thumb-wrap">
                  <img src="/Data/10.png" alt="Product Viz" />
                </div>
                <div className="tile-caption dw-caption">
                  <span className="tile-num dw-num">06</span>
                  <h4>Product Visualisation</h4>
                  <p>Transmission lookdev & glass shaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="edge-scroll-spacer" aria-hidden="true" />

      {/* 07 / TECHNICAL WORK */}
      <section className="edge-full-section dirty-white-panel reveal-on-scroll">
        <div className="edge-inner-container">
          <div className="edge-headline-strip dw-border">
            <span className="edge-index-label dw-text-dark">Systems & Code</span>
            <span className="edge-meta-label dw-text-muted">Unity C# movement framework</span>
          </div>

          <div className="models-hero-layout-split">
            <div className="models-left-narrative">
              <h2 className="edge-display-title dw-display-title">Technical Work</h2>
              <h3 className="models-sub-tag dw-sub-tag">13 movement systems in C#</h3>

              <p className="models-description-lead dw-lead-p">
                A movement framework in Unity C#, built to replace unreliable rigidbody physics with raycast surface checks, vector math and custom slope projection.
              </p>

              <div className="models-left-action-box">
                <button
                  type="button"
                  className="edge-action-btn dw-action-pill"
                  onClick={() => onSelectProject(gameplayMechanics)}
                >
                  <span>WATCH ALL 13 CLIPS</span>
                  <span className="dw-btn-arrow">➔</span>
                </button>
              </div>
            </div>

            <div className="code-architecture-grid">
              <div className="code-tech-card dw-tile" onClick={() => onSelectProject(gameplayMechanics)}>
                <div className="code-card-header">
                  <span className="code-badge">MATH 01</span>
                  <h4>Custom Surface Raycasting</h4>
                </div>
                <p>Replaced default capsule collisions with a downward raycast matrix so the player doesn't stick to floors.</p>
                <div className="code-chip-row">
                  <span>RaycastHit Normal</span>
                  <span>Slope Projection</span>
                </div>
              </div>

              <div className="code-tech-card dw-tile" onClick={() => onSelectProject(gameplayMechanics)}>
                <div className="code-card-header">
                  <span className="code-badge">MATH 02</span>
                  <h4>Wall-Run Vector Maths</h4>
                </div>
                <p>Cross product of the wall normal and world up-vector to keep lateral momentum.</p>
                <div className="code-chip-row">
                  <span>Vector3.Cross</span>
                  <span>Lateral Momentum</span>
                </div>
              </div>

              <div className="code-tech-card dw-tile" onClick={() => onSelectProject(gameplayMechanics)}>
                <div className="code-card-header">
                  <span className="code-badge">MATH 03</span>
                  <h4>Frictionless Slide-Hopping</h4>
                </div>
                <p>Velocity clamp bypassed on crouch input, with custom drag curves.</p>
                <div className="code-chip-row">
                  <span>Drag Decay</span>
                  <span>Dynamic FOV Kick</span>
                </div>
              </div>

              <div className="code-tech-card dw-tile" onClick={() => onSelectProject(gameplayMechanics)}>
                <div className="code-card-header">
                  <span className="code-badge">MATH 04</span>
                  <h4>Ledge Mantle Snapping</h4>
                </div>
                <p>Dual forward raycasts detect the ledge lip and blend the player up to it.</p>
                <div className="code-chip-row">
                  <span>Lip Coordinate Snap</span>
                  <span>Mathf.SmoothDamp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}