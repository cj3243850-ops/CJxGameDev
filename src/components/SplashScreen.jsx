import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onLoaded }) {
  const [progress, setProgress] = useState(12);
  const [statusText, setStatusText] = useState('INITIALIZING GRAPHICS ENGINE...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let timer = null;

    const stages = [
      { p: 35, text: 'CALIBRATING KINEMATICS & MATRIX CANVASES...' },
      { p: 68, text: 'PRE-RENDERING MESH DATA & SHADERS...' },
      { p: 92, text: 'WARMING PARALLAX DEPTH MATRICES...' },
      { p: 100, text: 'SYSTEM READY // PIPELINE LAUNCH' },
    ];

    let currentStage = 0;

    const runStages = () => {
      if (!isMounted) return;
      if (currentStage < stages.length) {
        const target = stages[currentStage];
        setProgress(target.p);
        setStatusText(target.text);
        currentStage++;
        const nextDelay = currentStage === stages.length ? 300 : 220;
        timer = setTimeout(runStages, nextDelay);
      } else {
        // Complete splash
        setTimeout(() => {
          if (!isMounted) return;
          setIsFadingOut(true);
          setTimeout(() => {
            if (isMounted && onLoaded) onLoaded();
          }, 600);
        }, 200);
      }
    };

    timer = setTimeout(runStages, 120);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [onLoaded]);

  return (
    <div className={`splash-screen-root ${isFadingOut ? 'fade-out' : ''}`} data-lenis-prevent="true">
      <div className="splash-grid-background" aria-hidden="true" />

      <div className="splash-center-terminal">
        <div className="splash-brand-block">
          <span className="splash-brand-title">CJxGameDev</span>
          <span className="splash-brand-sub">TECHNICAL LEVEL DESIGN & KINEMATICS</span>
        </div>

        <div className="splash-telemetry-display">
          <div className="splash-counter-huge">
            {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : '100'}
            <span className="counter-unit">%</span>
          </div>

          <div className="splash-progress-track">
            <div className="splash-progress-bar" style={{ width: `${progress}%` }} />
          </div>

          <div className="splash-status-line">
            <span className="status-blip"></span>
            <span className="status-label">{statusText}</span>
          </div>
        </div>

        <div className="splash-accent-strip">
          <div className="accent-seg blue"></div>
          <div className="accent-seg navy"></div>
          <div className="accent-seg red"></div>
        </div>
      </div>
    </div>
  );
}