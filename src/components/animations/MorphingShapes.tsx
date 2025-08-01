import React from 'react';
import styles from './MorphingShapes.module.css';

const MorphingShapes: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Morphing Shapes</h2>
      
      <div className={styles.shapesGrid}>
        {/* Blob Morph */}
        <div className={styles.shapeContainer}>
          <div className={styles.blob}></div>
          <p>Organic Blob</p>
        </div>

        {/* Geometric Morph */}
        <div className={styles.shapeContainer}>
          <div className={styles.geometric}></div>
          <p>Geometric Transform</p>
        </div>

        {/* Liquid Morph */}
        <div className={styles.shapeContainer}>
          <div className={styles.liquid}></div>
          <p>Liquid Motion</p>
        </div>

        {/* Crystal Morph */}
        <div className={styles.shapeContainer}>
          <div className={styles.crystal}></div>
          <p>Crystal Formation</p>
        </div>
      </div>
    </div>
  );
};

export default MorphingShapes;