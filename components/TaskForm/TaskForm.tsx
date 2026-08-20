"use client";

import { useState, type FormEvent } from "react";
import type { Task } from "@/types/task";
import styles from "@/components/TaskForm/TaskForm.module.css";

type TaskFormProps = {
  onAdd: (task: Task) => void;
};

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [dueDate, setDueDate] = useState("");

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

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  }

  return (
    <form className={styles.form} id="add-task" onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Task title"
        aria-label="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <select
        className={styles.select}
        aria-label="Priority"
        value={priority}
        onChange={(event) =>
          setPriority(event.target.value as "High" | "Medium" | "Low")
        }
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <input
        className={styles.input}
        type="date"
        aria-label="Due date"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
      />

      <textarea
        className={styles.textarea}
        placeholder="Description (optional)"
        aria-label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button className={styles.addButton} type="submit">
        + Add Task
      </button>
    </form>
  );
}
