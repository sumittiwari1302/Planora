import Link from "next/link";
import { FiCheckSquare, FiGithub, FiMail, FiUser } from "react-icons/fi";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./about.module.css";

const FEATURES = [
  "Create tasks with a title, description, priority, and due date",
  "Add tasks from a quick form or a modal dialog",
  "Mark tasks as completed or pending",
  "Delete tasks with confirmation dialog",
  "Edit tasks with pre-populated form",
  "Live statistics — total, completed, and pending",
  "Filter by All, Pending, or Completed",
  "Search tasks by title or description",
  "Sort tasks by date, priority, or alphabetically",
  "localStorage persistence across refreshes",
  "Dynamic routing with task detail pages",
  "Responsive design for mobile, tablet, and desktop",
];

const TECH_STACK = [
  "Next.js 16 (App Router)",
  "React 19",
  "TypeScript",
  "CSS Modules",
  "react-icons (Feather Icons)",
];

const CONCEPTS = [
  "Reusable components with props",
  "State management with useState and useEffect",
  "Custom hooks (useTasks)",
  "Rendering lists with map()",
  "Filtering with filter()",
  "Sorting with sort()",
  "Conditional rendering",
  "Immutability and the spread operator",
  "Browser localStorage for persistence",
  "Next.js App Router and dynamic routing",
  "URL search params for filter state",
];

const HOW_TO_USE = [
  "Open the Dashboard and add your first task with a title, description, priority, and optional due date.",
  "Use the All, Pending, or Completed tabs to filter the list, or search by keyword.",
  "Sort tasks by newest first, priority level, or alphabetically.",
  "Click View Details to see full task information, or Edit to modify it.",
  "Mark tasks as completed when finished, or delete them when no longer needed.",
  "Everything is saved automatically in your browser — refresh freely!",
];

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <div className={styles.aboutIntro}>
          <span className={styles.aboutIntroLogo}>
            <FiCheckSquare />
          </span>
          <div>
            <h1 className="pageTitle">About Planora</h1>
            <p className="pageSubtitle">
              A task tracker built to practise Next.js and React fundamentals.
            </p>
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <section className={`${styles.aboutCard} ${styles.aboutCardWide}`}>
            <h2 className={styles.aboutCardTitle}>What is Planora?</h2>
            <p className={styles.aboutCardText}>
              Planora is a task manager where you can create tasks with a title,
              description, priority, and due date, mark them as completed or
              pending, filter and search them, and delete them. All tasks are
              saved in your browser with localStorage, so your list survives a
              refresh. The app uses Next.js App Router with dynamic routing for
              individual task detail pages.
            </p>
          </section>

          <section className={styles.aboutCard}>
            <h2 className={styles.aboutCardTitle}>How to Use</h2>
            <ol className={styles.aboutSteps}>
              {HOW_TO_USE.map((step) => (
                <li className={styles.aboutStep} key={step}>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.aboutCard}>
            <h2 className={styles.aboutCardTitle}>Features</h2>
            <ul className={styles.aboutList}>
              {FEATURES.map((feature) => (
                <li className={styles.aboutListItem} key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.aboutCard}>
            <h2 className={styles.aboutCardTitle}>Tech Stack</h2>
            <ul className={styles.aboutList}>
              {TECH_STACK.map((item) => (
                <li className={styles.aboutListItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.aboutCard}>
            <h2 className={styles.aboutCardTitle}>Concepts Practised</h2>
            <ul className={styles.aboutList}>
              {CONCEPTS.map((item) => (
                <li className={styles.aboutListItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.aboutCard}>
            <h2 className={styles.aboutCardTitle}>Pages</h2>
            <ul className={styles.aboutList}>
              <li className={styles.aboutListItem}>
                <Link className={styles.aboutLink} href="/">
                  / — Dashboard
                </Link>
              </li>
              <li className={styles.aboutListItem}>
                <Link className={styles.aboutLink} href="/tasks">
                  /tasks — All Tasks
                </Link>
              </li>
              <li className={styles.aboutListItem}>
                <Link className={styles.aboutLink} href="/about">
                  /about — About
                </Link>
              </li>
            </ul>
          </section>

          <section className={styles.aboutCard}>
            <h2 className={styles.aboutCardTitle}>Author</h2>
            <div className={styles.aboutAuthor}>
              <span className={styles.aboutAuthorAvatar}>
                <FiUser />
              </span>
              <div className={styles.aboutAuthorInfo}>
                <span className={styles.aboutAuthorName}>Sumit Tiwari</span>
                <a
                  className={styles.aboutAuthorLink}
                  href="mailto:sumittiwari0307@gmail.com"
                >
                  <FiMail />
                  sumittiwari0307@gmail.com
                </a>
                <a
                  className={styles.aboutAuthorLink}
                  href="https://github.com/sumittiwari1302"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                  github.com/sumittiwari1302
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
