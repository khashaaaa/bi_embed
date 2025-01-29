import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

const ParticleSystem = () => {
  const [particles, setParticles] = useState(null);
  const [lineGroups, setLineGroups] = useState([]);
  const particleVelocity = useRef([]);
  const particlePositions = useRef(null);

  useEffect(() => {
    const particleCount = 300;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocity = [];

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;
      positions[index] = (Math.random() - 0.5) * 20;
      positions[index + 1] = (Math.random() - 0.5) * 20;
      positions[index + 2] = (Math.random() - 0.5) * 20;

      velocity.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        )
      );
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 64;
    canvas.height = 64;
    ctx.beginPath();
    ctx.arc(32, 32, 28, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: "white",
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );

    setParticles(particlesMesh);
    particleVelocity.current = velocity;
    particlePositions.current = positions;

    const lineWidths = [1, 2, 3, 4];
    const materials = lineWidths.map(
      (width) =>
        new THREE.LineBasicMaterial({
          color: "white",
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending,
          linewidth: width,
        })
    );
    setLineGroups(materials.map(() => new THREE.Group()));
  }, []);

  useFrame(({ camera }) => {
    if (particles && lineGroups.length > 0) {
      const positions = particles.geometry.attributes.position.array;
      const linesByDepth = [[], [], [], []];
      const connections = new Set();

      const cameraPosition = camera.position;

      for (let i = 0; i < positions.length; i += 3) {
        const x1 = positions[i];
        const y1 = positions[i + 1];
        const z1 = positions[i + 2];
        const velocity = particleVelocity.current[i / 3];

        positions[i] += velocity.x;
        positions[i + 1] += velocity.y;
        positions[i + 2] += velocity.z;

        const bounds = 15;
        const dampen = 0.8;

        if (Math.abs(positions[i]) > bounds) {
          velocity.x = -velocity.x * dampen;
          positions[i] = Math.sign(positions[i]) * bounds;
        }
        if (Math.abs(positions[i + 1]) > bounds) {
          velocity.y = -velocity.y * dampen;
          positions[i + 1] = Math.sign(positions[i + 1]) * bounds;
        }
        if (Math.abs(positions[i + 2]) > bounds) {
          velocity.z = -velocity.z * dampen;
          positions[i + 2] = Math.sign(positions[i + 2]) * bounds;
        }

        let nearbyPoints = [];
        for (let j = 0; j < positions.length; j += 3) {
          if (i === j) continue;

          const x2 = positions[j];
          const y2 = positions[j + 1];
          const z2 = positions[j + 2];

          const distance = Math.sqrt(
            Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
          );

          if (distance < 6) {
            nearbyPoints.push([x2, y2, z2, j, distance]);
          }
        }

        nearbyPoints.sort((a, b) => a[4] - b[4]);
        nearbyPoints.slice(0, 8).forEach(([x2, y2, z2, j]) => {
          const connectionKey = [Math.min(i, j), Math.max(i, j)].join("-");
          if (!connections.has(connectionKey)) {
            connections.add(connectionKey);

            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            const midZ = (z1 + z2) / 2;

            const distanceToCamera = Math.sqrt(
              Math.pow(midX - cameraPosition.x, 2) +
                Math.pow(midY - cameraPosition.y, 2) +
                Math.pow(midZ - cameraPosition.z, 2)
            );

            const depthIndex = Math.min(
              3,
              Math.floor((distanceToCamera / 30) * 4)
            );

            linesByDepth[depthIndex].push(x1, y1, z1, x2, y2, z2);
          }
        });
      }

      lineGroups.forEach((group, index) => {
        while (group.children.length > 0) {
          const child = group.children[0];
          child.geometry.dispose();
          group.remove(child);
        }

        if (linesByDepth[index].length > 0) {
          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(linesByDepth[index], 3)
          );
          const lines = new THREE.LineSegments(
            geometry,
            new THREE.LineBasicMaterial({
              color: "white",
              transparent: true,
              opacity: 0.3 - index * 0.05,
              blending: THREE.AdditiveBlending,
            })
          );
          group.add(lines);
        }
      });

      particles.geometry.attributes.position.needsUpdate = true;
    }
  });

  if (!particles || lineGroups.length === 0) return null;

  return (
    <group>
      <primitive object={particles} />
      {lineGroups.map((group, index) => (
        <primitive key={index} object={group} />
      ))}
    </group>
  );
};

export const Particles = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ParticleSystem />
    </Canvas>
  );
};
