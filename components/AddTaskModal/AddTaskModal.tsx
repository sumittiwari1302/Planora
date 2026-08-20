"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Task } from "@/types/task";
import styles from "@/components/AddTaskModal/AddTaskModal.module.css";

type AddTaskModalProps = {
  onClose: () => void;
  onAdd: (task: Task) => void;
};

export default function AddTaskModal({ onClose, onAdd }: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      priority,
      dueDate: dueDate || undefined,
    };

    onAdd(newTask);
    onClose();
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Add new task"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.dialogHeader}>
          <h2 className={styles.dialogTitle}>Add New Task</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="modal-title">
            Title
          </label>
          <input
            id="modal-title"
            className={styles.input}
            type="text"
            placeholder="What needs to be done?"
            value={title}
            autoFocus
            onChange={(event) => setTitle(event.target.value)}
          />

          <label className={styles.label} htmlFor="modal-priority">
            Priority
          </label>
          <select
            id="modal-priority"
            className={styles.select}
            value={priority}
            onChange={(event) =>
              setPriority(event.target.value as "High" | "Medium" | "Low")
            }
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <label className={styles.label} htmlFor="modal-dueDate">
            Due Date
          </label>
          <input
            id="modal-dueDate"
            className={styles.input}
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />

          <label className={styles.label} htmlFor="modal-description">
            Description
          </label>
          <textarea
            id="modal-description"
            className={styles.textarea}
            rows={3}
            placeholder="Add details (optional)"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              + Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
