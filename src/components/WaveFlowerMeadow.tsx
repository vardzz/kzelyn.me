'use client';

import React, { useEffect, useRef } from 'react';

interface FlowerPlant {
  // Relative position (0 to 1 across width & height of the wave container)
  relX: number;
  relY: number;
  depth: number; // 0 (back), 1 (mid), 2 (front)

  // Morphology
  size: number;
  type: 'cosmos' | 'daisy' | 'poppy' | 'bell' | 'whiteDaisy' | 'peony';
  petals: number;
  petalColorLight: string;
  petalColorMid: string;
  petalColorDark: string;
  centerColorCore: string;
  centerColorEdge: string;
  centerHighlight: string;
  stemLength: number;
  stemCurvature: number;
  leafAngle: number;
  leafSize: number;
  rotation: number;
  tiltX: number;
  tiltY: number;

  // Animation State
  visibility: number; // 0 (completely invisible) to 1 (fully bloomed)
  swaySpeed: number;
  swayPhase: number;
  swayAmp: number;
}

export function WaveFlowerMeadow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -9999, y: -9999, active: false });
  const plantsRef = useRef<FlowerPlant[]>([]);
  const animFrameRef = useRef<number | null>(null);

  // Initialize pre-planted meadow with vibrant 3D floral varieties matching reference
  useEffect(() => {
    const plants: FlowerPlant[] = [];

    // Distinct vibrant 3D flower varieties matching the reference image (ShadcnSpace style):
    // Vivid Pink Cosmos, Sunshine Golden Daisy, Coral Poppy, Periwinkle Bell, Crisp White Daisy, Deep Rose Peony
    const flowerTypes = [
      // 1. Vivid Pink Cosmos (Hero flower in reference)
      {
        type: 'cosmos' as const,
        petals: 8,
        petalColorLight: '#FF80AB',
        petalColorMid: '#FF4081',
        petalColorDark: '#C2185B',
        centerColorCore: '#FFD54F',
        centerColorEdge: '#FF8F00',
        centerHighlight: '#FFF9C4',
      },
      // 2. Sunshine Golden Daisy / Marigold
      {
        type: 'daisy' as const,
        petals: 12,
        petalColorLight: '#FFF59D',
        petalColorMid: '#FFCA28',
        petalColorDark: '#FF8F00',
        centerColorCore: '#8D6E63',
        centerColorEdge: '#4E342E',
        centerHighlight: '#FFE082',
      },
      // 3. Tangerine / Coral Wild Poppy
      {
        type: 'poppy' as const,
        petals: 5,
        petalColorLight: '#FFAB91',
        petalColorMid: '#FF5722',
        petalColorDark: '#BF360C',
        centerColorCore: '#FFD54F',
        centerColorEdge: '#E65100',
        centerHighlight: '#FFFDE7',
      },
      // 4. Periwinkle / Royal Lavender Bellflower
      {
        type: 'bell' as const,
        petals: 6,
        petalColorLight: '#D1C4E9',
        petalColorMid: '#7C4DFF',
        petalColorDark: '#4527A0',
        centerColorCore: '#FFE082',
        centerColorEdge: '#FFB300',
        centerHighlight: '#FFFFFF',
      },
      // 5. Crisp Pure White Daisy with Radiant Golden Eye
      {
        type: 'whiteDaisy' as const,
        petals: 12,
        petalColorLight: '#FFFFFF',
        petalColorMid: '#F5F5F5',
        petalColorDark: '#D7CCC8',
        centerColorCore: '#FFCA28',
        centerColorEdge: '#FF8F00',
        centerHighlight: '#FFFDE7',
      },
      // 6. Deep Magenta / Crimson Peony
      {
        type: 'peony' as const,
        petals: 8,
        petalColorLight: '#F48FB1',
        petalColorMid: '#E91E63',
        petalColorDark: '#880E4F',
        centerColorCore: '#FFE082',
        centerColorEdge: '#FF8F00',
        centerHighlight: '#FFF9C4',
      },
    ];

    // Seed ~125 flowers planted across the 3 wave rolling contours:
    // Back ridge: 35 flowers, Mid slope: 45 flowers, Foreground wave: 45 flowers
    const depthConfigs = [
      { count: 35, depth: 0, yMin: 0.30, yMax: 0.54, sizeMin: 22, sizeMax: 32 },
      { count: 45, depth: 1, yMin: 0.48, yMax: 0.72, sizeMin: 34, sizeMax: 48 },
      { count: 45, depth: 2, yMin: 0.62, yMax: 0.88, sizeMin: 48, sizeMax: 68 },
    ];

    depthConfigs.forEach(({ count, depth, yMin, yMax, sizeMin, sizeMax }) => {
      for (let i = 0; i < count; i++) {
        // Natural distribution with organic clustering
        const relX = (i + (Math.random() - 0.5) * 0.9) / count;
        const clampedX = Math.max(0.015, Math.min(0.985, relX));

        // Follow wave crest contour: sinusoidal ridge
        const crest = 0.32 + 0.16 * Math.sin(clampedX * Math.PI * 3.1);
        const relY = Math.max(crest * 0.88, yMin + Math.random() * (yMax - yMin));

        const variety = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];

        plants.push({
          relX: clampedX,
          relY,
          depth,
          size: sizeMin + Math.random() * (sizeMax - sizeMin),
          type: variety.type,
          petals: variety.petals,
          petalColorLight: variety.petalColorLight,
          petalColorMid: variety.petalColorMid,
          petalColorDark: variety.petalColorDark,
          centerColorCore: variety.centerColorCore,
          centerColorEdge: variety.centerColorEdge,
          centerHighlight: variety.centerHighlight,
          stemLength: 18 + Math.random() * 26,
          stemCurvature: (Math.random() - 0.5) * 24,
          leafAngle: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random() * 0.5),
          leafSize: 8 + Math.random() * 8,
          rotation: Math.random() * Math.PI * 2,
          tiltX: 0.88 + Math.random() * 0.14,
          tiltY: 0.82 + Math.random() * 0.18,
          visibility: 0, // Starts completely invisible
          swaySpeed: 0.025 + Math.random() * 0.025,
          swayPhase: Math.random() * Math.PI * 2,
          swayAmp: 2 + Math.random() * 3,
        });
      }
    });

    // Layering order: back to front, top to bottom
    plants.sort((a, b) => {
      if (a.depth !== b.depth) return a.depth - b.depth;
      return a.relY - b.relY;
    });

    plantsRef.current = plants;
  }, []);

  // Main Canvas Rendering & Physics Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const plants = plantsRef.current;

      // Reveal Radius around cursor: ~220px
      const revealRadius = 220;
      const revealRadiusSq = revealRadius * revealRadius;

      for (let i = 0; i < plants.length; i++) {
        const plant = plants[i];
        const px = plant.relX * width;
        const py = plant.relY * height;

        // Calculate proximity to mouse cursor
        let targetVis = 0;
        if (mouse.active) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < revealRadiusSq) {
            const dist = Math.sqrt(distSq);
            // Smooth bell curve reveal
            const norm = 1 - dist / revealRadius;
            targetVis = norm * norm * (3 - 2 * norm); // Smoothstep curve
          }
        }

        // Spring-based blooming and closing physics
        if (targetVis > plant.visibility) {
          // Blooming open when hovered
          plant.visibility += (targetVis - plant.visibility) * 0.18;
        } else {
          // Gracefully closing when mouse moves away
          plant.visibility += (targetVis - plant.visibility) * 0.08;
        }

        // Zero ghost lines: if visibility is practically zero, strictly clamp and skip rendering
        if (plant.visibility < 0.008) {
          plant.visibility = 0;
          continue;
        }

        const vis = plant.visibility;
        // Organic blossom scale with subtle petal opening overshoot
        const bloomScale = Math.sin(vis * Math.PI * 0.5) * (1 + 0.12 * Math.sin(vis * Math.PI));
        const alpha = Math.min(1, vis * 1.3);

        // Gentle wind sway
        const sway = Math.sin(frame * plant.swaySpeed + plant.swayPhase) * (plant.swayAmp * vis);
        const flowerX = px + sway;
        const flowerY = py;

        const currentStemHeight = plant.stemLength * vis;
        const currentStemWidth = Math.max(1, plant.size * 0.055 * vis);

        ctx.save();
        ctx.globalAlpha = alpha;

        // =============================================================
        // 1. SOFT 3D DROP SHADOW ON THE WAVE SURFACE
        // =============================================================
        if (vis > 0.1) {
          ctx.save();
          ctx.beginPath();
          const shadowY = flowerY + currentStemHeight + plant.size * 0.1;
          const shadowRadiusX = plant.size * 0.45 * bloomScale;
          const shadowRadiusY = plant.size * 0.16 * bloomScale;
          ctx.ellipse(flowerX, shadowY, Math.max(1, shadowRadiusX), Math.max(0.5, shadowRadiusY), 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(23, 21, 19, 0.22)';
          ctx.filter = 'blur(4px)';
          ctx.fill();
          ctx.restore();
        }

        // =============================================================
        // 2. VIBRANT GREEN 3D STEM & SAGE LEAFLETS
        // =============================================================
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(flowerX, flowerY);
        // Curved natural stem bending toward ground
        ctx.quadraticCurveTo(
          px + plant.stemCurvature * vis + sway * 0.5,
          flowerY + currentStemHeight * 0.55,
          px,
          flowerY + currentStemHeight
        );
        ctx.strokeStyle = '#388E3C';
        ctx.lineWidth = currentStemWidth;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Sunlit rim highlight on stem
        ctx.beginPath();
        ctx.moveTo(flowerX - currentStemWidth * 0.2, flowerY);
        ctx.quadraticCurveTo(
          px + plant.stemCurvature * vis + sway * 0.5 - currentStemWidth * 0.2,
          flowerY + currentStemHeight * 0.55,
          px - currentStemWidth * 0.2,
          flowerY + currentStemHeight
        );
        ctx.strokeStyle = '#81C784';
        ctx.lineWidth = Math.max(0.8, currentStemWidth * 0.35);
        ctx.stroke();

        // 3D Teardrop Leaflet branching along stem
        if (vis > 0.3) {
          const leafVis = (vis - 0.3) / 0.7;
          const leafBaseX = px + plant.stemCurvature * 0.4 * vis;
          const leafBaseY = flowerY + currentStemHeight * 0.5;
          const lSize = plant.leafSize * leafVis;

          ctx.save();
          ctx.translate(leafBaseX, leafBaseY);
          ctx.rotate(plant.leafAngle);

          // Leaf body
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(lSize * 0.6, -lSize * 0.4, lSize * 1.2, -lSize * 0.3, lSize * 1.5, 0);
          ctx.bezierCurveTo(lSize * 1.2, lSize * 0.3, lSize * 0.6, lSize * 0.4, 0, 0);
          ctx.fillStyle = '#4CAF50';
          ctx.fill();

          // Leaf highlight vein
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(lSize * 1.3, 0);
          ctx.strokeStyle = '#A5D6A7';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.restore();
        }
        ctx.restore();

        // =============================================================
        // 3. ELEGANT 3D LAYERED FLOWER BLOOM
        // =============================================================
        ctx.save();
        ctx.translate(flowerX, flowerY);
        ctx.rotate(plant.rotation + sway * 0.04);
        // Perspective scaling for rich 3D depth
        ctx.scale(bloomScale * plant.tiltX, bloomScale * plant.tiltY);

        const radius = plant.size * 0.5;
        const petals = plant.petals;
        const angleStep = (Math.PI * 2) / petals;

        // LAYER A: Under-Petals (Shadow / Back Layer for 3D depth)
        for (let p = 0; p < petals; p++) {
          ctx.save();
          ctx.rotate(p * angleStep + angleStep * 0.5);

          ctx.beginPath();
          ctx.ellipse(0, -radius * 0.75, radius * 0.28, radius * 0.48, 0, 0, Math.PI * 2);
          ctx.fillStyle = plant.petalColorDark;
          ctx.fill();

          ctx.restore();
        }

        // LAYER B: Primary Front Petals (With 3D Gradient & Silky Sheen)
        for (let p = 0; p < petals; p++) {
          ctx.save();
          ctx.rotate(p * angleStep);

          const grad = ctx.createLinearGradient(0, 0, 0, -radius * 1.1);
          grad.addColorStop(0, plant.petalColorDark);
          grad.addColorStop(0.35, plant.petalColorMid);
          grad.addColorStop(0.82, plant.petalColorLight);
          grad.addColorStop(1, '#FFFFFF'); // Sunlight rim highlight

          ctx.fillStyle = grad;
          ctx.beginPath();

          if (plant.type === 'poppy') {
            // Broad delicate rounded poppy petal
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-radius * 0.52, -radius * 0.35, -radius * 0.58, -radius * 0.85, 0, -radius * 1.1);
            ctx.bezierCurveTo(radius * 0.58, -radius * 0.85, radius * 0.52, -radius * 0.35, 0, 0);
          } else if (plant.type === 'daisy' || plant.type === 'whiteDaisy') {
            // Slender layered daisy petal
            ctx.moveTo(-radius * 0.14, 0);
            ctx.quadraticCurveTo(-radius * 0.26, -radius * 0.55, 0, -radius * 1.08);
            ctx.quadraticCurveTo(radius * 0.26, -radius * 0.55, radius * 0.14, 0);
          } else if (plant.type === 'bell') {
            // Flared star bell petal
            ctx.moveTo(-radius * 0.15, 0);
            ctx.lineTo(-radius * 0.32, -radius * 0.5);
            ctx.lineTo(0, -radius * 1.12);
            ctx.lineTo(radius * 0.32, -radius * 0.5);
            ctx.lineTo(radius * 0.15, 0);
          } else {
            // Classic cosmos petal with 3 scalloped notches at tip
            ctx.moveTo(-radius * 0.16, 0);
            ctx.bezierCurveTo(-radius * 0.36, -radius * 0.35, -radius * 0.42, -radius * 0.88, -radius * 0.18, -radius * 1.08);
            ctx.lineTo(0, -radius * 1.02);
            ctx.lineTo(radius * 0.18, -radius * 1.08);
            ctx.bezierCurveTo(radius * 0.42, -radius * 0.88, radius * 0.36, -radius * 0.35, radius * 0.16, 0);
          }

          ctx.closePath();
          ctx.fill();

          // Subtle 3D central ridge highlight on each petal
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.lineWidth = Math.max(0.8, radius * 0.04);
          ctx.beginPath();
          ctx.moveTo(0, -radius * 0.15);
          ctx.lineTo(0, -radius * 0.85);
          ctx.stroke();

          ctx.restore();
        }

        // =============================================================
        // 4. 3D DOMED GOLDEN PISTIL / STAMEN CUSHION
        // =============================================================
        const centerRadius = radius * 0.28;

        // Base shadow ring behind stamen dome
        ctx.beginPath();
        ctx.arc(0, 1.5, centerRadius * 1.12, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20, 10, 5, 0.5)';
        ctx.fill();

        // 3D Spherical Radial Gradient Dome
        const stamenGrad = ctx.createRadialGradient(
          -centerRadius * 0.3,
          -centerRadius * 0.35,
          centerRadius * 0.08,
          0,
          0,
          centerRadius
        );
        stamenGrad.addColorStop(0, plant.centerHighlight);
        stamenGrad.addColorStop(0.55, plant.centerColorCore);
        stamenGrad.addColorStop(1, plant.centerColorEdge);

        ctx.beginPath();
        ctx.arc(0, 0, centerRadius, 0, Math.PI * 2);
        ctx.fillStyle = stamenGrad;
        ctx.fill();

        // Ring of delicate 3D golden pollen granules
        const grainCount = 8;
        for (let g = 0; g < grainCount; g++) {
          const gAngle = (g * Math.PI * 2) / grainCount + 0.25;
          const gDist = centerRadius * 0.65;
          const gx = Math.cos(gAngle) * gDist;
          const gy = Math.sin(gAngle) * gDist;

          ctx.beginPath();
          ctx.arc(gx, gy, Math.max(1, centerRadius * 0.16), 0, Math.PI * 2);
          ctx.fillStyle = '#FFE082';
          ctx.fill();

          // Tiny specular glint on pollen grain
          ctx.beginPath();
          ctx.arc(gx - 0.4, gy - 0.4, Math.max(0.4, centerRadius * 0.06), 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        }

        ctx.restore(); // End Flower
        ctx.restore(); // End Global Alpha
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const updatePointer = (clientX: number, clientY: number) => {
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
    // When mouse leaves the wave, flowers smoothly fold and return to invisible
    mouseRef.current = {
      x: -9999,
      y: -9999,
      active: false,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => updatePointer(e.clientX, e.clientY)}
      onMouseEnter={(e) => updatePointer(e.clientX, e.clientY)}
      onMouseLeave={handlePointerLeave}
      onTouchMove={(e) => {
        if (e.touches.length > 0) {
          updatePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchStart={(e) => {
        if (e.touches.length > 0) {
          updatePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchEnd={handlePointerLeave}
      onTouchCancel={handlePointerLeave}
      className="absolute inset-0 w-full h-full z-20 pointer-events-auto cursor-crosshair select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}

export default WaveFlowerMeadow;
