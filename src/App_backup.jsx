import React, { useState, useEffect } from 'react';
import './App.css';

// Data Path Setup - Corrected for Public Folder Structure
const ProjectData = {
  'LEVELS DESIGNING': [
    { src: '/Data/101.mp4', type: 'vid', label: 'Level #1  (TenGen Parkour)' },
    { src: '/Data/102.mp4', type: 'vid', label: 'Level #2' },
    { src: '/Data/103.mp4', type: 'vid', label: 'Level #3' },
    { src: '/Data/104.mp4', type: 'vid', label: 'Level #4' },
    { src: '/Data/105.mp4', type: 'vid', label: 'Level #5' },
    { src: '/Data/106.mp4', type: 'vid', label: 'Level #6' },
    { src: '/Data/107.mp4', type: 'vid', label: 'Level #7' },
    { src: '/Data/108.mp4', type: 'vid', label: 'Main Lobby of All Levels' },
    { src: '/Data/43.png', type: 'img', label: 'Run & Fight #1 (First Game)' },
    { src: '/Data/44.png', type: 'img', label: 'Run & Fight #2' },
    { src: '/Data/42.png', type: 'img', label: 'Run & Fight #3' },
  ],
  'TENGEN PARKOUR': [
    { src: '/Data/15.mp4', type: 'vid', label: 'BETA TRAILER (Click For Full Preview) ' },
    { src: '/Data/100.png', type: 'img', label: 'LEVEL ENVIRONMENT' },
    { src: '/Data/101.png', type: 'img', label: 'LEVEL ENVIRONMENT #2' },
    { src: '/Data/13.png', type: 'img', label: 'HALFWAY GATE PROP' },
    { src: '/Data/800.mp4', type: 'vid', label: 'GAMEPLAY VISUALS #1' },
    { src: '/Data/109.mp4', type: 'vid', label: 'GAMEPLAY VISUALS #2' },
    { src: '/Data/110.mp4', type: 'vid', label: 'GAMEPLAY VISUALS #3' },
    { src: '/Data/111.mp4', type: 'vid', label: 'GAMEPLAY VISUALS #4' },
    { src: '/Data/112.mp4', type: 'vid', label: 'GAMEPLAY VISUALS #5' },
    { src: '/Data/1000.png', type: 'img', label: 'GAMEPLAY VISUALS #6' },
    { src: '/Data/1001.png', type: 'img', label: 'GAMEPLAY VISUALS #7' },
    { src: '/Data/1002.png', type: 'img', label: 'GAMEPLAY VISUALS #8' },
  ],
  ' 3D MODELS': [
    { src: '/Data/5.jpg', type: 'img', label: 'Q-SHIP RENDER' },
    { src: '/Data/56.png', type: 'img', label: 'Q-SHIP EDITOR VIEW' },
    { src: '/Data/6.jpg', type: 'img', label: 'Q-SHIP WIREFRAME ' },
    { src: '/Data/2.png', type: 'img', label: 'STYLIZED ART' },
    { src: '/Data/9.png', type: 'img', label: 'SCI-FI TOWER' },
    { src: '/Data/8.png', type: 'img', label: 'SCI-FI TOWER #2 EVEE RENDER' },
    { src: '/Data/66.png', type: 'img', label: 'SCI-FI ROBOT ARMETURE' },
    { src: '/Data/65.png', type: 'img', label: 'SCI-FI ROBOT ARMETURE ( EDITOR VEIW)' },
    { src: '/Data/10.png', type: 'img', label: ' FOGG (Add -STUDY' },
    { src: '/Data/11.mp4', type: 'vid', label: 'FOGG RENDER' },
  ],
  'UI & UX DESIGNING': [
    { src: '/Data/700.png', type: 'img', label: 'MAIN MENU DESIGN' },
    { src: '/Data/701.png', type: 'img', label: 'SYSTEM SETTINGS' },
    { src: '/Data/702.png', type: 'img', label: 'PAUSE NAVIGATION' },
    { src: '/Data/703.png', type: 'img', label: 'DEVELOPER IDENTITY' },
    { src: '/Data/41.png', type: 'img', label: 'UI UX STUDY' },
    { src: '/Data/40.png', type: 'img', label: 'UI UX STUDY' }
  ]
};

const App = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [previewItem, setPreviewItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadStatus, setLoadStatus] = useState('ESTABLISHING SECURE CONNECTION...');

  // Realistic Loader Logic - Added more steps for realistic feel
  useEffect(() => {
    let progress = 0;
    const statuses = [
      'ESTABLISHING SECURE CONNECTION...',
      'BYPASSING SECURITY PROTOCOLS...',
      'FETCHING 3D ASSETS & TEXTURES...',
      'MOUNTING VIRTUAL ENVIRONMENT...',
      'INITIALIZING TENGEN ENGINE...',
      'COMPILING SHADERS...',
      'DECRYPTING USER DATA...',
      'ACCESS GRANTED_'
    ];
    
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 12) + 2;
      
      if (progress >= 10 && progress < 20) setLoadStatus(statuses[1]);
      else if (progress >= 20 && progress < 35) setLoadStatus(statuses[2]);
      else if (progress >= 35 && progress < 50) setLoadStatus(statuses[3]);
      else if (progress >= 50 && progress < 65) setLoadStatus(statuses[4]);
      else if (progress >= 65 && progress < 80) setLoadStatus(statuses[5]);
      else if (progress >= 80 && progress < 95) setLoadStatus(statuses[6]);

      if (progress >= 100) {
        progress = 100;
        setLoadStatus(statuses[7]);
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 900); // 0.9s pause on 100%
      }
      setLoadProgress(progress > 100 ? 100 : progress);
    }, 280);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = previewItem ? 'hidden' : 'auto';
  }, [previewItem]);

  const toggleTab = (e, key) => {
    e.preventDefault();
    setActiveTab(activeTab === key ? null : key);
  };

  const handleContactClick = () => {
    setCurrentPage('home');
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  // Upgraded Loader JSX - Centered and scaled up
  if (isLoading) {
    return (
      <div className="hacker-loader" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#050505' }}>
        <div className="matrix-code" style={{ transform: 'scale(1.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', maxWidth: '600px' }}>
          <h1 className="loader-title orbitron" style={{ fontSize: '2rem', marginBottom: '20px', letterSpacing: '4px' }}>SYSTEM BOOT</h1>
          <div className="progress-bar-container" style={{ width: '100%', height: '8px', backgroundColor: '#222', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="progress-bar" style={{ width: `${loadProgress}%`, height: '100%', backgroundColor: '#fff', transition: 'width 0.3s ease-out' }}></div>
          </div>
          <p className="matrix-line" style={{ color: loadProgress === 100 ? '#fff' : '#aaa', fontSize: '1rem', letterSpacing: '1px', textAlign: 'center' }}>
            &gt; {loadStatus} [{loadProgress}%]
          </p>
        </div>
      </div>
    );
  }

  const NavBar = () => (
    <nav className="global-nav orbitron animate-fade-down">
      <div className="nav-links">
        <span className="nav-item" onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}>HOME</span>
        <span className="nav-item" onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }}>ABOUT</span>
        <span className="nav-item contact-pill" onClick={handleContactClick}>CONTACT</span>
      </div>
    </nav>
  );

  if (currentPage === 'about') {
    return (
      <div className="studio-root">
        <NavBar />
        <div className="about-page animate-fade-up">
          <div className="about-split">
            <div className="about-img-box">
              <img src="/Data/CJ.png" alt="Chetan" className="about-main-img" />
            </div>
            <div className="about-content-box">
              <h1 className="hero-name">CHETAN JOSHI</h1>
              <p className="hero-tag orbitron">LEVEL DESIGNER / GAME DEVELOPER</p>
              <div className="about-section-block">
                <h4 className="orbitron label-dim">CAREER OBJECTIVE</h4>
                <p className="exp-text">
                  Motivated Game Developer and Level Designer with a solid 1.5 years of experience in the 3D space. 
                  With 1 year dedicated to Unity level design and development, and 6 months in Blender modeling, 
                  my core strength lies in game programming, mechanics, and crafting immersive environments.
                </p>
              </div>
              <div className="about-section-block">
                <h4 className="orbitron label-dim">TENGEN PARKOUR & PAST ROLE</h4>
                <p className="exp-text">
                  Previously, I served as the Lead Developer at ThroneLeaf Games (TLG). 
                  I directed an international indie collective, collaborating closely for over 6 months to develop "TenGen Parkour" 
                  — a high-speed parkour experience with customized fluid movement systems and stylized levels.
                </p>
              </div>
              <div className="about-section-block">
                <h4 className="orbitron label-dim">EXPERIENCE & EDUCATION</h4>
                <ul className="exp-list">
                  <li><span className="orbitron">EXP</span> 1 Year Unity Level Design & Game Dev, 0.5 Year Blender Modeling.</li>
                  <li><span className="orbitron">ROLE</span> Former Lead Developer at ThroneLeaf Games (TLG).</li>
                  <li><span className="orbitron">EDU</span> B.Tech in Computer Science Engineering (RTU, Udaipur).</li>
                  <li><span className="orbitron">HACK</span> GDG Cloud Udaipur AI/Cloud Hackathon Participant (2026).</li>
                  <li><span className="orbitron">TECH</span> Unity (C#), Blender, Arch Linux & EndeavourOS.</li>
                </ul>
              </div>
              <div className="contact-info-block mt-80">
                <h4 className="orbitron label-dim">DIRECT CONTACT</h4>
                <p className="orbitron contact-large">EMAIL: cj3243850@gmail.com</p>
                <p className="orbitron contact-large">PHONE: +91 8619755236</p>
                <div className="social-links orbitron mt-20">
                  <a href="https://www.linkedin.com/in/chetan-joshi-50922a2a4/" target="_blank" rel="noopener noreferrer">LINKEDIN</a> / 
                  <a href="https://www.instagram.com/cjxgamedev/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a> / 
                  <a href="https://theroneleaf-games.itch.io/tg-parkour" target="_blank" rel="noopener noreferrer">ITCH.IO</a> / 
                  <a href="#">GITHUB</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="studio-root">
      <NavBar />
      <header className="hero-split animate-fade-in">
        <div className="hero-img-box">
          <img src="/Data/CJ.png" alt="Chetan" className="about-main-img" />
        </div>
        <div className="hero-text-box">
          <h1 className="hero-name">CHETAN JOSHI</h1>
          <p className="hero-tag orbitron">LEVEL DESIGNER</p>
          <div className="hero-exp-merged">
            <h4 className="orbitron label-dim">MISSION</h4>
            <p className="exp-text">
              Work At ThroneLeaf Games for 6 month with 1.5 years of expertise in Game Development (Level Design) & 3D Technical Art. 
              Specializing in Unity C# and fluid parkour mechanics, I strive to craft immersive worlds that facilitate 
              compelling gameplay and narrative-driven experiences.
            </p>
          </div>
        </div>
      </header>

      <section className="work-accordion animate-slide-up">
        {Object.entries(ProjectData).map(([key, assets], index) => (
          <div key={key} className={`acc-item ${activeTab === key ? 'is-open' : ''}`}>
            <div className="acc-trigger" onClick={(e) => toggleTab(e, key)}>
              <div className="acc-title-wrap">
                <span className="acc-num orbitron">0{index + 1}</span>
                <h2 className="acc-heading">{key}</h2>
              </div>
              <div className="acc-status orbitron">{activeTab === key ? 'CLOSE' : 'EXPLORE'}</div>
            </div>
            <div className="acc-content">
              <div className="media-wall">
                {assets.map((item, i) => (
                  <div key={i} className="media-card animate-scale-in" style={{animationDelay: `${i * 0.05}s`}} onClick={() => setPreviewItem(item)}>
                    {item.type === 'vid' ? (
                      <video autoPlay loop muted playsInline className="raw-media">
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.src} alt={item.label} className="raw-media" />
                    )}
                    <div className="media-label orbitron">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer-stack">
        <h3 className="orbitron stack-label">TOOLS & CORE VALUES</h3>
        <div className="icon-grid">
          {[
            { name: 'Unity', url: '/unity.svg' },
            { name: 'Blender', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
            { name: 'Photoshop', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
            { name: 'Krita', url: '/krita.svg' }, 
            { name: 'VSCode', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
          ].map((tool, i) => (
            <div key={i} className="icon-unit">
              <img src={tool.url} alt={tool.name} className="svg-tool" />
              <span className="orbitron tool-name">{tool.name}</span>
            </div>
          ))}
        </div> {/* <-- YE DIV MISSING THA, AB FIX HAI! --> */}

        <div className="footer-contact mt-80">
          <h2 className="hero-name small-name">LET'S BUILD SOMETHING.</h2>
          <div className="contact-details mt-40">
            <p className="orbitron contact-large">EMAIL: cj3243850@gmail.com</p>
            <p className="orbitron contact-large">PHONE: +91 8619755236</p>
          </div>
          <div className="social-links orbitron mt-40">
            <a href="https://www.linkedin.com/in/chetan-joshi-50922a2a4/" target="_blank" rel="noopener noreferrer">LINKEDIN</a> / 
            <a href="https://www.instagram.com/cjxgamedev/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a> / 
            <a href="https://theroneleaf-games.itch.io/tg-parkour" target="_blank" rel="noopener noreferrer">ITCH.IO</a> / 
            <a href="#">GITHUB</a>
          </div>
        </div>
        <div className="final-line orbitron mt-40">THRONE LEAF GAMES © 2026</div>
      </footer>

      {previewItem && (
        <div className="preview-overlay" onClick={() => setPreviewItem(null)}>
          <div className="preview-modal animate-pop-in" onClick={(e) => e.stopPropagation()}>
            <button className="preview-close orbitron" onClick={() => setPreviewItem(null)}>CLOSE X</button>
            <div className="preview-frame">
              {previewItem.type === 'vid' ? (
                <video key={previewItem.src} autoPlay loop controls className="preview-media-full">
                  <source src={previewItem.src} type="video/mp4" />
                </video>
              ) : (
                <img src={previewItem.src} alt={previewItem.label} className="preview-media-full" />
              )}
            </div>
            <p className="preview-title orbitron">{previewItem.label}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
