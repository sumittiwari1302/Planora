import styles from "@/styles/TaskStats.module.css";

type TaskStatsProps = {
  total: number;
  completed: number;
  pending: number;
};

export default function TaskStats({
  total,
  completed,
  pending,
}: TaskStatsProps) {
  return (
    <div className={styles.stats}>
      <div className={`${styles.statCard} ${styles.totalCard}`}>
        <span className={styles.statValue}>{total}</span>
        <span className={styles.statLabel}>Total</span>
      </div>
      <div className={`${styles.statCard} ${styles.completedCard}`}>
        <span className={styles.statValue}>{completed}</span>
        <span className={styles.statLabel}>Completed</span>
      </div>
      <div className={`${styles.statCard} ${styles.pendingCard}`}>
        <span className={styles.statValue}>{pending}</span>
        <span className={styles.statLabel}>Pending</span>
      </div>
    </div>
  );
}
