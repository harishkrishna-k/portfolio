import React from 'react';
import styles from './Hero.module.css';
import { content } from '../data/content';

const Hero: React.FC = () => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.name}>{content.name}</h1>
      <p className={styles.tagline}>{content.tagline}</p>
    </header>
  );
};

export default Hero;
