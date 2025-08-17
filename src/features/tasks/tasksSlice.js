import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, title: "Fazer café", status: "Pendente" },
    { id: 2, title: "Estudar Clean Architecture", status: "Em Progresso" },
    { id: 3, title: "Apresentar o desafio", status: "Concluída" },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date().getTime(), // ID simples baseado no tempo
        title: action.payload,
        status: "Pendente",
      };
      state.tasks.push(newTask);
    },
    moveTask: (state, action) => {
      const { taskId, newStatus } = action.payload;
      const task = state.tasks.find((t) => t.id === taskId);
      if (task) {
        task.status = newStatus;
      }
    },
  },
});

// Exporta as ações para serem usadas nos componentes
export const { addTask, moveTask } = tasksSlice.actions;

// Exporta o reducer para ser usado na store
export default tasksSlice.reducer;
