import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blobOne}></div>
      <div className={styles.blobTwo}></div>

      <span className={styles.pill}>✦ Your daily companion</span>
      <h1 className={styles.title}>Plan. Track. Get it done.</h1>
      <p className={styles.subtitle}>
        Capture tasks in seconds, mark them complete, and watch your progress
        grow.
      </p>
    </section>
  );
}
