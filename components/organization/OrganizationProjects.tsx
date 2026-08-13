import styles from "@/components/organization/OrganizationProjects.module.css";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
};

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Planora Dashboard",
    category: "Web Application",
    description: "A comprehensive task management platform",
  },
  {
    id: "2",
    title: "FinTrack",
    category: "Mobile App",
    description: "Financial tracking and budgeting app",
  },
  {
    id: "3",
    title: "Marketing Site",
    category: "Website",
    description: "Corporate website with CMS",
  },
];

export default function OrganizationProjects() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <span className={styles.projectCategory}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}