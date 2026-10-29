import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Scroll progress (0..1) shared with the render loop without triggering re-renders
const store = { progress: 0 };
export const setRingProgress = (p) => {
  store.progress = p;
};

/**
 * A procedural 3D solitaire ring (gold band, prongs, faceted diamond, sparkles).
 * `setRingProgress(0..1)` is driven by the parent's scroll position and
 * controls rotation / drift of the ring.
 */
export const RingScene = ({ className = '' }) => {
  const [mount, setMount] = useState(null);

  useEffect(() => {
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.2, 6.2);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return; // WebGL unavailable — the page still works without the model
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;

    // ---- Materials ----
    const gold = new THREE.MeshStandardMaterial({
      color: 0xe2c275,
      metalness: 1,
      roughness: 0.18,
      envMapIntensity: 1.3,
    });
    const diamond = new THREE.MeshStandardMaterial({
      color: 0xe6efff,
      metalness: 1,
      roughness: 0.02,
      envMapIntensity: 2.6,
      flatShading: true,
    });

    const ring = new THREE.Group();
    scene.add(ring);

    // Band (slightly flattened torus)
    const band = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.12, 48, 160), gold);
    band.scale.set(1, 1, 0.8);
    ring.add(band);

    // Shoulders / head base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.2, 0.22, 24), gold);
    base.position.y = 1.2;
    ring.add(base);

    // Brilliant-cut stone
    const gemPts = [
      [0.0, 0.3], [0.34, 0.3], [0.56, 0.12], [0.6, 0.0], [0.0, -0.62],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    const gem = new THREE.Mesh(new THREE.LatheGeometry(gemPts, 10), diamond);
    gem.position.y = 1.62;
    ring.add(gem);

    // Prongs
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const prong = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.42, 6, 12), gold);
      prong.position.set(Math.cos(a) * 0.52, 1.7, Math.sin(a) * 0.52);
      prong.rotation.set(Math.sin(a) * 0.18, 0, -Math.cos(a) * 0.18);
      ring.add(prong);
    }

    // Sparkle dust
    const count = 160;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 2.2;
      const t = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(t) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = Math.sin(t) * r * 0.6 - 1;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({ color: 0xf2d897, size: 0.035, transparent: true, opacity: 0.8 }),
    );
    scene.add(dust);

    // Lights for extra highlights
    const key = new THREE.DirectionalLight(0xfff1d6, 2.2);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0xe2c275, 30, 20);
    rim.position.set(-4, 1, -3);
    scene.add(rim);

    // ---- Sizing ----
    let narrow = false;
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      narrow = w / h < 0.8;
      camera.aspect = w / h;
      camera.position.z = w / h < 0.8 ? 9 : 6.2;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // ---- Pointer tilt ----
    const pointer = { x: 0, y: 0 };
    const onMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove);

    // ---- Loop (only while visible) ----
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(mount);

    const clock = new THREE.Clock();
    let smooth = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();
      const target = store.progress;
      smooth += (target - smooth) * 0.08;

      ring.rotation.y = t * 0.35 + smooth * Math.PI * 4;
      ring.rotation.x = 0.25 + Math.sin(smooth * Math.PI * 2) * 0.5 + pointer.y * 0.15;
      ring.rotation.z = pointer.x * 0.12;
      ring.position.y = (narrow ? 0.15 : -0.62) * ring.scale.x + Math.sin(t * 0.9) * 0.06;
      const s = 0.62 + Math.sin(smooth * Math.PI) * 0.1;
      ring.scale.setScalar(s);
      dust.rotation.y = t * 0.05 + smooth * 1.5;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      scene.traverse((o) => {
        o.geometry?.dispose?.();
      });
      [gold, diamond].forEach((m) => m.dispose());
      dust.material.dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [mount]);

  return <div ref={setMount} className={`ring-scene ${className}`} aria-hidden="true" />;
};
