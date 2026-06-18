import React from 'react';
import styles from './Projects.module.css';
import { content } from '../data/content';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <span className={styles.label}>Selected Projects</span>
      <div className={styles.grid}>
        {content.projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imagePlaceholder}>
              <span>{project.title}</span>
            </div>
            <div className={styles.info}>
              <span className={styles.category}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
