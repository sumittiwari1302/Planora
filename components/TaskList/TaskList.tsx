import type { Task } from "@/types/task";
import TaskCard from "@/components/TaskCard/TaskCard";
import styles from "@/components/TaskList/TaskList.module.css";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit?: (id: number) => void;
};

export default function TaskList({ tasks, onToggle, onDelete, onEdit }: TaskListProps) {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit || (() => { })}
        />
      ))}
    </div>
  );
}
