import React from 'react';
import styles from './Education.module.css';
import { content } from '../data/content';

const Education: React.FC = () => {
  return (
    <section className={styles.education}>
      <span className={styles.label}>Education</span>
      <div className={styles.eduCard}>
        <h3 className={styles.degree}>{content.education.degree}</h3>
        <p className={styles.institution}>{content.education.institution}</p>
        <span className={styles.period}>{content.education.period}</span>
      </div>

      <span className={styles.certLabel}>Certifications</span>
      <ul className={styles.certList}>
        {content.certifications.map((cert, i) => (
          <li key={i} className={styles.cert}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
              {cert.name}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.langSection}>
        <h3 className={styles.langHeading}>Languages</h3>
        <div className={styles.langList}>
          {content.languages.map((lang, i) => (
            <span key={i} className={styles.lang}>
              <strong>{lang.lang}</strong> · {lang.proficiency}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
