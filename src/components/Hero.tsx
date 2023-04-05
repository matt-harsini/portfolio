import { IconButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Hero.module.css";
import StarsCanvas from "./Stars";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.h1}>Matthew Kim</h1>
      <h2 className={styles.h2}>Software Engineer</h2>
      <IconButton
        aria-label="Learn more"
        icon={<ChevronDownIcon boxSize={10} />}
        className={styles["icon-button"]}
      />
      <StarsCanvas />
    </section>
  );
}

export default Hero;
