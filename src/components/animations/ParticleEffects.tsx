import React from 'react';
import styles from './ParticleEffects.module.css';

const ParticleEffects: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Particle Effects</h2>
      
      <div className={styles.effectsGrid}>
        {/* Floating Particles */}
        <div className={styles.effectContainer}>
          <div className={styles.floatingParticles}>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className={styles.particle} style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}></div>
            ))}
          </div>
          <p>Floating Particles</p>
        </div>

        {/* Spiral Galaxy */}
        <div className={styles.effectContainer}>
          <div className={styles.spiralGalaxy}>
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className={styles.spiralParticle} style={{ '--index': i } as React.CSSProperties}></div>
            ))}
          </div>
          <p>Spiral Galaxy</p>
        </div>

        {/* Energy Burst */}
        <div className={styles.effectContainer}>
          <div className={styles.energyBurst}>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={styles.energyRay} style={{ '--angle': `${i * 45}deg` } as React.CSSProperties}></div>
            ))}
          </div>
          <p>Energy Burst</p>
        </div>

        {/* Quantum Field */}
        <div className={styles.effectContainer}>
          <div className={styles.quantumField}>
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className={styles.quantumParticle} style={{ '--random': Math.random() } as React.CSSProperties}></div>
            ))}
          </div>
          <p>Quantum Field</p>
        </div>
      </div>
    </div>
  );
};

export default ParticleEffects;