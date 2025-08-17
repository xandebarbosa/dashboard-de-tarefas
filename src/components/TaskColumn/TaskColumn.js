// TaskColumn.js
import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskColumn.module.css";

const TaskColumn = ({ title, tasks, onPrev, onNext }) => {
  return (
    <div className={styles.column}>
      <h3>{title}</h3>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onPrev={onPrev} onNext={onNext} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
