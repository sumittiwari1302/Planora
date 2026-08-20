"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useTasks } from "@/hooks/useTasks";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ConfirmDialog from "@/components/ConfirmDialog/ConfirmDialog";
import Link from "next/link";
import {
  FiArrowLeft,
  FiEdit2,
  FiTrash2,
  FiCalendar,
  FiFlag,
  FiClock,
} from "react-icons/fi";

export default function TaskDetailPage() {
  const { tasks, updateTask, deleteTask, loaded } = useTasks();
  const pathname = usePathname();

  const pathnameParts = pathname.split("/").filter(Boolean);
  const idIndex = pathnameParts.findIndex(
    (part) => part === "tasks" || part === "task"
  );
  const taskId =
    idIndex > -1 && pathnameParts[idIndex + 1]
      ? parseInt(pathnameParts[idIndex + 1], 10)
      : 0;

  const task = tasks.find((t) => t.id === taskId);

  const [editing, setEditing] = useState(false);
  const [formTitle, setFormTitle] = useState(task ? task.title : "");
  const [formDescription, setFormDescription] = useState(
    task ? task.description : ""
  );
  const [formPriority, setFormPriority] = useState<"High" | "Medium" | "Low">(
    task ? task.priority : "Medium"
  );
  const [formDueDate, setFormDueDate] = useState(task?.dueDate || "");
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const startEditing = useCallback(() => {
    if (task) {
      setFormTitle(task.title);
      setFormDescription(task.description);
      setFormPriority(task.priority);
      setFormDueDate(task.dueDate || "");
    }
    setEditing(true);
  }, [task]);

  function handleEditCancel() {
    if (task) {
      setFormTitle(task.title);
      setFormDescription(task.description);
      setFormPriority(task.priority);
      setFormDueDate(task.dueDate || "");
    }
    setEditing(false);
  }

  function handleEditSave(e: React.FormEvent) {
    e.preventDefault();
    if (!task) return;

    updateTask(task.id, {
      title: formTitle.trim(),
      description: formDescription.trim(),
      priority: formPriority,
      dueDate: formDueDate || undefined,
    });
    setEditing(false);
  }

  function handleDelete() {
    if (!task) return;
    deleteTask(task.id);
    setDeleteConfirmOpen(false);
  }

  if (!loaded) {
    return (
      <div className="page">
        <Header />
        <main className="container">
          <div className="emptyState">
            <p>Loading task...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!task) {
    return (
      <div className="page">
        <Header />
        <main className="container">
          <div className="error-page" style={{ textAlign: "center", padding: "80px 24px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#1c1917", marginBottom: "12px" }}>
              Task Not Found
            </h1>
            <p style={{ fontSize: "16px", color: "#78716c", marginBottom: "24px" }}>
              The task you are looking for does not exist or has been deleted.
            </p>
            <Link href="/tasks" className="btn btn-primary">
              <FiArrowLeft /> Back to Tasks
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const priorityColors = {
    High: { bg: "#fee2e2", color: "#b91c1c" },
    Medium: { bg: "#fef3c7", color: "#b45309" },
    Low: { bg: "#dcfce7", color: "#15803d" },
  };

  return (
    <div className="page">
      <Header />
      <main className="container">
        {editing ? (
          <div className="edit-task-section" style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ marginBottom: 24 }}>
              <Link
                href="/tasks"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: "#78716c",
                  textDecoration: "none",
                  marginBottom: 16,
                }}
              >
                <FiArrowLeft /> Back to Tasks
              </Link>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#1c1917",
                }}
              >
                Edit Task
              </h2>
            </div>
            <form
              onSubmit={handleEditSave}
              style={{
                background: "#ffffff",
                border: "1px solid #e7e5e4",
                borderRadius: 18,
                padding: 28,
                boxShadow: "0 1px 3px rgba(28,25,23,0.04)",
              }}
            >
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #e7e5e4",
                    borderRadius: 12,
                    fontSize: 15,
                    color: "#1c1917",
                    background: "#fafaf9",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #e7e5e4",
                    borderRadius: 12,
                    fontSize: 15,
                    color: "#1c1917",
                    background: "#fafaf9",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div className="form-group" style={{ flex: "1 1 200px" }}>
                  <label>Priority</label>
                  <select
                    value={formPriority}
                    onChange={(e) =>
                      setFormPriority(
                        e.target.value as "High" | "Medium" | "Low"
                      )
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #e7e5e4",
                      borderRadius: 12,
                      fontSize: 15,
                      color: "#1c1917",
                      background: "#fafaf9",
                      outline: "none",
                      fontFamily: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div className="form-group" style={{ flex: "1 1 200px" }}>
                  <label>Due Date</label>
                  <input
                    type="date"
                    value={formDueDate}
                    onChange={(e) => setFormDueDate(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #e7e5e4",
                      borderRadius: 12,
                      fontSize: 15,
                      color: "#1c1917",
                      background: "#fafaf9",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>

              <div className="form-actions" style={{ marginTop: 24 }}>
                <button
                  type="button"
                  onClick={handleEditCancel}
                  style={{
                    padding: "12px 24px",
                    border: "1px solid #e7e5e4",
                    borderRadius: 12,
                    background: "#ffffff",
                    color: "#44403c",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: 12,
                    background: "#22c55e",
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <Link
              href="/tasks"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                color: "#78716c",
                textDecoration: "none",
                marginBottom: 24,
              }}
            >
              <FiArrowLeft /> Back to Tasks
            </Link>

            <div
              className="task-detail-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e7e5e4",
                borderRadius: 20,
                padding: 32,
                boxShadow: "0 1px 3px rgba(28,25,23,0.04)",
              }}
            >
              <div
                className="task-detail-header"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <h1
                  className="task-detail-title"
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#1c1917",
                    lineHeight: 1.3,
                  textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </h1>
                <span
                  className={`badge ${task.completed ? "badge-completed" : "badge-pending"}`}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    background: task.completed ? "#dcfce7" : "#fef3c7",
                    color: task.completed ? "#15803d" : "#b45309",
                    flexShrink: 0,
                  }}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>
              </div>

              <p
                style={{
                  fontSize: 16,
                  color: "#57534e",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                {task.description || "No description provided."}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 16,
                  marginBottom: 28,
                  padding: "16px 20px",
                  background: "#fafaf9",
                  borderRadius: 14,
                  border: "1px solid #f0efee",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14,
                    color: "#57534e",
                  }}
                >
                  <FiFlag style={{ color: priorityColors[task.priority].color }} />
                  <span style={{ fontWeight: 500 }}>Priority:</span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      background: priorityColors[task.priority].bg,
                      color: priorityColors[task.priority].color,
                    }}
                  >
                    {task.priority}
                  </span>
                </div>

                {task.dueDate && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 14,
                      color: "#57534e",
                    }}
                  >
                    <FiCalendar />
                    <span style={{ fontWeight: 500 }}>Due:</span>
                    <span>{new Date(task.dueDate + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14,
                    color: "#57534e",
                  }}
                >
                  <FiClock />
                  <span style={{ fontWeight: 500 }}>Status:</span>
                  <span>{task.completed ? "Completed" : "Pending"}</span>
                </div>
              </div>

              <div
                className="task-detail-actions"
                style={{
                  display: "flex",
                  gap: 12,
                  paddingTop: 24,
                  borderTop: "1px solid #e7e5e4",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={startEditing}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 22px",
                    border: "1px solid #e7e5e4",
                    borderRadius: 12,
                    background: "#ffffff",
                    color: "#44403c",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <FiEdit2 /> Edit
                </button>
                <button
                  onClick={() => setDeleteConfirmOpen(true)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 22px",
                    border: "none",
                    borderRadius: 12,
                    background: "#fee2e2",
                    color: "#b91c1c",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <FiTrash2 /> Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />

      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        onConfirm={handleDelete}
        onCancel={() => setDeleteConfirmOpen(false)}
        title="Delete Task"
        message={`Are you sure you want to delete "${task?.title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
}
