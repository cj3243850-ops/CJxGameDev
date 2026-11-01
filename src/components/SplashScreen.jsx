import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ videoRef, onLoaded }) {
  const [progress, setProgress] = useState(12);
  const [statusText, setStatusText] = useState('INITIALIZING ENGINE CORE...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let intervalId = null;
    let fallbackTimer = null;

    // Simulated progress increment while buffering
    intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev < 85) {
          const step = Math.floor(Math.random() * 8) + 4;
          const next = Math.min(85, prev + step);
          if (next > 40 && next < 70) {
            setStatusText('BUFFERING PERSISTENT 3D STAGE & CANVASES...');
          } else if (next >= 70) {
            setStatusText('CALIBRATING KINEMATIC RAYCAST MATRICES...');
          }
          return next;
        }
        return prev;
      });
    }, 120);

    const finishLoading = () => {
      clearInterval(intervalId);
      setProgress(100);
      setStatusText('PIPELINE READY // SYSTEM LAUNCH');

      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          if (onLoaded) onLoaded();
        }, 650); // Matches CSS transition duration
      }, 400);
    };

    // Check actual video buffer state
    const video = videoRef?.current;
    if (video) {
      if (video.readyState >= 3) {
        // Video already buffered
        finishLoading();
      } else {
        const handleCanPlay = () => finishLoading();
        video.addEventListener('canplaythrough', handleCanPlay, { once: true });
      }
    }

    // Safety fallback (in case video is slow or cached weirdly)
    fallbackTimer = setTimeout(() => {
      finishLoading();
    }, 3500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(fallbackTimer);
    };
  }, [videoRef, onLoaded]);

  return (
    <div className={`splash-screen-root ${isFadingOut ? 'fade-out' : ''}`} data-lenis-prevent="true">
      {/* Background Radar Scanning Grid */}
      <div className="splash-grid-background" aria-hidden="true" />

      <div className="splash-center-terminal">
        {/* Top Brand Monogram */}
        <div className="splash-brand-block">
          <span className="splash-brand-title">CJxGameDev</span>
          <span className="splash-brand-sub">TECHNICAL LEVEL DESIGN & KINEMATICS</span>
        </div>

        {/* Progress Counter & Stage Indicator */}
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

        {/* Automotive Tri-Color Accent Line */}
        <div className="splash-accent-strip">
          <div className="accent-seg blue"></div>
          <div className="accent-seg navy"></div>
          <div className="accent-seg red"></div>
        </div>
      </div>
    </div>
  );
}