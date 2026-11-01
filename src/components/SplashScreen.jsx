import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ videoRef, onLoaded }) {
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState('INITIALIZING PERSISTENT 3D CANVASES...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let fallbackSafety = null;

    const finishLoading = () => {
      if (!isMounted) return;
      setProgress(100);
      setStatusText('PIPELINE READY // SYSTEM LAUNCH');

      setTimeout(() => {
        if (!isMounted) return;
        setIsFadingOut(true);
        setTimeout(() => {
          if (isMounted && onLoaded) onLoaded();
        }, 650);
      }, 350);
    };

    const checkVideoState = () => {
      const video = videoRef?.current;
      if (!video) return;

      // Real video buffer tracking
      if (video.buffered && video.buffered.length > 0 && video.duration) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const percent = Math.min(95, Math.floor((bufferedEnd / video.duration) * 100));
        setProgress((prev) => Math.max(prev, percent));

        if (percent > 40 && percent < 75) {
          setStatusText('BUFFERING PERSISTENT 3D STAGE & CANVASES...');
        } else if (percent >= 75) {
          setStatusText('CALIBRATING KINEMATIC RAYCAST MATRICES...');
        }
      }

      // readyState 4 = HAVE_ENOUGH_DATA (Can play all the way through without stutter)
      if (video.readyState >= 4) {
        video.removeEventListener('progress', checkVideoState);
        video.removeEventListener('canplaythrough', checkVideoState);
        finishLoading();
      }
    };

    const video = videoRef?.current;
    if (video) {
      if (video.readyState >= 4) {
        finishLoading();
      } else {
        video.addEventListener('progress', checkVideoState);
        video.addEventListener('canplaythrough', finishLoading, { once: true });
        video.addEventListener('loadeddata', checkVideoState);

        // Force browser to start downloading immediately
        video.load();
      }
    }

    // High timeout guard: In case of extreme 2G network, maximum hold 12s
    fallbackSafety = setTimeout(() => {
      finishLoading();
    }, 12000);

    return () => {
      isMounted = false;
      clearTimeout(fallbackSafety);
      if (video) {
        video.removeEventListener('progress', checkVideoState);
        video.removeEventListener('canplaythrough', finishLoading);
        video.removeEventListener('loadeddata', checkVideoState);
      }
    };
  }, [videoRef, onLoaded]);

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