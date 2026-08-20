"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useTasks } from "@/hooks/useTasks";
import Header from "@/components/Header/Header";
import TaskStats from "@/components/TaskStats/TaskStats";
import FilterTabs from "@/components/FilterTabs/FilterTabs";
import TaskList from "@/components/TaskList/TaskList";
import ConfirmDialog from "@/components/ConfirmDialog/ConfirmDialog";
import Footer from "@/components/Footer/Footer";

export default function TasksPage() {
  const {
    tasks,
    deleteTask,
    toggleTask,
    totalTasks,
    completedTasks,
    pendingTasks,
    loaded,
  } = useTasks();

  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "priority" | "title">("date");
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const listFilter = urlParams.get("filter") || "All";
    setFilter(listFilter);
  }, []);

  const handleDeleteRequest = useCallback((id: number) => {
    setDeleteTarget(id);
  }, []);

  const confirmDelete = useCallback(() => {
    if (deleteTarget !== null) {
      deleteTask(deleteTarget);
      setDeleteTarget(null);
    }
  }, [deleteTarget, deleteTask]);

  const visibleTasks = useMemo(() => {
    const priorityOrder = { High: 0, Medium: 1, Low: 2 };
    let result = tasks.filter((task) => {
      if (filter === "Completed") return task.completed;
      if (filter === "Pending") return !task.completed;
      return true;
    });

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === "priority") {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return b.id - a.id;
    });

    return result;
  }, [tasks, filter, searchQuery, sortBy]);

  const deleteTargetTask = tasks.find((t) => t.id === deleteTarget);

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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "10px 16px",
              border: "1px solid #e7e5e4",
              borderRadius: 12,
              fontSize: 14,
              color: "#1c1917",
              background: "#ffffff",
              outline: "none",
              fontFamily: "inherit",
              minWidth: 200,
              flex: "1 1 200px",
              maxWidth: 320,
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13, color: "#78716c", fontWeight: 500 }}>
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "date" | "priority" | "title")
              }
              style={{
                padding: "8px 12px",
                border: "1px solid #e7e5e4",
                borderRadius: 10,
                fontSize: 13,
                color: "#44403c",
                background: "#ffffff",
                cursor: "pointer",
                outline: "none",
                fontFamily: "inherit",
              }}
            >
              <option value="date">Newest First</option>
              <option value="priority">Priority</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        <FilterTabs currentFilter={filter} onFilterChange={setFilter} />

        <section className="taskColumn">
          {!loaded ? (
            <div className="emptyState">
              <p style={{ color: "#78716c", fontSize: 15 }}>Loading tasks...</p>
            </div>
          ) : visibleTasks.length === 0 ? (
            <div className="emptyState">
              <div className="emptyStateIcon" style={{ fontSize: 48, opacity: 0.3 }}>
                ✓
              </div>
              <h3 className="emptyStateTitle">
                {searchQuery ? "No matching tasks" : "No tasks yet"}
              </h3>
              <p className="emptyStateDesc">
                {searchQuery
                  ? "Try adjusting your search or filters."
                  : "Add your first task from the Dashboard to get started."}
              </p>
            </div>
          ) : (
            <TaskList
              tasks={visibleTasks}
              onToggle={toggleTask}
              onDelete={handleDeleteRequest}
            />
          )}
        </section>
      </main>
      <Footer />

      <ConfirmDialog
        isOpen={deleteTarget !== null}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
        title="Delete Task"
        message={`Are you sure you want to delete "${deleteTargetTask?.title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
}
