import styles from "@/components/organization/OrganizationHiring.module.css";
import { FiBriefcase } from "react-icons/fi";

type Opening = {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
};

const OPENINGS: Opening[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: "3",
    title: "DevOps Engineer",
    location: "San Francisco, CA",
    type: "Contract",
  },
];

export default function OrganizationHiring() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Open Positions</h2>
        <div className={styles.openingsGrid}>
          {OPENINGS.map((opening) => (
            <div key={opening.id} className={styles.openingCard}>
              <FiBriefcase className={styles.openingIcon} />
              <div>
                <h3 className={styles.openingTitle}>{opening.title}</h3>
                <p className={styles.openingLocation}>
                  {opening.location} • {opening.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}