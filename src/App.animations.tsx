import React from 'react';
import MorphingShapes from './components/animations/MorphingShapes';
import ParticleEffects from './components/animations/ParticleEffects';
import LoadingAnimations from './components/animations/LoadingAnimations';
import InteractiveEffects from './components/animations/InteractiveEffects';
import './styles/animations.css';

const AnimationsShowcase: React.FC = () => {
  return (
    <div className="animations-showcase">
      <header className="showcase-header">
        <h1 className="main-title">Complex CSS Animations & Transitions</h1>
        <p className="main-subtitle">
          A comprehensive collection of advanced CSS animations built with React and CSS Modules
        </p>
      </header>

      <main className="showcase-content">
        <MorphingShapes />
        <ParticleEffects />
        <LoadingAnimations />
        <InteractiveEffects />
      </main>

      <footer className="showcase-footer">
        <p>Built with React 19, TypeScript, and CSS Modules</p>
      </footer>
    </div>
  );
};

export default AnimationsShowcase;