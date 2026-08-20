"use client";

import type { Task } from "@/types/task";
import Link from "next/link";
import { FiCheckCircle, FiCircle, FiTrash2, FiCalendar } from "react-icons/fi";
import styles from "@/components/TaskCard/TaskCard.module.css";

type TaskCardProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const priorityStyles = {
  High: styles.priorityHigh,
  Medium: styles.priorityMedium,
  Low: styles.priorityLow,
};

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const statusText = task.completed ? "Completed" : "Pending";

  return (
    <div
      className={`${styles.card} ${task.completed ? styles.completed : ""}`}
    >
      <div className={styles.cardTop}>
        <h3 className={styles.title}>{task.title}</h3>
        <span className={`${styles.priority} ${priorityStyles[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      <p className={styles.description}>{task.description}</p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          {statusText}
        </span>
        {task.dueDate && (
          <span className={styles.metaItem}>
            <FiCalendar style={{ fontSize: 13 }} />
            {new Date(task.dueDate + "T00:00:00").toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        )}
      </div>

      <div className={styles.actions}>
        <button
          className={styles.toggleButton}
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? <FiCheckCircle /> : <FiCircle />}
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(task.id)}
        >
          <FiTrash2 />
          Delete
        </button>
        <Link
          href={`/tasks/${task.id}`}
          className={styles.viewButton}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
