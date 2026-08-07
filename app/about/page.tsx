import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
  "Next.js App Router and routing with Link",
];

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <div className="pageHeading">
          <h1 className="pageTitle">About Planora</h1>
          <p className="pageSubtitle">
            A task tracker built to practise Next.js and React fundamentals.
          </p>
        </div>

        <div className="aboutGrid">
          <section className="aboutCard">
            <h2 className="aboutCardTitle">What is Planora?</h2>
            <p className="aboutCardText">
              Planora is a single-page task manager where you can create tasks
              with a title, description, and priority, mark them as completed
              or pending, filter them, and delete them. All tasks are saved in
              your browser with localStorage, so your list survives a refresh.
            </p>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
