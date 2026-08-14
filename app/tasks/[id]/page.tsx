"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useTasks } from "@/hooks/useTasks";
import type { Task } from "@/types/task";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
export default function TaskDetailPage() {
  const { tasks, setTasks, deleteTask } = useTasks();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  let taskId: number;

  // Extract task ID from pathname (e.g., /tasks/1 -> id = 1)
  const pathnameParts = pathname.split("/").filter(Boolean);
  const idIndex = pathnameParts.findIndex(
    (part) => part === "tasks" || part === "task"
  );

  if (idIndex > -1 && pathnameParts[idIndex + 1]) {
    taskId = parseInt(pathnameParts[idIndex + 1], 10);
  } else {
    // Try to get from search params, default to first task or 1
    const idFromSearch = searchParams.get("id");
    if (idFromSearch) {
      taskId = parseInt(idFromSearch, 10);
    } else {
      taskId = 1;
    }
  }

  const task = tasks.find((t) => t.id === taskId);

  // Hooks called unconditionally in the same order
  const [editing, setEditing] = useState(false);
  const [formTitle, setFormTitle] = useState(task ? task.title : "");
  const [formDescription, setFormDescription] =
    useState(task ? task.description : "");
  const [formPriority, setFormPriority] = useState<"High" | "Medium" | "Low">(
    task ? task.priority : "Medium"
  );
  const [formDueDate, setFormDueDate] = useState(
    task ? task.dueDate || "" : ""
  );

  useEffect(() => {
    const parsedId = taskId.toString();
    const urlParams = new URLSearchParams(window.location.search);
    const idInUrl = urlParams.get("id");

    if (idInUrl !== parsedId) {
      const newSearchParams = new URLSearchParams(window.location.search);
      newSearchParams.set("id", parsedId);
      const newUrl =
        window.location.pathname + "?" + newSearchParams.toString();
      window.history.replaceState(
        window.history.state,
        "",
        newUrl
      );
    }
  }, [taskId]);

  function handleEditCancel() {
    setEditing(false);
    setFormTitle(task ? task.title : "");
    setFormDescription(task ? task.description : "");
    setFormPriority(task ? task.priority : "Medium");
    setFormDueDate(task ? task.dueDate || "" : "");
  }

  function handleEditSave(
    updatedTitle: string,
    updatedDescription: string,
    updatedPriority: "High" | "Medium" | "Low",
    updatedDueDate: string
  ) {
    const updatedTask: Task = {
      id: task ? task.id : Date.now(),
      title: updatedTitle,
      description: updatedDescription,
      completed: task ? task.completed : false,
      priority: updatedPriority,
      dueDate: updatedDueDate || undefined,
    };
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === (task ? task.id : Date.now()) ? updatedTask : t))
    );
    setEditing(false);
  }

  // Render task detail or error state
  if (!task) {
    return (
      <div className="page">
        <Header />
        <main className="container">
          <div className="error-page">
            <h1>Task Not Found</h1>
            <p>The task you are looking for does not exist.</p>
            <Link href="/tasks" className="btn">
              Go to Tasks
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="container">
        {editing ? (
          <div className="edit-task-section">
            <h2>Edit Task</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const titleInput = document.querySelector(
                  'input[name="title"]'
                ) as HTMLInputElement;
                const descInput = document.querySelector(
                  'textarea[name="description"]'
                ) as HTMLTextAreaElement;
                const priorityInput = document.querySelector(
                  'select[name="priority"]'
                ) as HTMLSelectElement;
                const dueDateInput = document.querySelector(
                  'input[name="dueDate"]'
                ) as HTMLInputElement;

                handleEditSave(
                  titleInput?.value || formTitle,
                  descInput?.value || formDescription,
                  (priorityInput?.value as "High" | "Medium" | "Low") || formPriority,
                  dueDateInput?.value || formDueDate
                );
              }}
            >
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Priority</label>
                <select name="priority" value={formPriority} onChange={(e) => setFormPriority(e.target.value as "High" | "Medium" | "Low")}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  value={formDueDate}
                  onChange={(e) => setFormDueDate(e.target.value)}
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-cancel" onClick={handleEditCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-save">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div className="task-detail-card">
              <div className="task-detail-header">
                <h1 className="task-detail-title">{task.title}</h1>
                <div className="task-detail-status">
                  {task.completed ? (
                    <span className="badge badge-completed">Completed</span>
                  ) : (
                    <span className="badge badge-pending">Pending</span>
                  )}
                </div>
              </div>

              <div className="task-detail-info">
                <p className="task-detail-desc">{task.description}</p>

                <div className="task-detail-meta">
                  <span className="task-detail-field">
                    <strong>Priority:</strong> {task.priority}
                  </span>
                  {task.dueDate && (
                    <span className="task-detail-field">
                      <strong>Due Date:</strong> {task.dueDate}
                    </span>
                  )}
                </div>
              </div>

              <div className="task-detail-actions">
                <button
                  className="btn btn-outline"
                  onClick={() => setEditing(true)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this task?")) {
                      deleteTask(task.id);
                    }
                  }}
                >
                  Delete
                </button>
                <Link
                  href={`/tasks?${new URLSearchParams({ id: task.id.toString() })}`}
                  className="btn"
                >
                  View in List
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}