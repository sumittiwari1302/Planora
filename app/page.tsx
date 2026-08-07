"use client";

import { useState } from "react";
import { useTasks } from "@/hooks/useTasks";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TaskStats from "@/components/TaskStats/TaskStats";
import TaskForm from "@/components/TaskForm/TaskForm";
import FilterTabs from "@/components/FilterTabs/FilterTabs";
import TaskList from "@/components/TaskList/TaskList";
import AddTaskModal from "@/components/AddTaskModal/AddTaskModal";
import Footer from "@/components/Footer/Footer";

export default function Home() {
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
        <Hero />
        <TaskStats
          total={totalTasks}
          completed={completedTasks}
          pending={pendingTasks}
        />
        <section className="addTaskSection">
          <div className="addTaskInner">
            <div className="addTaskHeading">
              <h2 className="addTaskTitle">Add a New Task</h2>
              <p className="addTaskSubtitle">
                Capture the next task and keep your day on track.
              </p>
            </div>
            <TaskForm onAdd={addTask} />
          </div>
        </section>
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
