import React, { useState } from 'react';
import styles from './InteractiveEffects.module.css';

const InteractiveEffects: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Interactive Effects</h2>
      
      <div className={styles.effectsGrid}>
        {/* Magnetic Button */}
        <div className={styles.effectContainer}>
          <button 
            className={styles.magneticButton}
            onMouseEnter={() => setIsHovered('magnetic')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <span>Magnetic Effect</span>
            <div className={styles.magneticField}></div>
          </button>
          <p>Hover to see magnetic attraction</p>
        </div>

        {/* Ripple Effect */}
        <div className={styles.effectContainer}>
          <button 
            className={styles.rippleButton}
            onClick={() => setClickCount(prev => prev + 1)}
          >
            <span>Click Me</span>
            {clickCount > 0 && (
              <div key={clickCount} className={styles.ripple}></div>
            )}
          </button>
          <p>Click for ripple effect</p>
        </div>

        {/* Morphing Card */}
        <div 
          className={`${styles.morphingCard} ${isHovered === 'morph' ? styles.morphed : ''}`}
          onMouseEnter={() => setIsHovered('morph')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>✨</div>
            <h3>Hover Me</h3>
            <p>Watch the transformation</p>
          </div>
          <div className={styles.cardBackground}></div>
        </div>

        {/* Glitch Effect */}
        <div 
          className={`${styles.glitchContainer} ${isHovered === 'glitch' ? styles.glitching : ''}`}
          onMouseEnter={() => setIsHovered('glitch')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={styles.glitchText} data-text="GLITCH">GLITCH</div>
          <p>Hover for glitch effect</p>
        </div>

        {/* Particle Trail */}
        <div 
          className={styles.particleTrail}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const particle = document.createElement('div');
            particle.className = styles.trailParticle;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            e.currentTarget.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
          }}
        >
          <p>Move mouse to create particles</p>
        </div>

        {/* 3D Flip Card */}
        <div 
          className={`${styles.flipCard} ${isHovered === 'flip' ? styles.flipped : ''}`}
          onMouseEnter={() => setIsHovered('flip')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <h3>Front Side</h3>
              <p>Hover to flip</p>
            </div>
            <div className={styles.flipCardBack}>
              <h3>Back Side</h3>
              <p>Amazing flip effect!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveEffects;