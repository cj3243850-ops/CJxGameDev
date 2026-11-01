import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import './App.css';
import Header from './components/Header';
import Mid from './components/Mid';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ContactModal from './components/ContactModal';
import SplashScreen from './components/SplashScreen';
import CinematicBackground from './components/CinematicBackground';
import { initVisitorTracker } from './utils/visitorTracker';

export default function App() {
  const lenisRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // 2. Silent Analytics & Visitor Tracking
  useEffect(() => {
    initVisitorTracker();
  }, []);

  const handleOpenContact = (subjectText = '') => {
    setModalSubject(subjectText || 'General Collaboration / Level Design Review');
    setIsHireModalOpen(true);
  };

  // 3. Modal / Overlay Lenis Lock
  useEffect(() => {
    if (isLoading || selectedProject || isHireModalOpen) {
      if (lenisRef.current) lenisRef.current.stop();
    } else {
      if (lenisRef.current) lenisRef.current.start();
    }
  }, [isLoading, selectedProject, isHireModalOpen]);

  // 4. Smooth Kinematic Lenis Engine
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: isMobile ? 0.9 : 0.85,
      touchMultiplier: 1.15,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', (e) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.max(0, Math.min(1, e.scroll / maxScroll)));
      }
    });

    // Intersection observer for section reveals
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
      rafId = requestAnimationFrame(animateLoop);
    };

    rafId = requestAnimationFrame(animateLoop);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="portfolio-cinematic-root">
      {/* Dynamic Procedural Greybox Level Background */}
      <CinematicBackground scrollProgress={scrollProgress} />

      {/* Splash Engine Bootloader */}
      {isLoading && (
        <SplashScreen onLoaded={() => setIsLoading(false)} />
      )}

      {/* Structured Single-Page Hierarchy */}
      <div className="layer-scroll-content">
        <Header onOpenHireModal={() => handleOpenContact('Direct Contract Inquiry')} />

        <main className="portfolio-main-body">
          <Mid
            onSelectProject={(proj) => setSelectedProject(proj)}
            onRequestBuild={(title) => handleOpenContact(`Build Access Request: ${title}`)}
          />
        </main>

        <Footer onOpenHireModal={() => handleOpenContact('Direct Collaboration Request')} />
      </div>

      {/* Modal Overlays */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestBuild={(title) => handleOpenContact(`Project File Request: ${title}`)}
        />
      )}

      <ContactModal
        isOpen={isHireModalOpen}
        initialSubject={modalSubject}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}