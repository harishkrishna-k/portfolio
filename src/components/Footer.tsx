import React from 'react';
import styles from './Footer.module.css';
import { content } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.title}>Let's connect</h2>
          <div className={styles.links}>
            <a href={`mailto:${content.contact.email}`} className={styles.link}>Email</a>
            <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {content.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
