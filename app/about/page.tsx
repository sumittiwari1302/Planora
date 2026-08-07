import Link from "next/link";
import { FiCheckSquare, FiGithub, FiMail, FiUser } from "react-icons/fi";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const FEATURES = [
  "Create tasks with title, description, priority, and a due date",
  "Quick-set due dates to Today or Tomorrow",
  "Mark tasks as completed or pending",
  "Delete tasks",
  "Live statistics and a completion progress ring",
  "Filter by All, Pending, or Completed",
  "localStorage persistence across refreshes",
];

const TECH_STACK = [
  "Next.js (App Router)",
  "React",
  "TypeScript",
  "CSS Modules",
  "react-icons",
];

const CONCEPTS = [
  "Reusable components",
  "Props and state (useState)",
  "Rendering lists with map()",
  "Filtering with filter()",
  "Conditional rendering",
  "Immutability and the spread operator",
  "Browser localStorage for persistence",
  "Custom hooks (useTasks)",
  "Next.js App Router and routing with Link",
];

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <div className="aboutIntro">
          <span className="aboutIntroLogo">
            <FiCheckSquare />
          </span>
          <div>
            <h1 className="pageTitle">About Planora</h1>
            <p className="pageSubtitle">
              A task tracker built to practise Next.js and React fundamentals.
            </p>
          </div>
        </div>

        <div className="aboutGrid">
          <section className="aboutCard aboutCardWide">
            <h2 className="aboutCardTitle">What is Planora?</h2>
            <p className="aboutCardText">
              Planora is a task manager where you can create tasks with a title,
              description, priority, and a due date, mark them as completed or
              pending, filter them, and delete them. All tasks are saved in
              your browser with localStorage, so your list survives a refresh.
            </p>
          </section>

          <section className="aboutCard">
            <h2 className="aboutCardTitle">Features</h2>
            <ul className="aboutList">
              {FEATURES.map((feature) => (
                <li className="aboutListItem" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="aboutCard">
            <h2 className="aboutCardTitle">Tech Stack</h2>
            <ul className="aboutList">
              {TECH_STACK.map((item) => (
                <li className="aboutListItem" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="aboutCard">
            <h2 className="aboutCardTitle">Concepts Practised</h2>
            <ul className="aboutList">
              {CONCEPTS.map((item) => (
                <li className="aboutListItem" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="aboutCard">
            <h2 className="aboutCardTitle">Pages</h2>
            <ul className="aboutList">
              <li className="aboutListItem">
                <Link className="aboutLink" href="/">
                  / — Dashboard
                </Link>
              </li>
              <li className="aboutListItem">
                <Link className="aboutLink" href="/tasks">
                  /tasks — All Tasks
                </Link>
              </li>
              <li className="aboutListItem">
                <Link className="aboutLink" href="/about">
                  /about — About
                </Link>
              </li>
            </ul>
          </section>

          <section className="aboutCard">
            <h2 className="aboutCardTitle">Author</h2>
            <div className="aboutAuthor">
              <span className="aboutAuthorAvatar">
                <FiUser />
              </span>
              <div className="aboutAuthorInfo">
                <span className="aboutAuthorName">Sumit Tiwari</span>
                <a
                  className="aboutAuthorLink"
                  href="mailto:sumittiwari0307@gmail.com"
                >
                  <FiMail />
                  sumittiwari0307@gmail.com
                </a>
                <a
                  className="aboutAuthorLink"
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
