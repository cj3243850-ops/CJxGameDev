import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import './App.css';
import Header from './components/Header';
import Mid from './components/Mid';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ContactModal from './components/ContactModal';
import SplashScreen from './components/SplashScreen';
import { initVisitorTracker } from './utils/visitorTracker';

export default function App() {
  const videoRef = useRef(null);
  const stageLayerRef = useRef(null);
  const backdropLayerRef = useRef(null);
  const lenisRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('');
  const [videoBlobUrl, setVideoBlobUrl] = useState(null);

  // 1. Fluid Responsive Viewport Meta
  useEffect(() => {
    let metaTag = document.querySelector('meta[name="viewport"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'viewport';
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
  }, []);

  // 2. Silent Analytics Tracker
  useEffect(() => {
    initVisitorTracker();
  }, []);

  const handleOpenContact = (subjectText = '') => {
    setModalSubject(subjectText || 'General Collaboration / Evaluation Request');
    setIsHireModalOpen(true);
  };

  // 3. Lenis Scroll Freeze jab modal ya splash screen active ho
  useEffect(() => {
    if (isLoading || selectedProject || isHireModalOpen) {
      if (lenisRef.current) lenisRef.current.stop();
    } else {
      if (lenisRef.current) lenisRef.current.start();
    }
  }, [isLoading, selectedProject, isHireModalOpen]);

  // 4. Smooth Lenis Engine & Hardware-Accelerated Video Scrubbing
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: isMobile ? 0.9 : 0.8,
      touchMultiplier: 1.1,
    });

    lenisRef.current = lenis;

    const video = videoRef.current;
    const stageLayer = stageLayerRef.current;
    const backdropLayer = backdropLayerRef.current;

    let targetProgress = 0;
    let renderedProgress = 0;

    lenis.on('scroll', (e) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetProgress = Math.max(0, Math.min(1, e.scroll / maxScroll));
      }
    });

    if (video) {
      video.pause();
      video.currentTime = 0.001;
    }

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          } else {
            entry.target.classList.remove('is-inview');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));

    let rafId = null;

    const animateLoop = (time) => {
      lenis.raf(time);

      // Smooth kinematic interpolation (Lerp)
      const delta = targetProgress - renderedProgress;
      if (Math.abs(delta) < 0.0001) {
        renderedProgress = targetProgress;
      } else {
        renderedProgress += delta * 0.075;
      }

      // Buttery smooth frame scrubbing
      if (video && video.readyState >= 2 && video.duration) {
        const totalDuration = video.duration;
        const calculatedTime = renderedProgress * (totalDuration - 0.03);
        const safeTime = Math.max(0.001, Math.min(totalDuration - 0.02, calculatedTime));

        if (!video.seeking && Math.abs(video.currentTime - safeTime) > 0.01) {
          video.currentTime = safeTime;
        }
      }

      // Dynamic Depth / Camera zoom
      if (stageLayer) {
        const subtleZoom = 1.01 + renderedProgress * 0.025;
        stageLayer.style.transform = `scale(${subtleZoom.toFixed(4)}) translateZ(0)`;
      }

      if (backdropLayer) {
        const shadowDepth = 0.2 + renderedProgress * 0.4;
        backdropLayer.style.opacity = shadowDepth.toFixed(2);
      }

      rafId = requestAnimationFrame(animateLoop);
    };

    rafId = requestAnimationFrame(animateLoop);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [videoBlobUrl]);

  return (
    <div className="portfolio-cinematic-root">
      {/* Splash Screen Preloader: Video blob ready hone tak page lock rakhega */}
      {isLoading && (
        <SplashScreen
          videoRef={videoRef}
          onVideoReady={(blobUrl) => setVideoBlobUrl(blobUrl)}
          onLoaded={() => setIsLoading(false)}
        />
      )}

      {/* Persistent 3D Canvas Layer */}
      <div className="layer-persistent-stage" aria-hidden="true">
        <div className="layer-studio-backdrop" ref={backdropLayerRef} />

        <div className="layer-3d-viewport" ref={stageLayerRef}>
          <video
            ref={videoRef}
            className="persistent-stage-video"
            src={videoBlobUrl || "/Data/background_scroll.mp4"}
            muted
            playsInline
            preload="auto"
          />
        </div>

        <div className="layer-studio-vignette" />
      </div>

      {/* Main Foreground Interactive Content */}
      <div className="layer-scroll-content">
        <Header onOpenHireModal={() => handleOpenContact('Direct Contract Inquiry')} />

        <Mid
          onSelectProject={(proj) => setSelectedProject(proj)}
          onRequestBuild={(title) => handleOpenContact(`Build Access Request: ${title}`)}
        />

        <Footer onOpenHireModal={() => handleOpenContact('Direct Collaboration Request')} />
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestBuild={(title) => handleOpenContact(`Project File Request: ${title}`)}
        />
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={isHireModalOpen}
        initialSubject={modalSubject}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}