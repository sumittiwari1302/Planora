"use client";

import { useState, useEffect } from "react";
import { useTasks } from "@/hooks/useTasks";
import type { Task } from "@/types/task";
import Header from "@/components/Header/Footer";
import Footer from "@/components/Footer/Footer";
import { FiCheckCircle, FiCircle, FiTrash2 } from "react-icons/fi";
import Link from "next/link";

export default function TaskDetailPage() {
  const { tasks, deleteTask, toggleTask } = useTasks();

  // All hooks called unconditionally at the top
  const taskId = typeof window !== "undefined" ? (() => {
    const pathnameParts = window.location.pathname.split("/").filter(Boolean);
    if (pathnameParts[2]) {
      const parsed = parseInt(pathnameParts[2], 10);
      if (!isNaN(parsed)) return parsed;
    }
    const searchParams = new URLSearchParams(window.location.search);
    const idFromSearch = searchParams.get("id");
    if (idFromSearch) {
      const parsed = parseInt(idFromSearch, 10);
      if (!isNaN(parsed)) return parsed;
    }
    return 1;
  })();

  const [formId, setFormId] = useState(taskId);
  useEffect(() => {
    setFormId(taskId);
  }, [taskId]);

  // Conditional logic based on task existence - but hooks are already called above
  const task = tasks.find((t) => t.id === formId);

  // State declarations - always called in same order
  const [editing, setEditing] = useState(false);
  const [formTitle, setFormTitle] = useState(task ? task.title : "");
  const [formDescription, setFormDescription] = useState(task ? task.description : "");
  const [formPriority, setFormPriority] = useState(task ? task.priority : "Medium");
  const [formDueDate, setFormDueDate] = useState(task ? task.dueDate || "" : "");

  useEffect(() => {
    if (task) {
      setFormTitle(task.title);
      setFormDescription(task.description);
      setFormPriority(task.priority);
      setFormDueDate(task.dueDate || "");
    }
  }, [task]);

  function handleEditCancel() {
    setEditing(false);
    setFormTitle(task ? task.title : "");
    setFormDescription(task ? task.description : "");
    setFormPriority(task ? task.priority : "Medium");
    setFormDueDate(task ? task.dueDate || "" : "");
  }

  function handleEditSave(updatedTitle: string, updatedDescription: string, updatedPriority: string, updatedDueDate: string) {
    setTasks((prevTasks: Task[]) =>
      prevTasks.map((t: Task) =>
        t.id === task.id ? { ...t, title: updatedTitle, description: updatedDescription, priority: updatedPriority, dueDate: updatedDueDate } : t
      )
    );
    setEditing(false);
  }

  // Early return pattern - but hooks above are still called in same order
  if (!task) {
    const fallbackTask = tasks[0];
    if (fallbackTask) {
      return (
        <div className="page">
          <Header />
          <main className="container">
            <div className="task-detail-card">
              <h1 className="task-detail-title">{fallbackTask.title}</h1>
              <p className="task-detail-desc">
                {fallbackTask.description}
              </p>
              <div className="task-detail-meta">
                <span className="task-detail-field">
                  <strong>Status:</strong> {fallbackTask.completed ? "Completed" : "Pending"}
                </span>
                <span className="task-detail-field">
                  <strong>Priority:</strong> {fallbackTask.priority}
                </span>
              </div>
              <div className="task-detail-actions">
                <button className="btn btn-outline">Edit</button>
                <button className="btn btn-danger">Delete</button>
                <Link href="/tasks" className="btn">View in List</Link>
              </div>
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
          <TaskDetailEditForm
            task={task}
            onSave={handleEditSave}
            onCancel={handleEditCancel}
            initialTitle={formTitle}
            initialDescription={formDescription}
            initialPriority={formPriority}
            initialDueDate={formDueDate}
          />
        ) : (
          <>
            <div className="task-detail-card">
              <h1 className="task-detail-title">{task.title}</h1>

              <div className="task-detail-info">
                <p className="task-detail-desc">
                  {task.description}
                </p>

                <div className="task-detail-meta">
                  <span className="task-detail-field">
                    <strong>Status:</strong> {task.completed ? "Completed" : "Pending"}
                  </span>
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

function TaskDetailEditForm({
  task,
  onSave,
  onCancel,
  initialTitle,
  initialDescription,
  initialPriority,
  initialDueDate,
}: {
  task: Task;
  onSave: (title: string, description: string, priority: string, dueDate: string) => void;
  onCancel: () => void;
  initialTitle: string;
  initialDescription: string;
  initialPriority: string;
  initialDueDate: string;
}) {
  // Hooks called unconditionally in the same order
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [priority, setPriority] = useState(initialPriority);
  const [dueDate, setDueDate] = useState(initialDueDate);

  function handleSave(event: Event) {
    event.preventDefault();
    onSave(title, description, priority, dueDate);
  }

  return (
    <div className="edit-task-overlay">
      <div className="edit-task-form">
        <h2>Edit Task</h2>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-cancel"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-save">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}