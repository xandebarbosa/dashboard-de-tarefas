import React from "react";
import { useSelector } from "react-redux";
import TaskColumn from "../components/TaskColumn/TaskColumn";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskChart from "../components/TaskChart/TaskChart";

const DashboardPage = () => {
  // Acessa o estado das tarefas da store do Redux
  const tasks = useSelector((state) => state.tasks.tasks);

  // Filtra as tarefas por estado (requisito do filtro)
  const pendingTasks = tasks.filter((task) => task.status === "Pendente");
  const inProgressTasks = tasks.filter(
    (task) => task.status === "Em Progresso"
  );
  const completedTasks = tasks.filter((task) => task.status === "Concluída");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard de Tarefas</h1>
      <TaskForm />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <TaskColumn
          title="PENDENTE"
          tasks={pendingTasks}
          onNext="Em Progresso"
        />
        <TaskColumn
          title="EM PROGRESSO"
          tasks={inProgressTasks}
          onPrev="Pendente"
          onNext="Concluída"
        />
        <TaskColumn
          title="CONCLUÍDA"
          tasks={completedTasks}
          onPrev="Em Progresso"
        />
      </div>
      <TaskChart />

      <div style={{ marginTop: "40px" }}>
        <h4>Alexandre dos Santos Barbosa - 2025</h4>
      </div>
    </div>
  );
};

export default DashboardPage;
