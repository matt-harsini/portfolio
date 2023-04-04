import styles from "./Hero.module.css";
import StarsCanvas from "./Stars";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.h1}>Matthew Kim</h1>
      <h2 className={styles.h2}>Software Engineer</h2>
      <StarsCanvas />
    </section>
  );
}

export default Hero;
