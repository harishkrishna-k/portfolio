import React from 'react';
import styles from './Navbar.module.css';
import { content } from '../data/content';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>{content.name}</a>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
