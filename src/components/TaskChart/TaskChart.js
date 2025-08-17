// TaskChart.js
import React from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const data = {
    labels: ["Pendente", "Em Progresso", "Concluída"],
    datasets: [
      {
        data: [
          tasks.filter((t) => t.status === "Pendente").length,
          tasks.filter((t) => t.status === "Em Progresso").length,
          tasks.filter((t) => t.status === "Concluída").length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Distribuição de Tarefas</h2>
      <Pie data={data} />
    </div>
  );
};

export default TaskChart;
