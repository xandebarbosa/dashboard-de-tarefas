import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../features/tasks/tasksSlice";
import TaskColumn from "../components/TaskColumn/TaskColumn";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskChart from "../components/TaskChart/TaskChart";
import TaskFilter from "../components/TaskFilter/TaskFilter";

const DashboardPage = () => {
  const filteredTasks = useSelector(selectFilteredTasks);
  const filterStatus = useSelector((state) => state.tasks.filterStatus);

  // Filtra a lista já filtrada para cada coluna
  const pendingTasks = filteredTasks.filter(
    (task) => task.status === "Pendente"
  );
  const inProgressTasks = filteredTasks.filter(
    (task) => task.status === "Em Progresso"
  );
  const completedTasks = filteredTasks.filter(
    (task) => task.status === "Concluída"
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard de Tarefas</h1>
      <TaskForm />
      <TaskFilter /> {/* Componente de filtro adicionado */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Renderiza as colunas condicionalmente com base no filtro */}
        {(filterStatus === "Todos" || filterStatus === "Pendente") && (
          <TaskColumn
            title="PENDENTE"
            tasks={pendingTasks}
            onNext="Em Progresso"
          />
        )}
        {(filterStatus === "Todos" || filterStatus === "Em Progresso") && (
          <TaskColumn
            title="EM PROGRESSO"
            tasks={inProgressTasks}
            onPrev="Pendente"
            onNext="Concluída"
          />
        )}
        {(filterStatus === "Todos" || filterStatus === "Concluída") && (
          <TaskColumn
            title="CONCLUÍDA"
            tasks={completedTasks}
            onPrev="Em Progresso"
          />
        )}
      </div>
      <TaskChart />
      <div style={{ marginTop: "40px", borderTop: "1px solid #ccc" }}>
        <h5>Desenvolvido por Alexandre dos Santos Barbosa - 2025</h5>
      </div>
    </div>
  );
};

export default DashboardPage;
