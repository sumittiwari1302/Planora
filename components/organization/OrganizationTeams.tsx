import styles from "@/components/organization/OrganizationTeams.module.css";

type TeamMember = {
  name: string;
  role: string;
  department: string;
  avatar: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sumit Tiwari",
    role: "Founder & CEO",
    department: "Executive",
    avatar: "ST",
  },
  {
    name: "Jane Doe",
    role: "Lead Developer",
    department: "Engineering",
    avatar: "JD",
  },
  {
    name: "John Smith",
    role: "Design Lead",
    department: "Design",
    avatar: "JS",
  },
  {
    name: "Alice Johnson",
    role: "Product Manager",
    department: "Product",
    avatar: "AJ",
  },
  {
    name: "Bob Wilson",
    role: "Senior Developer",
    department: "Engineering",
    avatar: "BW",
  },
  {
    name: "Carol Brown",
    role: "UX Designer",
    department: "Design",
    avatar: "CB",
  },
];

export default function OrganizationTeams() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Teams</h2>
        <div className={styles.teamsGrid}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              <div className={styles.avatar}>
                {member.avatar}
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberDepartment}>{member.department}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}