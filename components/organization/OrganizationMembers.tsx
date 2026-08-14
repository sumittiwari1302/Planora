import styles from "@/components/organization/OrganizationMembers.module.css";
import { FiUsers } from "react-icons/fi";

type Member = {
  name: string;
  role: string;
};

const MEMBERS: Member[] = [
  { name: "Sumit Tiwari", role: "Founder & CEO" },
  { name: "Jane Doe", role: "Lead Developer" },
  { name: "John Smith", role: "Design Lead" },
  { name: "Alice Johnson", role: "Product Manager" },
];

export default function OrganizationMembers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Team</h2>
        <div className={styles.membersGrid}>
          {MEMBERS.map((member) => (
            <div key={member.name} className={styles.memberCard}>
              <div className={styles.avatar}>
                <FiUsers className={styles.avatarIcon} />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}