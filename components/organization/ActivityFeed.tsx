import styles from "@/components/organization/ActivityFeed.module.css";
import { FiMessageCircle } from "react-icons/fi";

type ActivityItem = {
  id: string;
  title: string;
  description: string;
  time: string;
};

const ACTIVITIES: ActivityItem[] = [
  {
    id: "1",
    title: "New project launched",
    description: "Planora 2.0 released with enhanced features",
    time: "2 hours ago",
  },
  {
    id: "2",
    title: "Team meeting",
    description: "Weekly sync with the development team",
    time: "5 hours ago",
  },
  {
    id: "3",
    title: "Design update",
    description: "New UI components added to the dashboard",
    time: "1 day ago",
  },
];

export default function ActivityFeed() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Activity Feed</h2>
        <div className={styles.activityList}>
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <FiMessageCircle className={styles.activityIcon} />
              <div className={styles.activityContent}>
                <h3 className={styles.activityTitle}>{activity.title}</h3>
                <p className={styles.activityDescription}>{activity.description}</p>
                <span className={styles.activityTime}>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}