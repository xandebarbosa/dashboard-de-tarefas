import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/tasks/tasksSlice";
import styles from "./TaskFilter.module.css";

const TaskFilter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filterStatus);
  const statuses = ["Todos", "Pendente", "Em Progresso", "Concluída"];

  return (
    <div className={styles.filterContainer}>
      <strong>Filtrar por:</strong>
      {statuses.map((status) => (
        <button
          key={status}
          className={currentFilter === status ? styles.active : ""}
          onClick={() => dispatch(setFilter(status))}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
