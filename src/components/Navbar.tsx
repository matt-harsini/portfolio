import styles from "./Navbar.module.css";
import ToggleColorMode from "./ToggleColorMode";

function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <ToggleColorMode />
        <ul className={styles.ul}>
          <li>
            <a href="#about">
              <span className={styles.span}>About</span>
            </a>
          </li>
          <li>
            <a href="#work">
              <span className={styles.span}>Work</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className={styles.span}>Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className={styles.span}>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
