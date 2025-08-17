// TaskCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { moveTask } from "../../features/tasks/tasksSlice";
import styles from "./TaskCard.module.css";

const TaskCard = ({ task, onPrev, onNext }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <p>{task.title}</p>
      <div className={styles.actions}>
        {onPrev && (
          <button
            onClick={() =>
              dispatch(moveTask({ taskId: task.id, newStatus: onPrev }))
            }
          >
            Voltar
          </button>
        )}
        {onNext && (
          <button
            onClick={() =>
              dispatch(moveTask({ taskId: task.id, newStatus: onNext }))
            }
          >
            Avançar
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
