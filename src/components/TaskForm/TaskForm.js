// TaskForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/tasksSlice";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title.trim()));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
