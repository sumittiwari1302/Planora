"use client";

import { useState, useEffect } from "react";
import type { Task } from "@/types/task";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TaskStats from "@/components/TaskStats/TaskStats";
import TaskForm from "@/components/TaskForm/TaskForm";
import TaskList from "@/components/TaskList/TaskList";
import AddTaskModal from "@/components/AddTaskModal/AddTaskModal";
import Footer from "@/components/Footer/Footer";

const STORAGE_KEY = "task-tracker-tasks-v2";

function createDummyTasks(): Task[] {
  return [
    {
      id: 1,
      title: "Fix login page bug",
      description: "Users are unable to sign in on mobile browsers.",
      completed: false,
      priority: "High",
    },
    {
      id: 2,
      title: "Deploy to production",
      description: "Ship the latest release to the production server.",
      completed: false,
      priority: "High",
    },
    {
      id: 3,
      title: "Fix payment gateway issue",
      description: "Card payments time out on the checkout screen.",
      completed: false,
      priority: "High",
    },
    {
      id: 4,
      title: "Reset staging database",
      description: "Restore the staging environment to clean data.",
      completed: true,
      priority: "High",
    },
    {
      id: 5,
      title: "Write API documentation",
      description: "Document all REST endpoints with examples.",
      completed: false,
      priority: "Medium",
    },
    {
      id: 6,
      title: "Design dashboard mockup",
      description: "Create a new layout for the analytics dashboard.",
      completed: false,
      priority: "Medium",
    },
    {
      id: 7,
      title: "Code review pull requests",
      description: "Review and merge the three open pull requests.",
      completed: false,
      priority: "Medium",
    },
    {
      id: 8,
      title: "Optimize database queries",
      description: "Speed up the slow report queries.",
      completed: true,
      priority: "Medium",
    },
    {
      id: 9,
      title: "Update project README",
      description: "Refresh the README with setup instructions.",
      completed: false,
      priority: "Low",
    },
    {
      id: 10,
      title: "Organize task backlog",
      description: "Reorder and label the sprint backlog items.",
      completed: false,
      priority: "Low",
    },
    {
      id: 11,
      title: "Rename utility CSS classes",
      description: "Follow the new naming convention for helpers.",
      completed: false,
      priority: "Low",
    },
    {
      id: 12,
      title: "Clean up unused imports",
      description: "Remove dead code from the components folder.",
      completed: true,
      priority: "Low",
    },
  ];
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(createDummyTasks);
  const [filter, setFilter] = useState("All");
  const [loaded, setLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, loaded]);

  function addTask(newTask: Task) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function toggleTask(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

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
      <Header
        currentFilter={filter}
        onFilterChange={setFilter}
        onAddTask={() => setIsModalOpen(true)}
      />
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
