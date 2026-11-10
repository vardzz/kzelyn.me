'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FlowerInstance {
  group: THREE.Group;
  stemMesh: THREE.Mesh;
  headGroup: THREE.Group;
  petals: THREE.Group[];
  leafMesh?: THREE.Mesh;

  // Position & Depth
  relX: number;
  relY: number;
  worldX: number;
  worldY: number;
  worldZ: number;

  baseScale: number;
  stemLength: number;
  rotationSpeed: number;
  swaySpeed: number;
  swayPhase: number;
  swayAmp: number;

  // Animation State
  visibility: number; // 0 (closed/hidden) to 1 (fully bloomed)
}

export function WaveFlowerMeadow() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // -------------------------------------------------------------
    // 1. THREE.JS SCENE, CAMERA, RENDERER
    // -------------------------------------------------------------
    const scene = new THREE.Scene();

    const rect = container.getBoundingClientRect();
    const width = rect.width || window.innerWidth;
    const height = rect.height || 260;

    // Orthographic Camera mapped to container aspect coordinates
    // Visible vertical range: -100 to 100 (height = 200 units)
    const viewHeight = 220;
    const aspect = width / height;
    const viewWidth = viewHeight * aspect;

    const camera = new THREE.OrthographicCamera(
      -viewWidth / 2,
      viewWidth / 2,
      viewHeight / 2,
      -viewHeight / 2,
      1,
      1000
    );
    camera.position.set(0, 0, 250);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // -------------------------------------------------------------
    // 2. LIGHTING SETUP (Soft Studio / Sunlight Aesthetics)
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambientLight);

    // Warm Key Sunlight from Top-Left
    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    keyLight.position.set(-80, 140, 180);
    scene.add(keyLight);

    // Soft Rose / Lavender Rim Fill Light from Bottom-Right
    const rimLight = new THREE.DirectionalLight(0xffd1dc, 1.4);
    rimLight.position.set(100, -60, 100);
    scene.add(rimLight);

    // Subtle Front Specular Light
    const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
    frontLight.position.set(0, 20, 200);
    scene.add(frontLight);

    // -------------------------------------------------------------
    // 3. SHARED MATERIALS & GEOMETRIES (Highly Optimized)
    // -------------------------------------------------------------
    // Vibrant Flower Varieties matching reference image:
    const flowerPalettes = [
      // 1. Vivid Pink Cosmos (Hero)
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xff3377,
          roughness: 0.35,
          metalness: 0.05,
          side: THREE.DoubleSide,
        }),
        center: new THREE.MeshStandardMaterial({
          color: 0xffa000,
          roughness: 0.25,
          metalness: 0.15,
        }),
        type: 'cosmos',
        petalCount: 8,
      },
      // 2. Sunshine Golden Daisy
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xffca28,
          roughness: 0.3,
          metalness: 0.05,
          side: THREE.DoubleSide,
        }),
        center: new THREE.MeshStandardMaterial({
          color: 0x5d4037,
          roughness: 0.4,
          metalness: 0.1,
        }),
        type: 'daisy',
        petalCount: 12,
      },
      // 3. Tangerine Coral Poppy
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xff5722,
          roughness: 0.35,
          metalness: 0.05,
          side: THREE.DoubleSide,
        }),
        center: new THREE.MeshStandardMaterial({
          color: 0xffb300,
          roughness: 0.25,
          metalness: 0.2,
        }),
        type: 'poppy',
        petalCount: 5,
      },
      // 4. Periwinkle / Royal Lavender Bellflower
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0x7c4dff,
          roughness: 0.32,
          metalness: 0.08,
          side: THREE.DoubleSide,
        }),
        center: new THREE.MeshStandardMaterial({
          color: 0xffd54f,
          roughness: 0.25,
          metalness: 0.1,
        }),
        type: 'cosmos',
        petalCount: 6,
      },
      // 5. Crisp Pure White Daisy with Golden Eye
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.28,
          metalness: 0.02,
          side: THREE.DoubleSide,
        }),
        center: new THREE.MeshStandardMaterial({
          color: 0xff9800,
          roughness: 0.25,
          metalness: 0.2,
        }),
        type: 'daisy',
        petalCount: 12,
      },
      // 6. Deep Magenta Peony
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xe91e63,
          roughness: 0.35,
          metalness: 0.05,
          side: THREE.DoubleSide,
        }),
        center: new THREE.MeshStandardMaterial({
          color: 0xffca28,
          roughness: 0.25,
          metalness: 0.15,
        }),
        type: 'cosmos',
        petalCount: 8,
      },
    ];

    const stemMaterial = new THREE.MeshStandardMaterial({
      color: 0x2e7d32,
      roughness: 0.45,
      metalness: 0.05,
    });

    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x43a047,
      roughness: 0.35,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });

    const pollenMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff9c4,
      roughness: 0.2,
      metalness: 0.3,
    });

    // Helper: Create 3D Curved Petal Geometry
    const createPetalGeometry = (type: string) => {
      const shape = new THREE.Shape();
      const length = 10;

      if (type === 'poppy') {
        // Broad rounded poppy petal
        const w = 4.8;
        shape.moveTo(0, 0);
        shape.bezierCurveTo(-w * 0.7, length * 0.3, -w, length * 0.75, 0, length);
        shape.bezierCurveTo(w, length * 0.75, w * 0.7, length * 0.3, 0, 0);
      } else if (type === 'daisy') {
        // Slender elongated daisy petal
        const w = 2.0;
        shape.moveTo(0, 0);
        shape.quadraticCurveTo(-w, length * 0.5, 0, length);
        shape.quadraticCurveTo(w, length * 0.5, 0, 0);
      } else {
        // Classic notched cosmos petal
        const w = 3.6;
        shape.moveTo(-0.8, 0);
        shape.bezierCurveTo(-w, length * 0.35, -w * 0.9, length * 0.85, -1.2, length);
        shape.lineTo(0, length * 0.94);
        shape.lineTo(1.2, length);
        shape.bezierCurveTo(w * 0.9, length * 0.85, w, length * 0.35, 0.8, 0);
      }

      const geom = new THREE.ShapeGeometry(shape, 8);

      // Deform vertices to curve gently inward like a 3D cupped petal
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        const x = pos.getX(i);
        // Cup upward along length and cross-section
        const curveZ = Math.sin((y / length) * Math.PI) * 1.6 - (x * x) * 0.08;
        pos.setZ(i, curveZ);
      }
      geom.computeVertexNormals();
      return geom;
    };

    const cosmosPetalGeom = createPetalGeometry('cosmos');
    const daisyPetalGeom = createPetalGeometry('daisy');
    const poppyPetalGeom = createPetalGeometry('poppy');

    // 3D Stamen Dome & Pollen Beads
    const centerGeom = new THREE.SphereGeometry(3.2, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const pollenGeom = new THREE.SphereGeometry(0.55, 8, 8);

    // 3D Leaf Geometry
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.bezierCurveTo(2.5, -1.5, 5.5, -1.0, 7.5, 0);
    leafShape.bezierCurveTo(5.5, 1.0, 2.5, 1.5, 0, 0);
    const leafGeom = new THREE.ShapeGeometry(leafShape);

    // -------------------------------------------------------------
    // 4. INSTANTIATE MEADOW FLOWERS ACROSS THE WAVE TERRAIN
    // -------------------------------------------------------------
    const flowers: FlowerInstance[] = [];
    const flowerCount = 95;

    // Terrain depths: Back ridge (small), Mid slope (medium), Foreground (large)
    const depthTiers = [
      { count: 28, depthZ: -45, yMin: 0.30, yMax: 0.54, scaleMin: 0.85, scaleMax: 1.15 },
      { count: 35, depthZ: 0, yMin: 0.48, yMax: 0.72, scaleMin: 1.25, scaleMax: 1.65 },
      { count: 32, depthZ: 45, yMin: 0.62, yMax: 0.88, scaleMin: 1.85, scaleMax: 2.55 },
    ];

    depthTiers.forEach((tier) => {
      for (let i = 0; i < tier.count; i++) {
        const relX = (i + (Math.random() - 0.5) * 0.88) / tier.count;
        const clampedX = Math.max(0.02, Math.min(0.98, relX));

        // Follow wave crest contour
        const crest = 0.32 + 0.16 * Math.sin(clampedX * Math.PI * 3.1);
        const relY = Math.max(crest * 0.85, tier.yMin + Math.random() * (tier.yMax - tier.yMin));

        const palette = flowerPalettes[Math.floor(Math.random() * flowerPalettes.length)];
        const scale = tier.scaleMin + Math.random() * (tier.scaleMax - tier.scaleMin);

        // Flower Root Group
        const flowerGroup = new THREE.Group();

        // 3D Stem
        const stemLength = (16 + Math.random() * 18) * (scale * 0.6);
        const stemRadius = 0.55 * (scale * 0.55);
        const stemGeom = new THREE.CylinderGeometry(stemRadius * 0.85, stemRadius * 1.2, stemLength, 10);
        // Anchor pivot at base of stem
        stemGeom.translate(0, stemLength / 2, 0);
        const stemMesh = new THREE.Mesh(stemGeom, stemMaterial);
        stemMesh.castShadow = true;
        flowerGroup.add(stemMesh);

        // 3D Leaf on Stem
        let leafMesh: THREE.Mesh | undefined;
        if (Math.random() > 0.3) {
          leafMesh = new THREE.Mesh(leafGeom, leafMaterial);
          leafMesh.position.set(0, stemLength * 0.45, 0);
          leafMesh.rotation.z = (Math.random() > 0.5 ? 1 : -1) * (0.6 + Math.random() * 0.4);
          leafMesh.rotation.y = Math.random() * Math.PI;
          leafMesh.scale.setScalar(scale * 0.55);
          flowerGroup.add(leafMesh);
        }

        // Flower Head Group (placed at the top tip of the stem)
        const headGroup = new THREE.Group();
        headGroup.position.set(0, stemLength, 0);

        // Petals Array
        const petalGeom =
          palette.type === 'poppy'
            ? poppyPetalGeom
            : palette.type === 'daisy'
            ? daisyPetalGeom
            : cosmosPetalGeom;

        const petals: THREE.Group[] = [];
        const petalAngleStep = (Math.PI * 2) / palette.petalCount;

        for (let p = 0; p < palette.petalCount; p++) {
          const petalPivot = new THREE.Group();
          petalPivot.rotation.z = p * petalAngleStep;

          const petalMesh = new THREE.Mesh(petalGeom, palette.petal);
          // Local offset so petal rotates at base
          petalMesh.position.set(0, 1.8, 0);
          petalPivot.add(petalMesh);

          // Initial closed bud angle: tilted forward towards center
          petalPivot.rotation.x = THREE.MathUtils.degToRad(75);

          headGroup.add(petalPivot);
          petals.push(petalPivot);
        }

        // 3D Stamen Dome Center
        const centerMesh = new THREE.Mesh(centerGeom, palette.center);
        centerMesh.position.set(0, 0, 0.4);
        headGroup.add(centerMesh);

        // Ring of Golden Pollen Beads
        const pollenCount = 8;
        for (let g = 0; g < pollenCount; g++) {
          const pAngle = (g * Math.PI * 2) / pollenCount;
          const px = Math.cos(pAngle) * 2.2;
          const py = Math.sin(pAngle) * 2.2;
          const pMesh = new THREE.Mesh(pollenGeom, pollenMaterial);
          pMesh.position.set(px, py, 1.4);
          headGroup.add(pMesh);
        }

        // Slight natural 3D tilt facing forward/upward toward the viewer
        headGroup.rotation.x = THREE.MathUtils.degToRad(-35 + (Math.random() - 0.5) * 15);
        headGroup.rotation.y = (Math.random() - 0.5) * 0.3;
        headGroup.rotation.z = Math.random() * Math.PI * 2;

        flowerGroup.add(headGroup);

        // Convert 0..1 relative coords to Three.js World coordinates
        const worldX = (clampedX - 0.5) * viewWidth;
        const worldY = (0.5 - relY) * viewHeight;
        const worldZ = tier.depthZ + (Math.random() - 0.5) * 10;

        flowerGroup.position.set(worldX, worldY, worldZ);
        flowerGroup.scale.set(0.001, 0.001, 0.001); // Dormant initially
        flowerGroup.visible = false;

        scene.add(flowerGroup);

        flowers.push({
          group: flowerGroup,
          stemMesh,
          headGroup,
          petals,
          leafMesh,
          relX: clampedX,
          relY,
          worldX,
          worldY,
          worldZ,
          baseScale: scale,
          stemLength,
          rotationSpeed: 0.01 + Math.random() * 0.01,
          swaySpeed: 0.02 + Math.random() * 0.02,
          swayPhase: Math.random() * Math.PI * 2,
          swayAmp: 0.08 + Math.random() * 0.08,
          visibility: 0,
        });
      }
    });

    // -------------------------------------------------------------
    // 5. INTERACTION & RAYCASTING (World Cursor Mapping)
    // -------------------------------------------------------------
    const mousePos = { x: -9999, y: -9999, active: false };

    const updateMouse = (clientX: number, clientY: number) => {
      const bRect = container.getBoundingClientRect();
      if (bRect.width === 0 || bRect.height === 0) return;

      const normX = (clientX - bRect.left) / bRect.width;
      const normY = (clientY - bRect.top) / bRect.height;

      // Map to Three.js Orthographic world coordinates
      mousePos.x = (normX - 0.5) * viewWidth;
      mousePos.y = (0.5 - normY) * viewHeight;
      mousePos.active = true;
    };

    const handlePointerLeave = () => {
      mousePos.x = -9999;
      mousePos.y = -9999;
      mousePos.active = false;
    };

    // -------------------------------------------------------------
    // 6. ANIMATION & PHYSICS ENGINE
    // -------------------------------------------------------------
    let animId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const elapsedTime = clock.getElapsedTime();

      // Radius of blooming effect around cursor in 3D world units: ~70 units
      const bloomRadius = 65;
      const bloomRadiusSq = bloomRadius * bloomRadius;

      for (let i = 0; i < flowers.length; i++) {
        const flower = flowers[i];

        let targetVis = 0;
        if (mousePos.active) {
          const dx = flower.worldX - mousePos.x;
          const dy = flower.worldY - mousePos.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < bloomRadiusSq) {
            const dist = Math.sqrt(distSq);
            // Smoothstep curve: 1 at cursor center, 0 at outer edge
            const norm = 1 - dist / bloomRadius;
            targetVis = norm * norm * (3 - 2 * norm);
          }
        }

        // Spring blooming physics
        if (targetVis > flower.visibility) {
          // Bloom open swiftly
          flower.visibility += (targetVis - flower.visibility) * 0.18;
        } else {
          // Fold gracefully back into bud
          flower.visibility += (targetVis - flower.visibility) * 0.08;
        }

        // Strict clamp when dormant to ensure zero ghost lines
        if (flower.visibility < 0.008) {
          flower.visibility = 0;
          if (flower.group.visible) {
            flower.group.visible = false;
          }
          continue;
        }

        if (!flower.group.visible) {
          flower.group.visible = true;
        }

        const vis = flower.visibility;
        // Organic unfurling scale with spring overshoot
        const bloomScale = Math.sin(vis * Math.PI * 0.5) * (1 + 0.12 * Math.sin(vis * Math.PI));
        const currentScale = flower.baseScale * bloomScale;

        // Scale the root group
        flower.group.scale.set(currentScale, currentScale, currentScale);

        // Dynamic 3D Petal Unfurling:
        // When vis = 0, petals are tilted forward 75deg (closed bud).
        // When vis = 1, petals rotate back to 10deg (fully blossomed bowl).
        const openAngle = THREE.MathUtils.lerp(
          THREE.MathUtils.degToRad(75),
          THREE.MathUtils.degToRad(12),
          Math.min(1, vis * 1.2)
        );

        for (let p = 0; p < flower.petals.length; p++) {
          flower.petals[p].rotation.x = openAngle;
        }

        // Gentle organic wind breeze sway
        const sway = Math.sin(elapsedTime * 2.2 * flower.swaySpeed * 40 + flower.swayPhase) * (flower.swayAmp * vis);
        flower.group.rotation.z = sway;
        flower.group.rotation.x = sway * 0.4;
      }

      renderer.render(scene, camera);
    };

    render();

    // -------------------------------------------------------------
    // 7. WINDOW RESIZE HANDLER
    // -------------------------------------------------------------
    const handleResize = () => {
      const nRect = container.getBoundingClientRect();
      const nWidth = nRect.width || window.innerWidth;
      const nHeight = nRect.height || 260;

      const nAspect = nWidth / nHeight;
      const nViewWidth = viewHeight * nAspect;

      camera.left = -nViewWidth / 2;
      camera.right = nViewWidth / 2;
      camera.top = viewHeight / 2;
      camera.bottom = -viewHeight / 2;
      camera.updateProjectionMatrix();

      renderer.setSize(nWidth, nHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Re-position flowers along newly adjusted horizontal span
      for (let i = 0; i < flowers.length; i++) {
        const flower = flowers[i];
        flower.worldX = (flower.relX - 0.5) * nViewWidth;
        flower.worldY = (0.5 - flower.relY) * viewHeight;
        flower.group.position.x = flower.worldX;
        flower.group.position.y = flower.worldY;
      }
    };

    window.addEventListener('resize', handleResize);

    // Pointer events
    const onMouseMove = (e: MouseEvent) => updateMouse(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateMouse(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseMove);
    container.addEventListener('mouseleave', handlePointerLeave);
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchstart', onTouchMove, { passive: true });
    container.addEventListener('touchend', handlePointerLeave);
    container.addEventListener('touchcancel', handlePointerLeave);

    // -------------------------------------------------------------
    // 8. CLEANUP ON UNMOUNT
    // -------------------------------------------------------------
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);

      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchstart', onTouchMove);
      container.removeEventListener('touchend', handlePointerLeave);
      container.removeEventListener('touchcancel', handlePointerLeave);

      // Dispose Geometries
      cosmosPetalGeom.dispose();
      daisyPetalGeom.dispose();
      poppyPetalGeom.dispose();
      centerGeom.dispose();
      pollenGeom.dispose();
      leafGeom.dispose();

      // Dispose Materials
      stemMaterial.dispose();
      leafMaterial.dispose();
      pollenMaterial.dispose();
      flowerPalettes.forEach((p) => {
        p.petal.dispose();
        p.center.dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-20 pointer-events-auto cursor-crosshair select-none overflow-hidden"
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
