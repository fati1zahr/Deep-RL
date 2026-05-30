import { useEffect, useMemo, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import architectureImage from './assets/architecture.webp';
import limitsImage from './assets/limits.webp';
import environmentImage from './assets/environment.webp';
import featuresImage from './assets/features.webp';
import ppoImage from './assets/ppo.webp';
import dqnImage from './assets/dqn.webp';
import loopImage from './assets/loop.webp';
import comparisonImage from './assets/comparison.webp';
import finalImage from './assets/final.webp';
import RobotIntro3D from './RobotIntro3D';

gsap.registerPlugin(ScrollTrigger);

type FocusModule = {
  id: string;
  scene: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  accent: string;
  origin: string;
  ring: { x: string; y: string; w: string; h: string };
  points: string[];
};

const focusModules: FocusModule[] = [
  {
    id: 'environment',
    scene: '05',
    eyebrow: 'Monde réel',
    title: 'Environnement',
    subtitle: 'L’agent observe l’état, agit dans le monde réel, puis reçoit une récompense qui guide son apprentissage.',
    image: environmentImage,
    accent: '#22d3ee',
    origin: '50% 20%',
    ring: { x: '29%', y: '12%', w: '42%', h: '18%' },
    points: ['Observations capteurs', 'Récompenses rₜ', 'État courant sₜ', 'Contraintes réelles']
  },
  {
    id: 'features',
    scene: '06',
    eyebrow: 'Représentation partagée',
    title: 'Extracteur de features',
    subtitle: 'Le réseau profond transforme les observations brutes en features latentes propres et exploitables par DQN et PPO.',
    image: featuresImage,
    accent: '#a855f7',
    origin: '50% 43%',
    ring: { x: '32%', y: '36%', w: '36%', h: '18%' },
    points: ['Pixels vers vecteurs', 'Réduction de dimension', 'Information pertinente', 'Meilleure généralisation']
  },
  {
    id: 'dqn',
    scene: '07',
    eyebrow: 'Value Based',
    title: 'Value Based (DQN)',
    subtitle: 'DQN apprend les valeurs Q, stabilise l’entraînement avec un réseau cible et réutilise les expériences.',
    image: dqnImage,
    accent: '#f97316',
    origin: '20% 70%',
    ring: { x: '6%', y: '57%', w: '28%', h: '30%' },
    points: ['Q-Network', 'Target Network', 'Replay Buffer', 'Mini-batch learning']
  },
  {
    id: 'ppo',
    scene: '08',
    eyebrow: 'Policy Based',
    title: 'Policy Based (PPO)',
    subtitle: 'PPO stabilise les actions continues avec une politique acteur-critique, le clipping et une optimisation contrôlée.',
    image: ppoImage,
    accent: '#22c55e',
    origin: '78% 70%',
    ring: { x: '66%', y: '57%', w: '27%', h: '30%' },
    points: ['Actor policy π', 'Critic value V', 'Clipping PPO', 'Optimiseur Adam']
  },
  {
    id: 'loop',
    scene: '09',
    eyebrow: 'Apprentissage continu',
    title: 'Boucle d’apprentissage',
    subtitle: 'Le système revient sans cesse à la boucle : observer, décider, agir, apprendre puis s’améliorer.',
    image: loopImage,
    accent: '#ec4899',
    origin: '50% 90%',
    ring: { x: '20%', y: '89%', w: '60%', h: '9%' },
    points: ['Observer', 'Décider', 'Agir', 'Apprendre', 'S’améliorer']
  }
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(t: number) {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
}

function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 0.78,
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 0.86,
      touchMultiplier: 1.05
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}

function GlobalBackdrop() {
  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${12 + Math.random() * 8}s`,
        delay: `${-Math.random() * 8}s`
      })),
    []
  );

  return (
    <>
      <div className="global-grid" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              ['--duration' as string]: particle.duration,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>
      <div className="brand-tag" aria-hidden="true">
        <span /> Deep Reinforcement Learning Story
      </div>
    </>
  );
}

function useReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28, scale: 0.99 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.68,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className={`eyebrow ${dark ? 'eyebrow-dark' : ''}`} data-reveal>
      <span /> {children}
    </div>
  );
}

function ImageFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="image-frame" data-reveal>
      <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="section hero-section">
      <div className="section-shell hero-layout">
        <div className="copy-panel hero-copy">
          <Eyebrow>01 · Problème</Eyebrow>
          <p className="kicker" data-reveal>Reinforcement Learning classique</p>
          <h1 className="hero-title" data-reveal>Apprendre vite ne suffit pas.</h1>
          <p className="lead" data-reveal>
            Un agent peut progresser rapidement, puis échouer lorsque l’exploration devient risquée, instable ou trop coûteuse dans le monde réel.
          </p>

          <div className="mini-cards" data-reveal>
            <article>
              <strong>Limitations</strong>
              <span>Exploration dangereuse, instabilité, échantillons coûteux.</span>
            </article>
            <article>
              <strong>Conséquence</strong>
              <span>Dommages, collisions et mauvaises décisions.</span>
            </article>
            <article>
              <strong>Objectif</strong>
              <span>Construire un apprentissage plus stable, sûr et intelligent.</span>
            </article>
          </div>
        </div>

        <div className="visual-panel hero-visual">
          <ImageFrame src={limitsImage} alt="Limites du reinforcement learning classique" priority />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section problem-section">
      <div className="section-shell problem-layout">
        <div className="copy-panel">
          <Eyebrow>02 · Instabilité</Eyebrow>
          <h2 className="section-title" data-reveal>Le vrai problème, c’est la stabilité.</h2>
          <p className="lead" data-reveal>
            Le RL classique peut paraître performant, puis se dégrader dès que le bruit, la dimension élevée et les perturbations dominent.
          </p>

          <div className="state-grid" data-reveal>
            <article>
              <b>Avant</b>
              <p>Convergence difficile, mauvaise généralisation, décisions risquées.</p>
            </article>
            <article>
              <b>Après</b>
              <p>Feedback clair, progression visible, agent apparemment stable.</p>
            </article>
          </div>
        </div>

        <div className="visual-panel">
          <ImageFrame src={comparisonImage} alt="Comparaison entre instabilité et intelligence" />
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="section solution-section dark-section">
      <div className="section-shell solution-layout">
        <div className="copy-panel">
          <Eyebrow dark>03 · Question</Eyebrow>
          <h2 className="section-title" data-reveal>
            Comment rendre l’apprentissage plus sûr et plus intelligent ?
          </h2>
          <p className="lead" data-reveal>
            En combinant représentation profonde, décision discrète et contrôle continu dans une architecture hybride cohérente.
          </p>
        </div>

        <div className="neural-stage" data-reveal aria-hidden="true">
          <div className="neural-core" />
          <span className="neural-node node-1" />
          <span className="neural-node node-2" />
          <span className="neural-node node-3" />
          <span className="neural-node node-4" />
        </div>
      </div>
    </section>
  );
}

function ArchitectureScrollScene() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const helperRef = useRef<HTMLDivElement | null>(null);
  const focusRefs = useRef<Record<string, HTMLElement | null>>({});
  const highlightRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const activeRef = useRef(-1);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const frame = frameRef.current;
    const copy = copyRef.current;
    const helper = helperRef.current;

    if (!section || !stage || !frame || !copy || !helper) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const applyState = (progress: number) => {
      const total = focusModules.length;
      const raw = clamp(progress, 0, 0.999999) * total;
      const index = Math.min(total - 1, Math.floor(raw));
      const local = raw - index;
      const module = focusModules[index];

      if (activeRef.current !== index) {
        activeRef.current = index;
        focusModules.forEach((item, i) => {
          const focus = focusRefs.current[item.id];
          const highlight = highlightRefs.current[item.id];
          if (focus) focus.dataset.active = i === index ? 'true' : 'false';
          if (highlight) highlight.dataset.active = i === index ? 'true' : 'false';
        });
      }

      let zoom = 0;
      let focusOpacity = 0;
      let detailLift = 36;

      if (local < 0.18) {
        zoom = 0;
        focusOpacity = 0;
      } else if (local < 0.42) {
        zoom = smoothstep((local - 0.18) / 0.24);
        focusOpacity = 0;
      } else if (local < 0.72) {
        zoom = 1;
        focusOpacity = smoothstep((local - 0.42) / 0.13);
        detailLift = 36 * (1 - focusOpacity);
      } else if (local < 0.88) {
        zoom = 1;
        focusOpacity = 1;
        detailLift = 0;
      } else {
        const out = smoothstep((local - 0.88) / 0.12);
        zoom = 1 - out;
        focusOpacity = 1 - out;
        detailLift = -28 * out;
      }

      const scale = reduceMotion ? 1 : 1 + zoom * 0.46;
      const frameOpacity = 1 - zoom * 0.48;
      const blur = zoom * 1.6;
      const copyOpacity = 1 - zoom * 0.75;
      const helperOpacity = zoom > 0.25 ? 0 : 1 - zoom * 2.8;

      frame.style.transformOrigin = module.origin;
      frame.style.transform = `perspective(1400px) rotateX(${(2.5 - zoom * 1.4).toFixed(2)}deg) rotateY(${(-3.5 + zoom * 2.2).toFixed(2)}deg) translate3d(0,0,0) scale(${scale.toFixed(4)})`;
      frame.style.opacity = frameOpacity.toString();
      frame.style.filter = `blur(${blur.toFixed(2)}px)`;
      copy.style.opacity = copyOpacity.toString();
      copy.style.transform = `translate3d(0, ${(-24 * zoom).toFixed(2)}px, 0)`;
      helper.style.opacity = helperOpacity.toString();
      helper.style.transform = `translate3d(-50%, ${(18 * zoom).toFixed(2)}px, 0)`;

      focusModules.forEach((item, i) => {
        const focus = focusRefs.current[item.id];
        const highlight = highlightRefs.current[item.id];
        const isActive = i === index;
        const opacity = isActive ? focusOpacity : 0;
        const highlightOpacity = isActive ? zoom : 0;

        if (focus) {
          focus.style.opacity = opacity.toString();
          focus.style.visibility = opacity > 0.02 ? 'visible' : 'hidden';
          focus.style.transform = `perspective(1400px) rotateX(${(2 - opacity * 1.1).toFixed(2)}deg) rotateY(${(-2 + opacity * 1.2).toFixed(2)}deg) translate3d(0, ${detailLift.toFixed(2)}px, 0) scale(${(0.982 + opacity * 0.018).toFixed(4)})`;
        }

        if (highlight) {
          highlight.style.opacity = highlightOpacity.toString();
          highlight.style.visibility = highlightOpacity > 0.02 ? 'visible' : 'hidden';
          highlight.style.transform = `scale(${(0.96 + highlightOpacity * 0.04).toFixed(4)})`;
        }
      });
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => applyState(self.progress),
        onRefresh: (self) => applyState(self.progress)
      });

      applyState(0);
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    window.addEventListener('resize', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section className="architecture-section" ref={sectionRef} aria-label="Architecture DQN-PPO contrôlée par scroll">
      <div className="architecture-stage" ref={stageRef}>
        <div className="arch-copy" ref={copyRef}>
          <Eyebrow>04 · Architecture principale</Eyebrow>
          <h2 className="section-title compact-title">Architecture globale <span>des algorithmes DRL</span></h2>
          <p className="lead">
            Le scroll pilote la caméra : architecture globale, zoom vers le module concerné, vue détaillée, puis retour automatique.
          </p>
        </div>

        <div className="architecture-frame-wrap">
          <div className="architecture-frame" ref={frameRef}>
            <img src={architectureImage} alt="Architecture globale des algorithmes DRL" loading="eager" decoding="async" />
            {focusModules.map((module) => (
              <span
                key={module.id}
                ref={(element) => {
                  highlightRefs.current[module.id] = element;
                }}
                className="module-highlight"
                style={{
                  ['--x' as string]: module.ring.x,
                  ['--y' as string]: module.ring.y,
                  ['--w' as string]: module.ring.w,
                  ['--h' as string]: module.ring.h,
                  ['--accent' as string]: module.accent
                }}
              />
            ))}
          </div>
        </div>

        <div className="focus-stage">
          {focusModules.map((module) => (
            <article
              className="focus-view"
              style={{ ['--accent' as string]: module.accent }}
              key={module.id}
              ref={(element) => {
                focusRefs.current[module.id] = element;
              }}
            >
              <div className="focus-image">
                <img src={module.image} alt={`${module.title} détaillé`} loading="lazy" decoding="async" />
              </div>
              <div className="focus-copy">
                <p className="focus-eyebrow">Scène {module.scene} · {module.eyebrow}</p>
                <h3>{module.title}</h3>
                <p>{module.subtitle}</p>
                <ul>
                  {module.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="arch-helper" ref={helperRef}>
          Scroll : vue globale → zoom module → détail → retour automatique → module suivant.
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="section result-section">
      <div className="section-shell result-layout">
        <div className="copy-panel">
          <Eyebrow>10 · Résultat</Eyebrow>
          <h2 className="section-title" data-reveal>De l’instabilité à l’intelligence.</h2>
          <p className="lead" data-reveal>
            Le passage aux approches avancées du Deep RL convertit une exploration instable en un contrôle autonome maîtrisé.
          </p>
          <div className="metric-grid" data-reveal>
            <article><strong>Stabilité</strong><span>Mises à jour plus contrôlées.</span></article>
            <article><strong>Performance</strong><span>Décisions plus efficaces.</span></article>
            <article><strong>Robustesse</strong><span>Résistance au bruit.</span></article>
            <article><strong>Continu</strong><span>Progression au fil du temps.</span></article>
          </div>
        </div>
        <div className="visual-panel">
          <ImageFrame src={comparisonImage} alt="Comparaison RL classique et architecture hybride DQN-PPO" />
        </div>
      </div>
    </section>
  );
}

function FinalSection() {
  return (
    <section className="section final-section">
      <div className="section-shell final-layout">
        <div className="copy-panel">
          <Eyebrow>11 · Vision finale</Eyebrow>
          <h2 className="section-title" data-reveal>L’écosystème décisionnel du Deep RL.</h2>
          <p className="lead" data-reveal>
            Un écosystème décisionnel complet qui combine perception, représentation profonde, décision discrète, contrôle continu et amélioration progressive.
          </p>
        </div>
        <div className="visual-panel">
          <ImageFrame src={finalImage} alt="L’écosystème décisionnel du Deep RL" />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  return (
    <main className="app">
      <SmoothScroll />
      <GlobalBackdrop />
      <RobotIntro3D />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ArchitectureScrollScene />
      <ComparisonSection />
      <FinalSection />
    </main>
  );
}
