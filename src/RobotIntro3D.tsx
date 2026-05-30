import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Phase = {
  label: string;
  title: string;
  description: string;
  tone: 'stable' | 'warning' | 'danger';
};

const phases: Phase[] = [
  {
    label: 'Phase 01 · Agent stable',
    title: 'Le robot apprend et agit correctement.',
    description: 'Au début, le comportement semble efficace : trajectoire propre, actions cohérentes, récompenses positives.',
    tone: 'stable'
  },
  {
    label: 'Phase 02 · Exploration risquée',
    title: 'L’environnement devient incertain.',
    description: 'Les actions exploratoires créent des trajectoires dangereuses et les premiers signaux d’alerte apparaissent.',
    tone: 'warning'
  },
  {
    label: 'Phase 03 · Instabilité',
    title: 'La politique devient fragile.',
    description: 'Bruit, perturbations et convergence sous-optimale provoquent des mouvements hésitants.',
    tone: 'warning'
  },
  {
    label: 'Phase 04 · Échec critique',
    title: 'Le robot tombe et s’endommage.',
    description: 'La limite du RL classique devient visible : collisions, perte d’équilibre, mauvaises décisions.',
    tone: 'danger'
  }
];

const limitations = [
  'Exploration Risk',
  'Sample Inefficiency',
  'Training Instability',
  'Suboptimal Convergence',
  'High-Dimensional State Space'
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(t: number) {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function makeBox(
  size: [number, number, number],
  material: THREE.Material,
  position: [number, number, number],
  radius = 0.02
) {
  const geometry = new THREE.BoxGeometry(size[0], size[1], size[2], 2, 2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.radius = radius;
  return mesh;
}

function makeJoint(material: THREE.Material, radius = 0.13) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 18, 12), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createRobot() {
  const robot = new THREE.Group();
  robot.name = 'procedural-rl-robot';

  const white = new THREE.MeshStandardMaterial({ color: '#f3f5fb', roughness: 0.38, metalness: 0.42 });
  const dark = new THREE.MeshStandardMaterial({ color: '#151426', roughness: 0.42, metalness: 0.75 });
  const violet = new THREE.MeshStandardMaterial({ color: '#7c3aed', roughness: 0.35, metalness: 0.55 });
  const red = new THREE.MeshStandardMaterial({ color: '#ff2d55', roughness: 0.28, metalness: 0.42, emissive: '#4b0014', emissiveIntensity: 0.12 });
  const greenEye = new THREE.MeshStandardMaterial({ color: '#baffd8', emissive: '#2cff8f', emissiveIntensity: 1.55, roughness: 0.18 });

  const body = makeBox([0.64, 0.9, 0.32], white, [0, 1.42, 0]);
  const chest = makeBox([0.34, 0.34, 0.035], dark, [0, 1.48, 0.18]);
  const warning = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.22, 3), red);
  warning.position.set(0, 1.52, 0.205);
  warning.rotation.z = Math.PI;
  warning.castShadow = true;

  const neck = makeJoint(dark, 0.13);
  neck.position.set(0, 1.97, 0);
  const head = makeBox([0.54, 0.42, 0.42], white, [0, 2.26, 0]);
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 10), greenEye);
  const eyeR = eyeL.clone();
  eyeL.position.set(-0.12, 2.29, 0.23);
  eyeR.position.set(0.12, 2.29, 0.23);
  const antenna = makeBox([0.045, 0.32, 0.045], dark, [0.22, 2.62, 0]);
  antenna.rotation.z = -0.25;

  robot.add(body, chest, warning, neck, head, eyeL, eyeR, antenna);

  const limbs: Record<string, THREE.Group> = {};

  function arm(side: -1 | 1) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.43, 1.78, 0);
    const cap = makeJoint(dark, 0.12);
    const upper = makeBox([0.14, 0.46, 0.14], white, [0, -0.25, 0]);
    const elbow = makeJoint(violet, 0.095);
    elbow.position.set(0, -0.52, 0);
    const lower = makeBox([0.13, 0.44, 0.13], white, [0, -0.76, 0]);
    const hand = makeJoint(dark, 0.09);
    hand.position.set(0, -1.03, 0.02);
    shoulder.add(cap, upper, elbow, lower, hand);
    limbs[side < 0 ? 'leftArm' : 'rightArm'] = shoulder;
    robot.add(shoulder);
  }

  function leg(side: -1 | 1) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.2, 0.98, 0);
    const cap = makeJoint(dark, 0.11);
    const upper = makeBox([0.16, 0.56, 0.16], white, [0, -0.33, 0]);
    const knee = makeJoint(violet, 0.1);
    knee.position.set(0, -0.66, 0);
    const lower = makeBox([0.15, 0.54, 0.15], white, [0, -0.96, 0]);
    const foot = makeBox([0.28, 0.1, 0.46], dark, [0, -1.27, 0.12]);
    hip.add(cap, upper, knee, lower, foot);
    limbs[side < 0 ? 'leftLeg' : 'rightLeg'] = hip;
    robot.add(hip);
  }

  arm(-1);
  arm(1);
  leg(-1);
  leg(1);

  robot.position.set(-1.5, 0, 0);
  robot.rotation.y = -0.18;

  return { robot, limbs, warning, eyeL, eyeR };
}

function disposeScene(scene: THREE.Scene) {
  scene.traverse((object: THREE.Object3D) => {
    const mesh = object as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
    if (Array.isArray(mat)) mat.forEach((item) => item.dispose());
    else if (mat) mat.dispose();
  });
}

export default function RobotIntro3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [phase, setPhase] = useState<Phase>(phases[0]);
  const phaseIndexRef = useRef(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !reduceMotion, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.shadowMap.enabled = !reduceMotion;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#ffeaf4', 0.055);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(4.2, 2.75, 5.4);

    const ambient = new THREE.AmbientLight('#ffffff', 1.05);
    const key = new THREE.DirectionalLight('#ffffff', 2.35);
    key.position.set(3, 5, 3);
    key.castShadow = !reduceMotion;
    key.shadow.mapSize.set(1024, 1024);
    const pink = new THREE.PointLight('#ff4fbd', 4.8, 7.5);
    pink.position.set(-2.5, 1.35, 1.4);
    const cyan = new THREE.PointLight('#22d3ee', 2.2, 7);
    cyan.position.set(2.8, 1.8, 1.1);
    const redLight = new THREE.PointLight('#ff2d55', 0, 9);
    redLight.position.set(0, 1.4, 1.2);
    scene.add(ambient, key, pink, cyan, redLight);

    const groundMat = new THREE.MeshStandardMaterial({ color: '#f7dce9', roughness: 0.72, metalness: 0.08 });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(12, 9, 1, 1), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.31;
    ground.receiveShadow = true;
    scene.add(ground);

    const grid = new THREE.GridHelper(12, 24, '#d833e8', '#7c3aed');
    grid.position.y = -0.302;
    const gridMaterial = grid.material as THREE.Material;
    gridMaterial.opacity = 0.18;
    gridMaterial.transparent = true;
    scene.add(grid);

    const { robot, limbs, warning, eyeL, eyeR } = createRobot();
    scene.add(robot);

    const obstacleMat = new THREE.MeshStandardMaterial({ color: '#ff7a5c', roughness: 0.52, metalness: 0.28, emissive: '#260000', emissiveIntensity: 0.06 });
    const obstacleGroup = new THREE.Group();
    const obstacles: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i += 1) {
      const h = 0.26 + (i % 2) * 0.18;
      const block = new THREE.Mesh(new THREE.BoxGeometry(0.34 + i * 0.03, h, 0.48), obstacleMat);
      block.userData.height = h;
      block.position.set(0.05 + i * 0.48, -0.16 + h / 2, 0.7 - (i % 3) * 0.36);
      block.rotation.y = 0.2 - i * 0.13;
      block.castShadow = true;
      block.receiveShadow = true;
      block.scale.setScalar(0.01);
      obstacleGroup.add(block);
      obstacles.push(block);
    }
    scene.add(obstacleGroup);

    const sparkMat = new THREE.MeshBasicMaterial({ color: '#ff7a18', transparent: true, opacity: 0 });
    const sparks: THREE.Mesh[] = [];
    for (let i = 0; i < 26; i += 1) {
      const spark = new THREE.Mesh(new THREE.SphereGeometry(0.018 + (i % 4) * 0.006, 8, 6), sparkMat.clone());
      spark.position.set((Math.random() - 0.5) * 1.4, 0.35 + Math.random() * 1.2, 0.1 + Math.random() * 0.85);
      sparks.push(spark);
      scene.add(spark);
    }

    const warningRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.64, 0.012, 8, 80),
      new THREE.MeshBasicMaterial({ color: '#ff2d55', transparent: true, opacity: 0 })
    );
    warningRing.position.set(0, 1.2, 0.02);
    warningRing.rotation.x = Math.PI / 2;
    scene.add(warningRing);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(320, rect.width);
      const height = Math.max(320, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        const index = Math.min(phases.length - 1, Math.floor(clamp(self.progress, 0, 0.999) * phases.length));
        if (index !== phaseIndexRef.current) {
          phaseIndexRef.current = index;
          setPhase(phases[index]);
        }
      }
    });

    let raf = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const t = clock.getElapsedTime();
      const p = progressRef.current;

      const stable = 1 - smoothstep((p - 0.2) / 0.18);
      const warningAmount = smoothstep((p - 0.18) / 0.18);
      const stumble = smoothstep((p - 0.42) / 0.18);
      const fall = smoothstep((p - 0.62) / 0.2);
      const damage = smoothstep((p - 0.78) / 0.18);

      const walk = Math.sin(t * 5.8) * 0.42 * (1 - fall);
      const jitter = (Math.sin(t * 28) * 0.025 + Math.sin(t * 17) * 0.018) * warningAmount * (1 - fall);

      robot.position.x = lerp(-1.55, 0.28, smoothstep(p / 0.55)) + jitter;
      robot.position.y = lerp(0, -0.44, fall) + Math.abs(Math.sin(t * 5.8)) * 0.035 * stable;
      robot.position.z = lerp(0, 0.25, fall);
      robot.rotation.x = lerp(0, 0.82, fall);
      robot.rotation.z = lerp(0.02 * Math.sin(t * 2), -1.14, fall) + Math.sin(t * 19) * 0.035 * warningAmount * (1 - fall);
      robot.rotation.y = -0.18 + lerp(0, 0.5, fall);

      limbs.leftLeg.rotation.x = walk;
      limbs.rightLeg.rotation.x = -walk;
      limbs.leftArm.rotation.x = -walk * 0.74 - 0.18 * stumble;
      limbs.rightArm.rotation.x = walk * 0.74 + 0.32 * stumble;
      limbs.leftArm.rotation.z = lerp(0.22, 0.74, fall);
      limbs.rightArm.rotation.z = lerp(-0.22, -0.85, fall);
      limbs.leftLeg.rotation.z = lerp(0, 0.42, fall);
      limbs.rightLeg.rotation.z = lerp(0, -0.58, fall);

      warning.scale.setScalar(1 + Math.sin(t * 8) * 0.12 * warningAmount);
      const warningMat = warning.material as THREE.MeshStandardMaterial;
      warningMat.emissiveIntensity = 0.2 + warningAmount * (1.2 + Math.sin(t * 10) * 0.5);
      const eyeMatL = eyeL.material as THREE.MeshStandardMaterial;
      const eyeMatR = eyeR.material as THREE.MeshStandardMaterial;
      eyeMatL.emissive.set(warningAmount > 0.48 ? '#ff2d55' : '#2cff8f');
      eyeMatR.emissive.set(warningAmount > 0.48 ? '#ff2d55' : '#2cff8f');
      eyeMatL.emissiveIntensity = 1.4 + warningAmount * 1.6;
      eyeMatR.emissiveIntensity = 1.4 + warningAmount * 1.6;

      obstacles.forEach((block, index) => {
        const reveal = smoothstep((p - (0.2 + index * 0.025)) / 0.13);
        block.scale.setScalar(lerp(0.01, 1, reveal));
        block.position.y = -0.16 + (block.userData.height as number) / 2 + Math.sin(t * 2 + index) * 0.01 * reveal;
      });

      const ringMaterial = warningRing.material as THREE.MeshBasicMaterial;
      ringMaterial.opacity = warningAmount * (0.12 + 0.18 * Math.abs(Math.sin(t * 4))) * (1 - fall * 0.4);
      warningRing.scale.setScalar(1 + Math.sin(t * 3) * 0.08);
      redLight.intensity = warningAmount * 4.2 + damage * 3.2;

      sparks.forEach((spark, index) => {
        const mat = spark.material as THREE.MeshBasicMaterial;
        const burst = damage * (0.25 + 0.75 * Math.abs(Math.sin(t * (3.2 + index * 0.06) + index)));
        mat.opacity = burst;
        spark.position.x += Math.sin(t * 2 + index) * 0.0009 * damage;
        spark.position.y += 0.002 * damage;
        if (spark.position.y > 1.75) spark.position.y = 0.3 + Math.random() * 0.5;
      });

      camera.position.x = lerp(4.2, 2.55, smoothstep((p - 0.5) / 0.35));
      camera.position.y = lerp(2.75, 1.75, smoothstep((p - 0.42) / 0.42));
      camera.position.z = lerp(5.4, 4.0, smoothstep((p - 0.55) / 0.35));
      camera.lookAt(0, lerp(1.25, 0.62, fall), 0.05);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      scrollTrigger.kill();
      observer.disconnect();
      renderer.dispose();
      disposeScene(scene);
    };
  }, []);

  return (
    <section className="robot-intro" ref={sectionRef} aria-label="Simulation 3D robot RL classique">
      <div className="robot-intro-sticky">
        <canvas ref={canvasRef} className="robot-canvas" aria-hidden="true" />

        <div className="robot-overlay robot-overlay-left">
          <div className="eyebrow intro-eyebrow"><span /> Intro 3D · Deep RL classique</div>
          <h1>Le robot apprend. Puis l’erreur devient réelle.</h1>
          <p>
            Une simulation cinématique montre le paradoxe du Reinforcement Learning classique : performance initiale, exploration risquée, instabilité, chute.
          </p>
        </div>

        <div className={`robot-phase robot-phase-${phase.tone}`}>
          <small>{phase.label}</small>
          <strong>{phase.title}</strong>
          <span>{phase.description}</span>
        </div>

        <div className="robot-limitations" aria-hidden="true">
          {limitations.map((item, index) => (
            <span key={item} style={{ ['--delay' as string]: `${index * 0.12}s` }}>
              {item}
            </span>
          ))}
        </div>

        <div className="robot-final-line">Dommages et mauvaises décisions</div>
      </div>
    </section>
  );
}
