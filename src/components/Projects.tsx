import React from 'react';
import styles from './Projects.module.css';
import { content } from '../data/content';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <span className={styles.label}>Hardware & Engineering Projects</span>
      <div className={styles.grid}>
        {content.projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.top}>
              <span className={styles.category}>{project.category}</span>
              {project.period && <span className={styles.period}>{project.period}</span>}
            </div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <ul className={styles.points}>
              {project.points.map((point, i) => (
                <li key={i} className={styles.point}>{point}</li>
              ))}
            </ul>
            {project.links.length > 0 && (
              <div className={styles.links}>
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    ↗ {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
