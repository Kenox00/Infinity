// HeroSection.js
import styles from './HeroSection.module.css';
import image from '../../../assets/Home/HeroSection/image.png'

const HeroSection = () => {
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Server better with one faster flexible platform</h1>
      <p className={styles.description}>
        Our POS system software is designed to cater to various
        industries, including bars, restaurants, coffee shops, pizzerias,
        alimentation, salons, and more.
      </p>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.primaryButton}`}>Get a Demo</button>
        <button className={`${styles.button} ${styles.secondaryButton}`}>Get Started</button>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <div className={styles.circleBackground}></div>
      <div className={styles.circleBackground}></div>
      <div className={styles.circleBackground}></div>
      <img src={image} alt="POS System" className={styles.image} />
    </div>
  </div>
  );
};

export default HeroSection;