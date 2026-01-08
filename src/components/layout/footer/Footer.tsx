import styles from "./footer.module.css";
import { LocationIcon, CodeIcon } from "@/components/svgIcons";

export default function Footer() {
  return (
    <section className={styles.sectionContainer}>
      <h3>Let's build something amazing together</h3>
      <p className={styles.subtitle}>
        Ready to bring your next project to life? I'm always excited to work on
        innovative solutions.
      </p>
      <footer className={styles.footerContainer}>
        <div className={styles.footerLeftContainer}>
          <h4>Rodrigo Martinez</h4>
          <p className={styles.location}>
            <LocationIcon height={"1.2rem"} width={"1.2rem"} />
            Mexico, Mexico City
          </p>
        </div>
        <p className={styles.responsiveTag}>Frontend Developer</p>
        <nav>
          <ul>
            <li>
              <a href="#about-section">About&nbsp;</a>
            </li>
            <li>
              | <a href="#projects-section">Projects&nbsp;</a>
            </li>
            <li>
              | <a href="#experience-section">Experience&nbsp;</a>
            </li>
            <li>
              | <a href="#contact-section">Contacts&nbsp;</a>
            </li>
          </ul>
        </nav>
        <p className={styles.footerText}>
          <span className={styles.greenDot}></span>Available for opportunities ©
          2025 All rights reserved
        </p>
        <div className={styles.footerResponsive}>
          <p className={styles.footerTextResponsive}>
            Rodrigo Mtz. © 2025 All rights reserved
          </p>
          <p className={styles.footerRights}>
            Built in with&nbsp;
            <CodeIcon width={"0.875rem"} height={"0.875rem"} color="#8da9ff" />
            &nbsp;Next.js
          </p>
        </div>
      </footer>
    </section>
  );
}
