# DQN-PPO Cinematic Scroll V6

Version avec intro 3D cinématique : un robot fonctionne correctement au début, puis les limites du Reinforcement Learning classique apparaissent progressivement jusqu'à la chute contrôlée.

## Stack

- React + Vite
- TypeScript
- Three.js direct, sans moteur physique lourd
- GSAP + ScrollTrigger
- Lenis Smooth Scroll
- Images WebP compressées

## Lancer le projet

```powershell
npm config set registry https://registry.npmjs.org/
npm install
npm run dev
```

## Notes

- La simulation 3D est volontairement contrôlée par animation pour rester stable et fluide.
- Aucun modèle 3D externe lourd n'est utilisé : le robot est généré avec des géométries Three.js légères.
- Le reste de la V5 est conservé, avec la scène architecture scroll-driven.
