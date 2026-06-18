import React from 'react';
import styles from './Education.module.css';
import { content } from '../data/content';

const Education: React.FC = () => {
  return (
    <section className={styles.education}>
      <span className={styles.label}>Education & Certifications</span>
      <div className={styles.grid}>
        <div className={styles.eduBlock}>
          <h3 className={styles.degree}>{content.education.degree}</h3>
          <p className={styles.institution}>{content.education.institution}</p>
          <span className={styles.period}>{content.education.period}</span>
        </div>
        <div className={styles.certBlock}>
          <h3 className={styles.certHeading}>Certifications</h3>
          <ul className={styles.certList}>
            {content.certifications.map((cert, i) => (
              <li key={i} className={styles.cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
