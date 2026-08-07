import { FiCheckSquare, FiGithub, FiHeart, FiExternalLink } from "react-icons/fi";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.about}>
          <div className={styles.brandRow}>
            <span className={styles.footerLogo}>
              <FiCheckSquare />
            </span>
            <p className={styles.brandName}>Planora</p>
          </div>
          <p className={styles.tagline}>
            A simple task tracker built to learn Next.js and React.
          </p>
        </div>

        <div className={styles.column}>
          <p className={styles.columnTitle}>Quick Links</p>
          <a className={styles.link} href="#add-task">
            Add a Task
          </a>
          <a
            className={styles.link}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            GitHub
          </a>
        </div>

        <div className={styles.column}>
          <p className={styles.columnTitle}>Resources</p>
          <a
            className={styles.link}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink />
            Next.js Docs
          </a>
          <a
            className={styles.link}
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink />
            React Docs
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {year} Planora. Made with
          <FiHeart className={styles.heart} />
          while learning Next.js.
        </p>
      </div>
    </footer>
  );
}
