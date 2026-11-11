'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TulipInstance {
  group: THREE.Group;
  stemMesh: THREE.Mesh;
  headGroup: THREE.Group;
  outerPetals: THREE.Group[];
  innerPetals: THREE.Group[];
  leafMesh?: THREE.Mesh;

  // Position & Depth
  relX: number;
  relY: number;
  worldX: number;
  worldY: number;
  worldZ: number;

  baseScale: number;
  stemLength: number;
  swaySpeed: number;
  swayPhase: number;
  swayAmp: number;

  // Animation State
  visibility: number; // 0 (hidden/closed bud) to 1 (fully bloomed)
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
    camera.position.set(0, 0, 260);
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
    renderer.toneMappingExposure = 1.18;

    // -------------------------------------------------------------
    // 2. LIGHTING SETUP (Luminous Sunlight & Soft Rim Lighting)
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    // Warm Key Sunlight from Top-Left
    const keyLight = new THREE.DirectionalLight(0xfff6e8, 2.3);
    keyLight.position.set(-90, 160, 180);
    scene.add(keyLight);

    // Soft Rose / Lavender Rim Light from Bottom-Right
    const rimLight = new THREE.DirectionalLight(0xffd6e0, 1.35);
    rimLight.position.set(110, -70, 110);
    scene.add(rimLight);

    // Front Diffuse Fill
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.75);
    fillLight.position.set(0, 20, 220);
    scene.add(fillLight);

    // -------------------------------------------------------------
    // 3. TULIP MATERIALS & COLOR PALETTES
    // -------------------------------------------------------------
    // Pure Tulips with diverse, elegant colors
    const tulipPalettes = [
      // 1. Dutch Scarlet Red Tulip
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xeb2f37,
          roughness: 0.32,
          metalness: 0.05,
          side: THREE.DoubleSide,
        }),
        pistil: 0xd4a017,
      },
      // 2. Ballet Rose / Peony Pink Tulip
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xf472b6,
          roughness: 0.3,
          metalness: 0.04,
          side: THREE.DoubleSide,
        }),
        pistil: 0xfbcfe8,
      },
      // 3. Canary Sunshine Yellow Tulip
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xfbbf24,
          roughness: 0.28,
          metalness: 0.06,
          side: THREE.DoubleSide,
        }),
        pistil: 0xca8a04,
      },
      // 4. Sunset Coral / Tangerine Tulip
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xf97316,
          roughness: 0.32,
          metalness: 0.05,
          side: THREE.DoubleSide,
        }),
        pistil: 0xfde047,
      },
      // 5. Royal Velvet Plum / Deep Violet Tulip
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0x8b5cf6,
          roughness: 0.34,
          metalness: 0.08,
          side: THREE.DoubleSide,
        }),
        pistil: 0xddd6fe,
      },
      // 6. Crisp Pure White / Ivory Pearl Tulip
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.25,
          metalness: 0.02,
          side: THREE.DoubleSide,
        }),
        pistil: 0xfef08a,
      },
      // 7. Lavender Lilac Tulip
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xc084fc,
          roughness: 0.32,
          metalness: 0.06,
          side: THREE.DoubleSide,
        }),
        pistil: 0xfef08a,
      },
      // 8. Ruby Crimson / Cherry Tulip
      {
        petal: new THREE.MeshStandardMaterial({
          color: 0xd946ef,
          roughness: 0.32,
          metalness: 0.05,
          side: THREE.DoubleSide,
        }),
        pistil: 0xfde047,
      },
    ];

    const stemMaterial = new THREE.MeshStandardMaterial({
      color: 0x388e3c,
      roughness: 0.42,
      metalness: 0.06,
    });

    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x43a047,
      roughness: 0.38,
      metalness: 0.04,
      side: THREE.DoubleSide,
    });

    const pistilMaterial = new THREE.MeshStandardMaterial({
      color: 0xa3e635,
      roughness: 0.35,
      metalness: 0.1,
    });

    const antherMaterial = new THREE.MeshStandardMaterial({
      color: 0x261a12,
      roughness: 0.45,
      metalness: 0.1,
    });

    // -------------------------------------------------------------
    // 4. 3D TULIP PETAL GEOMETRIES (Cupped Chalice / Spoon Shells)
    // -------------------------------------------------------------
    // Helper to generate a curved, organic tulip petal mesh
    const createTulipPetalGeometry = (length: number, maxHalfWidth: number, cupDepth: number) => {
      const shape = new THREE.Shape();
      const w = maxHalfWidth;

      // Classic rounded tulip petal outline: wide cupped belly, soft rounded tip
      shape.moveTo(0, 0);
      shape.bezierCurveTo(-w * 0.7, length * 0.22, -w, length * 0.52, -w * 0.82, length * 0.78);
      shape.bezierCurveTo(-w * 0.5, length * 0.94, -0.3, length * 0.99, 0, length);
      shape.bezierCurveTo(0.3, length * 0.99, w * 0.5, length * 0.94, w * 0.82, length * 0.78);
      shape.bezierCurveTo(w, length * 0.52, w * 0.7, length * 0.22, 0, 0);

      const geom = new THREE.ShapeGeometry(shape, 12);

      // Deform vertices in 3D: longitudinal bow + transversal cup
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        const x = pos.getX(i);
        const normY = y / length; // 0 to 1

        // Bow outward in the belly, curling gently inward at the top
        const longitudinalBow = Math.sin(normY * Math.PI * 0.85) * (cupDepth * 1.25);
        // Transverse hollow (spoon cup)
        const transversalCup = (x * x) * (cupDepth * 0.12);

        pos.setZ(i, longitudinalBow - transversalCup);
      }

      geom.computeVertexNormals();
      return geom;
    };

    // Outer Petals: chalice cup
    const outerPetalGeom = createTulipPetalGeometry(9.8, 3.4, 2.0);
    // Inner Petals: slightly shorter, nested inside
    const innerPetalGeom = createTulipPetalGeometry(9.2, 3.0, 1.8);

    // Tulip Pistil & Stamen Geometries
    const pistilGeom = new THREE.CylinderGeometry(0.6, 0.9, 2.8, 8);
    const antherGeom = new THREE.CylinderGeometry(0.22, 0.22, 1.4, 6);

    // Tulip Foliage: Graceful lanceolate sword-like leaf
    const leafShape = new THREE.Shape();
    const lLen = 16;
    const lW = 2.0;
    leafShape.moveTo(0, 0);
    leafShape.bezierCurveTo(-lW * 0.6, lLen * 0.25, -lW, lLen * 0.55, 0, lLen);
    leafShape.bezierCurveTo(lW, lLen * 0.55, lW * 0.6, lLen * 0.25, 0, 0);
    const leafGeom = new THREE.ShapeGeometry(leafShape, 10);

    // Deform leaf to curve gracefully along the stem
    const leafPos = leafGeom.attributes.position;
    for (let i = 0; i < leafPos.count; i++) {
      const y = leafPos.getY(i);
      const x = leafPos.getX(i);
      const normY = y / lLen;
      const curlZ = Math.sin(normY * Math.PI) * 2.2 - (x * x) * 0.2;
      leafPos.setZ(i, curlZ);
    }
    leafGeom.computeVertexNormals();

    // -------------------------------------------------------------
    // 5. INSTANTIATE TULIP MEADOW ACROSS WAVE TERRAIN
    // -------------------------------------------------------------
    const tulips: TulipInstance[] = [];

    // 3 depth tiers across the rolling wave with well-calibrated, elegant scale bounds:
    // Back ridge: smaller tulips (depthZ: -50)
    // Mid slope: medium tulips (depthZ: 0)
    // Foreground wave: prominent hero tulips (depthZ: 50)
    const depthTiers = [
      { count: 30, depthZ: -50, yMin: 0.38, yMax: 0.54, scaleMin: 0.65, scaleMax: 0.82 },
      { count: 40, depthZ: 0, yMin: 0.52, yMax: 0.70, scaleMin: 0.88, scaleMax: 1.12 },
      { count: 35, depthZ: 50, yMin: 0.66, yMax: 0.88, scaleMin: 1.18, scaleMax: 1.42 },
    ];

    depthTiers.forEach((tier) => {
      for (let i = 0; i < tier.count; i++) {
        // Natural distribution with safe screen padding away from cutoffs
        const relX = (i + (Math.random() - 0.5) * 0.85) / tier.count;
        const clampedX = Math.max(0.04, Math.min(0.94, relX));

        // Sine wave crest contour equation
        const crest = 0.32 + 0.16 * Math.sin(clampedX * Math.PI * 3.1);
        const relY = Math.max(crest * 0.88, tier.yMin + Math.random() * (tier.yMax - tier.yMin));

        const palette = tulipPalettes[Math.floor(Math.random() * tulipPalettes.length)];
        const scale = tier.scaleMin + Math.random() * (tier.scaleMax - tier.scaleMin);

        // Tulip Root Group
        const tulipGroup = new THREE.Group();

        // 3D Smooth Tulip Stem in base units (so scale is not doubled)
        const stemLength = 13 + Math.random() * 6;
        const stemRadius = 0.48;
        const stemGeom = new THREE.CylinderGeometry(stemRadius * 0.85, stemRadius * 1.15, stemLength, 10);
        stemGeom.translate(0, stemLength / 2, 0);
        const stemMesh = new THREE.Mesh(stemGeom, stemMaterial);
        tulipGroup.add(stemMesh);

        // 3D Tulip Lanceolate Leaf clasping the stem
        let leafMesh: THREE.Mesh | undefined;
        if (Math.random() > 0.25) {
          leafMesh = new THREE.Mesh(leafGeom, leafMaterial);
          leafMesh.position.set(0, stemLength * 0.18, 0);
          leafMesh.rotation.z = (Math.random() > 0.5 ? 1 : -1) * (0.32 + Math.random() * 0.3);
          leafMesh.rotation.y = (Math.random() - 0.5) * 0.6;
          tulipGroup.add(leafMesh);
        }

        // Tulip Head Group (at the top tip of the stem)
        const headGroup = new THREE.Group();
        headGroup.position.set(0, stemLength, 0);

        // 6 Classic Tulip Tepals: 3 Outer, 3 Inner
        const outerPetals: THREE.Group[] = [];
        const innerPetals: THREE.Group[] = [];

        // Outer 3 Petals (at 0, 120, 240 degrees)
        for (let p = 0; p < 3; p++) {
          const pivot = new THREE.Group();
          pivot.rotation.y = (p * Math.PI * 2) / 3;

          const mesh = new THREE.Mesh(outerPetalGeom, palette.petal);
          mesh.position.set(0, 0, 1.0);
          pivot.add(mesh);

          // Initial bud tilt: slightly folded inward
          pivot.rotation.x = THREE.MathUtils.degToRad(8);

          headGroup.add(pivot);
          outerPetals.push(pivot);
        }

        // Inner 3 Petals (alternating at 60, 180, 300 degrees)
        for (let p = 0; p < 3; p++) {
          const pivot = new THREE.Group();
          pivot.rotation.y = (p * Math.PI * 2) / 3 + Math.PI / 3;

          const mesh = new THREE.Mesh(innerPetalGeom, palette.petal);
          mesh.position.set(0, 0, 0.75);
          pivot.add(mesh);

          pivot.rotation.x = THREE.MathUtils.degToRad(4);

          headGroup.add(pivot);
          innerPetals.push(pivot);
        }

        // Center Pistil inside the cup
        const pistilMesh = new THREE.Mesh(pistilGeom, pistilMaterial);
        pistilMesh.position.set(0, 1.4, 0);
        headGroup.add(pistilMesh);

        // 6 Dark Stamens around the pistil
        for (let s = 0; s < 6; s++) {
          const sAngle = (s * Math.PI * 2) / 6;
          const antherMesh = new THREE.Mesh(antherGeom, antherMaterial);
          antherMesh.position.set(Math.cos(sAngle) * 0.8, 1.6, Math.sin(sAngle) * 0.8);
          headGroup.add(antherMesh);
        }

        // Natural organic tilt facing camera/viewer
        headGroup.rotation.x = THREE.MathUtils.degToRad(-15 + (Math.random() - 0.5) * 16);
        headGroup.rotation.y = (Math.random() - 0.5) * 0.35;
        headGroup.rotation.z = (Math.random() - 0.5) * 0.2;

        tulipGroup.add(headGroup);

        // World coordinates mapped to orthographic projection
        const worldX = (clampedX - 0.5) * viewWidth;
        const worldY = (0.5 - relY) * viewHeight;
        const worldZ = tier.depthZ + (Math.random() - 0.5) * 10;

        tulipGroup.position.set(worldX, worldY, worldZ);
        tulipGroup.scale.set(0.001, 0.001, 0.001); // Invisible initially
        tulipGroup.visible = false;

        scene.add(tulipGroup);

        tulips.push({
          group: tulipGroup,
          stemMesh,
          headGroup,
          outerPetals,
          innerPetals,
          leafMesh,
          relX: clampedX,
          relY,
          worldX,
          worldY,
          worldZ,
          baseScale: scale,
          stemLength,
          swaySpeed: 0.02 + Math.random() * 0.02,
          swayPhase: Math.random() * Math.PI * 2,
          swayAmp: 0.05 + Math.random() * 0.05,
          visibility: 0,
        });
      }
    });

    // -------------------------------------------------------------
    // 6. INTERACTION & POINTER TRACKING
    // -------------------------------------------------------------
    const mousePos = { x: -9999, y: -9999, active: false };

    const updateMouse = (clientX: number, clientY: number) => {
      const bRect = container.getBoundingClientRect();
      if (bRect.width === 0 || bRect.height === 0) return;

      const normX = (clientX - bRect.left) / bRect.width;
      const normY = (clientY - bRect.top) / bRect.height;

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
    // 7. ANIMATION & TULIP BLOOMING PHYSICS ENGINE
    // -------------------------------------------------------------
    let animId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const elapsedTime = clock.getElapsedTime();

      // Radius of blooming effect around cursor in 3D world units: ~70 units
      const bloomRadius = 70;
      const bloomRadiusSq = bloomRadius * bloomRadius;

      for (let i = 0; i < tulips.length; i++) {
        const tulip = tulips[i];

        let targetVis = 0;
        if (mousePos.active) {
          const dx = tulip.worldX - mousePos.x;
          const dy = tulip.worldY - mousePos.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < bloomRadiusSq) {
            const dist = Math.sqrt(distSq);
            // Smooth bell curve reveal
            const norm = 1 - dist / bloomRadius;
            targetVis = norm * norm * (3 - 2 * norm); // Smoothstep curve
          }
        }

        // Spring blooming and closing physics
        if (targetVis > tulip.visibility) {
          // Bloom swiftly
          tulip.visibility += (targetVis - tulip.visibility) * 0.18;
        } else {
          // Gracefully close back into bud
          tulip.visibility += (targetVis - tulip.visibility) * 0.08;
        }

        // Strict clamp when dormant to ensure 100% clean wave with zero ghost lines
        if (tulip.visibility < 0.008) {
          tulip.visibility = 0;
          if (tulip.group.visible) {
            tulip.group.visible = false;
          }
          continue;
        }

        if (!tulip.group.visible) {
          tulip.group.visible = true;
        }

        const vis = tulip.visibility;
        // Organic blossom scale with elastic overshoot
        const bloomScale = Math.sin(vis * Math.PI * 0.5) * (1 + 0.12 * Math.sin(vis * Math.PI));
        const currentScale = tulip.baseScale * bloomScale;

        tulip.group.scale.set(currentScale, currentScale, currentScale);

        // 3D Tulip Cup Blooming Motion:
        // Closed Bud: Outer petals tilt 8deg, Inner petals tilt 4deg
        // Fully Bloomed Chalice: Outer petals open outward to 28deg, Inner petals open to 20deg
        const outerAngle = THREE.MathUtils.lerp(
          THREE.MathUtils.degToRad(8),
          THREE.MathUtils.degToRad(28),
          Math.min(1, vis * 1.15)
        );
        const innerAngle = THREE.MathUtils.lerp(
          THREE.MathUtils.degToRad(4),
          THREE.MathUtils.degToRad(20),
          Math.min(1, vis * 1.15)
        );

        for (let p = 0; p < tulip.outerPetals.length; p++) {
          tulip.outerPetals[p].rotation.x = outerAngle;
        }
        for (let p = 0; p < tulip.innerPetals.length; p++) {
          tulip.innerPetals[p].rotation.x = innerAngle;
        }

        // Gentle spring breeze sway
        const sway = Math.sin(elapsedTime * 2.2 * tulip.swaySpeed * 40 + tulip.swayPhase) * (tulip.swayAmp * vis);
        tulip.group.rotation.z = sway;
        tulip.group.rotation.x = sway * 0.35;
      }

      renderer.render(scene, camera);
    };

    render();

    // -------------------------------------------------------------
    // 8. WINDOW RESIZE HANDLER
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

      // Re-position tulips along newly adjusted horizontal span
      for (let i = 0; i < tulips.length; i++) {
        const tulip = tulips[i];
        tulip.worldX = (tulip.relX - 0.5) * nViewWidth;
        tulip.worldY = (0.5 - tulip.relY) * viewHeight;
        tulip.group.position.x = tulip.worldX;
        tulip.group.position.y = tulip.worldY;
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
    // 9. CLEANUP ON UNMOUNT
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
      outerPetalGeom.dispose();
      innerPetalGeom.dispose();
      pistilGeom.dispose();
      antherGeom.dispose();
      leafGeom.dispose();

      // Dispose Materials
      stemMaterial.dispose();
      leafMaterial.dispose();
      pistilMaterial.dispose();
      antherMaterial.dispose();
      tulipPalettes.forEach((p) => {
        p.petal.dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-20 pointer-events-auto cursor-default select-none overflow-hidden"
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
