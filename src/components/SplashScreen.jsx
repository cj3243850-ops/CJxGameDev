import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onFinish }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 2.3 seconds tak smooth animation aur branding visible rahegi
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 2300);

    // 3.1 seconds par clean transition ke sath screen unmount ho jayegi
    const removeTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3100);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-overlay ${isFading ? 'fade-out' : ''}`}>
      {/* Background subtle radial ambient light */}
      <div className="splash-ambient-glow"></div>

      <div className="splash-center">
        <div className="splash-logo-container">
          <img
            src="/Data/CJ_cPPP4.png"
            alt="CJxGameDev Logo"
            className="splash-logo"
          />
        </div>

        <div className="splash-title-box">
          <span className="splash-title-white">CJ</span>
          <span className="splash-title-accent">xGAMEDEV</span>
        </div>

        <div className="splash-subtitle">GAME DESIGNER</div>

        <div className="splash-loading-bars">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </div>
      </div>
    </div>
  );
}