import styles from "@/components/organization/OrganizationAnalytics.module.css";
import { FiShield, FiUsers } from "react-icons/fi";

type Stat = {
  label: string;
  value: string | number;
  icon: React.ReactElement;
};

const STATS: Stat[] = [
  { label: "Projects", value: "12+", icon: <FiShield /> },
  { label: "Team Members", value: "24", icon: <FiUsers /> },
  { label: "Active Users", value: "2,147", icon: <FiShield /> },
  { label: "Satisfaction", value: "98%", icon: <FiShield /> },
];

export default function OrganizationAnalytics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Analytics</h2>
        <div className={styles.statsGrid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <stat.icon className={styles.statIcon} />
              <div>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}