import styles from "@/components/organization/OrganizationMembers.module.css";
import { FiUsers } from "react-icons/fi";

type Member = {
  name: string;
  role: string;
  avatar: string;
};

const MEMBERS: Member[] = [
  { name: "Sumit Tiwari", role: "Founder & CEO", avatar: "/avatars/sumit.png" },
  { name: "Jane Doe", role: "Lead Developer", avatar: "/avatars/jane.png" },
  { name: "John Smith", role: "Design Lead", avatar: "/avatars/john.png" },
  { name: "Alice Johnson", role: "Product Manager", avatar: "/avatars/alice.png" },
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