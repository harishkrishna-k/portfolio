import React from 'react';
import styles from './About.module.css';
import { content } from '../data/content';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>
        <div>
          <span className={styles.label}>Professional Summary</span>
          <h2 className={styles.title}>Mechanical engineer building testable hardware solutions from first principles.</h2>
        </div>
        <p className={styles.description}>{content.summary}</p>
      </div>
    </section>
  );
};

export default About;
