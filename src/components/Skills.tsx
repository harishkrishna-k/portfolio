import React from 'react';
import styles from './Skills.module.css';
import { content } from '../data/content';

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <span className={styles.label}>Skills & Expertise</span>
      <div className={styles.grid}>
        {content.skills.map((group, i) => (
          <div key={i} className={styles.group}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.list}>
              {group.items.map((item, j) => (
                <li key={j} className={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
