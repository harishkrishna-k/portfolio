import React from 'react';
import styles from './Experience.module.css';
import { content } from '../data/content';

const Experience: React.FC = () => {
  return (
    <section className={styles.experience}>
      <span className={styles.label}>Experience</span>
      <div className={styles.list}>
        {content.experience.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.header}>
              <h3 className={styles.role}>{item.role}</h3>
              <span className={styles.period}>{item.period}</span>
            </div>
            <p className={styles.company}>{item.company} · {item.location}</p>
            <ul className={styles.points}>
              {item.points.map((point, i) => (
                <li key={i} className={styles.point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
