"use client";

import { useState, useEffect } from "react";
import { useTasks } from "@/hooks/useTasks";
import Header from "@/components/Header/Header";
import TaskStats from "@/components/TaskStats/TaskStats";
import FilterTabs from "@/components/FilterTabs/FilterTabs";
import TaskList from "@/components/TaskList/TaskList";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function TasksPage() {
  const {
    tasks,
    deleteTask,
    toggleTask,
    totalTasks,
    completedTasks,
    pendingTasks,
  } = useTasks();

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const listFilter = urlParams.get("filter") || "All";
    setFilter(listFilter);
  }, []);

  const visibleTasks = tasks.filter((task) => {
    if (filter === "Completed") {
      return task.completed;
    }

    if (filter === "Pending") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="page">
      <Header />
      <main className="container">
        <div className="pageHeading">
          <h1 className="pageTitle">All Tasks</h1>
          <p className="pageSubtitle">
            Manage every task in one place.
          </p>
        </div>
        <TaskStats
          total={totalTasks}
          completed={completedTasks}
          pending={pendingTasks}
        />
        <FilterTabs currentFilter={filter} onFilterChange={setFilter} />
        <section className="taskColumn">
<TaskList
              tasks={visibleTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
        </section>
        <footer className="pageFooter">
          <Link href="/tasks" className="btn btn-secondary">
            View All Tasks
          </Link>
        </footer>
      </main>
      <Footer />
    </div>
  );
}