"use client";

import { useState } from "react";
import { useTasks } from "@/hooks/useTasks";
import Header from "@/components/Header/Header";
import TaskStats from "@/components/TaskStats/TaskStats";
import FilterTabs from "@/components/FilterTabs/FilterTabs";
import TaskList from "@/components/TaskList/TaskList";
import AddTaskModal from "@/components/AddTaskModal/AddTaskModal";
import Footer from "@/components/Footer/Footer";

export default function TasksPage() {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    totalTasks,
    completedTasks,
    pendingTasks,
  } = useTasks();

  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Header onAddTask={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <AddTaskModal
          onClose={() => setIsModalOpen(false)}
          onAdd={addTask}
        />
      )}
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
      </main>
      <Footer />
    </div>
  );
}
