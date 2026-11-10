'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FlowerPlant {
  // Relative position (0 to 1 across width & height of the wave)
  relX: number;
  relY: number;
  depth: number; // 0 (back), 1 (mid), 2 (front)
  
  // Morphology
  targetSize: number;
  type: 'cosmos' | 'daisy' | 'poppy' | 'bell';
  petals: number;
  baseColor: string;
  highlightColor: string;
  shadowColor: string;
  centerColor: string;
  centerHighlight: string;
  stemLength: number;
  stemAngle: number;
  leafAngle: number;
  leafSize: number;
  rotation: number;
  tiltX: number;
  tiltY: number;

  // Animation State
  visibility: number; // 0 (hidden) to 1 (fully bloomed)
  swaySpeed: number;
  swayPhase: number;
}

export function WaveFlowerMeadow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -9999, y: -9999, active: false });
  const plantsRef = useRef<FlowerPlant[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  // Initialize a fixed, natural meadow distribution planted strictly within the wave terrain
  useEffect(() => {
    const plants: FlowerPlant[] = [];

    // Distinct 3D floral varieties based on DESIGN.md palette and reference image
    const varieties = [
      // 1. Dusty Rose Cosmos
      {
        type: 'cosmos' as const,
        petals: 8,
        baseColor: '#D37F87',
        highlightColor: '#F7B7BE',
        shadowColor: '#96444D',
        centerColor: '#E6A828',
        centerHighlight: '#FFE485',
      },
      // 2. Pure Cream / Ivory Daisy
      {
        type: 'daisy' as const,
        petals: 12,
        baseColor: '#F7F4EC',
        highlightColor: '#FFFFFF',
        shadowColor: '#CDC5B4',
        centerColor: '#E59F24',
        centerHighlight: '#FFF09A',
      },
      // 3. Faded Rust / Terracotta Wildflower
      {
        type: 'cosmos' as const,
        petals: 8,
        baseColor: '#BA655F',
        highlightColor: '#DF8D87',
        shadowColor: '#7E3631',
        centerColor: '#F2B84B',
        centerHighlight: '#FFF2B0',
      },
      // 4. Golden Marigold / Poppy
      {
        type: 'poppy' as const,
        petals: 6,
        baseColor: '#EAA93E',
        highlightColor: '#FCD274',
        shadowColor: '#AB6E14',
        centerColor: '#78440B',
        centerHighlight: '#F8C255',
      },
      // 5. Soft Lilac Bellflower
      {
        type: 'bell' as const,
        petals: 6,
        baseColor: '#A892C6',
        highlightColor: '#CBBCE4',
        shadowColor: '#6B548B',
        centerColor: '#E8A524',
        centerHighlight: '#FFE98E',
      },
      // 6. Coral Wild Rose
      {
        type: 'poppy' as const,
        petals: 5,
        baseColor: '#DE7568',
        highlightColor: '#F99F93',
        shadowColor: '#9C3E32',
        centerColor: '#F0BA48',
        centerHighlight: '#FFE688',
      },
    ];

    // Seed ~140 flowers across 3 terrain depths within the wave:
    // Back wave: 35 flowers, Mid wave: 55 flowers, Front wave: 50 flowers
    const depthConfigs = [
      { count: 35, depth: 0, yMin: 0.28, yMax: 0.52, sizeMin: 14, sizeMax: 20 },
      { count: 55, depth: 1, yMin: 0.46, yMax: 0.74, sizeMin: 20, sizeMax: 28 },
      { count: 50, depth: 2, yMin: 0.65, yMax: 0.88, sizeMin: 28, sizeMax: 40 },
    ];

    depthConfigs.forEach(({ count, depth, yMin, yMax, sizeMin, sizeMax }) => {
      for (let i = 0; i < count; i++) {
        // Natural distribution across width (with slight clustering)
        const relX = (i + (Math.random() - 0.5) * 0.85) / count;
        const clampedX = Math.max(0.02, Math.min(0.98, relX));

        // Wave crest elevation equation for natural contouring
        const waveCrest = 0.35 + 0.15 * Math.sin(clampedX * Math.PI * 3.2);
        const relY = Math.max(waveCrest * 0.85, yMin + Math.random() * (yMax - yMin));

        const variety = varieties[Math.floor(Math.random() * varieties.length)];

        plants.push({
          relX: clampedX,
          relY,
          depth,
          targetSize: sizeMin + Math.random() * (sizeMax - sizeMin),
          type: variety.type,
          petals: variety.petals,
          baseColor: variety.baseColor,
          highlightColor: variety.highlightColor,
          shadowColor: variety.shadowColor,
          centerColor: variety.centerColor,
          centerHighlight: variety.centerHighlight,
          stemLength: 16 + Math.random() * 24,
          stemAngle: (Math.random() - 0.5) * 0.35,
          leafAngle: (Math.random() > 0.5 ? 1 : -1) * (0.6 + Math.random() * 0.4),
          leafSize: 6 + Math.random() * 6,
          rotation: Math.random() * Math.PI * 2,
          tiltX: 0.85 + Math.random() * 0.15, // Perspective flattening for 3D tilt
          tiltY: 0.75 + Math.random() * 0.25,
          visibility: 0, // Starts completely invisible
          swaySpeed: 0.02 + Math.random() * 0.02,
          swayPhase: Math.random() * Math.PI * 2,
        });
      }
    });

    // Sort by depth and Y so front flowers naturally layer over back flowers
    plants.sort((a, b) => {
      if (a.depth !== b.depth) return a.depth - b.depth;
      return a.relY - b.relY;
    });

    plantsRef.current = plants;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(canvas);

    let frame = 0;

    const render = () => {
      frame++;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const plants = plantsRef.current;

      // Reveal Radius: ~170px radius where flowers bloom around cursor
      const revealRadius = 175;
      const revealRadiusSq = revealRadius * revealRadius;

      for (let i = 0; i < plants.length; i++) {
        const plant = plants[i];
        const px = plant.relX * width;
        const py = plant.relY * height;

        // Proximity calculation: is mouse nearby?
        let targetVis = 0;
        if (mouse.active) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < revealRadiusSq) {
            const dist = Math.sqrt(distSq);
            // Smooth bell curve reveal: center = 1.0, edge = 0.0
            const norm = 1 - dist / revealRadius;
            targetVis = norm * norm * (3 - 2 * norm); // Smoothstep curve
          }
        }

        // Smooth spring physics for blooming and hiding
        if (targetVis > plant.visibility) {
          // Blooming up
          plant.visibility += (targetVis - plant.visibility) * 0.16;
        } else {
          // Gently folding and hiding when mouse leaves
          plant.visibility += (targetVis - plant.visibility) * 0.09;
        }

        if (plant.visibility < 0.004) {
          plant.visibility = 0;
          continue; // Invisible, skip rendering for high performance
        }

        // Current flower scale: 0 to 1 with an elegant organic blossoming bounce
        const vis = plant.visibility;
        const bloomScale = Math.sin(vis * Math.PI * 0.5) * (1 + 0.14 * Math.sin(vis * Math.PI));
        const currentSize = plant.targetSize * bloomScale;
        const alpha = Math.min(1, vis * 1.35);

        // Natural swaying breeze
        const sway = Math.sin(frame * plant.swaySpeed + plant.swayPhase) * (2.2 * vis);
        const flowerX = px + sway;
        const flowerY = py;

        ctx.save();
        ctx.globalAlpha = alpha;

        // -------------------------------------------------------------
        // 1. SOFT 3D DROP SHADOW CAST ONTO WAVE SURFACE
        // -------------------------------------------------------------
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(
          flowerX + 2,
          flowerY + currentSize * 0.52 + plant.stemLength * 0.25,
          currentSize * 0.65,
          currentSize * 0.24,
          0.15,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = 'rgba(23, 21, 19, 0.16)';
        ctx.filter = 'blur(4px)';
        ctx.fill();
        ctx.restore();

        // -------------------------------------------------------------
        // 2. SLENDER CURVED STEM & SAGE LEAFLET
        // -------------------------------------------------------------
        ctx.beginPath();
        ctx.moveTo(flowerX, flowerY + currentSize * 0.15);
        ctx.quadraticCurveTo(
          px + plant.stemAngle * 30 + sway * 0.5,
          flowerY + plant.stemLength * 0.55,
          px,
          flowerY + plant.stemLength
        );
        ctx.strokeStyle = 'rgba(110, 122, 96, 0.85)';
        ctx.lineWidth = Math.max(1.2, currentSize * 0.06);
        ctx.lineCap = 'round';
        ctx.stroke();

        // Tiny leaflet along stem
        const leafBaseX = px + plant.stemAngle * 12;
        const leafBaseY = flowerY + plant.stemLength * 0.48;
        ctx.beginPath();
        ctx.moveTo(leafBaseX, leafBaseY);
        ctx.quadraticCurveTo(
          leafBaseX + Math.cos(plant.leafAngle) * plant.leafSize * 1.4,
          leafBaseY - Math.sin(plant.leafAngle) * plant.leafSize * 0.6,
          leafBaseX + Math.cos(plant.leafAngle) * plant.leafSize,
          leafBaseY + Math.sin(plant.leafAngle) * plant.leafSize * 0.3
        );
        ctx.fillStyle = 'rgba(122, 134, 108, 0.85)';
        ctx.fill();

        // -------------------------------------------------------------
        // 3. ELEGANT 3D LAYERED FLOWER BLOOM
        // -------------------------------------------------------------
        ctx.translate(flowerX, flowerY);
        // Rotation unfolds slightly as it blooms
        ctx.rotate(plant.rotation + (1 - vis) * 0.4 + sway * 0.03);
        // Perspective tilt for realistic 3D camera angle
        ctx.scale(bloomScale * plant.tiltX, bloomScale * plant.tiltY);

        const petals = plant.petals;
        const angleStep = (Math.PI * 2) / petals;

        // LAYER A: Under-Petals (Depth Shadow Layer)
        for (let p = 0; p < petals; p++) {
          ctx.save();
          ctx.rotate(p * angleStep + angleStep * 0.5);

          ctx.beginPath();
          ctx.ellipse(0, -currentSize * 0.42, currentSize * 0.17, currentSize * 0.45, 0, 0, Math.PI * 2);
          ctx.fillStyle = plant.shadowColor;
          ctx.globalAlpha = alpha * 0.85;
          ctx.fill();

          ctx.restore();
        }

        // LAYER B: Primary Front Petals (With 3D Sunlight Gradient & Velvet Luster)
        for (let p = 0; p < petals; p++) {
          ctx.save();
          ctx.rotate(p * angleStep);

          const grad = ctx.createLinearGradient(0, 0, 0, -currentSize * 0.9);
          grad.addColorStop(0, plant.shadowColor);
          grad.addColorStop(0.3, plant.baseColor);
          grad.addColorStop(0.85, plant.highlightColor);
          grad.addColorStop(1, '#FFFFFF'); // Sunlight rim highlight

          ctx.fillStyle = grad;
          ctx.beginPath();

          if (plant.type === 'poppy') {
            // Broad delicate rounded poppy petal
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-currentSize * 0.28, -currentSize * 0.22, -currentSize * 0.34, -currentSize * 0.62, 0, -currentSize * 0.82);
            ctx.bezierCurveTo(currentSize * 0.34, -currentSize * 0.62, currentSize * 0.28, -currentSize * 0.22, 0, 0);
          } else if (plant.type === 'daisy') {
            // Slender elongated daisy petal
            ctx.moveTo(-currentSize * 0.08, 0);
            ctx.quadraticCurveTo(-currentSize * 0.15, -currentSize * 0.45, 0, -currentSize * 0.88);
            ctx.quadraticCurveTo(currentSize * 0.15, -currentSize * 0.45, currentSize * 0.08, 0);
          } else if (plant.type === 'bell') {
            // Elegant tapered wild petal
            ctx.moveTo(-currentSize * 0.08, 0);
            ctx.lineTo(-currentSize * 0.2, -currentSize * 0.4);
            ctx.lineTo(0, -currentSize * 0.85);
            ctx.lineTo(currentSize * 0.2, -currentSize * 0.4);
            ctx.lineTo(currentSize * 0.08, 0);
          } else {
            // Classic cosmos petal with subtle notched edge
            ctx.moveTo(-currentSize * 0.08, 0);
            ctx.bezierCurveTo(-currentSize * 0.22, -currentSize * 0.32, -currentSize * 0.25, -currentSize * 0.72, -currentSize * 0.08, -currentSize * 0.82);
            ctx.lineTo(0, -currentSize * 0.78);
            ctx.lineTo(currentSize * 0.08, -currentSize * 0.82);
            ctx.bezierCurveTo(currentSize * 0.25, -currentSize * 0.72, currentSize * 0.22, -currentSize * 0.32, currentSize * 0.08, 0);
          }

          ctx.closePath();
          ctx.fill();

          // Delicate specular petal ridge
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.lineWidth = Math.max(0.6, currentSize * 0.025);
          ctx.beginPath();
          ctx.moveTo(0, -currentSize * 0.1);
          ctx.lineTo(0, -currentSize * 0.62);
          ctx.stroke();

          ctx.restore();
        }

        // -------------------------------------------------------------
        // 4. 3D DOMED STAMEN / GOLDEN PISTIL CUSHION
        // -------------------------------------------------------------
        const centerRadius = currentSize * 0.19;

        // Base Stamen Shadow Ring
        ctx.beginPath();
        ctx.arc(0, 1.2, centerRadius * 1.08, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(40, 20, 10, 0.45)';
        ctx.fill();

        // 3D Spherical Radial Gradient Cushion
        const stamenGrad = ctx.createRadialGradient(
          -centerRadius * 0.28,
          -centerRadius * 0.35,
          centerRadius * 0.1,
          0,
          0,
          centerRadius
        );
        stamenGrad.addColorStop(0, plant.centerHighlight);
        stamenGrad.addColorStop(0.65, plant.centerColor);
        stamenGrad.addColorStop(1, '#5C3408');

        ctx.beginPath();
        ctx.arc(0, 0, centerRadius, 0, Math.PI * 2);
        ctx.fillStyle = stamenGrad;
        ctx.fill();

        // Delicate Golden Pollen Grains / Beads
        const grainCount = 7;
        for (let g = 0; g < grainCount; g++) {
          const gAngle = (g * Math.PI * 2) / grainCount + 0.3;
          const gDist = centerRadius * 0.58;
          ctx.beginPath();
          ctx.arc(
            Math.cos(gAngle) * gDist,
            Math.sin(gAngle) * gDist,
            Math.max(0.8, currentSize * 0.026),
            0,
            Math.PI * 2
          );
          ctx.fillStyle = '#FFEAA8';
          ctx.fill();
        }

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

  const handlePointerMove = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    // When the mouse leaves the wave, flowers smoothly close and return to invisible
    mouseRef.current = {
      x: -9999,
      y: -9999,
      active: false,
    };
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onMouseEnter={(e) => handlePointerMove(e.clientX, e.clientY)}
      onMouseLeave={handlePointerLeave}
      onTouchMove={(e) => {
        if (e.touches.length > 0) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchStart={(e) => {
        if (e.touches.length > 0) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchEnd={handlePointerLeave}
      onTouchCancel={handlePointerLeave}
      className="absolute inset-0 w-full h-full z-20 pointer-events-auto cursor-crosshair select-none"
      aria-hidden="true"
    />
  );
}

export default WaveFlowerMeadow;