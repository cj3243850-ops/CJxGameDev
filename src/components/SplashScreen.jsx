import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ videoRef, onVideoReady, onLoaded }) {
  const [progress, setProgress] = useState(5);
  const [statusText, setStatusText] = useState('DOWNLOADING PERSISTENT VIDEO CACHE...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const videoUrl = '/Data/background_scroll.mp4';

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
      }, 400);
    };

    // Real video byte stream fetch (Zero browser stutter/stops)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', videoUrl, true);
    xhr.responseType = 'blob';

    xhr.onprogress = (event) => {
      if (event.lengthComputable && isMounted) {
        const percent = Math.min(96, Math.floor((event.loaded / event.total) * 100));
        setProgress((prev) => Math.max(prev, percent));

        if (percent > 40 && percent < 75) {
          setStatusText('BUFFERING PERSISTENT 3D STAGE & CANVASES...');
        } else if (percent >= 75) {
          setStatusText('CALIBRATING KINEMATIC RAYCAST MATRICES...');
        }
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200 && isMounted) {
        const blobUrl = URL.createObjectURL(xhr.response);
        if (onVideoReady) onVideoReady(blobUrl);

        if (videoRef?.current) {
          videoRef.current.src = blobUrl;
          videoRef.current.load();
        }
        finishLoading();
      } else {
        finishLoading();
      }
    };

    xhr.onerror = () => {
      finishLoading();
    };

    xhr.send();

    return () => {
      isMounted = false;
      xhr.abort();
    };
  }, [videoRef, onVideoReady, onLoaded]);

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