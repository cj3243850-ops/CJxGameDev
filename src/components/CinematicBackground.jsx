import React, { useEffect, useRef } from 'react';

export default function CinematicBackground({ scrollProgress = 0 }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, vx: 0, vy: 0, lastX: 0, lastY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = window.innerWidth <= 768;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      buildLevelGeometry();
    };

    const handleMouseMove = (e) => {
      const nowX = e.clientX;
      const nowY = e.clientY;
      mouseRef.current.vx = nowX - mouseRef.current.lastX;
      mouseRef.current.vy = nowY - mouseRef.current.lastY;
      mouseRef.current.lastX = nowX;
      mouseRef.current.lastY = nowY;
      mouseRef.current.x = nowX;
      mouseRef.current.y = nowY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const nowX = e.touches[0].clientX;
        const nowY = e.touches[0].clientY;
        mouseRef.current.vx = nowX - mouseRef.current.lastX;
        mouseRef.current.vy = nowY - mouseRef.current.lastY;
        mouseRef.current.lastX = nowX;
        mouseRef.current.lastY = nowY;
        mouseRef.current.x = nowX;
        mouseRef.current.y = nowY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Procedural Level Design Blocks
    let blocks = [];
    let debris = [];

    const buildLevelGeometry = () => {
      blocks = [];
      const cols = isMobile ? 4 : 8;
      const rows = isMobile ? 5 : 7;
      const cellW = width / cols;
      const cellH = height / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.4) {
            const bw = Math.min(cellW * 0.72, 130);
            const bh = Math.min(cellH * 0.45, 75);
            blocks.push({
              baseX: c * cellW + (cellW - bw) / 2,
              baseY: r * cellH + (cellH - bh) / 2,
              w: bw,
              h: bh,
              depth: Math.floor(Math.random() * 14) + 8,
              isBroken: false,
              respawnTimer: 0,
              label: `LVL_${r}${c}`,
              opacity: 0.8,
            });
          }
        }
      }
    };

    buildLevelGeometry();

    const shatterBlock = (bx, by, bw, bh) => {
      const pieceCount = isMobile ? 5 : 8;
      for (let i = 0; i < pieceCount; i++) {
        debris.push({
          x: bx + Math.random() * bw,
          y: by + Math.random() * bh,
          vx: (Math.random() - 0.5) * 8 + mouseRef.current.vx * 0.25,
          vy: (Math.random() - 0.5) * 8 - Math.random() * 4,
          rot: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 10 + 4,
          alpha: 1,
        });
      }
    };

    let gridOffset = 0;

    const render = () => {
      ctx.fillStyle = '#030508';
      ctx.fillRect(0, 0, width, height);

      const m = mouseRef.current;
      const currentScroll = window.scrollY || window.pageYOffset || 0;

      // Infinite Blueprint Grid (Scroll Responsive)
      gridOffset = (gridOffset + 0.3) % 40;
      const scrollYOffset = (currentScroll * 0.4) % 40;
      const gridSize = 40;

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = (gridOffset - scrollYOffset + gridSize) % gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Mouse Glow Lamp
      if (m.x > 0 && m.y > 0) {
        const glow = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, isMobile ? 160 : 280);
        glow.addColorStop(0, 'rgba(0, 229, 255, 0.09)');
        glow.addColorStop(0.5, 'rgba(0, 102, 177, 0.03)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      // Dynamic Parallax Tilt
      const tiltX = (m.x - width / 2) * 0.012;
      const tiltY = (m.y - height / 2) * 0.012;

      // Render Level Volumes
      blocks.forEach((b) => {
        if (b.isBroken) {
          b.respawnTimer--;
          if (b.respawnTimer <= 0) {
            b.isBroken = false;
            b.opacity = 0.1;
          }
          return;
        }

        if (b.opacity < 0.8) b.opacity += 0.02;

        // Position adjusts smoothly with scroll and tilt
        const px = b.baseX + tiltX * (b.depth * 0.15);
        // Infinite vertical wrap so blocks never end
        const scrollFactor = (currentScroll * 0.25) % height;
        let py = b.baseY - scrollFactor;
        if (py < -100) py += height + 100;

        const dist = Math.hypot(m.x - (px + b.w / 2), m.y - (py + b.h / 2));
        const speed = Math.hypot(m.vx, m.vy);

        // Break trigger
        if ((dist < 45 && speed > 5) || dist < 22) {
          b.isBroken = true;
          b.respawnTimer = 200;
          shatterBlock(px, py, b.w, b.h);
          return;
        }

        ctx.save();
        ctx.globalAlpha = b.opacity;

        // Face
        ctx.fillStyle = 'rgba(8, 12, 18, 0.7)';
        ctx.strokeStyle = dist < 120 ? '#00e5ff' : 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.fillRect(px, py, b.w, b.h);
        ctx.strokeRect(px, py, b.w, b.h);

        // Top depth
        ctx.fillStyle = 'rgba(16, 22, 32, 0.75)';
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + b.depth, py - b.depth);
        ctx.lineTo(px + b.w + b.depth, py - b.depth);
        ctx.lineTo(px + b.w, py);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Right depth
        ctx.fillStyle = 'rgba(12, 17, 26, 0.85)';
        ctx.beginPath();
        ctx.moveTo(px + b.w, py);
        ctx.lineTo(px + b.w + b.depth, py - b.depth);
        ctx.lineTo(px + b.w + b.depth, py + b.h - b.depth);
        ctx.lineTo(px + b.w, py + b.h);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Label
        ctx.fillStyle = dist < 120 ? '#00e5ff' : 'rgba(255, 255, 255, 0.3)';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillText(b.label, px + 5, py + 13);

        ctx.restore();
      });

      // Render Debris
      for (let i = debris.length - 1; i >= 0; i--) {
        const d = debris[i];
        d.x += d.vx;
        d.y += d.vy;
        d.vy += 0.3;
        d.rot += d.vRot;
        d.alpha -= 0.02;

        if (d.alpha <= 0) {
          debris.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = d.alpha;
        ctx.translate(d.x, d.y);
        ctx.rotate(d.rot);
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(-d.size / 2, -d.size / 2, d.size, d.size);
        ctx.restore();
      }

      m.vx *= 0.85;
      m.vy *= 0.85;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cinematic-bg-container" aria-hidden="true">
      <canvas ref={canvasRef} className="cinematic-bg-canvas" />
      <div className="cinematic-bg-vignette" />
      <div className="cinematic-bg-scanline" />
    </div>
  );
}