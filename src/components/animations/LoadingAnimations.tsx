import React from 'react';
import styles from './LoadingAnimations.module.css';

const LoadingAnimations: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Loading Animations</h2>
      
      <div className={styles.loadersGrid}>
        {/* DNA Helix */}
        <div className={styles.loaderContainer}>
          <div className={styles.dnaHelix}>
            <div className={styles.dnaStrand}></div>
            <div className={styles.dnaStrand}></div>
          </div>
          <p>DNA Helix</p>
        </div>

        {/* Orbital Loader */}
        <div className={styles.loaderContainer}>
          <div className={styles.orbital}>
            <div className={styles.orbit}>
              <div className={styles.electron}></div>
            </div>
            <div className={styles.orbit}>
              <div className={styles.electron}></div>
            </div>
            <div className={styles.orbit}>
              <div className={styles.electron}></div>
            </div>
            <div className={styles.nucleus}></div>
          </div>
          <p>Orbital System</p>
        </div>

        {/* Liquid Loading */}
        <div className={styles.loaderContainer}>
          <div className={styles.liquidLoader}>
            <div className={styles.liquidWave}></div>
            <div className={styles.liquidContainer}>
              <span>75%</span>
            </div>
          </div>
          <p>Liquid Progress</p>
        </div>

        {/* Geometric Spinner */}
        <div className={styles.loaderContainer}>
          <div className={styles.geometricSpinner}>
            <div className={styles.spinnerRing}></div>
            <div className={styles.spinnerRing}></div>
            <div className={styles.spinnerRing}></div>
          </div>
          <p>Geometric Spinner</p>
        </div>

        {/* Matrix Rain */}
        <div className={styles.loaderContainer}>
          <div className={styles.matrixRain}>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={styles.matrixColumn} style={{ '--delay': `${i * 0.3}s` } as React.CSSProperties}>
                {Array.from({ length: 6 }, (_, j) => (
                  <span key={j} className={styles.matrixChar}>
                    {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <p>Matrix Rain</p>
        </div>

        {/* Pulse Wave */}
        <div className={styles.loaderContainer}>
          <div className={styles.pulseWave}>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className={styles.pulseBar} style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}></div>
            ))}
          </div>
          <p>Pulse Wave</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimations;