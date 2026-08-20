"use client";

import { useState, useEffect } from "react";
import type { Task } from "@/types/task";
import { getTasks, saveTasks } from "@/utils/storage";

function createDummyTasks(): Task[] {
  return [
    {
      id: 1,
      title: "Fix login page bug",
      description: "Users are unable to sign in on mobile browsers.",
      completed: false,
      priority: "High",
      dueDate: "2026-08-25",
    },
    {
      id: 2,
      title: "Deploy to production",
      description: "Ship the latest release to the production server.",
      completed: false,
      priority: "High",
      dueDate: "2026-08-22",
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
      dueDate: "2026-09-01",
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
      dueDate: "2026-08-28",
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

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(createDummyTasks);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = getTasks();
    if (savedTasks.length > 0) {
      setTasks(savedTasks);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      saveTasks(tasks);
    }
  }, [tasks, loaded]);

  function addTask(newTask: Task) {
    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function updateTask(id: number, updates: Partial<Task>) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      )
    );
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = tasks.filter((t) => !t.completed).length;

  return {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    toggleTask,
    updateTask,
    totalTasks,
    completedTasks,
    pendingTasks,
    loaded,
  };
}
