'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface Flower {
  x: number;
  y: number;
  targetSize: number;
  size: number;
  type: 'cosmos' | 'poppy' | 'daisy' | 'wild';
  petals: number;
  petalColor: string;
  petalAccentColor: string;
  centerColor: string;
  stemColor: string;
  stemHeight: number;
  stemCurve: number;
  rotation: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayPhase: number;
  age: number;
  maxAge: number;
  fadeStart: number;
  leafAngle: number;
  leafSize: number;
}

interface FloatingPetal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vRot: number;
  color: string;
  alpha: number;
  maxAge: number;
  age: number;
}

export function WaveFlowerMeadow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const flowersRef = useRef<Flower[]>([]);
  const petalsRef = useRef<FloatingPetal[]>([]);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  // Harmonious high-fashion palette matching DESIGN.md and the user reference image
  const flowerPalette = [
    // Dusty Rose
    { petal: '#D1A9A5', accent: '#E8BBB7', center: '#E6A838' },
    // Terracotta / Rust
    { petal: '#AE6965', accent: '#C47C78', center: '#F4C856' },
    // Pearl Cream
    { petal: '#FBF9F4', accent: '#F0ECE1', center: '#E5A832' },
    // Golden Marigold
    { petal: '#E6B064', accent: '#F5C678', center: '#C87B22' },
    // Coral Wildflower
    { petal: '#DE7E72', accent: '#EB9388', center: '#F0BC48' },
    // Soft Lilac / Lavender
    { petal: '#BCA8D4', accent: '#CCAAD4', center: '#E8B44A' },
    // Soft White
    { petal: '#FFFFFF', accent: '#F2EFEB', center: '#E8A228' },
  ];

  const spawnFlower = useCallback((x: number, y: number, isSubFlower = false) => {
    const palette = flowerPalette[Math.floor(Math.random() * flowerPalette.length)];
    const types: Flower['type'][] = ['cosmos', 'poppy', 'daisy', 'wild'];
    const type = types[Math.floor(Math.random() * types.length)];

    let petals = 8;
    if (type === 'poppy') petals = 5;
    else if (type === 'daisy') petals = 12;
    else if (type === 'wild') petals = 6;
    else petals = Math.random() > 0.5 ? 8 : 10;

    const baseSize = isSubFlower 
      ? 12 + Math.random() * 10 
      : 18 + Math.random() * 16;

    const stemHeight = 16 + Math.random() * 32;

    const newFlower: Flower = {
      x,
      y,
      targetSize: baseSize,
      size: 0,
      type,
      petals,
      petalColor: palette.petal,
      petalAccentColor: palette.accent,
      centerColor: palette.center,
      stemColor: 'rgba(122, 129, 108, 0.75)', // Sage Green from DESIGN.md
      stemHeight,
      stemCurve: (Math.random() - 0.5) * 16,
      rotation: Math.random() * Math.PI * 2,
      swaySpeed: 0.02 + Math.random() * 0.02,
      swayAmplitude: 2 + Math.random() * 3.5,
      swayPhase: Math.random() * Math.PI * 2,
      age: 0,
      maxAge: 260 + Math.random() * 140, // 5 to 7 seconds at 60fps
      fadeStart: 180 + Math.random() * 80,
      leafAngle: (Math.random() > 0.5 ? 1 : -1) * (0.6 + Math.random() * 0.4),
      leafSize: 6 + Math.random() * 6,
    };

    flowersRef.current.push(newFlower);

    // Limit maximum active flowers to 120 for peak performance
    if (flowersRef.current.length > 120) {
      flowersRef.current.shift();
    }

    // Occasional drifting petal for poetry
    if (Math.random() > 0.6) {
      petalsRef.current.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 0.8 + 0.3,
        vy: -0.6 - Math.random() * 0.8,
        size: 4 + Math.random() * 4,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.06,
        color: palette.petal,
        alpha: 0.9,
        maxAge: 120 + Math.random() * 60,
        age: 0,
      });
    }
  }, [flowerPalette]);

  const handlePointerInteraction = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

    if (!lastPosRef.current) {
      lastPosRef.current = { x, y };
      spawnFlower(x, y);
      return;
    }

    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;
    const dist = Math.hypot(dx, dy);

    // Spawn every ~14px of cursor movement for rich meadow density
    if (dist >= 14) {
      lastPosRef.current = { x, y };
      spawnFlower(x, y);

      // 45% chance to spawn an organic clustered accent flower
      if (Math.random() > 0.55) {
        const angle = Math.random() * Math.PI * 2;
        const offset = 8 + Math.random() * 14;
        spawnFlower(x + Math.cos(angle) * offset, y + Math.sin(angle) * offset, true);
      }
    }
  }, [spawnFlower]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high-DPI displays
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Intersection observer to pause rendering when not scrolled into view
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    }, { threshold: 0.05 });

    observer.observe(canvas);

    let time = 0;

    const render = () => {
      time++;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const flowers = flowersRef.current;
      const petals = petalsRef.current;

      // 1. RENDER & UPDATE FLOWERS
      for (let i = flowers.length - 1; i >= 0; i--) {
        const f = flowers[i];
        f.age++;

        // Smooth spring bloom unfolding
        if (f.age < 25) {
          const progress = f.age / 25;
          // Spring overshoot
          const ease = 1 + 2.7 * Math.pow(progress - 1, 3) + 1.7 * Math.pow(progress - 1, 2);
          f.size = f.targetSize * Math.max(0, ease);
        } else {
          f.size = f.targetSize;
        }

        // Fade out at end of life
        let alpha = 1;
        if (f.age > f.fadeStart) {
          alpha = Math.max(0, 1 - (f.age - f.fadeStart) / (f.maxAge - f.fadeStart));
        }

        if (f.age >= f.maxAge || alpha <= 0.01) {
          flowers.splice(i, 1);
          continue;
        }

        // Organic sinusoidal sway
        const sway = Math.sin(time * f.swaySpeed + f.swayPhase) * f.swayAmplitude;
        const currentX = f.x + sway;
        const currentY = f.y;

        ctx.save();
        ctx.globalAlpha = alpha;

        // Draw Stem
        ctx.beginPath();
        ctx.moveTo(currentX, currentY + f.size * 0.2);
        ctx.quadraticCurveTo(
          f.x + f.stemCurve + sway * 0.5,
          currentY + f.stemHeight * 0.5,
          f.x,
          currentY + f.stemHeight
        );
        ctx.strokeStyle = f.stemColor;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Draw Tiny Leaf
        const leafBaseX = f.x + f.stemCurve * 0.4;
        const leafBaseY = currentY + f.stemHeight * 0.45;
        ctx.beginPath();
        ctx.moveTo(leafBaseX, leafBaseY);
        ctx.quadraticCurveTo(
          leafBaseX + Math.cos(f.leafAngle) * f.leafSize * 1.3,
          leafBaseY - Math.sin(f.leafAngle) * f.leafSize * 0.6,
          leafBaseX + Math.cos(f.leafAngle) * f.leafSize,
          leafBaseY + Math.sin(f.leafAngle) * f.leafSize * 0.3
        );
        ctx.fillStyle = 'rgba(122, 129, 108, 0.7)';
        ctx.fill();

        // Position for Flower Head
        ctx.translate(currentX, currentY);
        ctx.rotate(f.rotation + sway * 0.04);

        const currentScale = f.size / 24;
        ctx.scale(currentScale, currentScale);

        // Draw Flower Petals
        const angleStep = (Math.PI * 2) / f.petals;

        for (let p = 0; p < f.petals; p++) {
          ctx.save();
          ctx.rotate(p * angleStep);

          // Subtle gradient on petals
          const petalGrad = ctx.createLinearGradient(0, 0, 0, -18);
          petalGrad.addColorStop(0, f.petalAccentColor);
          petalGrad.addColorStop(1, f.petalColor);

          ctx.fillStyle = petalGrad;
          ctx.beginPath();

          if (f.type === 'poppy') {
            // Broad delicate rounded poppy petal
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-9, -6, -11, -16, 0, -19);
            ctx.bezierCurveTo(11, -16, 9, -6, 0, 0);
          } else if (f.type === 'daisy') {
            // Slender elongated daisy petal
            ctx.moveTo(-1.8, 0);
            ctx.quadraticCurveTo(-4, -10, 0, -20);
            ctx.quadraticCurveTo(4, -10, 1.8, 0);
          } else if (f.type === 'wild') {
            // Elegant tapered wild petal
            ctx.moveTo(-2, 0);
            ctx.lineTo(-5, -9);
            ctx.lineTo(0, -17);
            ctx.lineTo(5, -9);
            ctx.lineTo(2, 0);
          } else {
            // Classic cosmos petal with soft notched edge
            ctx.moveTo(-2, 0);
            ctx.bezierCurveTo(-6, -7, -7, -15, -2, -18);
            ctx.lineTo(0, -17);
            ctx.lineTo(2, -18);
            ctx.bezierCurveTo(7, -15, 6, -7, 2, 0);
          }

          ctx.closePath();
          ctx.fill();

          // Subtle petal vein
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -12);
          ctx.stroke();

          ctx.restore();
        }

        // Center Pistil / Golden Stamen Disc
        ctx.beginPath();
        const centerR = f.type === 'daisy' ? 5.2 : 4.2;
        ctx.arc(0, 0, centerR, 0, Math.PI * 2);
        ctx.fillStyle = f.centerColor;
        ctx.fill();

        // Center Highlight Ring
        ctx.strokeStyle = 'rgba(255, 240, 200, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Tiny Pollen Dots
        ctx.fillStyle = 'rgba(75, 40, 10, 0.45)';
        for (let d = 0; d < 5; d++) {
          const dotAng = (d * Math.PI * 2) / 5;
          const dotDist = centerR * 0.52;
          ctx.beginPath();
          ctx.arc(Math.cos(dotAng) * dotDist, Math.sin(dotAng) * dotDist, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // 2. RENDER & UPDATE FLOATING PETALS
      for (let j = petals.length - 1; j >= 0; j--) {
        const pt = petals[j];
        pt.age++;
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.rotation += pt.vRot;

        const pAlpha = Math.max(0, (1 - pt.age / pt.maxAge) * pt.alpha);

        if (pt.age >= pt.maxAge || pAlpha <= 0.01) {
          petals.splice(j, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = pAlpha;
        ctx.translate(pt.x, pt.y);
        ctx.rotate(pt.rotation);

        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, pt.size, pt.size * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => handlePointerInteraction(e.clientX, e.clientY)}
      onTouchMove={(e) => {
        if (e.touches.length > 0) {
          handlePointerInteraction(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      className="absolute inset-0 w-full h-full z-20 pointer-events-auto cursor-crosshair select-none"
      aria-hidden="true"
    />
  );
}

export default WaveFlowerMeadow;
