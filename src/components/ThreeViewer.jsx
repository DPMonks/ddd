"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./ThreeViewer.module.css";

/**
 * ThreeViewer — an interactive placeholder 3D scene for the 3D & Motion work.
 * Drag to orbit, scroll to zoom; auto-rotates when idle. On-brand violet
 * wireframe on the dark-tech background. WebGL is set up client-side only.
 */
export default function ThreeViewer({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Primary form: violet wireframe torus knot.
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.85, 0.26, 180, 28),
      new THREE.MeshBasicMaterial({ color: 0x9b4dff, wireframe: true })
    );
    scene.add(knot);

    // Faint outer shell for depth.
    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.7, 1),
      new THREE.MeshBasicMaterial({
        color: 0xcfcfcf,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      })
    );
    scene.add(shell);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.minDistance = 2.8;
    controls.maxDistance = 7.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.4;

    let frameId;
    const animate = () => {
      shell.rotation.y -= 0.0009;
      shell.rotation.x += 0.0006;
      controls.update();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      controls.dispose();
      knot.geometry.dispose();
      knot.material.dispose();
      shell.geometry.dispose();
      shell.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`${styles.viewer} ${className}`.trim()}>
      <div
        ref={containerRef}
        className={styles.canvas}
        role="img"
        aria-label="Interactive 3D placeholder render — drag to orbit, scroll to zoom"
      />
      <span className={styles.hint}>Drag to orbit · scroll to zoom</span>
    </div>
  );
}
