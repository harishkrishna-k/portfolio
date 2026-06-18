import styles from './About.module.css';
import { content } from '../data/content';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.header}>
          <span className={styles.label}>About</span>
          <h2 className={styles.title}>{content.about.title}</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>{content.about.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
